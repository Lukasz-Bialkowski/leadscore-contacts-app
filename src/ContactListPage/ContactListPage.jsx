import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Contact from './Contact';
import LoadingWrapper from '../_common/LoadingWrapper';
import { fetchContacts } from "../_actions/contactsPageActions";

class ContactListPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  renderContacts = contacts =>
    contacts.map(contact => <Contact {...contact} key={contact.id} />);

  render() {
    const { contactList } = this.props;

    return (
      <Fragment>
        <LoadingWrapper isFetching={this.props.isFetching} >
          <h1>Contact List!</h1>
          {this.renderContacts(contactList)}
        </LoadingWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.contactsList.isFetching,
  isError: state.contactsList.isError,
  contactList: state.contactsList.data
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: params => dispatch(fetchContacts(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListPage);
