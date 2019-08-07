import styled from 'styled-components';

export const Container = styled.main`
  text-align: center;
  button {
    background: #04a6ee;
    border: none;
    width: 70px;
    padding: 15px 15px;
    margin: 10px;
    color: #fff;
    border-radius: 5px;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;

export const ShipmentList = styled.ul`
  span {
    background-color: #dadada;
    padding: 5px;
    border-radius: 5px;
    color: #5a5a5a;
  }
`;

export const Form = styled.form`
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

export const SortButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: auto;
  }

  > div:first-child {
    margin-right: 10px;
  }

  > div:last-child {
    margin-left: 10px;
  }

  > div {
    display: flex;
    svg {
      background: #04a6ee;
      color: #fff;
      padding: 12px;
      height: 100%;
      width: 40px;
    }
  }

  button {
    background: #fff;
    color: #04a6ee;
    border: 1px solid #04a6ee;
    width: 180px;
    margin: 0;
    border-radius: 0;
    @media (max-width: 768px) {
      width: auto;
    }
  }
`;

export const NotFound = styled.div`
  border: 1px solid #dadada;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin: 0 auto;
  height: 115px;
  margin: 20px auto;
  font-size: 20px;
  color: #222;
  @media (max-width: 768px) {
    width: auto;
  }
`;
