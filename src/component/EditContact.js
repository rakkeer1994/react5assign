import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link , useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const EditContact = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [number,setNumber] = useState()
  const history = useNavigate()
  const dispatch = useDispatch()
    const {id}=useParams()
    const contacts = useSelector(state=>state)
    const currentContact = contacts.find(contact=>contact.id === parseInt(id))
    useEffect(()=>{
          if(currentContact){
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
          }
    }, [currentContact])
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
     dispatch({type:"UPDATE_CONTACT", payload:data})
     // toast("student added")
     history.push('/')
     
       
}
  return (
    <div>
       <div className='container'>
         
            {currentContact ? (
              <>
              <div className='row'>
                      <h1 className='display-3 text-center'>Edit Students {id}</h1>
                      <div className='col-md-6 shadow mx-auto p-5'>
                        <form onSubmit={handleSubmit}>
                          <div className='form-group'>
                            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name' className='form-control'/>

                          </div>
                          <div className='form-group'>
                            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' className='form-control'/>

                          </div>
                          <div className='form-group'>
                            <input type='number' value={number} onChange={(e)=>{setNumber(e.target.value)}} placeholder='Phone' className='form-control'/>

                          </div>
                          <div className='form-group'>
                            <input type='submit' value='Update student' className='btn btn-block btn-dark' />
                            <Link to='/' className='btn btn-danger ml-3'>Cancel</Link>

                          </div>
                        </form>

                      </div>
         </div>
              </>
            ) : (<h1 className='display-3 my-5 text-center'>student not present of that id {id}</h1>)}
       </div>
    </div>
  )
}

export default EditContact