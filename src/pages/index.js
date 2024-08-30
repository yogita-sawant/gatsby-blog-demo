// // src/pages/index.js
// import React from 'react';
// import Layout from './../components/layout';
// import { graphql } from 'gatsby';
// import styled from 'styled-components';
// import { Link } from 'gatsby';

// const BlogSection = styled.section`
//   margin-top: 3rem;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 2rem;
// `;

// const BlogCard = styled.div`
//   background: white;
//   border-radius: 10px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   width: 400px;
//   text-align: center;
//   transition: transform 0.3s;
//   text-align: left;


//   &:hover {
//     transform: translateY(-5px);
//   }

//   img {
//     width: 100%;
//     height: 200px;
//     object-fit: cover;
//   }

//   h3 {
//     margin: 1.5rem 1rem 0.5rem;
//     color: #5a3e36;
//     font-family: cursive;
//   }

//   p {
//     margin: 0.5rem 1rem 1.5rem;
//     color: #777;
//     font-family: cursive;
//   }

//   a {
//     color: #a86c5c;
//     text-decoration: none;
//     font-weight: 600;
//     display: inline-block;
//     margin-bottom: 1.5rem;
//     transition: color 0.3s;
//     margin: 0.5rem 1rem 1.5rem;
//     font-family: cursive;

//     &:hover {
//       color: #ffcf47;
//     }
//   }
// `;

// const IndexPage = ({ data }) => {
//   const posts = data.blog.posts;

//   return (
//     <Layout>
//       <BlogSection>
//         {posts.map(post => (
//           <BlogCard key={post.id}>
//             <img src={post.frontmatter.image} alt={post.frontmatter.title} />
//             <h3>{post.frontmatter.title}</h3>
//             <p>{post.excerpt}</p>
//             <Link to={post.fields.slug}>Read More</Link>
//           </BlogCard>
//         ))}
//       </BlogSection>
//     </Layout>
//   );
// };


// export const query = graphql`
//   query IndexPageQuery {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//     blog: allMarkdownRemark {
//       posts: nodes {
//         fields {
//           slug
//         }
//         frontmatter {
//           title
//           image {
//             childImageSharp {
//               gatsbyImageData(width: 400, layout: CONSTRAINED)
//             }
//           }
//         }
//         excerpt
//         id
//       }
//     }
//   }
// `;




// export default IndexPage;


// src/pages/index.js
import React from 'react';
import Layout from './../components/layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogSection = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
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
    font-family: cursive;
  }

  p {
    margin: 0.5rem 1rem 1.5rem;
    color: #777;
    font-family: cursive;
  }

  a {
    color: #a86c5c;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 1.5rem;
    transition: color 0.3s;
    margin: 0.5rem 1rem 1.5rem;
    font-family: cursive;

    &:hover {
      color: #ffcf47;
    }
  }
`;

const IndexPage = ({ data }) => {
  const posts = data.blog.posts;

  return (
    <Layout>
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

