import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  ul {
    list-style: none;
  }

  body {
    background: #fafafa;
  }

  main {
    display: block;
    margin: 20px auto;
    border: 1px solid #e6e6e6;
    width: 700px;
    background: #fff;
    padding: 50px;
  }
  @media (max-width: 768px) {
    main {
      width: auto;
      overflow-x: hidden;
      margin: 0 2em 2em;
      padding: 20px;
      margin-top: 115px;
    }
  }

  body, input, button {
    letter-spacing: 1.5px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button:hover,
  a:hover{
    cursor: pointer;
  }

  input {
    border: 1px solid #dadada
  }
`;
