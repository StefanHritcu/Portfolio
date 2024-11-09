import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";

function GetInTouch() {
  const [showSmiley, setShowSmiley] = useState(false);

  useEffect(() => {
    // Mostra la faccina dopo 3 secondi e la rimuove dopo altri 3 secondi
    const showTimeout = setTimeout(() => setShowSmiley(true), 3000);
    const hideTimeout = setTimeout(() => setShowSmiley(false), 6000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center bg-primary-bg text-text-primary py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Titolo con animazione di scroll */}
      <motion.h2
        className="text-4xl verySmall:text-3xl sm:text-5xl font-bold mb-10"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Get In{" "}
        <motion.span
          animate={
            showSmiley
              ? { rotate: [-5, 0], opacity: [1, 0.7, 1] } // Rotazione leggera sinistra e ritorno
              : {}
          }
          transition={
            showSmiley
              ? { duration: 1.5, delay: 1, ease: "easeInOut" } // Inizia dopo 1 secondo per la rotazione
              : {}
          }
        >
          {showSmiley ? "😊" : "Touch"}
        </motion.span>
      </motion.h2>

      {/* Contenitore dei contatti */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Animazione alternata per le icone */}
        {[
          {
            href: "https://www.linkedin.com",
            icon: <FaLinkedin size={40} />,
            color: "text-blue-600",
            delay: 0.2,
          },
          {
            href: "https://www.github.com",
            icon: <FaGithub size={40} />,
            color: "text-gray-400",
            delay: 0.3,
          },
          {
            href: "https://www.youtube.com",
            icon: <FaYoutube size={40} />,
            color: "text-red-500",
            delay: 0.4,
          },
          {
            href: "mailto:example@example.com",
            icon: <FaEnvelope size={40} />,
            color: "text-green-500",
            delay: 0.5,
          },
          {
            href: "tel:+1234567890",
            icon: <FaPhone size={40} />,
            color: "text-yellow-400",
            delay: 0.6,
          },
          {
            href: "/path/to/curriculum-vitae.pdf",
            icon: <HiDocumentDownload size={40} />,
            color: "text-purple-500",
            delay: 0.7,
            download: true,
          },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            download={item.download}
            target={item.download ? undefined : "_blank"}
            rel={item.download ? undefined : "noopener noreferrer"}
            className={`${item.color} hover:scale-110 transition-transform`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50, // Alterna tra sinistra e destra
            }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: item.delay }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Informazioni di contatto */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-lg sm:text-xl mb-4 text-secondary-color-text">
          Email: example@example.com
        </p>
        <p className="text-lg sm:text-xl text-secondary-color-text">
          Phone: +123 456 7890
        </p>
      </motion.div>
    </motion.div>
  );
}

export default GetInTouch;
