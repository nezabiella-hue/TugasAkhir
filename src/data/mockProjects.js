const titles = [
  "Mobile App UI/UX Design for Fitness Platform",
  "Landing Page Design for SaaS Startup",
  "Logo + Brand Guideline for Coffee Shop",
  "React Dashboard UI for Fintech Admin",
  "E-commerce Product Page Redesign",
];

const owners = [
  "Michael Tan",
  "Nabila Prameswari",
  "Aditya Rahman",
  "Joko Santoso",
  "Siti Aulia",
];

const tagPool = [
  "UI/UX",
  "Mobile App",
  "Web Design",
  "Graphic Design",
  "Branding",
  "Figma",
  "React",
  "Illustration",
];

const descriptions = [
  "Need a creative UI/UX designer to design a modern interface. Includes user flow, wireframes, and high-fidelity mockups.",
  "Looking for a clean neo-minimal landing page with strong conversion sections and responsive layout.",
  "Need brand identity: logo, colors, typography, and basic social media templates.",
  "Build a dashboard UI with tables, filters, charts, and a clean component system.",
];

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickMany(arr, min = 2, max = 4) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function generateMockProjects(count = 12) {
  return Array.from({ length: count }, (_, i) => ({
    id: `p_${i}_${Math.random().toString(16).slice(2)}`,
    title: pickOne(titles),
    budget: `${Math.floor(Math.random() * 20) + 5}M - ${
      Math.floor(Math.random() * 40) + 20
    }M`,
    duration: `${Math.floor(Math.random() * 3) + 1} week left`,
    postedAgo: `${Math.floor(Math.random() * 23) + 1} hours ago`,
    tags: pickMany(tagPool),
    description: pickOne(descriptions),
    ownerName: pickOne(owners),
    rating: (Math.random() * (5 - 4) + 4).toFixed(1),
    projectsCount: Math.floor(Math.random() * 200) + 5,
  }));
}
