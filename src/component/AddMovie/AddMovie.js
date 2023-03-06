import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddMovie.css";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //INITIALISATION
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [picture, setPicture] = useState("");

  //UPDATE
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handlePicture = (e) => {
    setPicture(e.target.value);
  };

  const handleAddMovie = () => {
    const newMovie = { title, description, rate, picture };
    add(newMovie);
    handleClose();
  };

  return (
    <>
      <div class="button-container">
      <Button onClick={handleShow} size="lg" variant="danger">Add new movie</Button>{' '}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>Title</Form>
          <Form.Control
            onChange={(e) => handleTitle(e)}
            placeholder="Add title"
          ></Form.Control>
          <Form>Description</Form>
          <Form.Control
            onChange={(e) => handleDescription(e)}
            placeholder="Add description"
          ></Form.Control>
          <Form>Rate</Form>
          <Form.Control
            onChange={(e) => handleRate(e)}
            type="number"
            max={5}
            min={0}
            placeholder="Add Rate"
          ></Form.Control>
          <Form>picture</Form>
          <Form.Control
            onChange={(e) => handlePicture(e)}
            placeholder="Add picture"
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => handleAddMovie()} variant="success">
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
