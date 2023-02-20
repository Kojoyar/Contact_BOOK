import React, { useContext, useState } from 'react';
import { contactsContext } from '../../contactsContext';

const AddContact = () => {
  const { createContact } = useContext(contactsContext)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')

  function addProduct() {
    let newObj = {
      name,
      surname,
      phone
    }
    for(let key in newObj) {
      if(!newObj[key]) {
        alert('Some inputs is not empty')
        return
      }
    }
    createContact(newObj)
    setName('')
    setPhone('')
    setSurname('')
  }


  return (
     <div>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

      <input type="text" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} />

      <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />

      <button onClick={addProduct}>Register</button>
    </div>
  )
}

export default AddContact