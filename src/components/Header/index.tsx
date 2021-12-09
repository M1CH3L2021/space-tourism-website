import Link from 'next/link'

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src="/logo.svg" alt="Space Tourism logo" />

      <nav>
        <Link href="/">
          <span>
            <strong>00</strong>
            <span>Home</span>
          </span>
        </Link>
        <Link href="/destination">
          <span>
            <strong>01</strong>
            <span>Destination</span>
          </span>
        </Link>
        <Link href="/crew">
          <span>
            <strong>02</strong>
            <span>Crew</span>
          </span>
        </Link>
        <Link href="/technology">
          <span>
            <strong>03</strong>
            <span>Technology</span>
          </span>
        </Link>
      </nav>
    </Container>
  );
};

export default Header;