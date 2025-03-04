import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: [
        "Skilled in HTML5, CSS3, JavaScript, and TypeScript to create interactive and responsive websites",
        "Experienced in using React and Next.js to build modern web applications, with Redux for managing data",
        "Knowledgeable in designing mobile-friendly and responsive websites using Tailwind CSS, Bootstrap, and Ant Design",
      ],
    },
    {
      title: "API Integration & Backend Communication",
      skills: [
        "Experienced in working with RESTful APIs to connect websites with backend systems",
        "Skilled in handling real-time data updates using live API integration",
      ],
    },
    {
      title: "UI/UX, Animations & Data Visualization",
      skills: [
        "Proficient in using Material UI, Flowbite, and PrimeReact to create clean and easy-to-use interfaces",
        "Experienced in Framer Motion for adding smooth animations and interactive effects",
        "Skilled in Highcharts to build interactive graphs and charts for displaying data",
        "Focused on making websites accessible (A11y) and easy to use for everyone",
        "Committed to improving website speed and performance for a better user experience",
      ],
    },
    {
      title: "Development Tools & Version Control",
      skills: [
        "Proficient in Git and GitHub for managing code, working with teams, and tracking changes",
        "Skilled in debugging and troubleshooting to quickly find and fix issues in web applications",
      ],
    },
  ];

  return (
    <section className="bg-white mt-16 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-600 text-sm md:text-base">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
