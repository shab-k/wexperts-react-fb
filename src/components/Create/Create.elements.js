import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #fff;
  padding: 90px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#0A0B5B')};
`;
export const CreateContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  /* padding: 10px; */
`;
export const Form = styled.form`
  /* display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  } */
`;

export const Input = styled.input`
  /* padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  } */
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
/* 
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  } */
`;

// export const Textarea =  Input;
export const Textarea = styled.textarea` 
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block; 
`;
export const Select = styled.select`
width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`; 

export const Label = styled.label`
  text-align: left;
  display: block;
`;
export const Option = styled.option`

`;