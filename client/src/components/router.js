import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/mainPage";
import prof from "../pages/profile";
import header from  "../gui/header";
import register from  "../pages/register";
import faq from "../pages/faq";

export default function routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={header()}>
          <Route index element={Main()} />
          <Route path="profile" element={prof()} />
          <Route path="register" element={register()} />
          <Route path="faq" element={faq()} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
