import MDEditor from "@uiw/react-md-editor";
import React from "react";
import HeadOptions from "../gui/headOptions";

export default function Main() {
  const [value, setValue] = React.useState("Try it out!");
  return (
    <div class="container">
      {HeadOptions()}
      <h1>Body text editor</h1>
      <br />
      <MDEditor height={400} value={value} onChange={setValue} />
      <br />
      <p>{value}</p>
      <button class="btn btn-primary">DO SOMETHING</button>
    </div>
  );
}
