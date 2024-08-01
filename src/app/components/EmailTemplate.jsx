import { Span } from "next/dist/trace";
import React from "react";

const EmailTemplate = (Name, email, message) => {
  return (
    <div>
      <h2>You just received a new message!</h2>
      <p>
        <span>Name:</span>
        <strong>{Name}</strong>
      </p>
      <p>
        <span>Email:</span>
        <strong>{Email}</strong>
      </p>
      <p>
        <span>Message:</span>
        <strong>{Message}</strong>
      </p>
    </div>
  );
};

export default EmailTemplate;
