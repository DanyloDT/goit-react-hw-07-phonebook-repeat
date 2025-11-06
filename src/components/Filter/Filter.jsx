import React from 'react';
import { StyledFilter, StyledFilterIInput } from './Filter.styled';
import { selectFilter } from '../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <StyledFilter>
      <StyledFilterIInput
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Find contacts by name"
      />
    </StyledFilter>
  );
};
