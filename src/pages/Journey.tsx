import React from 'react';
import { motion } from 'framer-motion';
import { History, Users, Code, Rocket, ArrowRightCircle, Gift, Building, Users2, TrendingUp, Coins, Linkedin, Instagram, Star } from 'lucide-react';
import NavHeader from '../components/NavHeader';
import { Footer } from '../components/Footer';
import { FloatingNav } from '@/components/FloatingNav';
import karthik from '../images/karthik.jpg';
import manikanta from '../images/manikanta.jpg';
import shreyak from '../images/shreyak.jpg';
// import jhanavi from '../images/jhanavi.jpg';
// import raghu from '../images/raghu.jpg';
// import aman from '../images/aman.jpg';
// import dinesh from '../images/dinesh.jpg';
// import punith from '../images/punith.png';
// import shariff from '../images/shariff.jpg';
// import anand from '../images/anand.png';
// import pallavi from '../images/pallavi.jpg';
// import kruthivarsh from '../images/kruthivarsh.jpg';

/** Team Members */
const teamMembers = [
  {
    id: 1,
    name: "Voleti Karthik",
    designation: "Managing Director",
    image: karthik,
    bio: "Visionary leader with expertise in product strategy and business development.",
    social: {
      linkedin: "https://www.linkedin.com/in/voleti-karthik-8b539b1b0/",
      instagram: "https://www.instagram.com/voleti_karthik/"
    }
  },
  {
    id: 2,
    name: "Manikanta Bukka",
    designation: "Director - Expansion",
    image: manikanta,
    bio: "Operations expert focused on delivering exceptional user experiences.",
    social: {
      linkedin: "https://www.linkedin.com/in/manikanta-bukka-113101187/",
      instagram: "https://www.instagram.com/manikanta_bukka/"
    }
  },
  {
    id: 3,
    name: "Shreyak Singh",
    designation: "Director - Tech and Design",
    image: shreyak,
    bio: "Tech innovator with a passion for building scalable solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/shreyak-singh/",
      instagram: "https://www.instagram.com/shreyaksingh/"
    }
  },
  // {
  //   id: 4,
  //   name: "Raghu Nandan",
  //   designation: "Director - Expansion",
  //   image: raghu,
  //   bio: "Strategic leader driving business growth and market expansion.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/raghu-nandan-95143444",
  //     instagram: "https://www.instagram.com/raghunandan_maddi"
  //   }
  // },
  // },
  // {
  //   id: 5,
  //   name: "Aman Singh",
  //   designation: "Lead Engineer",
  //   image: aman,
  //   bio: "Expert Flutter developer building our mobile applications.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/aman-singh-elysian12/",
  //     instagram: "https://www.instagram.com/amanasr7071/"
  //   }
  // },
  // {
  //   id: 6,
  //   name: "Dinesh Bolla",
  //   designation: "UX/UI Designer",
  //   image: dinesh,
  //   bio: "Creative designer crafting intuitive user experiences.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/dinesh-babu-bolla-195508173/",
  //     instagram: "https://www.instagram.com/dinesh._bolla/"
  //   }
  // },
  // {
  //   id: 7,
  //   name: "Punith Raj Kolluri",
  //   designation: "Human Resources",
  //   image: punith,
  //   bio: "Managing talent acquisition and employee relations.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/punith-raj-kolluri-4758201b2/",
  //     instagram: "https://www.instagram.com/punithrajkolluri/"
  //   }
  // },
  // {
  //   id: 8,
  //   name: "Salar Shariff",
  //   designation: "Graphic Designer",
  //   image: shariff,
  //   bio: "Creative designer bringing brands to life.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/salarshariff/",
  //     instagram: "https://www.linkedin.com/in/salarshariff/"
  //   }
  // },
  // {
  //   id: 9,
  //   name: "Jhanavi Sakinala",
  //   designation: "Operations Manager",
  //   image: jhanavi,
  //   bio: "Ensuring smooth operations and team coordination.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/jhanavi-sakinala-068ba2189/",
  //     instagram: "https://www.instagram.com/jhanavi_1707/"
  //   }
  // },
  // {
  //   id: 10,
  //   name: "Anand Patella",
  //   designation: "Onboarding Manager",
  //   image: anand,
  //   bio: "Facilitating seamless client onboarding processes.",
  //   social: {
  //     linkedin: "http://linkedin.com/in/pattela-anand-b41647100",
  //     instagram: "https://www.instagram.com/also_nandu"
  //   }
  // },
  // {
  //   id: 11,
  //   name: "Pallavi Raj Makkala",
  //   designation: "Operations Associate",
  //   image: pallavi,
  //   bio: "Supporting operational excellence and team coordination.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/makkala-pallavi-58235329a",
  //     instagram: "https://www.instagram.com/p_a_l_l_a_v_i_002/profilecard/"
  //   }
  // },
  // {
  //   id: 12,
  //   name: "Kruthivarsh Koduru",
  //   designation: "Media/Team Photographer",
  //   image: kruthivarsh,
  //   bio: "Creative photographer capturing team moments and media content.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/kruthivarsh-koduru-61684b2a1",
  //     instagram: "https://www.instagram.com/kruthivarsh"
  //   }
  // },
  // {
  //   id: 12,
  //   name: "Neha Kotha",
  //   designation: "Social Media Manager",
  //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&h=256&auto=format&fit=crop",
  //   bio: "Managing our social media presence and engagement.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/neha-kotha-400295292",
  //     instagram: "https://www.instagram.com/nehaakotha_"
  //   }
  // }
];

const timelineData = [
  {
    date: "October 2023",
    title: "The Beginning",
    content: "Found a painpoint and came up with this idea.",
    icon: Star,
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    date: "November 2023",
    title: "Team Formation",
    content: "Formed our Xmen Army. Voleti Karthik, Manikanta Bukka and Shreyak Singh joined hands.",
    icon: Users,
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    date: "December 2023",
    title: "Research Phase",
    content: "Research and UX started on the app. Dinesh Bolla (our UI/UX designer joined us during this phase).",
    icon: Code,
    color: "from-green-500/20 to-green-500/5"
  },
  {
    date: "February 2024",
    title: "First Prototype",
    content: "First Prototype was ready.",
    icon: Rocket,
    color: "from-yellow-500/20 to-yellow-500/5"
  },
  {
    date: "March 2024",
    title: "Fresh Start",
    content: "We were still not happy, so we scrapped the working prototype and started again.",
    icon: ArrowRightCircle,
    color: "from-orange-500/20 to-orange-500/5"
  },
  {
    date: "May 2024",
    title: "Development Phase",
    content: "Things started falling in to place. Thanks to our developer Aman Singh.",
    icon: Code,
    color: "from-cyan-500/20 to-cyan-500/5"
  },
  {
    date: "July 2024",
    title: "Pre Seed Funding",
    content: "We close a Pre Seed Funding round of ₹6M valuating the company at ₹55M.",
    icon: Coins,
    color: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    date: "August 2024",
    title: "Grand Launch",
    content: "Grand Launch of the Product. Launch Party held at Akan.",
    icon: Gift,
    color: "from-pink-500/20 to-pink-500/5"
  },
  {
    date: "September 2024",
    title: "Community Growth",
    content: "Onboarded First 100 Partners to start shooting with Flashoot building a community.",
    icon: Users2,
    color: "from-indigo-500/20 to-indigo-500/5"
  },
  {
    date: "February 2025",
    title: "Expansion Plans",
    content: "Flashoot plans on expanding to 10+ cities and create a strong brand presence.",
    icon: Building,
    color: "from-violet-500/20 to-violet-500/5"
  },
  {
    date: "March 2025",
    title: "Seed Funding",
    content: "Closed another round of funding of ₹25M valuating the company at ₹220M.",
    icon: TrendingUp,
    color: "from-amber-500/20 to-amber-500/5"
  }
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <div className="group relative h-[400px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/60 to-black opacity-60" />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent animate-pulse" />
    </div>

    {/* Content Container */}
    <div className="relative h-full">
      {/* Image Container */}
      <div className="w-full h-full">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Info Overlay - Centered content */}
      <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-radial from-transparent via-black/60 to-black">
        <div className="flex flex-col items-center text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {/* Name */}
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {member.name}
          </h3>

          {/* Designation */}
          <div className="mt-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 group-hover:bg-black/80 transition-all duration-300">
            <p className="text-sm font-medium text-white/70 group-hover:text-primary whitespace-nowrap">
              {member.designation}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/20 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-4 h-4 text-white/70 group-hover:text-primary" />
            </a>
            <a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/20 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-4 h-4 text-white/70 group-hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TimelineItem = ({ event }: { event: typeof timelineData[0] }) => (
  <div className="relative flex-shrink-0 w-[300px] group">
    {/* Card */}
    <div className="relative p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 group-hover:border-primary/30 transition-all duration-500 h-full">
      {/* Decorative Elements */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Icon and Date */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <div className="relative w-12 h-12 rounded-xl group-hover:scale-110 transition-transform duration-500">
            {/* Icon Background */}
            <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${event.color} opacity-50`} />
            <div className="absolute inset-0 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors duration-500">
              <event.icon className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
        
        <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/30">
          {event.date}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
        {event.title}
      </h3>
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {event.content}
      </p>
    </div>
  </div>
);

// Add this new component for custom scroll controls
const ScrollControl = ({ onClick, direction }: { onClick: () => void; direction: 'left' | 'right' }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 z-10 group"
    style={{ [direction === 'left' ? 'left' : 'right']: '-2rem' }}
  >
    <div className="relative w-14 h-14">
      {/* Outer ring with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rotate-180 group-hover:rotate-0 transition-transform duration-500" />
      
      {/* Inner container */}
      <div className="absolute inset-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 group-hover:border-primary/30 transition-colors duration-300">
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
        
        {/* Animated ring */}
        <div className="absolute inset-0 rounded-full border border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 animate-spin-slow [border:1px_solid_transparent] [border-image:linear-gradient(45deg,var(--primary),transparent,var(--primary))_1]" />
        </div>

        {/* Arrow icon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {direction === 'left' ? (
            <div className="flex items-center justify-center w-full h-full group-hover:scale-110 transition-transform duration-300">
              <div className="relative w-6 h-6">
                {/* Arrow line */}
                <div className="absolute top-1/2 left-1/2 w-4 h-[2px] bg-primary rounded-full 
                  transform -translate-y-1/2 -translate-x-1/2 group-hover:w-5 transition-all duration-300" 
                />
                {/* Arrow head */}
                <div className="absolute top-1/2 left-1 w-2.5 h-2.5 border-l-2 border-b-2 border-primary 
                  transform -translate-y-1/2 rotate-45 group-hover:left-0.5 transition-all duration-300" 
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full h-full group-hover:scale-110 transition-transform duration-300">
              <div className="relative w-6 h-6">
                {/* Arrow line */}
                <div className="absolute top-1/2 left-1/2 w-4 h-[2px] bg-primary rounded-full 
                  transform -translate-y-1/2 -translate-x-1/2 group-hover:w-5 transition-all duration-300" 
                />
                {/* Arrow head */}
                <div className="absolute top-1/2 right-1 w-2.5 h-2.5 border-r-2 border-b-2 border-primary 
                  transform -translate-y-1/2 -rotate-45 group-hover:right-0.5 transition-all duration-300" 
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
    </div>

    {/* Decorative dots */}
    <div className={`absolute top-1/2 -translate-y-1/2 flex gap-1 ${
      direction === 'left' ? 'right-[-1rem]' : 'left-[-1rem]'
    }`}>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: `scale(${1 - i * 0.2})`,
            opacity: 1 - i * 0.3,
          }}
        />
      ))}
    </div>
  </button>
);

// Add new OurStory component
// const OurStory = () => {
//   return (
//     <section className="relative py-32 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Floating orbs with trails */}
//         <div className="absolute w-[800px] h-[800px] -left-40 -top-40">
//           <div className="absolute w-full h-full animate-slow-spin">
//             <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-3xl top-1/2 left-1/2 
//               animate-pulse [animation-delay:-3s]" style={{ transform: 'rotate(45deg) translateX(300px)' }} />
//             <div className="absolute w-40 h-40 bg-primary/30 rounded-full blur-3xl top-1/2 left-1/2 
//               animate-pulse [animation-delay:-2s]" style={{ transform: 'rotate(90deg) translateX(350px)' }} />
//             <div className="absolute w-36 h-36 bg-primary/25 rounded-full blur-3xl top-1/2 left-1/2 
//               animate-pulse [animation-delay:-1s]" style={{ transform: 'rotate(135deg) translateX(400px)' }} />
//           </div>
//         </div>

//         {/* Geometric patterns */}
//         <div className="absolute inset-0">
//           <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <defs>
//               <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
//                 <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,0,0,0.1)" strokeWidth="0.5" />
//               </pattern>
//             </defs>
//             <rect width="100" height="100" fill="url(#grid)" />
//           </svg>
//         </div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-4 relative">
//         {/* Main Content */}
//         <div className="relative">
//           {/* Title with creative animation */}
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-24"
//           >
//             <h2 className="relative inline-block text-8xl font-bold">
//               <span className="absolute -inset-2 bg-primary/20 blur-2xl animate-pulse" />
//               <span className="relative">Our</span>
//               <span className="relative ml-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/50">
//                 Story
//               </span>
//             </h2>
//           </motion.div>

//           {/* Story Content with Creative Layout */}
//           <div className="relative grid grid-cols-12 gap-6">
//             {/* Central Line */}
//             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            
//             {/* Story Chapters */}
//             <motion.div 
//               initial={{ opacity: 0, x: -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="col-span-5 relative pr-12 space-y-32"
//             >
//               {/* Chapter 1 */}
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-transparent rounded-lg blur opacity-25 
//                   group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
//                 <div className="relative p-8">
//                   <div className="absolute -right-[3.25rem] top-1/2 -translate-y-1/2 w-12 h-12">
//                     <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
//                     <div className="absolute inset-2 bg-primary rounded-full animate-pulse" />
//                   </div>
//                   <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
//                     The Genesis
//                   </h3>
//                   <p className="text-xl leading-relaxed text-gray-300">
//                     October 2023: Three visionaries – Karthik, Manikanta, and Shreyak – united by an audacious dream to redefine content creation.
//                   </p>
//                 </div>
//               </div>

//               {/* Chapter 3 */}
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-transparent rounded-lg blur opacity-25 
//                   group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
//                 <div className="relative p-8">
//                   <div className="absolute -right-[3.25rem] top-1/2 -translate-y-1/2 w-12 h-12">
//                     <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
//                     <div className="absolute inset-2 bg-primary rounded-full animate-pulse" />
//                   </div>
//                   <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
//                     The Pivot
//                   </h3>
//                   <p className="text-xl leading-relaxed text-gray-300">
//                     March 2024: A bold decision to start anew, driven by our relentless pursuit of excellence.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div 
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="col-span-5 col-start-8 relative pl-12 space-y-32 mt-48"
//             >
//               {/* Chapter 2 */}
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-l from-primary/50 to-transparent rounded-lg blur opacity-25 
//                   group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
//                 <div className="relative p-8">
//                   <div className="absolute -left-[3.25rem] top-1/2 -translate-y-1/2 w-12 h-12">
//                     <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
//                     <div className="absolute inset-2 bg-primary rounded-full animate-pulse" />
//                   </div>
//                   <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
//                     The Foundation
//                   </h3>
//                   <p className="text-xl leading-relaxed text-gray-300">
//                     Winter brought Dinesh, whose creative genius would shape our platform's soul, pixel by meticulous pixel.
//                   </p>
//                 </div>
//               </div>

//               {/* Chapter 4 */}
//               <div className="relative group">
//                 <div className="absolute -inset-1 bg-gradient-to-l from-primary/50 to-transparent rounded-lg blur opacity-25 
//                   group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
//                 <div className="relative p-8">
//                   <div className="absolute -left-[3.25rem] top-1/2 -translate-y-1/2 w-12 h-12">
//                     <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
//                     <div className="absolute inset-2 bg-primary rounded-full animate-pulse" />
//                   </div>
//                   <h3 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
//                     The Future
//                   </h3>
//                   <p className="text-xl leading-relaxed text-gray-300">
//                     With ₹25M in seed funding and a ₹220M valuation, we're not just growing – we're revolutionizing content creation across India.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Update the Journey section with the new timeline container
const JourneySection = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [showLeftScroll, setShowLeftScroll] = React.useState(false);
  const [showRightScroll, setShowRightScroll] = React.useState(true);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = 300; // Width of one card
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const handleScrollChange = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    
    // Calculate active index based on scroll position
    const newIndex = Math.round(container.scrollLeft / 300);
    setActiveIndex(newIndex);
    
    // Update scroll button visibility
    setShowLeftScroll(container.scrollLeft > 0);
    setShowRightScroll(container.scrollLeft < (container.scrollWidth - container.clientWidth - 10));
  };

  return (
    <section className="relative py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
          >
            <History className="w-4 h-4 text-primary" />
            <span className="text-sm">Our Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            From Vision to <span className="gradient-text">Reality</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Follow our journey of innovation, growth, and success as we transform the way content is created
          </motion.p>
        </div>

        {/* Enhanced Timeline Container */}
        <div className="relative mx-8">
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 w-full h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Scroll Controls */}
          {showLeftScroll && <ScrollControl onClick={() => handleScroll('left')} direction="left" />}
          {showRightScroll && <ScrollControl onClick={() => handleScroll('right')} direction="right" />}

          {/* Timeline Items Container */}
          <div className="relative py-8">
            <div
              ref={scrollContainerRef}
              onScroll={handleScrollChange}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
              {timelineData.map((event, index) => (
                <motion.div
                  key={event.date}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="snap-center"
                >
                  <TimelineItem event={event} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Progress Indicators */}
          <div className="absolute -bottom-8 left-0 w-full flex justify-center gap-3">
            {timelineData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!scrollContainerRef.current) return;
                  scrollContainerRef.current.scrollTo({
                    left: index * 300,
                    behavior: 'smooth'
                  });
                }}
                className={`group relative w-8 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-primary' : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {/* Glow effect for active indicator */}
                {index === activeIndex && (
                  <div className="absolute inset-0 -z-10 bg-primary/50 blur-lg animate-pulse" />
                )}
                {/* Hover glow effect */}
                <div className="absolute inset-0 -z-10 bg-primary/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// const ImpactAndVision = () => {
//   return (
//     <section className="relative py-32 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Animated gradient rings */}
//         <div className="absolute inset-0">
//           <div className="absolute w-[800px] h-[800px] -left-40 top-0 animate-slow-spin">
//             <svg viewBox="0 0 200 200" className="w-full h-full">
//               <defs>
//                 <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="rgba(255,0,0,0.2)" />
//                   <stop offset="100%" stopColor="rgba(255,0,0,0)" />
//                 </linearGradient>
//               </defs>
//               <path
//                 d="M100,10 a90,90 0 1,0 0,180 a90,90 0 1,0 0,-180"
//                 fill="none"
//                 stroke="url(#gradient1)"
//                 strokeWidth="0.5"
//                 className="animate-dash"
//               />
//             </svg>
//           </div>
//           <div className="absolute w-[1000px] h-[1000px] -right-40 -bottom-40 animate-reverse-slow-spin">
//             <svg viewBox="0 0 200 200" className="w-full h-full">
//               <path
//                 d="M100,10 a90,90 0 1,0 0,180 a90,90 0 1,0 0,-180"
//                 fill="none"
//                 stroke="url(#gradient1)"
//                 strokeWidth="0.5"
//                 className="animate-dash"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative">
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
//           >
//             <Rocket className="w-5 h-5 text-primary" />
//             <span className="text-sm font-medium">Impact & Vision</span>
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-5xl md:text-7xl font-bold mb-8"
//           >
//             Transforming <span className="gradient-text">Content Creation</span>
//           </motion.h2>
//         </motion.div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             { number: "100+", label: "Active Partners", icon: Users2 },
//             { number: "₹220M", label: "Company Valuation", icon: TrendingUp },
//             { number: "10+", label: "Cities by 2025", icon: Building },
//             { number: "1000+", label: "Expected Users", icon: Users }
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="relative group"
//             >
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-transparent rounded-lg blur opacity-25 
//                 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
//               <div className="relative p-8 bg-black/40 backdrop-blur-xl rounded-lg border border-white/10 
//                 group-hover:border-primary/50 transition duration-300 flex flex-col items-center text-center">
//                 <div className="mb-4 p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
//                   <stat.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
//                   {stat.number}
//                 </h3>
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   {stat.label}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Vision Cards */}
//         <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: "Innovation Hub",
//               description: "Building a platform that sets new standards in content creation technology.",
//               icon: Code
//             },
//             {
//               title: "Community Growth",
//               description: "Creating a thriving ecosystem of creators, brands, and consumers.",
//               icon: Users
//             },
//             {
//               title: "Market Leadership",
//               description: "Becoming India's premier platform for professional content creation.",
//               icon: Star
//             }
//           ].map((vision, index) => (
//             <motion.div
//               key={vision.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 + index * 0.1 }}
//               className="relative group"
//             >
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-transparent rounded-lg blur opacity-25 
//                 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
//               <div className="relative h-full p-8 bg-black/40 backdrop-blur-xl rounded-lg border border-white/10 
//                 group-hover:border-primary/50 transition duration-300">
//                 <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20 w-fit 
//                   group-hover:scale-110 transition-transform duration-300">
//                   <vision.icon className="w-8 h-8 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
//                   {vision.title}
//                 </h3>
//                 <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                   {vision.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Features data
// const features = [
//   {
//     image: karthik, // Replace with the correct image import for each feature
//     title: 'Trained & Certified Reel Makers',
//     description: 'Each Partner clears 6 filters to get their certification.'
//   },
//   {
//     image: shreyak, // Replace with the correct image import for each feature
//     title: 'Easy Booking',
//     description: 'Stop struggling with complex booking procedure.'
//   },
//   {
//     image: manikanta, // Replace with the correct image import for each feature
//     title: 'Unbelievable Pricing:',
//     description: 'Each Reel starts 1999/-'
//   },
//   {
//     image: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png', // Use a lock icon or imported image
//     title: 'Safe & Secure',
//     description: 'You & Your data is safe and secured.'
//   },
//   {
//     image: 'https://cdn-icons-png.flaticon.com/512/3064/3064155.png', // Use a fast delivery icon or imported image
//     title: 'Instant Reels, Instant Editing:',
//     description: 'No waiting days or weeks for your videos. Post it the same day.'
//   },
//   {
//     image: jhanavi, // Replace with the correct image import for each feature
//     title: 'Women Safety',
//     description: 'A woman can book a female Reel maker.'
//   },
// ];



export default function Journey() {
  // Add useEffect for scroll restoration
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Global Background Effects - Matching Features page */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5" />
        
        {/* Multiple radial gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff000030,#00000000)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff000020,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#ff000020,transparent_50%)]" />
        </div>
        
        {/* Enhanced floating orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[300px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[300px] md:h-[400px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-30 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative">
        <NavHeader />
        
        <main className="relative pt-20">
          {/* Features Section */}
          {/* <FeaturesSection /> */}
          {/* Team Section */}
          <section className="relative py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
                >
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">Meet Our Team</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  The Minds Behind <span className="gradient-text">Flashoot</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
                >
                  Meet the passionate individuals who are revolutionizing content creation
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {teamMembers.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <JourneySection />

          {/* Footer */}
          <Footer />
        </main>

        <FloatingNav />
      </div>
    </div>
  );
}