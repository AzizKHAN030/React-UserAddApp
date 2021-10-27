import React from "react";
import M from "materialize-css";
import { Button, Container, TextInput } from "react-materialize";
import AppContext from "../context";

function Modal({ type, dataTarget, userId }) {
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
  const { users, setUsers } = React.useContext(AppContext);
  const [filled, setFilled] = React.useState(false);
  const modalRef = React.useRef(null);
  const nameInputRef = React.useRef(null);
  const emailInputRef = React.useRef(null);
  const usernameInputRef = React.useRef(null);
  const onAddUser = (e) => {
    const userId = users[users.length - 1].id + 1;
    if (
      users.some(
        (user) =>
          user.username.toLowerCase() ===
            usernameInputRef.current.value.toLowerCase() &&
          user.email.toLowerCase() === emailInputRef.current.value.toLowerCase()
      )
    ) {
      alert("this user is found");
    } else {
      const newUsers = [
        ...users,
        {
          id: userId,
          name: nameInputRef.current.value,
          username: usernameInputRef.current.value,
          email: emailInputRef.current.value,
        },
      ];
      localStorage.setItem("users", JSON.stringify(newUsers));
      setUsers(newUsers);
      nameInputRef.current.value =
        usernameInputRef.current.value =
        emailInputRef.current.value =
          "";
      setFilled(false);
    }
  };

  const onDeleteUser = (id) => {
    const newUsers = [...users.filter((user) => user.id !== id)];
    localStorage.setItem("users", JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  const checkFilled = () => {
    if (
      nameInputRef.current.value &&
      usernameInputRef.current.value &&
      emailInputRef.current.value
    ) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  };
  return (
    <>
      <div>
        <Button
          className="waves-effect waves-light btn modal-trigger"
          data-target={type === "add" ? "modal" : dataTarget}
        >
          {type === "add" ? "Add New User" : "Delete User"}
        </Button>

        <div
          ref={modalRef}
          id={type === "add" ? "modal" : dataTarget}
          className="modal bottom-sheet"
        >
          <Container>
            {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
            <div className="modal-content">
              <h4>
                {type === "add"
                  ? "Add a New User"
                  : "Are you sure to delete a user?"}
              </h4>
              {type === "add" && (
                <>
                  <TextInput
                    id="TextInput-38"
                    label="Name"
                    className="input-name"
                    ref={nameInputRef}
                    onChange={checkFilled}
                  />
                  <TextInput
                    id="TextInput-38"
                    label="Username"
                    className="input-username"
                    ref={usernameInputRef}
                    onChange={checkFilled}
                  />
                  <TextInput
                    email
                    id="TextInput-41"
                    label="Email"
                    className="input-email"
                    ref={emailInputRef}
                    onChange={checkFilled}
                  />
                </>
              )}
            </div>
            <div className="modal-footer">
              <Button className="modal-close waves-effect waves-yellow btn-flat">
                Cancel
              </Button>
              {type === "add" ? (
                <Button
                  className="modal-close waves-effect waves-green btn-flat"
                  onClick={onAddUser}
                  disabled={!filled}
                >
                  Save
                </Button>
              ) : (
                <Button
                  className="modal-close waves-effect waves-red btn-flat"
                  onClick={() => {
                    onDeleteUser(userId);
                  }}
                >
                  Delete
                </Button>
              )}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Modal;
