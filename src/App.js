import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  const [display, setDisplay] = useState("landing");
  const [responseMsg, setResponseMsg] = useState(undefined);
  const [btnStatus, setBtnStatus] = useState(false);
  const [email, setEmail] = useState({
    name: undefined,
    email: undefined,
    data: undefined,
  });

  const handleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setResponseMsg(undefined);
    setBtnStatus(false);
    setEmail((prev) => ({ ...prev, [id]: value }));
  };

  const sendEmail = async () => {
    const data = await postData();
    if (data.status === 200) {
      setBtnStatus(true);
    }
    setResponseMsg(data.result);
  };

  const postData = async (
    url = "https://j3sjb05oqk.execute-api.sa-east-1.amazonaws.com/dev/sendMail",
    data = email
  ) => {
    let result;
    let status;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      status = response.status;
      result = await response.json();
    } catch (e) {
      console.log(e);
    }

    return { result, status };
  };

  return (
    <div className="App">
      <Navbar display={display} setDisplay={setDisplay} />
      {display === "landing" && <Landing setDisplay={setDisplay} />}
      {display === "about" && <About />}
      {display === "experience" && <Experience />}
      {display === "projects" && <Projects />}
      {display === "contact" && (
        <Contact
          btnStatus={btnStatus}
          responseMsg={responseMsg}
          handleChange={handleChange}
          sendEmail={sendEmail}
        />
      )}
    </div>
  );
}

export default App;
