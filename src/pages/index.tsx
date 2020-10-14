import React from 'react';
import { PageProps } from 'gatsby';
import Particles from 'react-particles-js';

import { Container } from './styles';

const Main: React.FC<PageProps> = () => {
  return (
    <Container>
      <Particles width="200" height="200" />
    </Container>
  )
};

export default Main;
