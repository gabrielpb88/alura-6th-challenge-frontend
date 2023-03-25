import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;

  .picture {
    object-position: center;
    object-fit: cover;
    border-radius: 16px;
    margin: 20px;
  }

  @media (min-width: 768px) {
    .picture {
      width: 600px;
    }
  }

  @media (min-width: 1440px) {
    max-width: none;
  }
`;

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  max-width: 540px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 40px;
  font-weight: 500;
  text-align: center;
  margin: 20px 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    padding: 0 130px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 0 #444444;
  background: ${({ theme }) => theme.primaryDark};
  border: none;
  color: #fff;
  font-weight: 700;
  padding: 10px 30px;
  border-radius: 8px;
  width: 300px;

  label {
    margin-right: 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 1440px) {
    flex-direction: row;
    //width: 100%;
  }
`;
// @media (min-width: 768px) {
//
// }
//
// @media (min-width: 1440px) {
//
// }
