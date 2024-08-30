// src/pages/about.js
import React from 'react';
import Layout from './../components/layout';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Scotties', cursive;
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

  h2 {
    font-size: 2rem;
    margin-top: 2rem;
    color: #5a3e36;
  }

  ul {
    list-style: disc;
    margin-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const AboutPage = () => (
    <Layout>
        <AboutSection>
            <h1>About Us</h1>
            <p>Welcome to Chronicle Hub, a premier blogging platform where ideas come to life. Our mission is to provide a space where writers and readers can connect through insightful and engaging content.</p>

            <h2>Our Story</h2>
            <p>Chronicle Hub was founded by a team of passionate bloggers who wanted to create a space where people could share their thoughts, experiences, and expertise. From humble beginnings, we've grown into a thriving community of writers and readers.</p>

            <h2>What We Offer</h2>
            <ul>
                <li><strong>Varied Content:</strong> Explore a wide range of topics from technology and lifestyle to personal growth and beyond.</li>
                <li><strong>Engaging Articles:</strong> Read well-researched and thought-provoking articles that offer new perspectives and valuable insights.</li>
                <li><strong>Community Interaction:</strong> Connect with other readers and writers through comments, discussions, and guest posts.</li>
            </ul>
        </AboutSection>
    </Layout>
);

export default AboutPage;
