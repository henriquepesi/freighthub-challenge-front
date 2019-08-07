import styled from 'styled-components';

export const ShipmentBlockStyle = styled.li`
  border: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  width: 500px;
  padding: 50px;
  margin: 20px auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: auto;
    flex-direction: column;
    padding: 20px;

    > * {
      margin: 10px 0;
    }
  }

  h3 {
    font-size: 17px;
    font-weight: normal;
    margin-bottom: 6px;
    padding: 0 10px;
  }

  form {
    display: flex;
  }

  input {
    border: 1px solid #dadada;
    color: #5a5a5a;
    padding: 10px;
  }

  svg {
    background: #04a6ee;
    color: #fff;
    height: auto;
    width: 40px;
    padding: 10px;
  }

  a {
    background: #04a6ee;
    color: #fff;
    text-decoration: none;
    padding: 15px 10px;
    font-size: 12px;
    white-space: nowrap;
    font-weight: bold;
  }

  small {
    color: #04a6ee;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 10p;
  }

  small:hover {
    cursor: pointer;
  }

  button: {
    width: 40px;
  }
`;
