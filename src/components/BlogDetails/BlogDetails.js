import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { useState, useEffect } from "react";
import { deleteBlog } from '../../store/actions/blogs';
// import { editBlog } from '../../store/actions/blogs';
import {
  Container,
  H2,
  Paragraph,
  Button,
  StyledLink,
} from '../../globalStyles';
import { Wrapper } from '../Create/Create.elements';
import {
  // BlogDetail,
  Article,
} from './BlogDetails.elements';

// const BlogDetails = ({ match }) => {
//   // useFirestoreConnect([{ collection: 'blogs', doc: blogId }]);
//   // const blog = useSelector(
//     //   (state) => (blogs ? blog.id === blogId : null)
//     //   // (state) => {
//       //   //   blogs ? blogId : null;
//       //   //   return blog;
//       //   // }
//       const blog = useSelector((state) => (blogs ? blogs[id] : null));
//       // return {
//         //   blog: blog,
//         // }
//       };
// state.blogs.find((blog) => blog.id === blogId)

const BlogDetails = () => {
  // const { blog } = props;
  const firestore = useFirestore();
  // const { blogId } = match.params;
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const history = useHistory();
  // const blog = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();
  useEffect(() => {
    loadBlog();
  }, []);
  const loadBlog = async () => {
    try {
      const docRef = firestore.collection("blogs").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setBlog(result.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  const handleDelete = () => {
      dispatch(deleteBlog(id, history.push('/blog')));
  };
 
  if (blog) {
    return (
      <Wrapper>
        <Container>
          {/* <BlogDetail> */}
          {/* {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>} */}
          {/* {blog && ( */}
            <Article>
              <H2>{blog.title}</H2>
              <Paragraph>Written by {blog.author}</Paragraph>
              <Paragraph>{blog.body}</Paragraph>
              <br />
              <Paragraph small bold>
                {blog.date}
              </Paragraph>
              <StyledLink to={`/blogs/edit/${id}`}>
              {/* <StyledLink to={`/blogs/edit/${blogId}`}> */}
                <Button primary>Edit</Button>
              </StyledLink>

              <Button primary onClick={handleDelete}>
                Delete
              </Button>
            </Article>
          {/* ) */}
          {/* } */}
          {/* </BlogDetail> */}
        </Container>
      </Wrapper>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};


// const mapStateToProps = (state, ownProps) => {
//   // console.log(state);
//   const id = ownProps.match.params.id;
//   const blogs = state.firestore.data.blogs;
//   const blog = blogs ? blogs[id] : null
//   return {
//     blog: blog
//   }
// }

export default BlogDetails;
