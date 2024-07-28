/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactListItem from './ContactListItem';
import { fetchContacts } from './ContactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const { contactStatus, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function getFilteredContacts() {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <section className="font-normal border-2 border-slate-500 rounded-md py-5 w-1/2 mx-auto">
      {contactStatus === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <ul className="text-left text-base text-slate-700 px-4">
        {getFilteredContacts().map((contact) => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
