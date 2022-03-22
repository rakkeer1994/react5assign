import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddContact = () => {
  const contacts = useSelector((state)=>state)
  console.log(contacts)
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [number,setNumber] = useState()
const dispatch=useDispatch()
const history = useNavigate()

 

  const handleSubmit=(e)=>{
             e.preventDefault()
             const checkEmail = contacts.find(contact=>contact.email===email && email)
             if(!email || !name || !number){
              //  return toast.warning("fill all details!")
              return alert("fill all details")
             }

             if(checkEmail){
              // return toast.error("this email already")
              return alert("this email already")
            }
            const data={
              id: contacts[contacts.length-1]+1,
              name, email,number
            }
            dispatch({type:"ADD_CONTACT", payload:data})
            // toast("student added")
            history.push('/')
            
              
  }
 
  return (
    <div>
       <div className='container'>
         <div className='row'>
                      <h1 className='display-3 text-center'>Add Students</h1>
                      <div className='col-md-6 shadow mx-auto p-5'>
                        <form onSubmit={handleSubmit}>
                          <div className='form-group'>
                            <input type='text' placeholder='Name' className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}}/>

                          </div>
                          <div className='form-group'>
                            <input type='email' placeholder='Email' className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                          </div>
                          <div className='form-group'>
                            <input type='number' placeholder='Phone' className='form-control' value={number} onChange={(e)=>{setNumber(e.target.value)}}/>

                          </div>
                          <div className='form-group'>
                            <input type='submit' value='Add Student' className='btn btn-block btn-dark' />

                          </div>
                        </form>

                      </div>
         </div>

       </div>
    </div>
  )
}

export default AddContact