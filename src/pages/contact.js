// src/pages/contact.js
import React from 'react';
import Layout from './../components/layout';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Scotties';
  color: #333;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #5a3e36;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-size: 1rem;
    color: #5a3e36;
  }

  input, textarea {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    background-color: #5a3e36;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: 'Scotties';

    &:hover {
      background-color: #4a2f22;
    }
  }

  a {
    color: #5a3e36;
    text-decoration: underline;
  }
`;

const ContactPage = () => (
    <Layout>
        <ContactSection>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the contact form below or through our email.</p>

            <form action="mailto:contact@chroniclehub.com" method="post" enctype="text/plain">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="6" required></textarea>

                <button type="submit">Send Message</button>
            </form>

            <p>Alternatively, you can reach us directly at <a href="mailto:contact@chroniclehub.com">contact@chroniclehub.com</a>.</p>
        </ContactSection>
    </Layout>
);

export default ContactPage;
