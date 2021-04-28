import React, { useState } from "react";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import { app } from "../Base/Base";

const db = app.firestore().collection("ThirdTime");
function Methods() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const Clicked = async () => {
    await db.doc().set({
      name,
      age,
      email,
    });
    setAge("");
    setEmail("");
    setName("");
  };
  return (
    <div>
      <Input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <Button onClick={Clicked}>Summit</Button>
    </div>
  );
}

export default Methods;
