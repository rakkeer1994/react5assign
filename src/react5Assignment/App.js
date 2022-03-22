import React from 'react'
import {ToastContainer} from 'react-toastify'
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom'
import AddContact from './component/AddContact';
import Home from './component/Home';
import EditContact from './component/EditContact';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
<Routes>
   <Route exact path='/' element={<Home/>} /> 
   <Route path='/addcontact' element={<AddContact/>} /> 
   <Route path='/editcontact/:id' element={<EditContact/>} /> 
</Routes>
     {/* <h1>welcome to contact</h1> */}
    </div>
  );
}

export default App;