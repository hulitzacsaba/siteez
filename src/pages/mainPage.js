import MDEditor, {commands} from "@uiw/react-md-editor";
import React from "react";

export default function Main() {
  const [value, setValue] = React.useState("Try it out!");
  return (
    <div class="container">
      <h1>Test</h1>
      <MDEditor
        height={200}
        value={value}
        onChange={setValue}
        commands={commands.group(
          [
            commands.title1,
            commands.title2,
            commands.title3,
            commands.title4,
            commands.title5,
            commands.title6,
          ],
          {
            name: "title",
            groupName: "title",
            buttonProps: { "aria-label": "Insert title" },
          }
        )}
      />
    </div>
  );
}
