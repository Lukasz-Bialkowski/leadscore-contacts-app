import React, { Component } from "react";
import { connect } from "react-redux";
import { throttle } from "lodash";
import styled from "styled-components";

import ContactsListError from "../_common/ContactsListError";
import ContactsListEmpty from "../_common/ContactsListEmpty";
import WithInfiniteScroll from "../_common/WithInfiniteScroll";
import SpinnerCircle from "../_common/SpinnerCircle";
import ContactsList from "./ContactsList";
import {
  filterContacts,
  makeAddFilterAction,
  makeResetListAction
} from "../_actions/contactsPageActions";

const THROTTLE_TIMEOUT = 5000;
const NUMBER_OF_ELEMENTS_PER_PAGE = 25;
const PERSON_FILTER = 'PERSON';
const COMPANY_FILTER = 'COMPANY';

const ContactsListPageWrapper = styled.div.attrs({
  className: "contacts-list-page-wrapper"
})``;
const FilterButtonLeft = styled.button.attrs({
  className: "filter-button",
  disabled: props => props.disabled
})`
  font-size: ${props => (!props.disabled ? "16px" : "19px")};
  font-weight: 700;
  display: inline-block;
  background-color: ${props => (props.disabled ? "#ffffffe6" : "#00000040")};
  box-shadow: ${props =>
    props.disabled
      ? "0 0px 8px 1px rgba(255,255,255, 0.5), 0 0px 50px 0 rgba(0, 0, 0, 0.2);"
      : "0px 0px 2px 0px black"};
  color: black;
  padding: 18px 30px;
  width: 200px;
  border: 0px;
  border-radius: 4px;
  border-top-left-radius: 53px;
  border-bottom-left-radius: 53px;
  &:hover {
    cursor: ${props => (!props.disabled ? "pointer" : null)};
  }
`;
const FilterButtonRight = styled(FilterButtonLeft).attrs({
  className: "right"
})`
  border-radius: 4px;
  border-top-right-radius: 53px;
  border-bottom-right-radius: 53px;
`;
const SectionWrapper = styled.div.attrs({ className: "section-wrapper" })`
  font-size: 34px;
  padding: 20px 23px;
`;
const FilterToggle = styled.div.attrs({ className: "filter-toggle" })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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

  componentDidUpdate = prevProps => {
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

  shouldDisableFilter = (currentFilter, clickedFilter) => currentFilter === clickedFilter;

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
        <SectionWrapper>&gt; Contact List</SectionWrapper>
        <FilterToggle>
          <FilterButtonLeft
            disabled={this.shouldDisableFilter(value, PERSON_FILTER)}
            onClick={() => addFilter(PERSON_FILTER)}
          >
            PERSON
          </FilterButtonLeft>
          <FilterButtonRight
            disabled={this.shouldDisableFilter(value, COMPANY_FILTER)}
            onClick={() => addFilter(COMPANY_FILTER)}
          >
            COMPANY
          </FilterButtonRight>
        </FilterToggle>
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
  resetContactsList: () => dispatch(makeResetListAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsListPage);
