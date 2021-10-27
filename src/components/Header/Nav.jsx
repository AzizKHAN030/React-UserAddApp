import React from "react";
import "materialize-css";
import { Navbar, Icon } from "react-materialize";
import Modal from "../Modal";

export default function Nav() {
  return (
    <>
      <Navbar
        alignLinks="right"
        brand={
          <a className="brand-logo" href="#">
            Logo
          </a>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <Modal type="add" />
      </Navbar>
    </>
  );
}
