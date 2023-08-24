import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const HomePage = () => {
    const [phones, setPhones] = useState([])

    const getAllPhones=async()=>{
  
  const response=await axios.get('http://localhost:8081/phones')
  
    setPhones(response.data)
    console.log(typeof response.data)
   
  
    }
  
    useEffect(() => {
    
      getAllPhones()
    }, [])
    

  return (
    <>
     
    <div className="title">
        <h1>Phones list</h1>
        </div> 


    <div className="container">
     
  

   
       {phones.map(phone=>{
         return(
           <>
           <div className='phoneCard'>
             <h2> {phone.name}</h2>
            
             <img src={`/images/${phone.imageFileName}`} alt="" />
             <h2>{phone.price} €</h2>
             <Link to={`/${phone.id}`} >Details</Link>
           
           </div>
           </>
         )
       })}
     
     </div>   
     </> 
  )
}

export default HomePage
