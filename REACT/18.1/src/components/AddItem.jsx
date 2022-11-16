import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Global";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddItem() {
  const { listings, addListing } = useContext(GlobalContext);
  const history = useNavigate();
  const [newListing, setnewListing] = useState("");
  function handleChange(e) {
    setnewListing(e.target.value);
  }

  function handleSubmit() {
    const listingObj = {
      date: "2023-01-22T09:27:39.360Z",
      rating: 12,
      title: newListing,
      id: uuidv4(),
    };
    addListing(listingObj);
    history("/");
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            onChange={(e) => handleChange(e)}
            type="text"
            value={newListing}
            placeholder="Add Listing"
          ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </Form>
    </div>
  );
}

export default AddItem;
