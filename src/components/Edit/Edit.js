import { useState, useEffect } from 'react';
import { useHistory, useParams, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import {
  CreateContainer,
  Form,
  Input,
  Textarea,
  Select,
  Label,
  Option,
  Wrapper,
} from './Edit.elements';
import { Container, Button, H2 } from '../../globalStyles';
// import axios from 'axios';
import { editBlog } from '../../store/actions/blogs';
import { createBlog } from '../../store/actions/blogs';
import blogReducer from '../../store/reducers/blogReducer';


const Edit = () => {
  const firestore = useFirestore();
  const history = useHistory();
  // const { blogId } = match.params;
  const { id } = useParams();
  const docRef = id ? firestore.collection('blogs').doc(id) : null;
  // useFirestoreConnect([{ collection: 'blogs' }]);
  // const blogs = useSelector((state) => state.firestore.data.blogs);
  // const blog = blogs ? blogs[blogId] : null;
  const [blog, setBlog] = useState({
    title: '',
    body: '',
    author: ''
  });
  // const blog = useSelector((state) => state.blogs.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      loadBlog();
    }
  }, [id]);
  
  // const blog = useSelector((state) => {dispatch(editBlog({ ...blog })};
  // const { title, body, author } = blog;

  const loadBlog = async () => {
    try {
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

  const onInputChange = (e) => {
    // setBlog({ [e.target.name]: e.target.value });
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };
  
  const submitForm = async (e) => {
    e.preventDefault();
    if (id) {

      dispatch(editBlog(blog, id, history.push('/blog')));
      // dispatch(editBlog(id));
    } else {
      // add new student
      dispatch(createBlog({ ...blog }, history.push('/blog')));
    }
    // dispatch(editBlog({ ...blog }, history.push('/blog')));
         // return { ...state, blogs: [...state.blogs, action.blog] };
      // return { ...state, blogs: state.blogs.map((blog) => (blog.id === action.payload.id ? action.payload : blog)) };
  };
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   // await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, blog);
  //   editBlog({ ...blog }, setBlogPost);
  //     history.push('/blog')));
  // };
  return (
    <Wrapper>
      <Container>
      {/* {blog && ( */}
        <CreateContainer>
          <H2>Edit Post</H2>
          <Form onSubmit={submitForm}>
            <Label>Title:</Label>
            <Input
              type="text"
              required
              value={blog.title}
              name="title"
              onChange={(e) => onInputChange(e)}
            />
            <Label>Body:</Label>
            <Textarea
              required
              value={blog.body}
              name="body"
              onChange={(e) => onInputChange(e)}
            ></Textarea>
            <Label>Author:</Label>
               <Input
              type="text"
              required
              value={blog.author}
              name="author"
              onChange={(e) => onInputChange(e)}
            />
            <Button primary type="submit">
                  {/* {id ? "Update Student" : "Add Student"} */}
                  Edit
            </Button>
          </Form>
        </CreateContainer>
      </Container>
    </Wrapper>
  );
};

export default Edit;
