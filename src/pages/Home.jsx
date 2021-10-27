import React from "react";
import Nav from "../components/Header/Nav";
import "../index.scss";
import {
  Row,
  Col,
  Collection,
  CollectionItem,
  Select,
  TextInput,
  Container,
} from "react-materialize";
import Modal from "../components/Modal";
import UserModal from "../components/UserModal";
export default function Home({ users }) {
  const [searchVal, setSearchVal] = React.useState("");
  const [sortUsers, setSortUsers] = React.useState(3);

  const onSearch = (e) => {
    setSearchVal(e.target.value.toLowerCase());
  };

  const sortBy = (arr) => {
    return arr.sort((a, b) => {
      switch (sortUsers) {
        case "1":
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
          break;

        case "2":
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
          break;
        case "3":
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
          break;
        case "4":
          if (a.id > b.id) {
            return -1;
          }
          if (a.id < b.id) {
            return 1;
          }
          return 0;
          break;

        default:
          break;
      }
    });
  };

  return (
    <>
      <Nav />
      <Container id="homeWrapper">
        <Row className="filterBlock">
          <Col m={6} s={12}>
            <Select
              id="Select-41"
              multiple={false}
              // onChange={function noRefCheck() {}}
              m={12}
              options={{
                classes: "",
                dropdownOptions: {
                  alignment: "right",
                  autoTrigger: true,
                  closeOnClick: true,
                  constrainWidth: true,
                  coverTrigger: true,
                  hover: false,
                  inDuration: 150,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 250,
                },
              }}
              value=""
              onChange={(e) => {
                setSortUsers(e.target.value);
              }}
            >
              <option disabled value="">
                Filter Users
              </option>
              <option value="1">Name (A-Z)</option>
              <option value="2">Name (Z-A)</option>
              <option value="3">ID ASC</option>
              <option value="4">ID DESC</option>
            </Select>
          </Col>
          <Col m={6} s={12}>
            <TextInput
              id="TextInput-32"
              label="First Name"
              m={12}
              onChange={onSearch}
            />
          </Col>
        </Row>
        <Row>
          <Col m={12} s={12} className="usersCollection">
            <Collection>
              {sortBy(users)
                .filter(
                  (user) =>
                    user.username.toLowerCase().includes(searchVal) ||
                    user.name.toLowerCase().includes(searchVal) ||
                    user.email.toLowerCase().includes(searchVal)
                )
                .map((user) => {
                  return (
                    <CollectionItem className="avatar" key={user.id}>
                      <div className="userDetails">
                        <span className="title">Name: {user.name}</span>
                        <p>
                          Username: {user.username}
                          <br />
                          Email: {user.email}
                        </p>
                      </div>
                      <div className="modalTriggers">
                        <UserModal waves="light" node="button" user={user} />
                        <Modal
                          waves="light"
                          node="button"
                          userId={user.id}
                          dataTarget={"modal" + user.id}
                        />
                      </div>
                    </CollectionItem>
                  );
                })}
            </Collection>
          </Col>
        </Row>
      </Container>
    </>
  );
}
