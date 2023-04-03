import styled from 'styled-components';

export const Details = styled.div`
  article {
    display: flex;
    gap: 20px;
    align-items: start;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    span {
      font-size: 1.3rem;
    }
  }
  h3 {
    margin: 30px 0 0;
    font-size: 1.3rem;
    span {
      font-size: 1.1rem;
      font-weight: 300;
      font-style: italic;
    }
  }

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
  }
`;
