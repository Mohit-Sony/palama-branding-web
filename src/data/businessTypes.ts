export interface BusinessTypeData {
  slug: string;
  name: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    image: string;
  };
  professionals: {
    name: string;
    role: string;
    image: string;
  }[];
  trustCards: {
    title: string;
    image: string;
    location: string;
  }[];
  features: {
    title: string;
    description: string;
    image: string;
    points: string[];
  }[];
  darkFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    image: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const commonFaqs = [
  { question: "How does the booking system work?", answer: "Our system allows clients to book appointments 24/7 through your own branded booking page or via our mobile app." },
  { question: "Is there a monthly fee?", answer: "We offer flexible pricing plans including a free tier for individual professionals and subscription models for larger teams." },
  { question: "Can I manage my staff schedules?", answer: "Yes, our software includes comprehensive team management tools to handle complex schedules and commission tracking." },
  { question: "How do payments work?", answer: "We integrate with leading payment processors to ensure secure, instant transactions for both deposits and final payments." },
  { question: "Is my data secure?", answer: "Absolutely. We use enterprise-grade encryption and secure cloud hosting to protect your business and client information." }
];

export const businessTypesData: Record<string, BusinessTypeData> = {
  "hair-salons": {
    slug: "hair-salons",
    name: "Hair Salons",
    hero: {
      title: "Book hair and beauty services almost anywhere and grow",
      subtitle: "With the world's #1 booking platform",
      cta: "Get started",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [
      { name: "Peggy", role: "Master Stylist", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" },
      { name: "Sarah", role: "Colorist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" },
      { name: "Michael", role: "Barber", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
      { name: "Emily", role: "Nail Tech", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80" },
      { name: "David", role: "Owner", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" },
    ],
    trustCards: [
      { title: "The Cut Salon", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=400&q=80", location: "London, UK" },
      { title: "Studio Mosaico", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80", location: "Milan, Italy" },
      { title: "Glow Parlor", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=400&q=80", location: "New York, USA" },
      { title: "Bloom & Co", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80", location: "Paris, France" },
    ],
    features: [
      {
        title: "Connect with your customers",
        description: "Everything you need to manage your calendar, clients, and payments all in one place.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
        points: ["Smart booking", "Automated marketing", "Secure payments"],
      },
    ],
    darkFeatures: [],
    testimonials: [
      { quote: "Palama has completely transformed how I run my salon. The booking system is flawless.", author: "Jane Doe, Owner of The Cut", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "Our clients love the ease of booking online. It's a game-changer for us.", author: "Mark Smith, Stylist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "The reporting features give me exactly what I need to grow my team.", author: "Alice Brown", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "Best investment for our brand this year. Highly recommend.", author: "Tom Wilson", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Seamless integration with our payments. Saved us hours every week.", author: "Lucy Chen", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  barbershops: {
    slug: "barbershops",
    name: "Barbershops",
    hero: {
      title: "Level up your barbershop with the best booking software",
      subtitle: "Join over 50,000 barbers using Palama to grow their craft",
      cta: "Join now",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [
      { name: "Peggy", role: "Master Barber", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" },
      { name: "Sarah", role: "Stylist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" },
      { name: "Michael", role: "Expert Barber", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
      { name: "David", role: "Shop Owner", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80" },
    ],
    trustCards: [
      { title: "The Cut Barbershop", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=400&q=80", location: "London, UK" },
      { title: "Classic Fades", image: "https://images.unsplash.com/photo-1599351431247-f5094021186d?auto=format&fit=crop&w=400&q=80", location: "New York, USA" },
      { title: "Groomed & Co", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80", location: "Paris, France" },
      { title: "Barber King", image: "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&w=400&q=80", location: "Berlin, Germany" },
    ],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "Best decision I made for my shop. My clients love it.", author: "Joe Barber", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" },
      { quote: "The app is fast and the clients find it so easy to use.", author: "Sam Lee", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Finally a software that understands the barber industry.", author: "Rick Grimes", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Our sales increased by 30% since joining Palama.", author: "Sarah Connor", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
      { quote: "I can manage my whole team from my phone. Incredible.", author: "Tony Stark", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  "nail-salons": {
    slug: "nail-salons",
    name: "Nail Salons",
    hero: {
      title: "The #1 software for nail salons and technicians",
      subtitle: "Streamline your nail business and delight your clients",
      cta: "Start today",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [
      { name: "Jessica", role: "Lead Artist", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
      { name: "Sarah", role: "Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" },
      { name: "Emily", role: "Technician", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
      { name: "Amanda", role: "Owner", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
    ],
    trustCards: [
      { title: "Glossy Nails", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=400&q=80", location: "Los Angeles, USA" },
      { title: "Posh Polish", image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=400&q=80", location: "London, UK" },
    ],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "Our salon has never been busier.", author: "Jane Nails", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "The automated reminders saved us so many no-shows.", author: "Kelly P.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
      { quote: "A must-have for any professional nail technician.", author: "Brittany S.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "Easy to use and very professional looking.", author: "Megan Fox", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "Love the inventory management features.", author: "Rose Tyler", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  "spas-wellness": {
    slug: "spas-wellness",
    name: "Spas & Wellness",
    hero: {
      title: "The ultimate wellness management platform",
      subtitle: "Effortless scheduling for spas and saunas of all sizes",
      cta: "Book a demo",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [
      { name: "Elena", role: "Spa Director", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80" },
      { name: "Sofia", role: "Lead Therapist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" },
    ],
    trustCards: [
      { title: "Azure Spa", image: "https://images.unsplash.com/photo-1544161515-4ae6ce6db87e?auto=format&fit=crop&w=400&q=80", location: "Bali, Indonesia" },
    ],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "The best wellness software on the market.", author: "Marina", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "Our occupancy rates have never been higher.", author: "Paul", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Incredible staff management tools.", author: "Elena", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "The interface is simply beautiful.", author: "Sofia", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "Highly customizable and fast.", author: "Marco", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  medspa: {
    slug: "medspa",
    name: "Medspa",
    hero: {
      title: "Clinic management for modern medical spas",
      subtitle: "Secure, compliant, and designed for high-end clinics",
      cta: "Learn more",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [
      { name: "Dr. Smith", role: "Medical Director", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80" },
    ],
    trustCards: [],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "Patient booking has never been easier.", author: "Dr. Anna", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "HIPAA compliant and very secure.", author: "Dr. Mark", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "The analytics are exactly what we needed.", author: "Sarah G.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "Great support and onboarding.", author: "Lisa M.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "Professional look and feel.", author: "Kevin O.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  "massage-therapy": {
    slug: "massage-therapy",
    name: "Massage Therapy",
    hero: {
      title: "Relax. We've got your booking handled.",
      subtitle: "The simplest way to manage your massage therapy practice",
      cta: "Join free",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [],
    trustCards: [],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "Perfect for independent therapists.", author: "David", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "I love the mobile app.", author: "Chris", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Simple, fast, and reliable.", author: "Michelle", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "My clients find it very easy.", author: "Rachel", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "No more phone calls during sessions.", author: "Sam", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  "fitness-recovery": {
    slug: "fitness-recovery",
    name: "Fitness & Recovery",
    hero: {
      title: "Powering the next generation of fitness brands",
      subtitle: "Class scheduling, memberships, and recovery tracking in one place",
      cta: "Get started",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [],
    trustCards: [],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "The best gym management software.", author: "Alex", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "Our members love the app.", author: "Jordan", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Scaling was so easy with Palama.", author: "Taylor", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "The payment system is rock solid.", author: "Riley", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "Great reporting tools.", author: "Jamie", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  "physical-therapy": {
    slug: "physical-therapy",
    name: "Physical Therapy",
    hero: {
      title: "Clinical excellence meet effortless management",
      subtitle: "Patient scheduling and medical records built for physiotherapists",
      cta: "Start today",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [],
    trustCards: [],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "Streamlined my entire practice.", author: "Dr. Dave", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "The charting features are excellent.", author: "Sarah P.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Easy for patients to book sessions.", author: "Mark R.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "Highly secure and compliant.", author: "Lisa T.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "Best software for physios.", author: "Kevin B.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  "health-practices": {
    slug: "health-practices",
    name: "Health Practices",
    hero: {
      title: "The modern platform for private health practices",
      subtitle: "Simplify scheduling, patient records, and billing in one secure place",
      cta: "Get started",
      image: "https://images.unsplash.com/photo-1504813184591-01592fd039e5?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [],
    trustCards: [],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "It's changed the way I run my practice. Highly recommended.", author: "Dr. James", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "The most intuitive software for health professionals.", author: "Sarah L.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  "tattooing-piercing": {
    slug: "tattooing-piercing",
    name: "Tattooing & Piercing",
    hero: {
      title: "The #1 choice for world-class tattoo studios",
      subtitle: "Manage consultations, deposits, and portfolios with ease",
      cta: "Join the elite",
      image: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [],
    trustCards: [],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "Finally, a software that respects the art.", author: "Inker", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "Deposits solved our no-show problem.", author: "Ink Boss", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Portfolios look amazing on the app.", author: "Artist X", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "Easy to manage guest artists.", author: "Studio G", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "Best support team in the game.", author: "Tatt King", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  "pet-grooming": {
    slug: "pet-grooming",
    name: "Pet Grooming",
    hero: {
      title: "Grooming management for happy pets and owners",
      subtitle: "The easiest way to schedule pets, owners, and groomers",
      cta: "Start free",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [],
    trustCards: [],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "Pawsitive results since day one.", author: "Groomer Jane", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "Pet profiles are so helpful.", author: "Pet Spa", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "I can manage 3 shops from my phone.", author: "Owner Sam", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "Best booking system for pets.", author: "Dog Lover", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "Highly recommend to all groomers.", author: "Pro Groom", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  "skin-care": {
    slug: "skin-care",
    name: "Skin Care",
    hero: {
      title: "Advanced clinical management for skin care professionals",
      subtitle: "The all-in-one platform for dermatologists and estheticians",
      cta: "Join now",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    },
    professionals: [],
    trustCards: [],
    features: [],
    darkFeatures: [],
    testimonials: [
      { quote: "Finally a software that understands clinical workflow.", author: "Dr. Elena", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "The patient management is flawless.", author: "Owner Sarah", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Best decision for my clinic this year.", author: "Clinician Mark", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "Highly recommended for estheticians.", author: "Artist Emily", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "Secure and easy to use.", author: "Manager David", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
};

export const businessTypesList = [
  "Hair Salons",
  "Nail Salons",
  "Barbershops",
  "Skin Care",
  "Medspa",
  "Massage Therapy",
  "Spas & Wellness",
  "Fitness & Recovery",
  "Physical Therapy",
  "Health Practices",
  "Tattooing & Piercing",
  "Pet Grooming"
];
