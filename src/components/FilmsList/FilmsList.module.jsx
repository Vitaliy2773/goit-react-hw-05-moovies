import styled from '@emotion/styled';

export const ListFilms = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ItemFilms = styled.li`
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    &:hover {
      color: #007bff;
    }
  }
`;
