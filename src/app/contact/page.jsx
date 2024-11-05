"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [notification, setNotification] = useState(null); // Notification state
  const [emailSubmitted, setEmailSubmitted] = useState(false); // Email submitted state

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true); // Show the loading state
    setNotification(null); // Reset any previous notification

    const formData = new FormData(event.target);
    formData.append("access_key", "3f47598c-216a-4923-8798-a90090b1c61c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setNotification('Success! Your message has been sent.');
        setEmailSubmitted(true); // Set emailSubmitted to true on success
        event.target.reset(); // Clear form fields on success
      } else {
        setNotification('Error! Please try again.');
        setEmailSubmitted(false); // Ensure emailSubmitted is false on failure
      }
    } catch (error) {
      console.error("Error in sending message:", error);
      setNotification('Error! Please try again.');
      setEmailSubmitted(false); // Ensure emailSubmitted is false on catch
    } finally {
      setLoading(false); // Hide the loading state
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <section
          id="contact"
          className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
          <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
              I m currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
              <Link href="https://github.com/theophilousmapiye28">
                <Image src={GithubIcon} alt="Github Icon" />
              </Link>
              <Link href="https://www.linkedin.com/in/theophilous-mapiye-b977452ab/">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
            </div>
          </div>
          <div>
            {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="jacob@google.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Just saying hi"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading ? "bg-primary-700 cursor-not-allowed" : "bg-primary-500 hover:bg-primary-600"
                  } text-white font-medium py-2.5 px-5 rounded-lg w-full`}
                >
                  {loading ? "Please wait..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

