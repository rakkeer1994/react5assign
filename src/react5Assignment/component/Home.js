import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const contacts = useSelector(state=>state)
  return (
    <div>
        <div className='col-md-12 my-5 text-right'>
         <Link to='/addcontact' className='btn btn-outline-dark'>Add Contact</Link>
         </div>
         <div className='col-md-6 mx-auto'>
         <h1>welcome to Home contact</h1>
         </div>
         <div className='col-md-10 mx-auto'>
           <table className='table table-hover'>
              <thead className='text-white bg dark text-center' >
                <tr>
                  <th scope='col'>SN</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Mobile Number</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  contacts.map((contact, id)=>(
                    <tr key={id}>
                      <td>{id+1}</td>
                      <td>{contact.name}</td>
                      <td>{contact.number}</td>
                      <td>{contact.email}</td>
                      <td><Link to={`/editcontact/${contact.id}`} className='btn btn-small btn-primary'>Edit</Link> </td>
                      <button type='button' className='btn btn-small btn-danger'>Delete</button>
                    </tr>
                  ))
                }
              </tbody>
           </table>
         </div>
    </div>
  )
}

export default Home