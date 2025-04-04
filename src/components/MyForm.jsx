import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState("")

    const [role, setRole] = useState("")

    const handleName = (e) => {
        e.preventDefault()
        console.log("enviando o formulário")
        console.log(name, email, bio, role);


        
    setName("");
    setEmail("");
    setBio("");
    }


    console.log(name)
    console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email)
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="digite seu nome"
            onChange={handleName}
          />
        </div>

        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">adm</option>
          </select>
        </label>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
}

export default MyForm