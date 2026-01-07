// src/data/carousel.js
import productImg from "../assets/img/carousel/productimg.png";
import frontendImg from "../assets/img/carousel/frontendimg.png";
import motionDesignImg from "../assets/img/carousel/motiondesignimg.png";

export const HERO_SLIDES = [
  {
    id: "s1",
    image: productImg, // ✅ matches Product Designer
    topPill: {
      label: "Project Owner",
      name: "Gupita Rajan",
      rating: 5,
      projects: 2,
    },
    bottomPill: {
      label: "Product Designer",
      name: "Arif Budiman",
      rating: 5,
      projects: 10,
    },
  },
  {
    id: "s2",
    image: frontendImg, // ✅ matches Frontend Developer
    topPill: {
      label: "Project Owner",
      name: "Nabila Prameswari",
      rating: 5,
      projects: 4,
    },
    bottomPill: {
      label: "Frontend Developer",
      name: "Rizky Ramadhan",
      rating: 5,
      projects: 18,
    },
  },
  {
    id: "s3",
    image: motionDesignImg, // ✅ matches Motion Designer
    topPill: {
      label: "Project Owner",
      name: "Joko Santoso",
      rating: 5,
      projects: 7,
    },
    bottomPill: {
      label: "Motion Designer",
      name: "Dinda Aulia",
      rating: 5,
      projects: 12,
    },
  },
];
