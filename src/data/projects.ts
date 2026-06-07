import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: "flowlock",
    title: "Flowlock",
    description: "A Life OS and a productivity tool",
    longDescription: "Founder of this project\n\nFlowlock is an open-source LifeOS and productivity app designed to help users organize work, study, and personal goals through folder-based task management, notes, Pomodoro sessions, and guided recovery breaks. It combines deep focus with wellness-driven workflows like NSDR, breathing exercises, hydration reminders, and productivity analytics to create a balanced execution system.",
    liveLink: "https://flowlock-lime.vercel.app",
    githubLink: "https://github.com/Leadin-Vasanthkumar/Flowlock.git",
    video: "https://player.mux.com/r01sPUMjurXtsA7TgCKrHFtY6sdigem57JKlgDc5vQSQ",
    image: "/images/flowlock.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Supabase",
      "Framer Motion",
      "Shadcn"
    ],
  },
  {
    id: "branddrop",
    title: "BrandDrop",
    description: "Logo to brandguidelines extractor",
    longDescription: "Builder of this project and owner\n\nBrandDrop is an AI-powered branding tool that transforms a logo into complete brand guidelines in seconds using visual and style analysis. Users can upload a logo, choose a branding style, and instantly generate colors, typography, and design direction for building consistent websites and products.",
    liveLink: "https://branddropapp.netlify.app",
    githubLink: "https://github.com/Leadin-Vasanthkumar/BrandDrop-Kinetic-Terminal.git",
    video: "https://player.mux.com/002e9RyGR6LFMWJ8Anvnk01ExS4wK19902wksTBS9wtHzM",
    image: "/images/branddrop.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "AI"
    ],
  },
  {
    id: "boredombuster",
    title: "Boredom Buster",
    description: "Curated sites to cure boredom",
    longDescription: "Builder of this project\n\n**Boredom Buster** is an open-source website discovery platform designed to help users escape boredom through curated internet experiences tailored to different interests and moods. The app includes multiple modes such as Builder Mode for developers and CS students looking for coding tools, inspiration, and useful resources, alongside Student and Time Pass modes that surface entertaining, random, and interactive websites for learning, exploration, or simply passing time. With a simple interaction-based interface, users can instantly discover unique corners of the internet ranging from productivity tools and creative experiments to fun websites and engaging online experiences, making internet browsing more intentional, enjoyable, and accessible.",
    liveLink: "https://iambbored.netlify.app",
    githubLink: "https://github.com/Leadin-Vasanthkumar/Boredom-Buster.git",
    video: "https://player.mux.com/thj8hKG6yq701gHz7gJJXB01l3BtLrXFGDV2T1yNR02meA",
    image: "/images/boredombuster.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript"
    ],
  },
  {
    id: "forus",
    title: "Forus",
    description: "Local music player, organize, play and manage offline music",
    longDescription: "Builder\n\n**Forus** is an open-source browser-based local music player built for users who want a clean, distraction-free way to enjoy and organize their offline music collection. Users can import and play songs directly from their local storage without ads, internet dependency, or streaming limitations, while also creating playlists, reordering tracks with drag-and-drop controls, and managing music folders seamlessly through an intuitive UI.\n\nBeyond simple playback, Forus includes productivity-focused listening features such as customizable focus modes and timed sessions inspired by deep work and sleep playlists. Designed with a modern and minimal interface, the app combines flexibility, control, and simplicity to create a more personal music experience than traditional streaming platforms.",
    liveLink: "https://forus-leadin.netlify.app",
    githubLink: "https://github.com/Leadin-Vasanthkumar/forus.git",
    video: "https://player.mux.com/02yrvocR4cyQ01CJavzErf8pexH01f4puOm01Q00tUNTjjvE",
    image: "/images/forus.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript"
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getAllProjects = (): Project[] => {
  return projects
}
