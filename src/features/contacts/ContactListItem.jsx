/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteContact } from './ContactSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    if (!id) return;
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex items-center gap-3">
      <p>
        &bull; {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => handleDeleteContact(contact.id)}
        className="text-white bg-red-500 rounded-md text-sm w-16 font-semibold"
      >
        Delete &times;
      </button>
    </div>
  );
};

export default ContactListItem;
