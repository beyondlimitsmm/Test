import React, { useRef } from "react";

function MyForm() {
  // Create refs for the form inputs
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formRef.current);
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
