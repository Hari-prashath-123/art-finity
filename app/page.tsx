"use client"

import { useEffect } from "react"
import { Footer } from "@/components/footer"
import RegistrationCount from "@/components/registration-count"
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
          ART FINITY 
        </h1>
        <p className="text-lg text-gray-400 mb-12 opacity-0 delay-300" data-animate="animate-fade-in">
          AI ART HACKATHON - 2026
        </p>

        <p className="text-xl md:text-2xl text-gray-300 mb-2 opacity-0 delay-200" data-animate="animate-fade-in">
          Coming 29th • 9:00 AM – 4:00 PM
        </p>

        <p className="text-lg text-gray-400 mb-12 opacity-0 delay-300" data-animate="animate-fade-in">
          AI × Creativity × Innovation
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

        {/* Down arrow scroll button - center bottom of hero */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0" data-animate="animate-fade-in">
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About section"
            className="w-14 h-14 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-shadow shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="down-arrow">
              <path d="M12 5v14" />
              <path d="M19 12l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

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
            ART-FINITY 2026 is an AI-focused creative innovation competition aimed at exploring the intersection of
            Artificial Intelligence and digital creativity. The event provides a platform for students to demonstrate
            their skills in AI-powered image and video generation, prompt engineering, and creative problem-solving,
            while promoting the ethical and responsible use of AI technologies.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Participants will engage in hands-on challenges that emphasize innovation, originality, and real-world
            applicability of AI in creative domains, contributing to the development of an AI-ready workforce.
          </p>

          <div className="space-y-4 text-lg text-gray-300 mb-12">
            <p>
              <strong>Team Size:</strong> Maximum 2 members (Individual participation is also permitted)
            </p>
            <p>
              <strong>Registration Fee:</strong> ₹100 per participant
            </p>
            <p>
              <strong>Participation Certificates:</strong> Provided to all registered participants
            </p>
            <p>
              <strong>Awards:</strong> Cash prizes for the top 3 winning teams
            </p>
            <p>
              <strong>Registration:</strong> Limited number of teams – Register early
            </p>
            <p>
              <strong>Venue:</strong> K. Ramakrishnan College of Technology, Circuit Block 2nd Floor, Lab
            </p>
          </div>
          <div className="mt-8 opacity-0" data-animate="animate-fade-in">
            <img
              src="/ART%20FINITY%20POSTER.png"
              alt="Art Finity poster"
              loading="lazy"
              className="mx-auto w-full max-w-3xl rounded-lg shadow-lg"
            />
          </div>
          {/* <div className="mt-6 opacity-0" data-animate="animate-fade-in">
            <RegistrationCount sheetId="1M1JsujO8yRzH66eVWPquFDlSePCST9IM-THuATbMmVw" gid="782485396" />
          </div> */}
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
                    <span>Character design event (Anything Matches t)</span>
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

      {/* THEMES SECTION */}
      <section id="themes" className="py-24 px-4 bg-black/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center opacity-0" data-animate="animate-slide-left">
            Themes of ART-FINITY 2026 – AI × Creativity × Innovation
          </h2>

          <div className="space-y-8 text-lg text-gray-300 mt-8">
            <div className="opacity-0" data-animate="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">1. Safe and Trusted AI</h3>
              <p>
                Exploring the ethical, responsible, and transparent use of Artificial Intelligence in creative
                applications. This theme emphasizes bias awareness, content authenticity, and responsible deployment
                of AI-generated media.
              </p>
            </div>

            <div className="opacity-0" data-animate="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">2. Human Capital for an AI-Ready Workforce</h3>
              <p>
                Empowering students with practical exposure to AI-driven creative tools such as generative models,
                prompt engineering, and AI-assisted design, thereby preparing them for emerging careers in AI and
                digital innovation.
              </p>
            </div>

            <div className="opacity-0" data-animate="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">3. Science and AI-Enabled Research &amp; Development</h3>
              <p>
                Encouraging experimental and research-oriented approaches in AI-based art and media generation,
                fostering innovation through the application of machine learning models in creative problem-solving.
              </p>
            </div>

            <div className="opacity-0" data-animate="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">4. Resilience, Innovation &amp; Efficiency</h3>
              <p>
                Highlighting how AI enhances creative workflows by improving efficiency, adaptability, and
                innovation in digital content creation and design processes.
              </p>
            </div>

            <div className="opacity-0" data-animate="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">5. Inclusion and Social Empowerment</h3>
              <p>
                Demonstrating the role of AI in promoting inclusive creativity, accessibility, and social awareness
                through digital art, storytelling, and media that address societal challenges.
              </p>
            </div>

            <div className="opacity-0" data-animate="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">6. Democratizing AI Resources</h3>
              <p>
                Promoting awareness and usage of open-source, low-code, and no-code AI platforms, making AI tools
                accessible to students from diverse academic and socio-economic backgrounds.
              </p>
            </div>

            <div className="opacity-0" data-animate="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">7. Economic Growth and Social Good</h3>
              <p>
                Showcasing AI-driven creative solutions that support entrepreneurship, digital economy growth, and
                socially impactful innovation.
              </p>
            </div>

            <div className="opacity-0" data-animate="animate-fade-in">
              <h3 className="text-xl font-semibold mb-2">8. Creative AI in Gaming, Fantasy &amp; Original Storytelling</h3>
              <p>
                Focusing on the application of Artificial Intelligence in game design, fantasy world-building,
                character creation, and original storytelling. This theme encourages participants to leverage AI for
                interactive narratives, virtual environments, concept art, and imaginative content, fostering
                originality, innovation, and next-generation creative experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Agen Club x Art Nexus Club</h1>

          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            A student-run creative &amp; tech collective — where art, AI and storytelling collide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-gray-400 uppercase tracking-widest">
            <span>Workshops &amp; Mentorship </span>
            <span>Hands-on Challenges</span>
            <span>Showcase &amp; Prizes</span>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Agen Club and Art Nexus club organises Art Finity to bring creators and technologists together — build character-driven images,
            transform them into motion stories, and share your creative vision.
          </p>
          <div className="mt-8">
            <a
              href="https://chat.whatsapp.com/BughR6bYEkeIBjZcjlB4Wq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-medium rounded-md transition"
              aria-label="Join the Art Finity WhatsApp group"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
