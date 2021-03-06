const AddressList = ({contacts}) =>{
    console.log(contacts)
   return(
    <div className="contacts-container">
    <h3>Contact List</h3>
    <div className="grid wrapper">
        {
            contacts.map(item =>{
                return(
                    <div key={item._id} className="contact-details">
                        <p>{item.firstname}{"  "}{item.lastname}</p> 
                        <hr/>
                        <div className="details">
                            <div className="details">Phone number:</div>
                            <div className="details">+256{item.phone}</div>
                        </div>
                        <div className="details">
                            <div className="details">Address:</div>
                            <div className="details">{item.address}</div>
                        </div>

                        
                    </div>
                )
            })
        }
    </div>
</div>
   )
   };

AddressList.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/contacts');
    const data = await res.json();

    return {contacts:data};
}
export default AddressList;