import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";


const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  const removeData= (index)=>{
    let arr= data;
    arr.splice(index,1);
    setData([...arr])
  }
  
  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="error">
            Add
          </Button>
        </Stack>
      </div>

      {/* Data */}
      <div className="data">
        <div className="data_head">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>

        {data.map((element, index) => {
          return (
            <div key={index} className="feild_data">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button onClick={()=>removeData(index)} variant="outlined" color="error">
                <DeleteIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
