import styled from 'styled-components';

export const ContainerShipment = styled.main`
  ul {
    border: 1px solid #e6e6e6;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    li {
      display: flex;
      padding: 10px 0;
      @media (max-width: 768px) {
        display: block;
      }

      strong {
        color: #04a6ee;
        font-weight: 100;
        margin-right: 5px;
      }
    }
  }

  h3 {
    font-weight: 100;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  a {
    color: #04a6ee;
    text-decoration: none;
    font-size: 19px;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  font-weight: 100;
  font-size: 25px;
  margin: 20px 0px 30px;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 30px;
`;

export const Tag = styled.span`
  background: #00f7e2;
  padding: 8px 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
`;

export const Form = styled.form`
  position: relative;
  width: 500px;
  margin: 0 auto;

  input {
    border: 1px solid #dadada;
    width: 500px;
    padding: 17px;
    margin: 20px 0;
    border-radius: 10px;
    font-size: 15px;
    text-transform: uppercase;
  }
`;
