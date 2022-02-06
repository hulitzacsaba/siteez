import MDEditor from "@uiw/react-md-editor";
import React from "react";

export default function Main() {
  const [value, setValue] = React.useState("Try it out!");
  return (
    <div class="container">
      <br/>
      <MDEditor height={200} value={value} onChange={setValue} />
    </div>
  );
}
