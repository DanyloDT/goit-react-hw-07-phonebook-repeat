import { useDispatch, useSelector } from 'react-redux';
import { StyledBtnDelete, StyledItem, StyledList } from './ContactList.styled';
import { selectFilterContacts } from '../../redux/selector';
import { deleteContactThunk } from '../../redux/operations';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);

  const dispatch = useDispatch();

  return (
    <StyledList>
      {filterContacts.map(({ id, name, phone }) => (
        <StyledItem key={id}>
          <span>
            {name}: {phone}
          </span>
          <StyledBtnDelete
            type="button"
            onClick={() => dispatch(deleteContactThunk(id))}
          >
            Delete
          </StyledBtnDelete>
        </StyledItem>
      ))}
    </StyledList>
  );
};
