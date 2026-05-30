import './Contact.css'
import { useState } from 'react';
import axios from "axios";

import { motion } from 'framer-motion'

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill all fields");
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post(
    "/api/contact",
    formData
    );

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    console.log(res.data);

  } catch (error) {
    console.log(error);
    alert("Something went wrong");

  } finally {
    setLoading(false);
  }
};
  return (

    <section className='contact' id='contact'>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <div className='contact-container'>

        {/* LEFT SIDE */}

        <motion.div
          className='contact-left'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >

          <h3>
            Let’s Connect 🚀
          </h3>

          <p className='contact-text'>
            Passionate MERN Stack Developer actively
            seeking Frontend, Full Stack and Software
            Development opportunities to build impactful
            applications.
          </p>

          <div className='contact-info'>

            <div>
              <FaEnvelope />
              v.koteswararao217@gmail.com
            </div>

            <div>
              <FaPhoneAlt />
              +91 88867 47929
            </div>

            <div>
              <FaMapMarkerAlt />
              Andhra Pradesh, India
            </div>

          </div>

          <div className='opportunity-badge'>
            Fresher • Open To Opportunities
          </div>

          <div className='social-links'>

            <a
              href='https://github.com/VaduguKoteswararao'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>

            <a
              href='https://www.linkedin.com/in/koteswararao-vadugu030899'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.form
          className='contact-form'
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>

      </div>

    </section>

  )
}

export default Contact