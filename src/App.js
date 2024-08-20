import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Home from "./components/Home/Home";
import PageNotFound from "./components/Layouts/PageNotFound";

function App() {
  return (
    <BrowserRouter basename='/simulacrum'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
