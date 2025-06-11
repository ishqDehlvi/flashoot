import { motion } from 'framer-motion';
import { Loader2, Check, X } from 'lucide-react';

type AnimatedButtonProps = {
  status: 'idle' | 'loading' | 'success' | 'error';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export function AnimatedButton({ status, onClick, children, className = '' }: AnimatedButtonProps) {
  const buttonVariants = {
    idle: {
      width: 'auto',
      transition: { duration: 0.3 }
    },
    loading: {
      width: '44px',
      transition: { duration: 0.3 }
    },
    success: {
      width: '44px',
      backgroundColor: '#22c55e',
      transition: { duration: 0.3 }
    },
    error: {
      width: '44px',
      backgroundColor: '#ef4444',
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.2 } 
    }
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={status !== 'idle'}
      variants={buttonVariants}
      animate={status}
      className={`h-[42px] px-6 rounded-lg transition-colors disabled:cursor-not-allowed overflow-hidden flex items-center justify-center ${className}`}
    >
      {status === 'idle' && (
        <span>{children}</span>
      )}
      
      {status === 'loading' && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <Loader2 className="w-5 h-5 animate-spin" />
        </motion.div>
      )}
      
      {status === 'success' && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <Check className="w-5 h-5" />
        </motion.div>
      )}
      
      {status === 'error' && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={iconVariants}
        >
          <X className="w-5 h-5" />
        </motion.div>
      )}
    </motion.button>
  );
} 