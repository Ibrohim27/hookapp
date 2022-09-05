import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../components/table";

const Rooms = () => {
  const [isForm, setForm] = useState(false);
  const [data, setData] = useState([]);

  const [departs, setDeparts] = useState([]);

  let option = {
    id: "ID",
    name: "Xona Raqami",
    type: "Turi",
    floor: "Qavat",
    depart: "Bo'limi",
    status: "Xonalar Xolati",
  };

  useEffect(() => {
    axios.get("http://localhost:3001/rooms").then((res) => {
      if (res.status === 200) setData(res.data);
    });

    axios.get("http://localhost:3001/departs").then((res) => {
      if (res.status === 200) {
        setDeparts(res.data);
      }
    });
  }, []);

  const deleteRoom = (index) => {
    axios.delete(`http://localhost:3001/rooms/${index}`).then((res) => {
      if (res.status === 200) {
        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        setData([...before, ...after]);
      }
    });
  };

  const addRoom = (e) => {
    let form = document.forms.rooms;
    let formData = new FormData(form);
    let rooms = {};
    formData.forEach((data, key) => {
      rooms[key] = data;
    });

    e.preventDefault();
    axios.post("http://localhost:3001/rooms", rooms).then((res) => {
      if (res.status === 201) {
        setData([...data, res.data]);
        form.reset();
      }
    });
  };

  const parseData = (data) => {
    data = data.map((room) => {
      const index = departs.findIndex((dep) => dep.id == room.depart);
      if (departs[index]) {
        room.depart = departs[index].name;
      }

      return room;
    });

    return data;
  };

  return (
    <>
      <h1>Xonalar Ro'xati</h1>
      <Table
        data={parseData(data)}
        options={option}
        url="rooms"
        del={(id) => {
          deleteRoom(id);
        }}
      />
      <button
        className="addbtn"
        onClick={() => {
          setForm(true);
        }}
      >
        +
      </button>
      <form
        name="rooms"
        className={isForm ? "add show" : "add"}
        onSubmit={(event) => {
          addRoom(event);
        }}
      >
        <span
          className="add__close"
          onClick={() => {
            setForm(false);
          }}
        ></span>
        <div className="add__title">Yangi xona qoshish</div>
        <input type="number" name="name" placeholder="Xona Raqami" />
        <select
          name="type"
          placeholder="Xona Turi"
          defaultValue={"none"}
          required
        >
          <option value="none" disabled>
            Xona Turi
          </option>
          <option value="Muolaja Xonasi">Muolaja Xonasi</option>
          <option value="Shifokor Xonasi">Shifokor Xonasi</option>
          <option value="Taminot Xonasi">Taminot Xonasi</option>
          <option value="Dam olish Xonasi">Dam olish Xonasi</option>
        </select>
        <input type="number" name="floor" placeholder="Qavatni kiriting" />
        <select name="depart" defaultValue={"none"}>
          <option value="none" disabled>
            Bo'limni kiriting
          </option>
          {departs.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <select name="status" defaultValue={"none"}>
          <option value="none">Xona Xolarini tanlang</option>
          <option value="Bo`sh">Bo`sh</option>
          <option value="Band">Band</option>
          <option value="Remont qilinvotti">Remont qilinvotti</option>
        </select>
        <button
          type="submit"
          onClick={() => {
            setForm(false);
          }}
        >
          Qo'shish
        </button>
      </form>
    </>
  );
};

export default Rooms;
