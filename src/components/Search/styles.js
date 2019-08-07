import styled from 'styled-components';

export const SearchStyle = styled.form`
  position: relative;
  width: 500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: auto;
  }

  input {
    border: 1px solid #dadada;
    width: 500px;
    padding: 17px;
    margin: 20px 0;
    border-radius: 10px;
    font-size: 15px;
    text-transform: uppercase;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  svg {
    position: absolute;
    right: 25px;
    top: 40px;
    color: #dadada;
  }
`;
