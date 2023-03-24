import * as S from './styles';

export interface BannerProps {
  children: React.ReactNode;
}

const Banner = ({ children }: BannerProps) => {
  return (
    <S.Banner>
      <S.CustomImage src={'/images/images/banner-homepage-boreal.png'} alt={'A picture of an aurora boreal'} fill />
      <h2>{children}</h2>
    </S.Banner>
  );
};

export default Banner;
