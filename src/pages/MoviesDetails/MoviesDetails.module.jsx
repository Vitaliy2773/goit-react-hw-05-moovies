import styled from '@emotion/styled';

export const GoBackLink = styled.span`
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;

    &:hover {
      color: #0056b3;
    }
  }
`;

export const FilmWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const FilmImg = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
`;

export const FilmTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 2em;
  color: #999;
`;

export const FilmSubTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.5em;
  color: #669;
`;

export const FilmDescription = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #999;
`;

export const StyledListDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 14px;

  border-radius: 20px;
`;
export const ListItem = styled.li`
  span {
    color: #ffc700;
  }

  a:hover,
  a:focus,
  a:active {
    color: #ffc700;
    span {
      color: white;
    }
  }
`;
