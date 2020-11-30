import fetch from 'isomorphic-unfetch';
import {useState} from 'react';
import {Form, Button} from 'semantic-ui-react'
export default function Home() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState(null);
  const [address, setAddresse] = useState("");


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

  const user = {
    firstname:firstname,
    lastname:lastname,
    phone:phone,
    address:address
  }

  const createContact = async()=>{
    const res = await fetch('http://localhost:3000/contacts/add',{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      mode:"cors",
      body:JSON.stringify(user)
    });
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
            <Form onSubmit = {handleSubmit}>
              <Form.Input
                fluid
                label='First name' 
                placeholder='First name'
                name='firstname'
                required
                value={firstname}
                onChange={handleFname}
              />
               <br/>
              <Form.Input
                fluid
                label='Last name' 
                placeholder='Last name'
                name='firstname'
                value={lastname}
                onChange={handleLname}
              />
               <br/>
              <Form.Input
                fluid
                label='Phone number' 
                placeholder='eg: 0777111234'
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
              <h5>Address Book</h5>
              <p>Please ! click on the Address list tab to view contacts</p>
          </div>

        </div>
      </div>
  )
};

 

