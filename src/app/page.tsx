import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="text-center sm:text-left">
        <Image
          className="rounded-full mx-auto sm:mx-0"
          src="/images/profile.png"
          alt="Your Profile"
          width={150}
          height={150}
          priority
        />
        <h1 className="text-3xl font-bold mt-4">Hello, I'm Miguel</h1>
        <p className="text-lg text-gray-390 mt-2">I’m a passionate React developer focused on building clean, scalable web applications.</p>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Your Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-4">
              <Image src="/images/kaizenbox.png" alt="Project 1" width={400} height={250} />
              <h3 className="text-xl font-medium mt-2">Kaizen Box App</h3>
              <p className="text-gray-600">KaizenBox is an inventory management app that simplifies tracking and organizing units in real time. Built with React, it offers search, unit updates, and deletion.</p>
              <a href="https://github.com/MoBBsKiLLz/KaizenBoxApp" className="text-blue-500 hover:underline">View Project</a>
            </div>
            {/* Add more projects here */}
          </div>
        </section>

        {/* Call to Action */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="mailto:your-email@example.com" // Replace with your contact email
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:text-gray-100 hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/MoBBsKiLLz" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/miguelzepeda1989/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="images/linkedin.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/MoBBsKiLLz" // Replace with your GitHub link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src="images/github.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        {/* Add more footer links as needed */}
      </footer>
    </div>
  );
}
