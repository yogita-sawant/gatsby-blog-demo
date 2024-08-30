// src/templates/blog-post.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Post = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.7rem;
  font-family: 'Scotties';
`;

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const image = getImage(post.frontmatter.image);

  return (
    <Layout>
      <Post>
        {image && <GatsbyImage image={image} alt={post.frontmatter.title} />}
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
      html
    }
  }
`;

export default BlogPost;
