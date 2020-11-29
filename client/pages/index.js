import fetch from 'isomorphic-unfetch';
import {useState, useEffect} from 'react';
import {Form, Button} from 'semantic-ui-react'
export default function Home() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState(null);
  const [address, setAddresse] = useState("");
  const [data, setData] = useState({});


  const handleFname = (event)=>{
    setFirstname(event.target.value)
  }

  const handleLname = (event)=>{
    setLastname(event.target.value)
  }

  const handlePhone = (event)=>{
    setPhone(event.target.value)
  }

  const handleAddress = (event)=>{
    setAddresse(event.target.value)
  }

  const createContact = async ()=>{

    const user = {
      firstname:firstname,
      lastname:lastname,
      phone:phone,
      address:address
    }

    try{
      const res = fetch('http://contacts:8000/add', {
        method:"POST",
        headers:{
          "Accept":"applicatio/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })
  }catch(error){
    console.log(error)
  }
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    createContact();
      

      setFirstname("");
      setLastname("");
      setPhone("");
      setAddresse("")
  }
 
  return (
      <div className="form-container">
        <div className="sections">
          <div className="add-contact">
            <Form onSubmit={handleSubmit}>
              <Form.Input
                fluid
                label='First name' 
                placeholder='First name'
                name='firstname'
                value={firstname}
                onChange={handleFname}
              />
               <br/>
              <Form.Input
                fluid
                label='Last name' 
                placeholder='First name'
                name='firstname'
                value={lastname}
                onChange={handleLname}
              />
               <br/>
              <Form.Input
                fluid
                label='Phone number' 
                placeholder='+256'
                name='phone'
                value={phone}
                onChange={handlePhone}
              />
              <br/>
              <Form.Input
                fluid
                label='Address' 
                placeholder='Address'
                name='address'
                value={address}
                onChange={handleAddress}
              />
              <br/>
              <Button type='submit' >Add Contact</Button>
                
            </Form>
             
                
             
          </div>
          <div className="contacts">
              <h5>Contacts</h5>
          </div>

        </div>
      </div>
  )
};

 

