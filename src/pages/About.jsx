import React from "react";
import Navbar from "../components/Navbar";
import AboutUsTemplate from "../components/AboutUsTemplate";
import Footer from "../components/Footer";
import img1 from "../images/muza.jpg"
import img2 from "../images/hari.jpg"

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            rticle is a ambitious blog website that was launched in 2021 by two friends with the goal of examining how blogs will impact living in the future for a broad audience.
            We believe that we now live in a brilliant world of devices, which has ushered in digital revolutions.
          </p>
        </div>

        <AboutUsTemplate
          titlename="Hariharan | Founder"
          name="Hariharan"
          // post="Developer"
          story="currently working at Ajira Tech as a Software dev who loves problem solving and backend development specialize in efficient node and django apps."
          image={img2}
          facebook="https://www.facebook.com/hari.eagle.9"
          twitter=""
          linkedin="https://www.linkedin.com/in/hariharan-g-195453152/"
          github="https://github.com/haridebl3"
        />
        <AboutUsTemplate
          titlename="Muzaffar Pasha | Founder"
          name="Pasha"
          // post="Developer"
          story="and a technology enthusiast that enjoys learning coding and robotics, as well as writing articles on the subject. I'm a front-end developer who's currently studying nodejs as back-end."
          image={img1}
          facebook="https://www.facebook.com/muzaffar.pasha.752"
          twitter="https://www.instagram.com/muza_4.1.2k/?hl=en"
          linkedin="https://www.linkedin.com/in/muzaffar-pasha-3209b3137/"
          github="https://github.com/muzaffarmhm"
        />
      </section>
      <Footer/>
    </div>
  );
}
