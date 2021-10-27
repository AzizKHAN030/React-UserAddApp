import React from "react";
import M from "materialize-css";
import { Button, Container } from "react-materialize";

function UserModal({ user }) {
  React.useEffect(() => {
    const options = {
      // onOpenStart: () => {
      //   console.log("Open Start");
      // },
      // onOpenEnd: () => {
      //   console.log("Open End");
      // },
      // onCloseStart: () => {
      //   console.log("Close Start");
      // },
      // onCloseEnd: () => {
      //   console.log("Close End");
      // },
      inDuration: 450,
      outDuration: 450,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(modalRef.current, options);
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }, []);
  //   const { users, setUsers } = React.useContext(AppContext);
  const modalRef = React.useRef(null);

  return (
    <>
      <div>
        <Button
          className="waves-effect waves-light btn modal-trigger show-user teal lighten-1"
          data-target={"userModal" + user.id}
        >
          Show info
        </Button>

        <div
          ref={modalRef}
          id={"userModal" + user.id}
          className="modal bottom-sheet"
        >
          <Container>
            {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
            <div className="modal-content">
              <h4>{user.name}</h4>
              <p>Email:{user.email}</p>
              <p>Username: {user.username}</p>
              <p>
                Phone: <a href={"tel:" + user.phone}>{user.phone}</a>
              </p>
              <p>
                Website: <a href={user.website}>{user.website}</a>
              </p>
            </div>
            <div className="modal-footer">
              <Button className="modal-close waves-effect waves-light btn-flat teal lighten-1 white-text">
                Close
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default UserModal;
