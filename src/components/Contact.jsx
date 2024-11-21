import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { x, li, res, gmail } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(formRef.current);
    formData.append("access_key", "9ef31f5f-5f87-46fc-9ada-094d84e6e2ad");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setForm({
          name: "",
          email: "",
          message: "",
        });
        formRef.current.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-transparent p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>&lt;Contacts /&gt;</h3>

        <div className="flex gap-20 mt-4">
          <a
            href="https://www.linkedin.com/in/om-shree-04372118a/"
            target="_blank"
            rel="noopener noreferrer"
            title=" My LinkedIn "
          >
            <img
              src={li}
              alt="LinkedIn"
              className="w-12 h-12 rounded-full md:w-10 md:h-10 sm:w-8 sm:h-8"
            />
          </a>
          <a
            href="https://x.com/OmShree0709"
            target="_blank"
            rel="noopener noreferrer"
            title=" My Twitter "
          >
            <img
              src={x}
              alt="Twitter"
              className="w-12 h-12 rounded-full md:w-10 md:h-10 sm:w-8 sm:h-8"
            />
          </a>
          <a
            href="https://drive.google.com/drive/folders/1kGPLlKSsYyNPrMo63NKDuUIeHOM93UQA?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            title=" My Resume "
          >
            <img
              src={res}
              alt="Resume"
              className="w-12 h-12 rounded-full md:w-10 md:h-10 sm:w-8 sm:h-8"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=omshree0709@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title=" My Gmail "
          >
            <img
              src={gmail}
              alt="Gmail"
              className="w-12 h-12 rounded-full md:w-10 md:h-10 sm:w-8 sm:h-8"
            />
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary self-center py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {result === "Sending..." ? "Sending..." : "Send"}
          </button>
        </form>

        <span className="text-white mt-4">{result}</span>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
