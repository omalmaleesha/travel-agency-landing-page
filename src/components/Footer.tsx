import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function SubscribeForm() {
  return (
    <div className="mb-12">
      <h3 className="text-sm font-medium mb-6 text-white">STAY INFORMED</h3>
      <form className="flex max-w-md">
        <input
          type="email"
          placeholder="Your email"
          className="bg-transparent border-b border-white/20 py-2 flex-1 text-sm text-white focus:outline-none focus:border-[#d5b062] transition-colors"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-4 px-4 py-2 bg-[#d5b062] text-white text-sm rounded-md shadow-md hover:shadow-lg transition-shadow"
        >
          Subscribe
        </motion.button>
      </form>
    </div>
  );
}

function SocialLinks() {
  const socials = [
    { icon: Facebook, link: 'https://facebook.com' },
    { icon: Twitter, link: 'https://twitter.com' },
    { icon: Instagram, link: 'https://instagram.com' },
    { icon: Linkedin, link: 'https://linkedin.com' },
  ];

  return (
    <div className="flex justify-center space-x-4 mb-12">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <social.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0a0f10] to-[#1a1f20] py-12 md:py-16">
      <div className="container px-6 md:px-12">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SubscribeForm />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-sm font-medium mb-4 text-white">Information</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                    Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4 text-white">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone size={14} className="text-[#d5b062] mr-2" />
                  <span className="text-xs text-white">+1 234-567-890</span>
                </div>
                <div className="flex items-center">
                  <Mail size={14} className="text-[#d5b062] mr-2" />
                  <span className="text-xs text-white">camper@email.com</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SocialLinks />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="text-xl font-bold tracking-wider text-white mb-4 md:mb-0">
              CAMPER
            </div>
            <div className="text-xs text-white/50">
              © 2023 CAMPER Agency • Made with love everywhere
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}