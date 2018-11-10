import React, { Fragment } from "react";

const Contact = ({ username, telephone }) => {
  return (
    <Fragment>
      <h2>username: {username}</h2>
      <h3>telephone: {telephone}</h3>
    </Fragment>
  );
};

export default Contact;
