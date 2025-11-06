import { Component, useState } from 'react';
import { StyledBtnAdd, StyledForm, StyledInput } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/selector';
import { addContactThunk } from '../../redux/operations';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const { name, phone } = state;

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const findName = contacts.find(
      (elem) => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContactThunk({ name, phone }));
    setState({ ...INITIAL_STATE });
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        type="text"
        name="name"
        value={name}
        required
        onChange={handleChange}
      />
      <StyledInput
        type="tel"
        name="phone"
        value={phone}
        required
        onChange={handleChange}
      />
      <StyledBtnAdd>Add</StyledBtnAdd>
    </StyledForm>
  );
};
