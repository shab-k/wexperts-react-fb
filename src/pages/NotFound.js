import {
  Container,
  Wrapper,
  H2,
  Paragraph,
  Button,
  StyledLink,
} from '../globalStyles';

const NotFound = () => {
  return (
    <Wrapper>
      <Container>
        <H2 white>Sorry!</H2>
        <Paragraph white>Page Not Found</Paragraph>
        <StyledLink to="/">
          <Button danger>Back To Home</Button>
        </StyledLink>
      </Container>
    </Wrapper>
  );
};

export default NotFound;
