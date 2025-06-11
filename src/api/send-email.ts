

interface BookingData {
  name: string;
  phone: string;
  location: string;
  date: string;
  time: string;
}

export const sendBookingNotification = async (formData: BookingData) => {
  // Just log the data for now
  console.log('Booking notification data:', formData);
  return { success: true };
}; 