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
  salon: {
    slug: "salon",
    name: "Salon",
    hero: {
      title: "Book salon and beauty services almost anywhere and grow",
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
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
        points: ["Smart booking", "Automated marketing", "Secure payments"],
      },
      {
        title: "All-in-one software",
        description: "The platform built specifically for the beauty and wellness industry.",
        image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80",
        points: ["Inventory management", "Team scheduling", "Performance analytics"],
      },
    ],
    darkFeatures: [
      { title: "Smart booking", description: "Let clients book 24/7 with our seamless online booking system.", icon: "Calendar" },
      { title: "Point of Sale", description: "Process payments, track sales, and manage inventory with ease.", icon: "CreditCard" },
      { title: "Marketing", description: "Reach more clients with built-in email and SMS marketing tools.", icon: "Mail" },
      { title: "Reporting", description: "Get deep insights into your business performance and growth.", icon: "BarChart" },
    ],
    testimonials: [
      { quote: "Palama has completely transformed how I run my salon. The booking system is flawless.", author: "Jane Doe, Owner of The Cut", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "Our clients love the ease of booking online. It's a game-changer for us.", author: "Mark Smith, Stylist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "The reporting features give me exactly what I need to grow my team.", author: "Alice Brown", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "Best investment for our brand this year. Highly recommend.", author: "Tom Wilson", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Seamless integration with our payments. Saved us hours every week.", author: "Lucy Chen", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  barber: {
    slug: "barber",
    name: "Barber",
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
    features: [
      {
        title: "Manage your chair",
        description: "Focus on your craft while we handle the scheduling and payments.",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
        points: ["Smart booking", "Client management", "Secure payments"],
      },
    ],
    darkFeatures: [
      { title: "Smart booking", description: "Let clients book 24/7 with our seamless online booking system.", icon: "Calendar" },
      { title: "Point of Sale", description: "Process payments, track sales, and manage inventory with ease.", icon: "CreditCard" },
      { title: "Marketing", description: "Reach more clients with built-in email and SMS marketing tools.", icon: "Mail" },
      { title: "Reporting", description: "Get deep insights into your business performance and growth.", icon: "BarChart" },
    ],
    testimonials: [
      { quote: "Best decision I made for my shop. My clients love it.", author: "Joe Barber", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" },
      { quote: "The app is fast and the clients find it so easy to use.", author: "Sam Lee", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Finally a software that understands the barber industry.", author: "Rick Grimes", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" },
      { quote: "Our sales increased by 30% since joining Palama.", author: "Sarah Connor", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
      { quote: "I can manage my whole team from my phone. Incredible.", author: "Tony Stark", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
  nails: {
    slug: "nails",
    name: "Nails",
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
    darkFeatures: [
      { title: "Smart booking", description: "Let clients book 24/7 with our seamless online booking system.", icon: "Calendar" },
      { title: "Point of Sale", description: "Process payments, track sales, and manage inventory with ease.", icon: "CreditCard" },
      { title: "Marketing", description: "Reach more clients with built-in email and SMS marketing tools.", icon: "Mail" },
      { title: "Reporting", description: "Get deep insights into your business performance and growth.", icon: "BarChart" },
    ],
    testimonials: [
      { quote: "Our salon has never been busier.", author: "Jane Nails", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" },
      { quote: "The automated reminders saved us so many no-shows.", author: "Kelly P.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
      { quote: "A must-have for any professional nail technician.", author: "Brittany S.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
      { quote: "Easy to use and very professional looking.", author: "Megan Fox", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
      { quote: "Love the inventory management features.", author: "Rose Tyler", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
    ],
    faq: commonFaqs,
  },
};

export const businessTypesList = [
  "Salon",
  "Barber",
  "Nails",
  "Spa & sauna",
  "Medspa",
  "Massage",
  "Fitness & recovery",
  "Physical therapy",
  "Health practices",
  "Tattooing & piercing",
  "Pet grooming",
  "Tanning studio"
];
