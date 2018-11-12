import React from 'react';
import styled from 'styled-components';

import {
  CONTACTS_FILTER_BUTTON_DISABLED,
  CONTACTS_FILTER_BUTTON_ENABLED,
} from '../_common/colors';

const PERSON_FILTER = 'PERSON';
const COMPANY_FILTER = 'COMPANY';

const FilterToggleWrapper = styled.div.attrs({ className: 'filter-toggle' })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const FilterButtonLeft = styled.button.attrs({
  className: 'filter-button',
  disabled: props => props.disabled,
})`
  font-size: ${props => (!props.disabled ? '16px' : '19px')};
  font-weight: 700;
  display: inline-block;
  background-color: ${props => (props.disabled
    ? CONTACTS_FILTER_BUTTON_DISABLED
    : CONTACTS_FILTER_BUTTON_ENABLED)};
  box-shadow: ${props => (props.disabled
    ? '0 0px 8px 1px rgba(255,255,255, 0.5), 0 0px 50px 0 rgba(0, 0, 0, 0.2);'
    : '0px 0px 2px 0px black')};
  color: black;
  padding: 18px 30px;
  width: 200px;
  border: 0px;
  border-radius: 4px;
  border-top-left-radius: 53px;
  border-bottom-left-radius: 53px;
  &:hover {
    cursor: ${props => (!props.disabled ? 'pointer' : null)};
  }
`;

const FilterButtonRight = styled(FilterButtonLeft).attrs({
  className: 'right',
})`
  border-radius: 4px;
  border-top-right-radius: 53px;
  border-bottom-right-radius: 53px;
`;

const shouldDisableFilter = (currentFilter, clickedFilter) => currentFilter === clickedFilter;

const FilterToggle = ({ addFilter, value }) => (
  <FilterToggleWrapper>
    <FilterButtonLeft
      disabled={shouldDisableFilter(value, PERSON_FILTER)}
      onClick={() => addFilter(PERSON_FILTER)}
    >
      {PERSON_FILTER}
    </FilterButtonLeft>
    <FilterButtonRight
      disabled={shouldDisableFilter(value, COMPANY_FILTER)}
      onClick={() => addFilter(COMPANY_FILTER)}
    >
      {COMPANY_FILTER}
    </FilterButtonRight>
  </FilterToggleWrapper>
);

export default FilterToggle;
