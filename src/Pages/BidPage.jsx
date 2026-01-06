import { useMemo } from "react";
import { useParams } from "react-router-dom";

import ProjectHeader from "../components/BiddingPageSections/ProjectHeader";
import ProjectMainContent from "../components/BiddingPageSections/ProjectMainContent";
import ProjectExtras from "../components/BiddingPageSections/ProjectExtras";
import BidSidebar from "../components/BiddingPageSections/BidSidebar";
import SimilarProjects from "../components/BiddingPageSections/SimilarProjects";

export default function BidPage() {
  const { id } = useParams();

  // Placeholder only (no external mock data)
  const project = useMemo(() => {
    return {
      id: id || "0",
      title: "Mobile App UI/UX Design for Fitness Platform",
      tags: ["Graphic Design", "UI/UX", "Mobile App"],
      client: "Michael Tan",
      rating: 4.8,
      projectsDone: 32,
      joined: "Joined October 2023",
      overview:
        "We are looking for an experienced UI/UX Designer to create the complete interaction and visual design for a new mobile fitness tracking application. The platform will serve casual users and wellness-focused professionals, so the interface must feel modern, clean, and easy to navigate.",

      scope: [
        "User flow mapping & journey design",
        "Wireframes (low → mid fidelity)",
        "Final UI screens (high-fidelity) for iOS & Android",
        "Component library & basic design system",
        "Responsive behavior & edge-case handling",
      ],
      requirements: [
        "Experience designing mobile apps (preferably fitness/health/lifestyle)",
        "Strong understanding of usability, accessibility, and intuitive UI patterns",
        "Ability to translate business goals into clear design solutions",
        "Comfortable with Figma (primary), FigJam for flows",
      ],
      deliverables: [
        "20–30 high-fidelity screens",
        "Interactive prototype in Figma",
        "Exportable assets & component library",
        "Handoff package for developers",
      ],
      styleDirection: [
        "Clean, friendly, modern",
        "Soft gradients, rounded shapes",
        "Subtle animations & micro-interactions",
      ],
      notes:
        "User experience is our main priority. The design should encourage new users to stay consistent with their fitness goals through a simple, enjoyable interface.",

      meta: {
        deadline: "December 19, 2025",
        duration: "4–6 Weeks",
        location: "Remote",
        level: "Intermediate",
      },

      references: [
        {
          id: "ref1",
          type: "image",
          src: "/assets/img/ref1.png",
          alt: "Reference 1",
        },
        {
          id: "ref2",
          type: "image",
          src: "/assets/img/ref2.png",
          alt: "Reference 2",
        },
        {
          id: "ref3",
          type: "video",
          src: "/assets/img/ref3.png",
          alt: "Reference 3",
        },
      ],

      skills: {
        mandatory: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
        nice: ["Unity3D"],
      },

      activity: {
        bids: 34,
        lastView: "4 hours ago",
      },
    };
  }, [id]);

  return (
    <main className="mx-auto w-full max-w-[1200px] px-6 pb-20 pt-28">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        {/* LEFT */}
        <section className="min-w-0">
          <ProjectHeader project={project} />
          <ProjectMainContent project={project} />
          <ProjectExtras project={project} />

          <div className="mt-10">
            <SimilarProjects currentId={project.id} />
          </div>
        </section>

        {/* RIGHT */}
        <aside className="lg:sticky lg:top-28 h-fit">
          <BidSidebar project={project} />
        </aside>
      </div>
    </main>
  );
}
