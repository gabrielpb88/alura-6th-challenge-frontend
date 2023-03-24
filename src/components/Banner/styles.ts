import styled from 'styled-components';
import Image from 'next/image';

export const CustomImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px;
  position: relative;

  h2 {
    position: relative;
    z-index: 1;
    font-size: 32px;
    text-align: center;
  }

  @media (min-width: 768px) {
    min-height: 384px;
    font-size: 64px;
    line-height: 83px;
  }

  @media (min-width: 1440px) {
    min-height: 407px;
  }
`;
