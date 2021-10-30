import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [user, setUser] = useState([]);

  const loadUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUser(res.data);
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
    { title: "Status", field: "website" },
  ];

  return (
    <div>
      <MaterialTable
        title="MerChants Details"
        data={user}
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setUser([...user, newRow]);
              resolve();
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedData = [...user];
              updatedData[index] = newRow;
              setTimeout(() => {
                setUser(updatedData);
                resolve();
              }, 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRow = [...user];
              updatedRow.splice(index, 1);
              setTimeout(() => {
                setUser(updatedRow);
                resolve();
              }, 2000);
            }),
        }}
        options={{
          search: true,

          exportButton: true,
          addRowPosition: "first",
          actionsColumnIndex: -1,
          rowStyle: {
            background: "#dadddc",
            color: "black",
            fontSize: "bold",
            fontFamily: "inherit",
          },
          headerStyle: {
            backgroundColor: "blue",
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
