import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
        <main>
        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-lg">
            My name is Miguel Zepeda. I am originally from El Paso, Texas and moved to Phoenix, Arizona back in 2008. Since moving here, I found my passion in software. Currently, I work for a software company in the self-storage industry. I decided to complete my bachelor’s degree to help me better advance in my career. With that being said, I am enrolled in the Bachelor of Science in Software Development program here at GCU.
            </p>
            <p className="text-lg mt-4">
            I am currently a Business Analyst at my company, though my responsibilities align more with those of a Product Owner based on industry standards. I manage our team's backlogs, write user stories, and lead team meetings. In the future, I aim to transition into a development role. This course will help me ensure that our team incorporates the development life cycle to an actual product we will deliver. It will also help my understanding of doing research into a new product and how we can solve challenges along the way.
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
