import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

function Restreview({ review }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="dark"
        className="m-2"
      >
        {open ? "Hide Reviews" : "See Reviews"}
      </Button>

      <Collapse in={open}>
        <div id="example-collapse-text">
          <Card body className="shadow-sm border-0 my-2" style={{ maxWidth: "800px" }}>
            {review.map((item, idx) => (
              <div key={idx} className="mb-3">
                <h5 className="mb-1">{item.name}</h5>
                <p className="mb-1">Rating: {item.rating} ⭐</p>
                <p className="mb-1">{item.comments}</p>
                {idx !== review.length - 1 && <hr />}
              </div>
            ))}
          </Card>
        </div>
      </Collapse>
    </>
  );
}

export default Restreview;
