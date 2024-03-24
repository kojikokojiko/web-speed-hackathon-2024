import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Mesh, OrthographicCamera, PlaneGeometry, Scene, ShaderMaterial, TextureLoader, WebGLRenderer } from 'three';

import { IMAGE_SRC } from './ImageSrc';
import React from 'react';

const _Wrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

const _Image = styled.img`
  display: inline-block;
  width: 100%;
`;

export const HeroImage: React.FC = () => {
 
  return (
    <_Wrapper>
      <_Image alt="Cyber TOON" loading="eager" src="/assets/hero.png" />
    </_Wrapper>
  );
};
