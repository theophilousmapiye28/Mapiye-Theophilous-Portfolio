"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../components/TabButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>html</li>
        <li>css</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>Node.js</li>
       
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Kuwadzana 1 High school</li>
        <li>Uncommon.org</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
          <li>Software Developement</li>
        <li>SEO</li>
      
      </ul>
    ),
  },
];

const page = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
   <div>
   < Navbar/>
   <div className="container mt-24 mx-auto px-12 py-4">
    <section className="text-white" id="about">
      
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500}  alt="img-fluid"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I m frontend development service showcases an exquisite blend of creativity and functionality. With an adept mastery of HTML, CSS, Next js, React js,Taiwindcss and JavaScript, I craft captivating user experiences that seamlessly fuse aesthetics with user-centric design. My attention to detail and commitment to innovation elevate digital landscapes, making every project a masterpiece.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
     
    </section>
    </div>
<Footer/>
    </div>
  );
};

export default page;
