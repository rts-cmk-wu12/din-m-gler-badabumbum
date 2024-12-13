import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@shadcn/ui/button';
import { Input } from '@shadcn/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Login | DIN MÆGLER',
  description: 'Login to your DIN MÆGLER account',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#15233E] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Link href="mailto:4000@dinmaegler.com" className="flex items-center hover:text-gray-200">
              <Mail className="h-4 w-4 mr-2" />
              4000@dinmaegler.com
            </Link>
            <Link href="tel:+4570704000" className="flex items-center hover:text-gray-200">
              <Phone className="h-4 w-4 mr-2" />
              +45 7070 4000
            </Link>
          </div>
          <Button variant="ghost" className="text-white hover:text-gray-200" asChild>
            <Link href="/login">Log ind</Link>
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              DIN MÆGLER
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/properties" className="hover:text-gray-600">
                Boliger til salg
              </Link>
              <Link href="/agents" className="hover:text-gray-600">
                Mæglere
              </Link>
              <Link href="/favorites" className="hover:text-gray-600">
                Mine favoritter
              </Link>
              <Link href="/contact" className="hover:text-gray-600">
                Kontakt os
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#15233E] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Account Login</h1>
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Login</span>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">Log ind på din konto</h2>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input id="password" type="password" placeholder="Password" required />
                </div>
                <Button type="submit" className="w-full bg-[#15233E]">
                  Log ind
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center">Log ind med</div>
            <div className="grid grid-cols-3 gap-4 w-full">
              <Button variant="outline" className="bg-[#DB4437] text-white hover:bg-[#DB4437]/90">
                Google
              </Button>
              <Button variant="outline" className="bg-[#4267B2] text-white hover:bg-[#4267B2]/90">
                Facebook
              </Button>
              <Button variant="outline" className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90">
                Twitter
              </Button>
            </div>
            <div className="text-sm text-center">
              Har du ikke en konto?{' '}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Opret bruger
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>

      {/* Footer */}
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
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">Layout By Jit Banik 2020</div>
        </div>
      </footer>
    </div>
  );
}
