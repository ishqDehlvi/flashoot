"use client";
import  { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const features = [
  {
    title: 'Female Reel-Maker',
    description: 'Female users can now confidently get skilled female reel-makers for their shoots.',
    image: '/Features/Opt for female Reel Maker.png',
  },
  {
    title: 'Pick a Partner',
    description: 'Personalized Partner Selection for Every Shoot.',
    image: '/Features/Pick Partner.png',
  },    
  {
    title: 'Content Storage',
    description: 'We securely store your content for up to 6 months, so you can download, revisit, or share it whenever you arere ready no rush, no worries.',
    image: '/Features/Dowload Content.png',
  },
  {
    title: 'Instant Booking',
    description: 'No more waiting! Get immediate confirmation as soon as you book — fast, simple, and hassle-free.',
    image: '/Features/Instant Booking Conformation.png',
  },
  {
    title: 'Live Tracking',
    description: 'Know where your reel-maker is, in real-time. Stay updated from arrival to final wrap.',
    image: '/Features/Live tracking.png',
  },
  {
    title: 'Customer Support',
    description: '24/7 support to keep your day running smoothly. Anytime help, just a message or call away.',
    image: '/Features/Support 1.png',
  },
];

export default function FlashootFeaturesCarousel() {
  const [current, setCurrent] = useState(0);
//   const bottomSvgRef = useRef<HTMLDivElement>(null);
//   const leftGlowRef = useRef(null);
//   const rightGlowRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: true,
    dots: false,
    beforeChange: (_oldIdx: number, newIdx: number) => setCurrent(newIdx % features.length),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-xl mb-4 md:mb-6">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-xs md:text-sm font-medium text-white">Get to know Flashoot</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Features That Make Us{" "}
            <span className="gradient-text">Stand Out</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Background Effects */}
          {/* <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/05 to-transparent" />
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#FE002A20,transparent)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#FE002A15,transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#FE002A15,transparent_50%)]" />
            </div>
          </div> */}

          <Slider {...settings} className="features-carousel relative z-10">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="px-2 md:px-4"
              >
                <div className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-8 min-h-[400px] md:min-h-[540px] flex flex-col group hover:border-primary/30 transition-all duration-300">
                  {/* Card Background Effects */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ff000015,transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#ff000015,transparent_50%)]" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex-1 flex items-stretch justify-center w-full">
                      <div className="relative w-full aspect-[4/3] md:h-[300px] overflow-hidden rounded-2xl group-hover:border-primary/30 transition-all duration-300">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain md:object-cover transform group-hover:scale-105 transition-transform duration-500"
                          style={{ boxShadow: '0 4px 16px 0 rgba(0,0,0,0.18)' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>

          {/* Progress Indicators */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {features.map((_, i) => (
              <div
                key={i}
                className={`h-1 w-8 rounded-md transition-all duration-300 ${
                  current === i ? 'bg-primary' : 'bg-neutral-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 