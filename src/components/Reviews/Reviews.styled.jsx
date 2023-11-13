import styled from '@emotion/styled';

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  background-color: #f0f0f0;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;

  p {
    margin: 0 0 10px;
    font-size: 16px;

    span {
      font-weight: bold;
    }
  }
`;

export const ReviewsDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #333;
`;
