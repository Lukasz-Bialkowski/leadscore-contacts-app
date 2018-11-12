import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import styled from 'styled-components';

import ContactsListError from '../_common/ContactsListError';
import ContactsListEmpty from '../_common/ContactsListEmpty';
import WithInfiniteScroll from '../_common/WithInfiniteScroll';
import SpinnerCircle from '../_common/SpinnerCircle';
import FilterToggle from './FilterToggle';
import ContactsList from './ContactsList';
import {
  filterContacts,
  makeAddFilterAction,
  makeResetListAction,
} from '../_actions/contactsPageActions';

const THROTTLE_TIMEOUT = 5000;
const NUMBER_OF_ELEMENTS_PER_PAGE = 25;

const ContactsListPageWrapper = styled.div.attrs({
  className: 'contacts-list-page-wrapper'
})``;

const SectionTitle = styled.div.attrs({ className: 'section-wrapper' })`
  font-size: 34px;
  padding: 20px 23px;
`;

class ContactsListPage extends Component {
  componentDidMount = () => {
    const { resetContactsList, filterContacts, value } = this.props;
    resetContactsList();
    filterContacts({
      value,
      offset: 0,
      limit: NUMBER_OF_ELEMENTS_PER_PAGE
    });
  };

  componentDidUpdate = (prevProps) => {
    const { resetContactsList, filterContacts, value } = this.props;
    if (value !== prevProps.value) {
      resetContactsList();
      filterContacts({
        value,
        offset: 0,
        limit: NUMBER_OF_ELEMENTS_PER_PAGE
      });
    }
  };

  isContactListEmpty = () =>
    !this.props.isFetching && this.props.contactsList.length === 0;

  shouldRenderError = () => this.isContactListEmpty() && this.props.isError;

  shouldLoadMore = () =>
    !this.props.isFetching && !this.props.isError && this.props.hasMoreContacts;

  calculateOffset = () =>
    NUMBER_OF_ELEMENTS_PER_PAGE * Math.ceil(this.props.contactsList.length / NUMBER_OF_ELEMENTS_PER_PAGE);

  filterContacts = () => {
    const { filterContacts, value } = this.props;
    filterContacts({
      value,
      offset: this.calculateOffset(),
      limit: NUMBER_OF_ELEMENTS_PER_PAGE
    });
  };

  render = () => {
    const { isFetching, contactsList, value, addFilter } = this.props;

    if (this.shouldRenderError()) {
      return <ContactsListError />;
    }

    if (this.isContactListEmpty()) {
      return <ContactsListEmpty />;
    }

    return (
      <ContactsListPageWrapper>
        <SectionTitle>&gt; Contact List</SectionTitle>
        <FilterToggle value={value} addFilter={addFilter} />
        <WithInfiniteScroll
          hasMore={this.shouldLoadMore()}
          fetchFunc={throttle(this.filterContacts, THROTTLE_TIMEOUT)}
        >
          <ContactsList contactsList={contactsList} filter={value} />
          {isFetching && <SpinnerCircle />}
        </WithInfiniteScroll>
      </ContactsListPageWrapper>
    );
  };
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
  resetContactsList: () => dispatch(makeResetListAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsListPage);
