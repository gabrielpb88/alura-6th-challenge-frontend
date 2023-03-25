import Image from 'next/image';
import * as S from './styles';

export const DateEvents = () => {
  return (
    <S.Section>
      <S.ImageWrapper>
        <Image
          className="picture"
          src={'/images/images/homepage-band.png'}
          alt={'Picture of a band on the stage'}
          width={310}
          height={380}
        />
        <S.ContentWrapper>
          <S.H2>
            {'< 11 e 12 de Março >'}
            <br />
            Aluródromo de São Paulo
          </S.H2>
          <S.Paragraph>
            Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e,
            claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
          </S.Paragraph>
          <S.Button>
            <label>Comprar ingresso!</label>
            <Image src={'images/icons/ingresso.svg'} alt={'Icone de um ingresso'} width={32} height={40} />
          </S.Button>
        </S.ContentWrapper>
      </S.ImageWrapper>
    </S.Section>
  );
};

export default DateEvents;
