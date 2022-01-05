import { BrowserRouter, Routes, Route } from "react-router-dom";
import main from '../pages/mainPage';
import prof from '../pages/profile';

export default function routing() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element="{<main>}" /> //itt tartottam
      </Routes>
    </BrowserRouter>
  );
}
