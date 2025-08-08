import React from "react";
import {
  Server,
  Smartphone,
  Car,
  CaseSensitive as University,
  School,
  GraduationCap,
  Trophy,
  Code,
  Github,
  Linkedin,
} from "lucide-react";
import { ExperienceItem, ProjectItem, EduBgItem, SocialItem } from "../types";

export const experience: ExperienceItem[] = [
  {
    id: 1,
    company: "Africa To Silicon Valley (A2SV)",
    role: "Backend Developer - Stocket",
    icon: <Server className="w-6 h-6" />,
    details: [
      "Developed scalable backend services to handle real-time stock market data",
      "Led improvements to backend architecture including middleware integration and error handling optimization",
      "Automated deployments and testing using CI/CD pipelines",
    ],
    tech: ["Golang", "PostgreSQL", "gRPC", "Docker", "CI/CD"],
    url: null,
    thumbnail: null,
  },
  {
    id: 2,
    company: "Africa To Silicon Valley (A2SV)",
    role: "Mobile App Development Intern",
    icon: <Smartphone className="w-6 h-6" />,
    details: [
      "Developed mobile apps using Flutter and Dart following TDD principles",
      "Collaborated on app design, testing, and deployment",
      "Contributed to seamless user experience implementation",
    ],
    tech: ["Flutter", "Dart", "Git"],
    url: null,
    thumbnail: null,
  },
  {
    id: 3,
    company: "Golden Ride",
    role: "Mobile App Developer",
    icon: <Car className="w-6 h-6" />,
    details: [
      "Developed driver-side app with Flutter using Clean Architecture and BLoC",
      "Integrated real-time location updates using Socket.IO and Google Maps API",
      "Managed secure data storage and implemented REST API communication",
    ],
    tech: [
      "Flutter",
      "Clean Architecture",
      "BLoC",
      "Socket.IO",
      "Google Maps API",
    ],
    url: null,
    thumbnail:
      "https://res.cloudinary.com/dl6vahv6t/image/upload/v1752581130/golden_ride_dn4abj.png",
  },
];
export const projects: ProjectItem[] = [
  {
    id: 8,
    title: "Kit – Version Control System (Git Alternative)",
    desc: "A Git-like version control system built from scratch in Go with custom hashing, compression, and a browser-based playground.",
    details: [
      "Implemented core Git features: init, add, commit, log, branch, checkout, restore, and reset",
      "Designed efficient object storage using SHA-1 hashing and zlib compression",
      "Created a web playground for testing Kit without local installation",
    ],
    tech: ["Golang", "SHA-1", "zlib", "REST API"],
    url: "https://github.com/m21power/kit",
    website: "https://kit-playground.vercel.app/",
    thumbnail:
      "https://res.cloudinary.com/dl6vahv6t/image/upload/v1754656811/Screenshot_from_2025-08-08_15-07-18_broo76.png",
  },
  {
    id: 4,
    title: "Near Me – Campus Social Network",
    desc: "Real-time chat and location-based discovery for campus students with 240+ daily active users.",
    details: [
      "Built high-performance app with seamless real-time interactions",
      "Enabled real-time data sync through event-driven workflows",
      "Implemented features like meme-sharing and geo-tagged posts",
    ],
    tech: ["Flutter", "Golang", "Firestore", "Firebase"],
    url: "https://github.com/m21power/near-me",
    thumbnail:
      "https://res.cloudinary.com/dl6vahv6t/image/upload/v1752581204/438113441-e5a00585-cd2e-4042-b778-b38a38df1c4e.png_dob1wy.png",
  },
  {
    id: 5,
    title: "Shekla – Food Ordering App",
    desc: "Smooth food ordering experience with real-time updates and intuitive UI/UX design.",
    details: [
      "Designed clean and engaging UI/UX focused on user convenience",
      "Integrated real-time order status and updates using WebSockets",
      "Implemented secure authentication and order management with Firebase",
    ],
    tech: ["Flutter", "UI/UX", "WebSocket", "Firebase"],
    url: "https://github.com/m21power/shekla",
    thumbnail:
      "https://res.cloudinary.com/dl6vahv6t/image/upload/v1752580651/shekla_l925qh.jpg",
  },
  {
    id: 6,
    title: "E-Food",
    desc: "Scalable platform for managing orders, real-time updates, and food inventory.",
    details: [
      "Developed REST APIs for food ordering and real-time updates",
      "Designed efficient database schema for users and orders",
      "Deployed using Docker for scalability",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "WebSockets"],
    url: "https://github.com/m21power/EFood",
    thumbnail: null,
  },
  {
    id: 7,
    title: "Lingo – Language Practice App",
    desc: "Conversation-based language practice with daily user pairing and 50+ active users.",
    details: [
      "Developed real-time matching system to pair users daily for conversation",
      "Built clean, responsive UI with Flutter for smooth chat experience",
      "Planned AI-powered feedback feature to analyze speaking skills",
    ],
    tech: ["Flutter", "Golang", "PostgreSQL", "Firestore"],
    url: "https://github.com/m21power/lingo-mobile",
    thumbnail: null,
  },
];

export const eduBg: EduBgItem[] = [
  {
    title: "Bachelor of Science in Computer Science",
    desc: "Addis Ababa University | Sep 2022 - Jun 2026",
    iconName: "University",
    details: [
      {
        iconName: "GraduationCap",
        text: "Relevant Coursework: Data Structures & Algorithms, Mobile Application Development, Object-Oriented Programming, Database Management Systems",
      },
    ],
  },
  {
    title: "Competitive Programming and Coding Academy",
    desc: "Africa To Silicon Valley (A2SV) | Feb 2024 - Oct 2024",
    iconName: "School",
    details: [
      {
        iconName: "Code",
        text: "Google-backed program with strong focus on data structures and algorithms",
      },
      {
        iconName: "Code",
        text: "Solved 850+ problems on LeetCode and Codeforces",
      },
      {
        iconName: "Trophy",
        text: "A2SV has placed 80+ students at top tech companies (Google, Bloomberg, Databricks, Amazon, LinkedIn, Square)",
      },
    ],
  },
];

export const socials: SocialItem[] = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/m21power",
    iconName: "Github",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mesay-lemma",
    iconName: "Linkedin",
  },
  {
    id: 3,
    title: "LeetCode",
    url: "https://leetcode.com/u/m_power/",
    iconName: "Code",
  },
];
