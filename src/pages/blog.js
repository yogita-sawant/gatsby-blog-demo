import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

const BlogCard = styled.article`
  margin-bottom: 2rem;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
`;

const BlogContent = styled.div`
  padding: 1rem;
`;

const BlogTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const BlogDate = styled.small`
  display: block;
  margin-bottom: 0.5rem;
  color: #777;
`;

export default function Blog({ data }) {
  const { posts } = data.blog;

  return (
    <div>
      <h1>My Blog Posts</h1>
      {posts.map((post) => (
        <BlogCard key={post.id}>
          <Link to={post.fields.slug}>=-=-=-=-=-
            <BlogImage src={post.frontmatter.image} alt={post.frontmatter.title} />
            <BlogContent>
              <BlogTitle>{post.frontmatter.title}</BlogTitle>
              <BlogDate>{post.frontmatter.date}</BlogDate>
              <p>{post.excerpt}</p>
            </BlogContent>
          </Link>
        </BlogCard>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          image
        }
        excerpt
        id
      }
    }
  }
`;
