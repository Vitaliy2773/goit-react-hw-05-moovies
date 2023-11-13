import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Navigation = styled.nav`
  background-color: #f8f9fa;
  padding: 10px 0;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 10px;

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;

    span {
      color: #6c757d;
    }

    &:hover {
      color: #0056b3;
    }
  }
`;
