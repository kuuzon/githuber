// Import react modules & packages
import React from 'react';
import styled from 'styled-components';

const AppWrap = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex: 1;
`;

const Layout = ({ children }) => (
  // Wrap all content in column-direction flexbox & container
  <AppWrap className="container">
    {children}
  </AppWrap>
);

export default Layout