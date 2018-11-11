import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { throttle } from "lodash";

import { fetchContacts } from "../_actions/contactsPageActions";
import ContactsListError from "../_common/ContactsListError";
import ContactsListEmpty from "../_common/ContactsListEmpty";
import WithInfiniteScroll from "../_common/WithInfiniteScroll";
import ContactsList from "./ContactsList";

const NUMBER_OF_ELEMENTS_PER_PAGE = 1;
const THROTTLE_TIMEOUT = 5000;

class ContactsListPage extends Component {
  componentDidMount() {
    this.fetchMoreContacts();
  }

  isContactListEmpty = (isFetching, contactsList) => !isFetching && !contactsList.length;

  shouldLoadMore = () => !this.props.isFetching && !this.props.isError && this.props.hasMoreContacts;

  fetchMoreContacts = () => {
    const filterParams = {
      body: {},
      urlParams : {
        limit: NUMBER_OF_ELEMENTS_PER_PAGE,
        offset: this.props.metaInfo.offset + 1}
    };
    this.props.fetchMoreContacts(filterParams);
  };

  render() {
    const {
      isFetching,
      isError,
      contactsList
    } = this.props;

    if (isError) {
      return <ContactsListError />;
    }

    if (this.isContactListEmpty(isFetching, contactsList)) {
      return <ContactsListEmpty />;
    }

    return (
      <Fragment>
        <h1>Contact List!</h1>
        <WithInfiniteScroll
          hasMore={this.shouldLoadMore()}
          fetchFunc={throttle(this.fetchMoreContacts, THROTTLE_TIMEOUT)}
        >
          <ContactsList contactsList={contactsList} />
          {isFetching&& <div>.... LOADING</div>}
        </WithInfiniteScroll>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.contactsList.isFetching,
  isError: state.contactsList.isError,
  contactsList: state.contactsList.data,
  hasMoreContacts: state.contactsList.hasMoreContacts,
  metaInfo: state.contactsList.metaInfo
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: params => dispatch(fetchContacts(params)),
  fetchMoreContacts: params => dispatch(fetchContacts(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsListPage);
