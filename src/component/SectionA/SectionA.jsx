import React from "react";

import Task from "./Task";
// import { Button } from "bootstrap";
const SectionA = () => {
  return (
    <>
      <div style={{ margin: "10rem" }}>
        <table>
          <thead>
            <tr>
              <th> Task Name</th>
              <th>Task Description</th>
              <th>Task Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Task && Task.length > 0
              ? Task.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.Name}</td>
                      <td>{item.Desc}</td>
                      <td>{item.Status}</td>
                      <td>
                        <button onClick={() => alert(item.id)}>Edit</button>
                        &nbsp;
                        <button onClick={() => alert(item.id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })
              : "No Data Available"}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SectionA;
