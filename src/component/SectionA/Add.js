import React, { useState } from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";
import { Form, useNavigate } from "react-router-dom";
import { Button } from "bootstrap";

const Add = () => {
  const { taskName, setName } = useState("");
  const { taskdesc, setDesc } = useState("");
  const { taskStatus, setStatus } = useState("");
  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    let a = taskName,
      b = taskdesc,
      c = taskStatus;

    Task.push({ id: uniqueId, taskName: a, taskdesc: b, taskStatus: c });
    history("/task");
  };
  return (
    <div>
      <Form className="d-grid gap-2">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter the TaskName"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter the TaskName"
            required
            onChange={(e) => setDesc(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter the TaskName"
            required
            onChange={(e) => setStatus(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Sumbit
        </Button>
      </Form>
    </div>
  );
};

export default Add;
