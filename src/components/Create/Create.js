import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CreateContainer,
  Form,
  Input,
  Textarea,
  Select,
  Label,
  Option,
  Wrapper,
} from './Create.elements';
import { Container, Button, H1, Paragraph } from '../../globalStyles';
import { createBlog } from '../../store/actions/blogs';
import { useDispatch, useSelector } from 'react-redux';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState(new Date().toString().substring(0, 24));
  const history = useHistory();

  const blog = useSelector((state) => state.blogs.blogs);
  // const blog = useSelector((state) =>
  //   currentId
  //     ? state.blogs.blogs.find((message) => message._id === currentId)
  //     : null
  // );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, date };

    // fetch('https://jsonplaceholder.typicode.com/posts/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(blog),
    // }).then(() => {
    //   // history.go(-1);
    //   history.push('/blog');
    // });

    // if (currentId === 0) {
    dispatch(createBlog({ ...blog }, history.push('/blog')));
    // clear();
    // } else {
    //   dispatch(
    //     updatePost(currentId, { ...postData, name: user?.result?.name })
    //   );
    //   clear();
    // }
  };

  return (
    <Wrapper>
      <Container>
        <CreateContainer>
          <H1 lightText>Add a Blog Post</H1>
          <Form onSubmit={handleSubmit}>
            {/* <Label>Date:</Label> */}
            <Label>Title:</Label>
            <Input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Label>Body:</Label>
            <Textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></Textarea>
            <Label>Author:</Label>
            {/* <Select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <Option value="John">John</Option>
              <Option value="Jane">Jane</Option>
            </Select> */}
              <Input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <Paragraph white small onSubmit={(date) => setDate(date)}>
              {date}
            </Paragraph>
            <Button primary>Add Blog</Button>
          </Form>
        </CreateContainer>
      </Container>
    </Wrapper>
  );
};

export default Create;
