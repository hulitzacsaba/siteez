import { BrowserRouter, Routes, Route } from "react-router-dom";
import main from "../pages/mainPage";
import prof from "../pages/profile";
import header from  "../gui/header";

export default function routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={header()}>
          <Route index element={main()} />
          <Route path="profile" element={prof()} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
