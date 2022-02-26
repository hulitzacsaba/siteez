import React from "react";
import Axios from "axios";
import MDEditor from "@uiw/react-md-editor";

export default function DataHandler() {
  const [value, setValue] = React.useState("Try it out!");
  const [title, setTitle] = React.useState("");
  const [noScript, setNoScript] = React.useState("");
  const [lang, setLang] = React.useState("");
  const [charset, setCharset] = React.useState("");
  const [msgHeader, setMsgHeader] = React.useState("");
  const [msgBody, setMsg] = React.useState("");
  const [msgFooter, setMsgFooter] = React.useState("");

  const sendData = () => {
    setMsgHeader(lang + "," + charset + "," + title + "," + noScript + ",");
    setMsg(value + ",");
    setMsgFooter("");

    function send() {
      Axios.post("http://localhost:3001/getData", {
        header: msgHeader,
        code: msgBody,
        footer: msgFooter,
      }).then((response) => {
        if (response.data === "" || response.data === null) {
          send();
        } else {
          console.log(response.data);
        }
      });
    }

    send();
  };

  return (
    <div>
      <h1>Head options</h1>

      <div className="row">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Website title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="noscript" className="form-label">
            Noscript text
          </label>
          <input
            type="text"
            name="noscript"
            id="noscript"
            className="form-control"
            onChange={(e) => {
              setNoScript(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lang" className="form-label">
            Website language
          </label>
          <select
            name="lang"
            id="lang"
            className="form-select"
            onChange={(e) => {
              setLang(e.target.value);
            }}
            defaultValue="Choose a language..."
          >
            <option value="en">English</option>
            <option value="hu">Hungarian</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="zh">Chinese</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
          <label htmlFor="charset" className="form-label">
            Website character set
          </label>
          <select
            name="charset"
            id="charset"
            className="form-select"
            onChange={(e) => {
              setCharset(e.target.value);
            }}
            defaultValue="Choose a character set..."
          >
            <option value="UTF-8">UTF-8</option>
            <option value="UTF-16">UTF-16</option>
            <option value="Windows-1252">Windows-1252</option>
            <option value="ISO-8859">ISO-8859</option>
          </select>
        </div>
      </div>
      <h1>Body text editor</h1>
      <br />
      <MDEditor height={400} value={value} onChange={setValue} />
      <br />
      <p>{value}</p>
      <button className="btn btn-primary" onClick={sendData}>
        DO SOMETHING
      </button>
    </div>
  );
}
