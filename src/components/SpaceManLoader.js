import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { SpaceMan } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors } = theme;

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${({ Mounted }) => (Mounted ? 'transparent' : colors.Navy)};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;

const SpaceManLoader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      finishLoading();
      clearInterval(timer);
    }, 4000);
  };

  useEffect(() => animate(), []);

  return isMounted ? null : (
    <LoaderContainer className="loader" Mounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <SpaceMan />
    </LoaderContainer>
  );
};

SpaceManLoader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default SpaceManLoader;
