import styled from '@emotion/styled';

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    max-width: 180px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #fff;

    span {
      font-weight: bold;
    }
  }
`;
