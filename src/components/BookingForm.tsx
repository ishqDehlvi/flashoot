import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MapPin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';
import { sendBookingNotification } from '../api/send-email';

declare global {
  interface Window {
    google: typeof google;
  }
}

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    date: '',
    time: '',
  });

  // Reset states when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  useEffect(() => {
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Phone number validation
    if (name === 'phone') {
      // Only allow digits and limit to 10 characters
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 10) {
        setFormData(prev => ({
          ...prev,
          [name]: digitsOnly
        }));
      }
      return;
    }

    // Date validation
    if (name === 'date') {
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to start of day

      if (selectedDate < today) {
        toast.error('Date cannot be in the past');
        return;
      }

      // Validate year format (4 digits)
      const year = selectedDate.getFullYear();
      if (year.toString().length !== 4) {
        toast.error('Please enter a valid year');
        return;
      }
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    
    // Validate required fields
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }

    if (formData.phone.length !== 10) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    if (!formData.date) {
      toast.error('Please select a date');
      return;
    }

    if (!formData.location.trim()) {
      toast.error('Please enter the location');
      return;
    }

    // Validate date is not in the past
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      toast.error('Date cannot be in the past');
      return;
    }

    setIsSubmitting(true);
    console.log('Starting submission process');

    try {
      console.log('Attempting to insert into Supabase');
      // Insert booking data into Supabase
      const { error } = await supabase
        .from('bookings')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          location: formData.location,
          event_date: formData.date,
          event_time: formData.time,
          status: 'pending'
        }]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Successfully inserted into Supabase');
      console.log('Attempting to send email notification');

      // Send email notification
      await sendBookingNotification(formData);
      console.log('Email notification sent successfully');

      // Show success state
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        location: '',
        date: '',
        time: '',
      });

      // Close modal after delay
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Error in form submission:', error);
      toast.error(
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Oops! Something went wrong</p>
          <p className="text-sm text-gray-200">Please try again or contact us directly.</p>
        </div>,
        {
          duration: 5000,
          style: {
            background: 'rgba(0, 0, 0, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '16px',
            borderRadius: '12px',
          },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FE002A]/10 via-transparent to-transparent opacity-50" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FE002A]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#FE002A]/20 rounded-full blur-3xl" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 z-10"
            >
              <X className="w-5 h-5 text-white/70 hover:text-white" />
            </button>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2
                    }}
                    className="mb-6"
                  >
                    <CheckCircle2 className="w-20 h-20 text-[#FE002A]" />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
                  >
                    Thank You!
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg max-w-md"
                  >
                    Your booking has been received. Our team will get in touch with you shortly.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Form header */}
                  <div className="relative mb-12 text-center">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                      Book Your Session
                    </h2>
                    <p className="text-gray-400 text-lg">Fill in the details below to book your session</p>
                  </div>

                  {/* Form */}
                  <form 
                    onSubmit={handleSubmit} 
                    className="relative space-y-4"
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="group"
                      >
                        <label className="block text-sm font-medium mb-1 text-white/90 group-focus-within:text-[#FE002A] transition-colors">
                          Name <span className="text-[#FE002A]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/10 focus:border-[#FE002A]/50 focus:outline-none focus:ring-2 focus:ring-[#FE002A]/30 transition-all duration-300 placeholder:text-white/30 backdrop-blur-sm"
                          placeholder="Your name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="group"
                      >
                        <label className="block text-sm font-medium mb-1 text-white/90 group-focus-within:text-[#FE002A] transition-colors">
                          Phone Number <span className="text-[#FE002A]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{10}"
                          maxLength={10}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/10 focus:border-[#FE002A]/50 focus:outline-none focus:ring-2 focus:ring-[#FE002A]/30 transition-all duration-300 placeholder:text-white/30 backdrop-blur-sm"
                          placeholder="Enter 10-digit number"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="group"
                      >
                        <label className="block text-sm font-medium mb-1 text-white/90 group-focus-within:text-[#FE002A] transition-colors">
                          Date <span className="text-[#FE002A]">*</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/10 focus:border-[#FE002A]/50 focus:outline-none focus:ring-2 focus:ring-[#FE002A]/30 transition-all duration-300 backdrop-blur-sm"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="group"
                      >
                        <label className="block text-sm font-medium mb-1 text-white/90 group-focus-within:text-[#FE002A] transition-colors">
                          Time <span className="text-[#FE002A]">*</span>
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/10 focus:border-[#FE002A]/50 focus:outline-none focus:ring-2 focus:ring-[#FE002A]/30 transition-all duration-300 backdrop-blur-sm"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="group md:col-span-2"
                      >
                        <label className="block text-sm font-medium mb-1 text-white/90 group-focus-within:text-[#FE002A] transition-colors">
                          Location <span className="text-[#FE002A]">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-white/[0.07] border border-white/10 focus:border-[#FE002A]/50 focus:outline-none focus:ring-2 focus:ring-[#FE002A]/30 transition-all duration-300 placeholder:text-white/30 backdrop-blur-sm"
                            placeholder="Enter full address"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="relative w-full px-8 py-3 rounded-xl text-lg font-medium bg-gradient-to-r from-[#FE002A] to-[#B3001E] hover:from-[#FE002A]/95 hover:to-[#B3001E]/95 transition-all duration-300 shadow-[0_4px_20px_-3px_rgba(254,0,42,0.4)] hover:shadow-[0_4px_25px_-2px_rgba(254,0,42,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] overflow-hidden group mt-6"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        'Submit Booking'
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 