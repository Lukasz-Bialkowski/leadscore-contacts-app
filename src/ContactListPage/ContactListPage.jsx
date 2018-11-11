import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Contact from './Contact';
import LoadingWrapper from '../_common/LoadingWrapper';
import { fetchContacts } from "../_actions/contactsPageActions";
import ContactsListError from "../_common/ContactsListError";
import ContactsListEmpty from "../_common/ContactsListEmpty"; 

class ContactListPage extends Component {
  componentDidMount() {
    this.props.fetchContacts({});
  }

  isContactListEmpty = (isFetching, contactsList) => {
    return !isFetching && contactsList && !!contactsList.length;
  }

  renderContacts = contacts =>
    contacts.map(contact => <Contact {...contact} key={contact.id} />);

  render() {
    const { isFetching, isError, contactListData: { data: contactsList } } = this.props;

    if(isError) {
      return <ContactsListError />;
    }

    if(this.isContactListEmpty(isFetching, contactsList)) {
      return <ContactsListEmpty />;
    }

    return (
      <Fragment>
        <h1>Contact List!</h1>
        <LoadingWrapper isFetching={isFetching} >
          {contactsList && this.renderContacts(contactsList)}
        </LoadingWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.contactsList.isFetching,
  isError: state.contactsList.isError,
  contactListData: state.contactsList.data,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: params => dispatch(fetchContacts(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListPage);
