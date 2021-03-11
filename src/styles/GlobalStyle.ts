import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    color: #333333;
   }
  html{
      font-size: 62.5%;
    }
  
  @media (max-width: 1440px){
    html{
      font-size: 46.75%;
    }
  }

    
  @media (max-width: 1024px){
    html{
      font-size: 38.75%;
    }
  }

  @media (max-width: 1080px){
    html{
      /* font-size: 93.75%; */
    }
  }
  @media (max-width: 720px){
    html{
      /* font-size: 87.75%; */
    }
  }
  body, input, textarea, button{
    font: 400 1.6rem "Roboto", sans-serif ;
  }
  button{
    outline: none;
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
`;
