export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  slug: string;
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, shopping cart, and secure checkout process.",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Web",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/furqanzafar/ecommerce",
    slug: "ecommerce-platform",
    fullDescription: "A comprehensive e-commerce solution built with the MERN stack...",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and management"
    ],
    screenshots: [
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6214488/pexels-photo-6214488.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Mobile",
    technologies: ["Flutter", "Firebase", "Provider", "RESTful API"],
    demoLink: "https://example.com/fitnessapp",
    githubLink: "https://github.com/furqanzafar/fitnessapp",
    slug: "health-fitness-app",
    fullDescription: "A comprehensive fitness tracking application built with Flutter...",
    features: [
      "Workout tracking and planning",
      "Nutrition logging and analysis",
      "Progress tracking with charts",
      "Personalized workout recommendations",
      "Social features and challenges"
    ]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with modern animations and interactions.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Web",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    demoLink: "https://example.com/portfolio",
    githubLink: "https://github.com/furqanzafar/portfolio",
    slug: "portfolio-website"
  },
  {
    id: 4,
    title: "Food Delivery App UI",
    description: "UI/UX design for a food delivery application with intuitive user flows and visually appealing components.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "UI/UX",
    technologies: ["Figma", "Adobe Photoshop", "Prototyping", "User Testing"],
    demoLink: "https://example.com/fooddelivery",
    slug: "food-delivery-ui"
  },
  {
    id: 5,
    title: "Task Management App",
    description: "A comprehensive task management application with features like task creation, deadlines, and team collaboration.",
    image: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=600",
    category: "Web",
    technologies: ["React", "Redux", "Node.js", "Socket.io"],
    demoLink: "https://example.com/taskmanager",
    githubLink: "https://github.com/furqanzafar/taskmanager",
    slug: "task-management-app"
  },
  {
    id: 6,
    title: "Travel Companion App",
    description: "A mobile app for travelers to discover local attractions, create itineraries, and share experiences.",
    image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Mobile",
    technologies: ["Flutter", "Firebase", "Google Maps API", "GetX"],
    demoLink: "https://example.com/travelapp",
    githubLink: "https://github.com/furqanzafar/travelapp",
    slug: "travel-companion-app"
  }
];