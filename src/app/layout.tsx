import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Set dark mode by default, remove this if you want to toggle */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-foreground text-foreground dark:text-background`}
      >
        {/* Header */}
        <header className="bg-black dark:bg-gray-200 text-white dark:text-black p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <a href="Link /" className="hover:underline">
                My Portfolio
              </a>
            </h1>
            <nav>
              <ul className="flex space-x-6 text-lg">
                <li>
                  <a href="Link /" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:underline">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow bg-gray-50 dark:bg-black p-8">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-black text-white p-4">
          <div className="container mx-auto text-center">
            <p>
              &copy;
              {new Date().getFullYear()}
              {' '}
              My Portfolio
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
