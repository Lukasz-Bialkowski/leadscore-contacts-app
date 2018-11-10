import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Contact from './Contact';
import LoadingWrapper from '../_common/LoadingWrapper';
import { fetchContacts } from "../_actions/contactsPageActions";

class ContactListPage extends Component {
  componentDidMount() {
    this.props.fetchContacts({});
  }

  renderContacts = contacts =>
    contacts.map(contact => <Contact {...contact} key={contact.id} />);

  render() {
    const { contactListData: { data: contactsList } } = this.props;

    return (
      <Fragment>
        <LoadingWrapper isFetching={this.props.isFetching} >
          <h1>Contact List!</h1>
          { contactsList && this.renderContacts(contactsList)}
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
