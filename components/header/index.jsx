import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoMdNotificationsOutline } from "react-icons/Io";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <Navbar className="nav-header" bg="light" expand="lg">
      <Container>
        <div className="nav-logo">
          <Link href="/home">FazzPay</Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className="avatar ">
              <Image src="/avatar.png" width={30} height={30} />
            </div>

            <div className="name">
              <p className="mb-0">Robert</p>
              <p>085379887758</p>
            </div>

            <IoMdNotificationsOutline className="notif" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
