import React from "react";

export default function Services() {
  const services = [
    {
      title: "Website Development Services",
      items: [
        "Custom Front-End Development – I build fast, interactive, and mobile-friendly websites using HTML, CSS, JavaScript, and tools like React and Next.js.",
        "Single Page Applications (SPAs) – I create smooth, app-like websites that load quickly and feel seamless.",
        "Landing Pages & Marketing Websites – I design high-quality pages for businesses, startups, and personal brands to attract customers.",
        "Website Redesigns – I improve old websites to make them look better, work faster, and provide a better user experience.",
      ],
    },
    {
      title: "Web Application Development",
      items: [
        "Dashboard Development – I build admin panels and dashboards to display and manage data easily.",
        "E-commerce Front-End – I design online store websites using Shopify, WooCommerce, or modern e-commerce solutions like Next.js.",
        "Web3/Blockchain Integration – I add blockchain features like crypto wallets, transactions, and NFTs to web apps.",
      ],
    },
    {
      title: "Performance Optimization & SEO",
      items: [
        "Website Speed Optimization – I make websites load faster for a better user experience and improved search rankings.",
        "SEO Best Practices – I set up websites so they rank higher on Google by using proper tags, keywords, and structured data.",
      ],
    },
    {
      title: "UI/UX Implementation",
      items: [
        "Pixel-Perfect UI Development – I turn design files (Figma, Adobe XD, or Sketch) into fully functional websites.",
        "Accessibility & UX Improvements – I make websites easy to use for everyone, including people with disabilities.",
      ],
    },
    {
      title: "API Integration & State Management",
      items: [
        "API & Backend Integration – I connect websites to databases and services using APIs (REST, GraphQL).",
        "State Management – I use tools like Redux and React Context API to manage data efficiently in web apps.",
      ],
    },
    {
      title: "Maintenance & Support",
      items: [
        "Bug Fixing & Troubleshooting – I find and fix problems to keep websites running smoothly.",
        "Code Updates & Improvements – I update and clean up website code to follow the latest best practices.",
      ],
    },
  ];

  return (
    <section className="bg-white mt-16 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <ul className="text-gray-600 space-y-2">
                {service.items.map((item, idx) => {
                  const [title, description] = item.split(" – ");
                  return (
                    <li key={idx}>
                      <span className="font-medium">{title}</span> –{" "}
                      {description}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
