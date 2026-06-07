'use client'

import Link from 'next/link'
import DiagonalPattern from './DiagonalPattern'
import BannerSection from './BannerSection'
import ProfileHeader from './ProfileHeader'
import ContentSection from './ContentSection'
import ContentParagraph from './ContentParagraph'
import SectionBorder from './SectionBorder'
import Reachout from './Reachout'
import CallToAction from './CallToAction'
import TechStackMarquee from './TechStackMarquee'
import { Reveal } from './Reveal'
import { projects } from '@/data/projects'
import MinimalProjectList from './MinimalProjectList'
import GitHubActivity from './GitHubActivity'
import AboutMe from './AboutMe'
import SpotifyPlayer from './SpotifyPlayer'


export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative" style={{ fontFamily: 'var(--font-hk-grotesk)' }}>
      <div className="relative mx-auto max-w-4xl">
        {/* Diagonal Patterns */}
        <DiagonalPattern side="left" />
        <DiagonalPattern side="right" />

        {/* Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0 bg-background relative z-10">
          {/* Banner Section */}
          <Reveal delay={0.1}>
            <BannerSection
              bannerImage="/banner.png"
              quote=""
            />
          </Reveal>

          {/* Profile Header */}
          <Reveal delay={0.2}>
            <ProfileHeader
              name="Vasanth Kumar"
              age="14"
              title="Developer • Builder • Productivity Enthusiast"
              profileImage="/pfp.jpg"
              socialLinks={{
                twitter: "https://x.com/VasanthKumar_16",
                github: "https://github.com/Leadin-Vasanthkumar",
              }}
            />
          </Reveal>

          {/* Content Prose */}
          <div className="prose dark:prose-invert max-w-none">
            <div className="text-base">
              {/* Current Role Section */}
              <Reveal delay={0.1}>
                <ContentSection
                  subtitle="AI Engineer | Full-stack Developer"
                  title=''
                  className="mt-6"
                >
                  <div></div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>

              {/* About Section */}
              <Reveal delay={0.1}>
                <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
                  <ContentParagraph className="mb-4 text-base sm:text-lg">
                    <span className="font-medium dark:text-white text-black">14, vibe-coding everything with AI, shipping in public.</span> Websites for startups and founders. Web apps that solve real productivity problems — usually ones I had myself. If I have the problem, I build the fix. 🙃
                  </ContentParagraph>

                  {/* Spotify Player */}
                  <div className="mt-4 sm:mt-6 px-2 sm:px-0">
                    <SpotifyPlayer 
                      songName="Aatma Rama Ananda Ramana"
                      artists="Unknown"
                      audioSrc="/song.mp3"
                      albumArt="/song-banner.jpg"
                    />
                  </div>
                </ContentSection>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-6" />
              </Reveal>



              {/* Projects / Works */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <h2 className="text-base sm:text-xl opacity-20 font-[family-name:var(--font-instrument-serif)]">Projects / Works</h2>
                  </div>
                  <div className="px-4">
                    <MinimalProjectList projects={projects.slice(0, 6)} />
                  </div>
                  <div className="px-4 flex justify-end mt-6 sm:mt-8 mb-4 sm:mb-6">
                    <Link
                      href="/projects"
                      className="text-xs sm:text-sm text-black/50 dark:text-white/50 hover:text-black/80 dark:hover:text-white/80 transition-colors inline-flex items-center gap-1"
                    >
                      View All
                      <span>→</span>
                    </Link>
                  </div>

                  {/* About Me Section */}
                  <div className="px-4 mt-8 sm:mt-10 mb-8 sm:mb-10">
                    <AboutMe />
                  </div>

                  {/* GitHub Activity Heatmap */}
                  <div className="px-4 mb-4 sm:mb-6">
                    <GitHubActivity username="Leadin-Vasanthkumar" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Thoughts Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 py-2">
                  <div className="px-4 mb-4 sm:mb-6 mt-4 sm:mt-6">
                    <h2 className="text-base sm:text-xl opacity-20 font-[family-name:var(--font-instrument-serif)]">Thoughts</h2>
                  </div>
                  <div className="px-4">
                    <div className="py-12 sm:py-16 flex justify-center items-center">
                      <p className="text-xs sm:text-sm text-black/40 dark:text-white/40 italic font-[family-name:var(--font-hk-grotesk)]">
                        Thinking rn...
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Tech Stack Section */}
              <Reveal delay={0.1}>
                <div className="sm:px-12 mt-4 sm:mt-6 mb-4 sm:mb-6">
                  <div className="px-4">
                    <TechStackMarquee className="w-full" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>


              {/* call to action*/}
              <Reveal delay={0.1}>
                <div className="px-4 sm:px-0">
                  <CallToAction />
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionBorder className="mt-0 pt-0" />
              </Reveal>

              {/* Reachout Section */}
              <Reveal delay={0.1}>
                <div className="mt-4 sm:mt-6">
                  <Reachout
                    title="Let's connect"
                    subtitle="Find me on these platforms"
                    socialLinks={{
                      twitter: "https://x.com/VasanthKumar_16",
                      github: "https://github.com/Leadin-Vasanthkumar",
                    }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
