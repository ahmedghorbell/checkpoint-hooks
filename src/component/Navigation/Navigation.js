import { Button, Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactStars from "react-stars";
import { UilRedo } from "@iconscout/react-unicons";

function Navigation({
  inputSearch,
  setInputSearch,
  selectedRate,
  setSelectedRate,
  resetFilter,
}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ipg8XIByqQll84XwQQaRpR3PqCfPBsWyo46lm_dxNOX4S49byITQ8BUoJPJPH24qhto&usqp=CAU"
          alt="logo"
          style={{
            width: "180px",
            height: "auto",
            marginLeft: "100px",
            padding: "10px",
          }}
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>{" "}
          <ReactStars
            value={selectedRate}
            onChange={(e) => setSelectedRate(e)}
            count={5}
            size={35}
            color2={"#ffd700"}
            half={false}
          />
          <Button
            style={{
              marginLeft: "40px", marginRight: "40px"
            }}
            className="res"
            variant="secondary"
            onClick={resetFilter}
          >
            <UilRedo />
          </Button>
          <Form className="d-flex">
            <Form.Control
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
