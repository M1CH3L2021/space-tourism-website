import { Container } from './styles';
import logoImg from '../../assets/logo.svg'

function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Space Tourism logo" />
      <nav>
        <a href="">
          <span>00</span>
          Home
        </a>
        <a href="">
          <span>01</span>
          Destination
        </a>
        <a href="">
          <span>02</span>
          Crew
        </a>
        <a href="">
          <span>03</span>
          Technology
        </a>
      </nav>
    </Container>
  );
};

export default Header;
