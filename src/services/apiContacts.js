const BASE_URL = 'https://668f8c40c0a7969efd983fe5.mockapi.io/contacts';

export async function getContacts(rejectWithValue) {
  const options = {
    method: 'GET',
    headers: {},
    body: null,
  };
  {
    try {
      const res = await fetch(`${BASE_URL}/contacts`, options);
      if (!res.ok) throw new Error('Failed loading contacts');
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
}
export async function removeContact(contactId, rejectWithValue) {
  const options = {
    method: 'DELETE',
    headers: {},
    body: null,
  };
  {
    try {
      const res = await fetch(`${BASE_URL}/contacts/${contactId}`, options);
      if (!res.ok) throw new Error('Failed deleting contact');
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
}

export async function addContact(newContact, rejectWithValue) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newContact),
  };
  console.log(newContact);
  try {
    const res = await fetch(`${BASE_URL}/contacts`, options);
    if (!res.ok) throw new Error('Failed creating contact');
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
}

// export async function getMenu() {
//   const res = await fetch(`${API_URL}/menu`);

//   // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
//   if (!res.ok) throw Error('Failed getting menu');

//   const data  = await res.json();
//   return data;
// }

// export async function getOrder(id) {
//   const res = await fetch(`${API_URL}/order/${id}`);
//   if (!res.ok) throw Error(`Couldn't find order #${id}`);

//   const { data } = await res.json();
//   return data;
// }

// export async function createOrder(newOrder) {
//   try {
//     const res = await fetch(`${API_URL}/order`, {
//       method: 'POST',
//       body: JSON.stringify(newOrder),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!res.ok) throw Error();
//     const { data } = await res.json();
//     return data;
//   } catch {
//     throw Error('Failed creating your order');
//   }
// }

// export async function updateOrder(id, updateObj) {
//   try {
//     const res = await fetch(`${API_URL}/order/${id}`, {
//       method: 'PATCH',
//       body: JSON.stringify(updateObj),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!res.ok) throw Error();
//     // We don't need the data, so we don't return anything
//   } catch (err) {
//     throw Error('Failed updating your order');
//   }
//}

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer <token>',
//   },
//   body: JSON.stringify({ key: 'value' }),
// };
