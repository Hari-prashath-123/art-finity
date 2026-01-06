"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"
import { ImageIcon, Video } from "lucide-react"

function useIntersectionObserver() {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const animClass = entry.target.getAttribute("data-animate")
          if (!animClass) return

          if (entry.isIntersecting) {
            if (prefersReducedMotion) {
              // Simple fade for reduced motion
              entry.target.classList.add("animate-fade-in")
            } else {
              // Remove animation class, force reflow, then re-add to replay
              entry.target.classList.remove(animClass)
              void entry.target.offsetWidth // Force reflow
              entry.target.classList.add(animClass)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

function useAlternatingAnimations() {
  useEffect(() => {
    const sections = ["about", "events", "sponsors", "rules", "timeline", "prominent-copy"]
    sections.forEach((id, index) => {
      const section = document.getElementById(id)
      if (section) {
        // Start with #about = LEFT (index 0 = even), then alternate
        const animClass = index % 2 === 0 ? "animate-slide-left" : "animate-slide-right"
        const children = section.querySelectorAll("[data-animate]")
        children.forEach((child) => {
          child.setAttribute("data-animate", animClass)
        })
      }
    })
  }, [])
}

export default function Home() {
  useIntersectionObserver()
  useAlternatingAnimations()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10" />

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter opacity-0" data-animate="animate-reveal">
          Art Finity
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-2 opacity-0 delay-200" data-animate="animate-fade-in">
          Coming 27th • 9:00 AM – 4:00 PM
        </p>

        <p className="text-lg text-gray-400 mb-12 opacity-0 delay-300" data-animate="animate-fade-in">
          2nd floor outside lab
        </p>

        <div className="flex gap-6 opacity-0 delay-500" data-animate="animate-slide-up">
          <button
            onClick={() => scrollToSection("rules")}
            className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium tracking-wide"
          >
            View Rules
          </button>
          <a
            href="https://forms.gle/DfFXMDzGjbaDMvN2A"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg font-medium tracking-wide inline-block"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-4 max-w-4xl mx-auto text-center">
        <div className="opacity-0" data-animate="animate-slide-left">
          <h2 className="text-3xl font-bold mb-8">About The Event</h2>
          <div className="about-top-brand aria-hidden=false">
            <img
              src="/images/college-logo.jpg"
              alt="K. Ramakrishnan College of Technology logo"
              loading="lazy"
              className="college-logo"
            />
          </div>

          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Art Finity is a creative showcase designed to push the boundaries of digital expression. Join us for a day
            of innovation where technology meets artistry through image and video generation challenges.
          </p>

          <div className="space-y-4 text-lg text-gray-300 mb-12">
            <p>
              <strong>Max team size: 2.</strong> Individual participation also allowed.
            </p>
            <p>
              <strong>Registration fee:</strong> ₹100 per participant.
            </p>
            <p>
              <strong>Certificates</strong> will be provided to all participants.
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center" data-animate="animate-slide-right">
            Events
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-400" data-animate="animate-slide-right">
                Round 1
              </h3>
              <div
                className="bg-black border border-white/10 p-8 rounded-lg card-hover-effect opacity-0"
                data-animate="animate-slide-right"
              >
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-6 text-purple-400">
                  <ImageIcon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Image Generation</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Character design event (gaming/fantasy/original)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Create 1 image explaining the character's concept</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Include emotion and visual details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>200-word description required</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400" data-animate="animate-slide-right">
                Round 2
              </h3>
              <div
                className="bg-black border border-white/10 p-8 rounded-lg card-hover-blue-glow opacity-0 delay-200"
                data-animate="animate-slide-right"
              >
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-400">
                  <Video size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Video Generation</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Motion video created using the designed character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Must include storytelling + audio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Small edits allowed (cut/trim/merge)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Suggested length: 60–90 seconds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors SECTION */}
      <section id="sponsors" className="py-24 px-4 sponsors-section">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 opacity-0" data-animate="animate-slide-left">
            Sponsored by
          </h2>

          <figure className="single-sponsor-card opacity-0 delay-200" data-animate="animate-slide-left">
            <img
              src="/images/whatsapp-20image-202025-11-24-20at-2018.jpg"
              alt="ISysWay Technologies"
              loading="lazy"
              className="sponsor-logo-single"
            />
          </figure>

          <a
            href="https://www.linkedin.com/in/isysway-technologies-b54603222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link inline-block opacity-0 delay-300"
            data-animate="animate-slide-left"
            aria-label="Visit ISysWay Technologies on LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="#0A66C2"
              className="linkedin-icon"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </section>

      {/* RULES SECTION */}
      <section id="rules" className="py-24 px-4 max-w-4xl mx-auto">
        <div className="opacity-0" data-animate="animate-slide-left">
          <h2 className="text-4xl font-bold mb-12 border-b border-white/20 pb-4 inline-block">Rules</h2>

          <div className="space-y-6 text-lg text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <p>No pre-generated AI images allowed.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <p>No discussion or collaboration between participants during the rounds.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <p>
                Use of external AI tools is <strong>not permitted</strong>.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <p>Small edits are allowed only (merge, trim).</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section id="timeline" className="py-24 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto opacity-0" data-animate="animate-slide-right">
          <h2 className="text-4xl font-bold mb-12 text-center">Event Timeline</h2>

          {/* Timeline editable here: update <li> items inside #timeline .timeline-list */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl min-w-fit">🕘</div>
              <div className="pb-6">
                <p className="text-xl font-bold">9:00 AM</p>
                <p className="text-gray-300">Event begins</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl min-w-fit">📝</div>
              <div className="pb-6">
                <p className="text-xl font-bold">9:00 – 10:00 AM</p>
                <p className="text-gray-300 font-semibold mb-2">Registration & Introduction</p>
                <p className="text-gray-400 text-sm">• Please arrive on time for check-in.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl min-w-fit">🧪</div>
              <div className="pb-6">
                <p className="text-xl font-bold">10:00 AM – 12:00 PM</p>
                <p className="text-gray-300 font-semibold mb-2">
                  <strong>1st Round</strong>
                </p>
                <p className="text-gray-400 text-sm mb-2">• Venue: 2nd Floor, Lab, Circuit Block</p>
                <p className="text-gray-400 text-sm">
                  • <strong>10:45 – 11:00 AM</strong> — Short break (refreshments provided)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl min-w-fit">🍽️</div>
              <div className="pb-6">
                <p className="text-xl font-bold">12:00 – 1:00 PM</p>
                <p className="text-gray-300 font-semibold mb-2">Lunch break</p>
                <p className="text-gray-400 text-sm">
                  • Note: Lunch will <strong>not</strong> be provided
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl min-w-fit">🎬</div>
              <div className="pb-6">
                <p className="text-xl font-bold">1:00 – 3:00 PM</p>
                <p className="text-gray-300">Video Generation Round</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl min-w-fit">🗣️</div>
              <div className="pb-6">
                <p className="text-xl font-bold">3:00 – 4:00 PM</p>
                <p className="text-gray-300">Explanation Round</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-2xl min-w-fit">🏆</div>
              <div className="pb-6">
                <p className="text-xl font-bold">After 4:00 PM</p>
                <p className="text-gray-300">Prize distribution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMINENT COPY BLOCK */}
      <section id="prominent-copy" className="py-32 px-4">
        <div className="max-w-5xl mx-auto text-center opacity-0" data-animate="animate-slide-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Agen Club</h1>

          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            A student-run creative &amp; tech collective — where art, AI and storytelling collide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-gray-400 uppercase tracking-widest">
            <span>Workshops &amp; Mentorship </span>
            <span>Hands-on Challenges</span>
            <span>Showcase &amp; Prizes</span>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Agen Club organises Art Finity to bring creators and technologists together — build character-driven images,
            transform them into motion stories, and share your creative vision.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
