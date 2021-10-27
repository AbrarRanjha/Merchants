import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [user, setUser] = useState([]);
  const loadUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(res.data);
    console.log("hiii");
  };
  useEffect(() => {
    loadUser();
  }, []);
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    {
      title: "Phone",
      field: "phone",
    },
    { title: "Role", field: "website" },
  ];

  // const data = [
  //   { id: 0, name: "Ali", email: "hello@gmail.com", status: 0, role: "admin" },
  //   {
  //     id: 1,
  //     name: "Javed",
  //     email: "hello@gmail.com",
  //     status: 1,
  //     role: "user",
  //   },
  //   {
  //     id: 2,
  //     name: "Awais",
  //     email: "hello@gmail.com",
  //     status: 0,
  //     role: "user",
  //   },
  //   {
  //     id: 3,
  //     name: "Awais",
  //     email: "hello@gmail.com",
  //     status: 1,
  //     role: "user",
  //   },
  //   {
  //     id: 4,
  //     name: "Awais",
  //     email: "hello@gmail.com",
  //     status: 1,
  //     role: "user",
  //   },
  //   {
  //     id: 4,
  //     name: "Awais",
  //     email: "hello@gmail.com",
  //     status: 1,
  //     role: "user",
  //   },
  //   {
  //     id: 4,
  //     name: "Awais",
  //     email: "hello@gmail.com",
  //     status: 1,
  //     role: "user",
  //   },
  //   {
  //     id: 4,
  //     name: "Awais",
  //     email: "hello@gmail.com",
  //     status: 1,
  //     role: "user",
  //   },
  // ];
  return (
    <div>
      <MaterialTable
        title="MerChants Details"
        data={user}
        columns={columns}
        options={{
          search: true,
          //   filtering: true,
          exportButton: true,
          rowStyle: {
            background: "blue",
            color: "white",
            fontSize: "bold",
            fontFamily: "inherit",
          },
          headerStyle: {
            backgroundColor: "green",
            color: "white",
            fontStyle: "italic",
            fontSize: "20px",
            fontFamily: "sans-serif",
            textTransform: "uppercase ",
          },
        }}
        style={{ overflow: "scroll" }}
      />
    </div>
  );
};

export default Table;
