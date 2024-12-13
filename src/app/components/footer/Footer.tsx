import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DIN MÆGLER</h3>
              <p className="text-sm text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/properties" className="text-gray-600 hover:text-gray-900">
                    Boliger til salg
                  </Link>
                </li>
                <li>
                  <Link href="/agents" className="text-gray-600 hover:text-gray-900">
                    Mæglere
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Kontakt os
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +45 7070 4000
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  4000@dinmaegler.com
                </p>
                <p>Stændertorvet 78, 4000 Roskilde</p>
              </div>
            </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">Layout By Jit Banik 2020</div>
        </div>
      </footer>
    </div>
  );
} );
}