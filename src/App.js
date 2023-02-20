import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddContact from './components/AddContact/AddContact'
import ContactList from './components/ContactList/ContactList'
import Edit from './components/Edit/Edit'
import ContactsContextProvider from './contactsContext'

function App() {
  return (
    <ContactsContextProvider>
    <Routes>
      <Route path='/' element={<><AddContact/> <ContactList/> </>} />
      <Route path='/edit/:id' element={<Edit/>} />
    </Routes>
    </ContactsContextProvider>
  )
}

export default App