import React, { Fragment } from "react";
import _ from "lodash";

const Contact = props => {
  const {
    contactType,
    displayName,
    emails: [{ email }],
    phoneNumbers: [{ number }],
    profilePicture,
    title,
    birthday,
    profiles
  } = props;
  const uniqProfiles = profiles ?
    _.uniqBy(profiles, "source")
      .map(item => (
        <span key={`${displayName}${item.source}`}>{item.source}</span>))
      : null;

  return (
    <Fragment>
      <h2>contactType: {contactType}</h2>
      <h3>displayName: {displayName}</h3>
      <h3>email: {email}</h3>
      <h3>phoneNumbers: {number}</h3>
      <h3>profilePicture: {profilePicture}</h3>
      <h3>title: {title}</h3>
      <h3>birthday: {birthday}</h3>
      <h3>profiles: {uniqProfiles}</h3>
    </Fragment>
  );
};

export default Contact;
