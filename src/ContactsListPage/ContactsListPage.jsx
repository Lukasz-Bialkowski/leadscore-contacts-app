import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { throttle } from "lodash";

import ContactsListError from "../_common/ContactsListError";
import ContactsListEmpty from "../_common/ContactsListEmpty";
import WithInfiniteScroll from "../_common/WithInfiniteScroll";
import ContactsList from "./ContactsList";
import {
  filterContacts,
  makeAddFilterAction,
  makeResetListAction,
} from "../_actions/contactsPageActions";

const THROTTLE_TIMEOUT = 5000;
const NUMBER_OF_ELEMENTS_PER_PAGE = 1;

class ContactsListPage extends Component {
  componentDidMount = () => {
    this.props.resetContactsList();
    this.props.filterContacts({ value: this.props.value, offset: 0, limit: NUMBER_OF_ELEMENTS_PER_PAGE });
  };

  componentDidUpdate = prevProps => {
    if (this.props.value !== prevProps.value) {
      this.props.resetContactsList();
      this.props.filterContacts({ value: this.props.value, offset: 0, limit: NUMBER_OF_ELEMENTS_PER_PAGE })
    }
  }

  isContactListEmpty = () =>
    !this.props.isFetching && this.props.contactsList.length === 0;
  
  shouldRenderError = () => 
    this.isContactListEmpty() && this.props.isError;

  shouldLoadMore = () =>
    !this.props.isFetching && !this.props.isError && this.props.hasMoreContacts;

  calculateOffset = () =>
    NUMBER_OF_ELEMENTS_PER_PAGE * Math.ceil(this.props.contactsList.length / NUMBER_OF_ELEMENTS_PER_PAGE);

    filterContacts = () => {
    this.props.filterContacts({ value: this.props.value, offset: this.calculateOffset(), limit: NUMBER_OF_ELEMENTS_PER_PAGE });
  };

  render = () => {
    const { isFetching, contactsList } = this.props;

    if (this.shouldRenderError()) {
      return <ContactsListError />;
    }

    if (this.isContactListEmpty()) {
      return <ContactsListEmpty />;
    }

    return (
      <Fragment>
        <h1>Contact List!</h1>{this.props.value}
        <div onClick={() => this.props.addFilter("PERSON")}>PERSON</div>
        <div onClick={() => this.props.addFilter("COMPANY")}>COMPANY</div>
        <WithInfiniteScroll
          hasMore={this.shouldLoadMore()}
          fetchFunc={throttle(this.filterContacts, THROTTLE_TIMEOUT)}
        >
          <ContactsList contactsList={contactsList} />
          {isFetching && <div>.... LOADING</div>}
        </WithInfiniteScroll>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.contactsList.isFetching,
  isError: state.contactsList.isError,
  contactsList: state.contactsList.data,
  value: state.contactsList.value,
  hasMoreContacts: state.contactsList.hasMoreContacts,
});

const mapDispatchToProps = dispatch => ({
  filterContacts: params => dispatch(filterContacts(params)),
  addFilter: value => dispatch(makeAddFilterAction(value)),
  resetContactsList: () => dispatch(makeResetListAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsListPage);
