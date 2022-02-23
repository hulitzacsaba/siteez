import React from "react";

export default function HeadOptions() {
  return (
    <div>
      <h1>Head options</h1>

      <div class="row">
        <div class="col-md-6">
          <label for="title" class="form-label">
            Website title
          </label>
          <input type="text" name="title" id="title" class="form-control" />
          <label for="noscript" class="form-label">
            Noscript text
          </label>
          <input
            type="text"
            name="noscript"
            id="noscript"
            class="form-control"
          />
        </div>
        <div class="col-md-6">
          <label for="lang" class="form-label">
            Website language
          </label>
          <select name="lang" id="lang" class="form-select">
            <option selected>Choose a language...</option>
            <option value="en">English</option>
            <option value="hu">Hungarian</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="zh">Chinese</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
          <label for="charset" class="form-label">
            Website character set
          </label>
          <select name="charset" id="charset" class="form-select">
            <option selected>Choose a language...</option>
            <option value="UTF-8">UTF-8</option>
            <option value="UTF-16">UTF-16</option>
            <option value="Windows-1252">Windows-1252</option>
            <option value="ISO-8859">ISO-8859</option>
          </select>
        </div>
      </div>
    </div>
  );
}
