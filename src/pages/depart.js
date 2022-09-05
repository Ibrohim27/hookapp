import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../components/table";

const Depart = () => {

  const [isForm, setForm] = useState(false)
  const [data , setData] = useState([])

  let option = {
    id: "ID",
    name: "Bo'lim Raqami",
    status: 'Bolim Xolati',
  };

  useEffect(() => {
    axios.get('http://localhost:3001/departs')
    .then(res => {
      if(res.status === 200)
        setData(res.data)
    })
  }, [])

  const deleteDepart = (index) => {
    axios.delete(`http://localhost:3001/departs/${index}`)
    .then(res => {
      if(res.status === 200){
        const before = data.slice(0, index)
        const after = data.slice(index+1)
        setData([...before, ...after])
      }
    })
  }

  const addDepart = (e) => {
    let form = document.forms.depart
    let formData = new FormData(form)

    let dep = {}

    formData.forEach((data, key) => {
      dep[key] = data
    })
    
    
    e.preventDefault();
    axios.post('http://localhost:3001/departs', dep) 
    .then(res => {
      if(res.status === 201 ){
        setData([...data, res.data])
        form.reset()
      }
    })
  }

  return (
    <>
      <h1>Bo'limlar Ro'xati</h1>
      <Table data={data} options={option} url="depart" del={(id) => {deleteDepart(id);}}/>
      <button className="addbtn" onClick={()=>{setForm(true)}}>+</button>
      <form 
        className={isForm ? 'add show': 'add'}
        name="depart"
        onSubmit={(event) => {addDepart(event)}}
        >
        <span className="add__close" onClick={()=>{setForm(false)}}></span>
        <div className="add__title">Yangi Bo'limlar qoshish</div>
        <input 
          type="text" 
          name="name" 
          placeholder="Bo'lim Nomini kiriting"
          />
        <select 
          name="status">
          <option value="DEFAULT">Xona Xolatini tanlang</option>
          <option value="Ish xolatida">Ish xolatida</option>
          <option value="Bo`lim Tarqatildi">Bo`lim Tarqatildi</option>
        </select>
        <button type="submit" onClick={()=>{setForm(false)}}>Qo'shish</button>
      </form>
    </>
  );
};

export default Depart;