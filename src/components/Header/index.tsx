import Image from 'next/image';
import * as S from './styles';

export default function Header() {
  return (
    <S.Header>
      <Image src={'/images/logo-white.png'} alt="Logo da CodeChella" width={234} height={64} />
      <Image src={'/images/icons/menu.svg'} alt="Menu icon" width={32} height={40} />
    </S.Header>
  );
}
