import React from "react";

const Contact = ({ handleChange, sendEmail, responseMsg, btnStatus }) => (
  <div className="textComponentContainer slideUp">
    <div>
      <h1 className="title textComponentTitle">Contacto</h1>
      <p>Dejame tu mensaje!</p>
    </div>
    <div className="textContainer">
      <div className="inputContainer">
        <label form="name">
          <p>Tu nombre</p>
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="formInput"
          id="name"
        ></input>
      </div>
      <div className="inputContainer">
        <label form="email">
          <p>Tu mail</p>
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className="formInput"
          id="email"
        ></input>
      </div>
      <div className="inputContainer ">
        <label form="message">
          <p>Mensaje</p>
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="message"
          className="formInput message"
          id="data"
        ></input>
      </div>
      <div className="buttonContainer">
        <button disabled={btnStatus} className="sendButton" onClick={sendEmail}>
          Enviar
        </button>
      </div>
      {responseMsg !== undefined && <p>{responseMsg.esp}</p>}
    </div>
  </div>
);

export default Contact;
