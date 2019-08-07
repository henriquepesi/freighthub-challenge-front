import styled from 'styled-components';

export const HeaderStyle = styled.header`
  padding: 25px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 3em;
  background: #fff;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 2;
    top: 0;
  }
`;
