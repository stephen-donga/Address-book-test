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

  const user = {
    firstname:firstname,
    lastname:lastname,
    phone:phone,
    address:address
  }
  const fetchData = async()=>{

    const res = await fetch('http://localhost:8000/contacts/add',{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
    const re = res.json();
    console.log(re)
    setData(re)

  }

  useEffect(()=>{
  },[])

  const handleSubmit =(event)=>{
    event.preventDefault();
    fetchData();

      setFirstname("");
      setLastname("");
      setPhone("");
      setAddresse("")
  }

  // console.log(data)
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

 

