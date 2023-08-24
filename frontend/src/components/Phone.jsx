import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

const Phone = () => {
const {id}=    useParams('id')
const [phone, setPhone] = useState({})
const getPhone=async()=>{

    const response=await axios.get(`http://localhost:8081/phones/${id}`)
    setPhone(response.data)
    console.log(response)
}


useEffect(() => {

    getPhone()
}, [])


  return (
    <div className="phone">
      <div>
      <h2>{phone.name}</h2> 
      <h3>{phone.manufacturer}</h3>
      <h3>{phone.price} €</h3>
      <h3>Color: {phone.color} </h3>
      <h3>Processor: {phone.processor} </h3>
      <h3>Ram: {phone.ram} </h3>
      <p>{phone.description}</p>
      <Link to={'/'} > back to home</Link>
      </div>
      <div className="right">
       <img src={`/images/${phone.imageFileName}`} alt="" />
      </div>
 
    </div>
  )
}

export default Phone
