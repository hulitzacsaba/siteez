import React from "react";
import DataHandler from "../components/mainPageEditorLogic";

export default function Main() {
  return (
    <div className="container">
      {DataHandler()}
    </div>
  );
}
