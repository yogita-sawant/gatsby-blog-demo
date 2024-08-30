import React from 'react';
import Layout from './../components/layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

const BackgroundSection = styled.div`
  position: relative;
  min-height: 100vh; 
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;
  }

  h1 {
    position: relative;
    z-index: 3;
  }
`;

const BlogSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  z-index: 3;
`;

const BlogCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 400px;
  text-align: center;
  transition: transform 0.3s;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin: 1.5rem 1rem 0.5rem;
    color: #5a3e36;
    font-family: 'Scotties';
    font-size:2rem;
  }

  p {
    margin: 0.5rem 1rem 1.5rem;
    color: #777;
    font-family: 'Scotties';
    font-size: 1rem;
  }

  a {
    color: #a86c5c;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1.5rem;
    transition: color 0.3s;
    margin: 0.5rem 1rem 1.5rem;
    font-family: 'Scotties';
    font-size: 1.7rem;

    &:hover {
      color: #ffcf47;
    }
  }
`;

const IndexPage = ({ data }) => {
  const posts = data.blog.posts;

  return (
    <Layout>
      <BackgroundSection>
        <StaticImage
          src="https://i.pinimg.com/originals/e5/1d/cb/e51dcbb15360f384210009556ff6658c.jpg"
          alt="Background Image"
          layout="fullWidth"
          placeholder="blurred"
          className="bg-image"
        />
        <BlogSection>
          {posts.map(post => {
            const image = getImage(post.frontmatter.image);
            return (
              <BlogCard key={post.id}>
                <GatsbyImage image={image} alt={post.frontmatter.title} />
                <h3>{post.frontmatter.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={post.fields.slug}>Read More</Link>
              </BlogCard>
            );
          })}
        </BlogSection>
      </BackgroundSection>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
        }
        excerpt
        id
      }
    }
  }
`;

export default IndexPage;
