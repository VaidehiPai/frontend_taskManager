import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

export default function Edit() {
  const {id}=useParams()
  
  const [name,setName]=useState('')
  const navigate= useNavigate();

  useEffect(()=>{
    axios.get(`https://backend-kohl-beta-53.vercel.app/${id}`)
    .then((res)=>{
      setName(res.data.name)
      console.log(name)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const updateTask=async()=>{
    try {
      await axios.put(`https://backend-kohl-beta-53.vercel.app/${id}`,{name:name})
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='main'>
    <div className='task'>
        <h2 className='task_manager'>Edit the task</h2>
        <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={updateTask} className = 'btn'>update</button>
        
        
        </div>

    </div>
  )
}