/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewContact } from './ContactSlice';
import { useSelector } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      phone: number,
      //id: nanoid(),
    };
    const normalizedNewName = newContact.name.toLocaleLowerCase();
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === normalizedNewName
      )
    ) {
      return alert(`Contact ${newContact.name} already exist!`);
    }
    dispatch(addNewContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <section className="text-base  font-normal border-2 border-slate-500 rounded-md p-5 w-1/2 mx-auto mb-7">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col  gap-1 text-left">
          <label>Name</label>
          <input
            className="w-48 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3;"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="mb-4 flex flex-col  gap-1 text-left">
          <label>Number</label>
          <input
            className="w-48 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3;"
            type="tel"
            name="number"
            value={number}
            onChange={handleNumberChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-700 rounded-md py-3 px-5 text-white uppercase"
        >
          Add contact
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
