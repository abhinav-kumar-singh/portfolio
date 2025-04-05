import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import * as styles from './contact.module.css';
import * as commonStyle from '../common.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      //   toast({
      //     title: 'Message sent!',
      //     description: "Thank you for reaching out. I'll get back to you soon.",
      //   });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <motion.div
      className={`${styles.formContainer} ${commonStyle.category}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <motion.div
          className={styles.inputGroup}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="name" className={styles.label}>
            <User size={18} />
            <span>Your Name</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          className={styles.inputGroup}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="email" className={styles.label}>
            <Mail size={18} />
            <span>Email Address</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          className={styles.inputGroup}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <label htmlFor="message" className={styles.label}>
            <MessageSquare size={18} />
            <span>Your Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder="How can I help you?"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </motion.div>

        <motion.button
          type="submit"
          className={styles.submitButton}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className={styles.sending}>
              <motion.div
                className={styles.loadingDot}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              Sending...
            </span>
          ) : (
            <span className={styles.sendText}>
              <Send size={18} />
              Send Message
            </span>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
