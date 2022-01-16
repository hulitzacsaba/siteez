import { BrowserRouter, Routes, Route } from "react-router-dom";
import main from "../pages/mainPage";
import prof from "../pages/profile";
import header from  "../gui/header";
import register from  "../pages/register";

export default function routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={header()}>
          <Route index element={main()} />
          <Route path="profile" element={prof()} />
          <Route path="register" element={register()} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
