import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
