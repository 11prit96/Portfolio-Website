import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from 'next/image';
import GuyAnimated from "../public/guy_animated.png";
import design1 from "../public/design1.png";
import design2 from "../public/design2.png";
import design3 from "../public/design3.png";
import aboutImg from "../public/About.jpg";
import { useState } from 'react';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Prit Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        {/* PAGE1 */}

        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-400">Prit.JS</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-gray-400" />
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Prithwish Singha</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-teal-100">Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">Freelancer providing services for programming websites. Join me down below and let us work.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="https://twitter.com/be_like_prit"><AiFillTwitterCircle className="cursor-pointer hover:bg-cyan-600 rounded-full" /></a>
            <a href='https://www.linkedin.com/in/prithwish-singha-074b69255/'><AiFillLinkedin className="cursor-pointer hover:bg-blue-600 rounded-full" /></a>
            <a href='https://github.com/11prit96'><AiFillGithub className="cursor-pointer hover:bg-red-500 rounded-full" /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 xs:w-70 xs:h-70">
            <Image src={GuyAnimated} layout="fill" objectFit="cover" alt='developer-guy'/>
          </div>
        </section>

        {/* PAGE2 */}

        <section>
          <div className="mt-10">
            <h3 className="text-3xl py-1 dark:text-teal-100">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">Since the beginning of my journey as a freelance designer and developer, I have collaborated with people on making dynamic responsive websites for both business and consumer use.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">I offer a wide range of services, including brand design, programming and teaching.</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300">
            <div className="md:flex lg:flex justify-evenly flex-wrap">
              <Image src={design1} width={350} height={350} className="p-2 rounded-xl" alt='websiteimg1'/>
              <Image src={design2} width={350} height={350} className="p-2 rounded-xl" alt='websiteimg2'/>
              <Image src={design3} width={350} height={350} className="p-2 rounded-xl" alt='websiteimg3'/>
            </div>
            <div className="md:flex justify-between mx-5">
              <div>
                <h3 className="pt-10 text-teal-600">Key points of the above website</h3>
                <ul className="text-md md:text-start py-5 leading-8 text-gray-800">
                  <li className="text-gray-800">Routing to different pages.</li>
                  <li className="text-gray-800">Animations and effects.</li>
                  <li className="text-gray-800">Navbars and Sidebars.</li>
                </ul>
              </div>
              <div>
                <h3 className="pt-10 md:text-end text-teal-600">Developer tools I use</h3>
                <ul className="text-md md:text-end py-5 leading-8 text-gray-800">
                  <li className="text-gray-800">VS Code</li>
                  <li className="text-gray-800">Figma</li>
                  <li className="text-gray-800">Git</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE3 */}

        <section>
          <h3 className="text-3xl py-2 dark:text-teal-100">About Me</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            I am a very ambitious front-end developer looking for a role in an established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            I am quietly confident , naturally curious, and perpetually working on improving my skills one problem at a time.
          </p>
          <Image src={aboutImg} width={400} height={400} className="rounded-lg" alt='aboutMe'/>

          <h3 className="text-3xl py-3 mt-10 dark:text-teal-100">Contact Me</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
            I am interested in freelance opportunities-especially ambitious on large projects. However, if you have any other request or question, do not hesitate to contact me using the below form either.
          </p>
          <form className="shadow-lg p-10 rounded-xl mt-10 dark:bg-gray-300">
            <ul>
              <div className="md:flex items-center justify-start">
                <li className="mb-4">
                  <input type="text" name="text" placeholder="Name" required className="shadow appearance-none border rounded md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </li>
                <li className="mx-auto mb-4">
                  <input type="email" name="email" placeholder="Email" required className="shadow appearance-none border rounded md:w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </li>
              </div>
              <li className="mb-4">
                <input type="text" name="subject" placeholder="Subject" required className="shadow appearance-none border rounded md:w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </li>
              <li className="mb-6">
                <textarea placeholder="Message" name="message" required className="shadow appearance-none border rounded md:w-3/5 lg:w-2/5 py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </li>
              <li className="my-4">
                <input type="submit" value="SEND" className="bg-teal-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full cursor-pointer" />
              </li>
            </ul>
          </form>
        </section>
      </main>
    </div>
    )
}
