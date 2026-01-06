import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: hariprasath.ad23@krct.ac.in</p>
              <p>Phone: +91 99442 27061    </p>
              <p>Email: Omprakash.ad23@krct.ac.in</p>
              <p>Phone: +91  877 869 9252    </p>
            </div>
          </div>
          <div className="flex flex-col md:items-end">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <Link
              href="https://instagram.com/_agen_club"
              target="_blank"
              className="flex items-center text-xl hover:text-purple-400 transition-colors mb-4 leading-4 gap-2 text-center underline"
            >
              <Instagram className="w-6 h-6" />
              <span>@_agen_club</span>
            </Link>
            <Link
              href="https://www.instagram.com/art_nexus_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="flex items-center text-xl hover:text-purple-400 transition-colors mb-4 leading-4 gap-2 text-center underline"
            >
              <Instagram className="w-6 h-6" />
              <span>@art_nexus_club</span>
            </Link>
            <div className="flex gap-4">
              
              
              
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/5">
          <p>&copy; Art Finity — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
