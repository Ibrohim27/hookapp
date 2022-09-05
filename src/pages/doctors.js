import React from "react";
import Table from "../components/table";

const Doctors = () => {
  const data = [
    {
      name: "Jasmina",
      email: "lesie.alexander@example.com",
      date: "10/10/2020",
      resep: "09:15-09:45am",
      spec: "Nevrolog",
      depart: "Nevrologiya",
    },
    {
      name: "Jasmina",
      email: "lesie.alexander@example.com",
      date: "10/10/2020",
      resep: "09:15-09:45am",
      spec: "Nevrolog",
      depart: "Nevrologiya",
    },
    {
      name: "Ismoil",
      email: "lesie.alexander@example.com",
      date: "10/10/2020",
      resep: "09:15-09:45am",
      spec: "Nevrolog",
      depart: "Nevrologiya",
    },
  ];

  let option = {
    name: "F.I.O",
    email: "Email",
    date: "Sanasi",
    resep: "Qabul vaqti",
    spec: "Mutaxasisligi",
    depart: "Bo'limi",
  };
  return (
    <>
      <h1>Doctorlar Ro'yxati</h1>
      <Table options={option} data={data} />
    </>
  );
};

export default Doctors;
