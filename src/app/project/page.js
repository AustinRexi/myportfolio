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
    {
      title: "Webcam Facial Recognition App",
      duration: "May 2025",
      description:
        "A web application that captures images from the user’s webcam and performs facial recognition to detect faces, age, gender, and emotions in real-time.",
      features: [
        "Developed a responsive UI using React, TypeScript, and Bootstrap, ensuring compatibility across desktop and mobile devices",
        "Integrated webcam access with react-webcam and performed facial recognition using face-api.js, detecting multiple faces with 68-point landmarks",
        "Implemented real-time emotion, age, and gender detection, displaying results with dynamic overlays on the captured image",
        "Utilized Redux for state management to handle captured images and detection results efficiently",
      ],
      links: {
        demo: "https://webcam-ochre.vercel.app/",
        github: "https://github.com/AustinRexi/webcam",
      },
    },
    {
      title: "Mazi",
      duration: "July 2025",
      description:
        " A web application built with Next.js and TypeScript, likely focused on providing a subscription-based service for accessing digital newspapers or media content",
      features: [
        "Developed a responsive UI using Next.js, TypeScript, and tailwind, ensuring compatibility across desktop and mobile devices",
        "The map feature suggests a focus on geographic relevance, perhaps helping users find newspapers or delivery options based on their location.",
        "The registration and subscription flows indicate a user-friendly onboarding process, with social login options and verification features catering to a broad audience, including those who prefer quick sign-ups or detailed form inputs.",
        "Designed for users in Canada (given the postal code and newspaper references like Calgary Sun and Calgary Herald), possibly targeting readers interested in local news or digital subscriptions.",
      ],
      links: {
        demo: "https://localink-pi.vercel.app/",
        github: "https://github.com/AustinRexi/localink",
      },
    },
    {
      title: "Mazi",
      duration: " Dec 2024 - July 2025",
      description:
        " Mazi is an e-commerce admin dashboard web application designed to manage various aspects of an online marketplace, focusing on customers, couriers (riders), products, orders, and financial transactions.Built with React using React Router for navigation (NavLink for routing) Utilizes Ant Design components  for UI elements Uses Day.js for date handling and calendar functionality.",
      features: [
        "Manage product listings (food and groceries).",
        "Oversee customer data (users and stores)",
        "Track and manage orders, including special orders",
        "Coordinate courier operations for delivery.",
        "Handle currency exchange transactions for international or multi-currency operations.",
      ],
      links: {
        demo: "https://mazi-seven.vercel.app/",
        github: "https://github.com/AustinRexi/Mazi",
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
