import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Ovary-X Cryptocurrency App",
      duration: "Jan 2024 – Apr 2024",
      description:
        "A cryptocurrency tracking platform designed to provide real-time market insights and news updates.",
      features: [
        "Built a responsive and user-friendly interface using React and Ant Design, ensuring seamless performance on desktop and mobile",
        "Integrated live API data visualization using Millify, allowing real-time cryptocurrency price tracking",
        "Developed a dynamic news section that fetches the latest cryptocurrency updates for users",
      ],
      links: {
        demo: "https://krypto-mu.vercel.app",
        github: "https://github.com/AustinRexi/krypto",
      },
    },
    {
      title: "Lendsqr – Customer Management Platform",
      duration: "December 2024",
      description:
        "A web application designed to help businesses manage customer profiles and loan portfolios.",
      features: [
        "Developed a fully responsive and intuitive interface using TypeScript, React, and Ant Design",
        "Integrated a mock API with 500 user records to simulate real-world interactions",
        "Focused on improving user experience with an easy-to-navigate dashboard for managing customer data and loan records",
      ],
      links: {
        demo: "https://lendsqr-fe-test-two-tau.vercel.app/customers/users",
        credentials: {
          email: "Adedeji@lendsqr.com",
          password: "283982",
        },
        github: "https://github.com/AustinRexi/lendsqr-fe-test",
      },
    },
  ];

  return (
    <section className="bg-white mt-16 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                  {project.duration}
                </span>
              </div>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <ul className="space-y-2 mb-4">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600 text-sm md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col space-y-2">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <span className="mr-2">🔗 Live Demo</span>
                </a>

                {project.links.credentials && (
                  <div className="text-sm text-gray-600">
                    <p>Access: {project.links.credentials.email}</p>
                    <p>Password: {project.links.credentials.password}</p>
                  </div>
                )}

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  <span className="mr-2">🔗 GitHub Repo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
