import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { H2, Paragraph } from '../../globalStyles';

// export const BlogListMain = styled.div`
// 	display: flex;
//   flex-flow: row-reverse wrap;
// 	max-width: 1300px;
// 	margin: auto;
	
//   `;
// export const Aside = styled.aside`
//     flex: 0 100%;
//     /* height: 100px; */
//     background: #25dc14;
//     @media (min-width: 600px){
//       flex: 0 0 200px;
//     }
//   `;
export const BlogPreview = styled.div`
    width: 60%;
    background: #EFEFF1;
    padding: 26px;
    margin: 20px auto;
    border-bottom: 1px solid #fafafa;
    &:hover{
        box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    }
    @media screen and (max-width: 960px) {
      width: 95%;
      padding: 0;
    }
  `;
// export const Main = styled.main`
//     flex: 0 100%;
//     /* height: 100%; */
//     background: crimson;
//     @media (min-width: 600px){
//       flex: 1 0 0px;
//     }
//   `;
//   .blog-preview a{
//     text-decoration: none;
//   }
export const BlogLinks = styled(Link)`
/* color: #fff; */
/* display: flex; */
align-items: center;
text-decoration: none;
/* padding: 0.5rem 1rem; */
height: 100%;

@media screen and (max-width: 960px) {
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;

  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
  }
}
`;
// export const H2 = styled(H2)`

  
// `;