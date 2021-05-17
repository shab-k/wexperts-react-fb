// import { Link } from 'react-router-dom';
import { Container, H1, H2, Paragraph } from '../../globalStyles';
import { Wrapper } from '../Create/Create.elements';
import { BlogPreview, BlogLinks } from './BlogList.elements';
const BlogList = ({ blogs }) => {
  return (
    <Wrapper>
      <Container>
        <H1 center white>
          Posts
        </H1>
        {
          blogs &&
            blogs.map((blog) => (
              <BlogPreview key={blog.id}>
                <BlogLinks to={`/blogs/${blog.id}`}>
                  <H2>{blog.title}</H2>
                  <Paragraph small>Written by {blog.author}</Paragraph>
                  <Paragraph small>{blog.date}</Paragraph>
                </BlogLinks>
              </BlogPreview>
            ))
        }
      </Container>
    </Wrapper>
  );
};

export default BlogList;
