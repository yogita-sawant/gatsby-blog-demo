// src/templates/blog-post.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

const Post = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: cursive;
`;

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  console.log("-=-=-=", post)

  return (
    <Layout>
      <Post>
        {/* <img src={post.frontmatter.image} alt={post.frontmatter.title} /> */}
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
      }
      html
    }
  }
`;

export default BlogPost;
