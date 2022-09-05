import React from 'react'
import Stat from '../components/home/stat'
import Table from '../components/table'

const Home = () => {

    const pdata = [
        {
          name: "Aziza Azizova",
          email: 'azizye@gmial.com',
          doctor: 'MR.Sardor',
          reason: 'Boshi ogrigi',
          date: '27/07/2021'
        },
        {
          name: "Ahror Sadillayev",
          email: 'Ahror@gmail.com',
          doctor: 'MR.Avatar',
          reason: 'Isitma',
          date: '30/01/2022'
        },
        {
          name: "Aziza Azizova",
          email: 'azizye@gmial.com',
          doctor: 'MR.Sardor',
          reason: 'Boshi ogrigi',
          date: '27/07/2021'
        },
      ];
    
      let poption = {
        name: "F.I.O",
        email: "Email",
        doctor: "Davolayotgan Shifokori",
        reason: "Tashrif Sababi",
        date: "Tashrif sanasi",
      };



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

    return(
        <>
            <Stat />
            <Table title="Bemorlar Ro'yhati"  data={pdata} options={poption}/>
            <Table title="Shifokorlar" data={data} options={option}/>
        </>
    )
}

export default Home