"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import UserButton from "./components/shared/UserButton";
import image from "../assets/images/image.jpeg";
export default function Home() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-700 to-red-800">
      <Head>
        <title>Austin Aminu - Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio of Austin Aminu, Web Developer"
        />
      </Head>

      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[650px] md:min-h-[600px] bg-gradient-to-r from-red-500 to-red-700 text-white py-10 px-5 md:px-20">
        <div className="md:w-1/2 space-y-4 md:space-y-6 z-10">
          <motion.p
            className="text-lg md:text-xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            I'm
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Austin Aminu
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Web Developer
          </motion.p>
          <div className="flex space-x-4 mt-4">
            <Link href="/contact">
              <UserButton text="Hire Me" />
            </Link>
            <Link href="/contact">
              <UserButton text="Contact Me" />
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0  ">
          <div className="w-64 h-64 md:w-80 md:h-80  flex items-center justify-center  ">
            <Image
              src={image}
              alt="Austin Aminu"
              width={400}
              height={320}
              className=" rounded-xl opacity-90 border-none p-0 m-0"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-red-800/50  z-0"></div>
      </section>
    </div>
  );
}
