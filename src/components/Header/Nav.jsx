import React from "react";
import "materialize-css";

import { Container } from "react-materialize";
import Modal from "../Modal";

export default function Nav() {
  return (
    <>
      <nav className="nav teal lighten-1">
        <Container>
          <div className="logo">UsersApp</div> <Modal type="add" />
        </Container>
      </nav>
    </>
  );
}
