import React from "react";

export default function Contact() {
  const contactInfo = {
    name: "Aminu Olorunfemi Augustine",
    phone: "+2347068961393",
    email: "austinaminu@gmail.com",
    address: "Plot 234, Ademola Adetokunbo Crescent, Abuja, Nigeria",
    linkedin: "http://www.linkedin.com/in/austin-aminu-979b26183",
    github: "https://www.github.com/AustinRexi",
    googleMapsCoords: "49JM+RR3 Kubwa",
  };

  const whatsappUrl = `https://wa.me/${contactInfo.phone}`;
  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(
    contactInfo.googleMapsCoords
  )}`;

  return (
    <section className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center bg-gray-300">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* <h2 className="text-3xl font-semibold mb-12 text-center tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Contact Matrix
        </h2> */}

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Name Card */}
            <div className="group bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full mr-4 group-hover:bg-gray-700 transition-colors">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                  Name
                </span>
              </div>
              <p className="text-white font-medium text-xl tracking-tight">
                {contactInfo.name}
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="group bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full mr-4 group-hover:bg-gray-700 transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    Contact
                  </span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:text-gray-300 transition-colors text-lg"
                >
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-white hover:text-gray-300 transition-colors text-lg break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Location & Social Card */}
            <div className="group bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full mr-4 group-hover:bg-gray-700 transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    Location
                  </span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:text-gray-300 transition-colors text-lg"
                >
                  {contactInfo.address}
                </a>
                <div className="flex space-x-6 pt-2">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237.645 1.999 2.378 1.426 2.955.913.723-1.798 2.955-1.426 2.955-1.426.033 1.114.012 2.175.012 2.477 0 .316.194.695.797.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(#333_1px,transparent_1px),linear-gradient(to_right,#333_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
    </section>
  );
}
