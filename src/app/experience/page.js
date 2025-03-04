import React from "react";

export default function Experience() {
  return (
    <section className="bg-white mt-16 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>

        {/* Experience Item 1 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900">
            Front-End Developer (Intern) | FlexiSAF Edusoft Limited
          </h3>
          <p className="text-gray-600 italic">January 2024 – April 2024</p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
              <span>
                Built and maintained responsive websites ensuring seamless
                functionality across various devices and browsers
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
              <span>
                Collaborated with back-end developers to integrate RESTful APIs,
                improving data exchange efficiency by 25%
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
              <span>
                Enhanced UI/UX design, resulting in a 15% increase in user
                engagement metrics
              </span>
            </li>
          </ul>
        </div>

        {/* Experience Item 2 */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-900">
            Front-End Developer | Personal Projects (Ongoing)
          </h3>

          <div className="mt-4">
            <h4 className="text-lg font-medium text-gray-800">
              Ovary-X Cryptocurrency App
            </h4>
            <p className="text-gray-600 italic">January 2024 – April 2024</p>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>
                  Designed and developed a responsive cryptocurrency tracking
                  application using React and Ant Design
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>
                  Integrated real-time API data for up-to-date cryptocurrency
                  pricing
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>
                  Implemented a dynamic news section featuring current
                  cryptocurrency trends
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-800">
              Lendsqr – Customer Management Platform
            </h4>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>
                  Developed a customer and loan management web application using
                  TypeScript, React, and Ant Design
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>
                  Implemented mock API integration with 500 user records for
                  realistic simulations
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span>
                  Ensured cross-device compatibility with a focus on intuitive
                  user interface design
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
