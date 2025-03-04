export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen mt-16">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 mt-14">
        <a
          href="/AMINU OLORUFEMI AUGUSTINE  (1).pdf"
          download
          className="inline-block bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:bg-red-800 transition-colors text-sm sm:text-base font-semibold"
        >
          Download Resume
        </a>
      </div>
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Hey, I’m Austin Aminu
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              A front-end engineer passionate about crafting digital experiences
              that don’t just work, but{" "}
              <span className="italic font-semibold">wow</span>.
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              I specialize in React, Next.js, and Redux, building sleek,
              high-performance web applications. But my passion goes beyond
              front-end development. I’m deeply invested in crypto, blockchain,
              and the decentralized web.
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-8">
              What Drives Me
            </h2>
            <ul className="space-y-3 text-base sm:text-lg text-gray-600">
              <li>
                <span className="font-semibold text-red-700">
                  Front-End Mastery
                </span>{" "}
                – Creating stunning, high-performance interfaces that feel as
                good as they look.
              </li>
              <li>
                <span className="font-semibold text-red-700">
                  Blockchain Obsession
                </span>{" "}
                – Exploring Web3, smart contracts, and dApps to push the
                boundaries of what’s possible.
              </li>
              <li>
                <span className="font-semibold text-red-700">
                  User-First Design
                </span>{" "}
                – Crafting seamless experiences that make technology invisible
                to the user.
              </li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-8">
              My Story
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              I fell in love with React, leveled up with Next.js, and got hooked
              on the blockchain revolution. Now, I’m combining front-end
              expertise with Web3 innovation—because why just build websites
              when you can build the future?
            </p>
          </div>

          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg"
              alt="Austin Aminu"
              className="w-full h-100  hidden md:block mx-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
