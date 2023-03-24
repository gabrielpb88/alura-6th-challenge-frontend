import Image from 'next/image';
import * as S from './styles';

export default function Header() {
  return (
    <S.Header>
      <Image src={'/images/logo-white.png'} alt="Logo da CodeChella" width={234} height={64} />
      <Image src={'/images/icons/menu.svg'} alt="Menu icon" width={32} height={40} className="menu" />
      <S.Menu>
        <ul>
          <li>A experiência</li>
          <li>Mapa de Setores</li>
          <li>Informações</li>
          <li>Ingresso</li>
        </ul>
      </S.Menu>
    </S.Header>
  );
}
