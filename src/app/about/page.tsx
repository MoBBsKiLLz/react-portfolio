import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
        <main>
        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-md">
                Hi, I’m Miguel Zepeda. Originally from Texas, I’ve called Arizona home since 2008. Over the years, I’ve developed a strong passion for software and building thoughtful, user-focused solutions.
            </p>
            <p className="text-md mt-4">
                I currently work as a Business Analyst at a software company in the self-storage industry, where I manage team backlogs, write user stories, and lead meetings to keep projects moving smoothly. I hold a Bachelor of Science in Software Development from Grand Canyon University, and my background bridges both business and technical perspectives — helping me communicate effectively across teams and contribute to well-rounded product decisions.
            </p>
            <p className="text-md mt-4">
                I’m always learning and evolving, with a growing focus on development. I believe that my combined experience in business analysis and software development allows me to bring a unique and valuable perspective to every project.
            </p>
        </section>

        <section>
            <h2 className="text-3xl font-semibold mb-4">Skills</h2>
            <ul className="space-y-4">
            <li>
                <strong>Programming Languages & Frameworks:</strong> JavaScript, TypeScript, C#, HTML, CSS, Razor, Java, SQL, .NET, ASP .NET, React, Angular, Express JS
            </li>
            <li>
                <strong>Web Development:</strong> React, Angular, Express JS, Tailwind CSS, HTML5, CSS3
            </li>
            <li>
                <strong>Testing & Automation:</strong> Selenium, Postman, SoapUI, Jest, Mocha, Playwright
            </li>
            <li>
                <strong>Tools & Technologies:</strong> GitHub, Azure DevOps, Amazon AWS, Postman, JSON, MS SQL Server, Git, Docker
            </li>
            <li>
                <strong>Project Management & Agile:</strong> Jira, Scrum, Agile Methodology, User Stories, Sprint Planning, Product Backlog Management
            </li>
            </ul>
        </section>
        </main>
      <footer className="flex flex-col items-center justify-center gap-4 mt-8 p-6">
        <p className="text-lg">
            Interested in working with me or want to get in touch? Visit my <a href="/contact" className="underline hover:text-indigo-400">Contact page</a>!
        </p>
        <div className="flex gap-6 mt-4">
            <a href="https://www.linkedin.com/in/miguelzepeda1989/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image aria-hidden className="dark:invert" src="images/linkedin.svg" alt="LinkedIn icon" width={16} height={16} />
            LinkedIn
            </a>
            <a href="https://github.com/MoBBsKiLLz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image aria-hidden className="dark:invert" src="images/github.svg" alt="GitHub icon" width={16} height={16} />
            GitHub
            </a>
            <a href="mailto:m.zepeda.dev@gmail.com" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image aria-hidden className="dark:invert" src="images/gmail.svg" alt="Email icon" width={16} height={16} />
            Email
            </a>
        </div>
    </footer>
    </div>
  );
};

export default About;
