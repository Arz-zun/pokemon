import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./component/pages/Card";
import MainPage from "./component/pages/MainPage";
import Layout from "./component/pages/Layout";
import Myteam from "./component/pages/Myteam";

function App() {
  return (
    <main>
      {/* <MainPage /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/myteam" element={<Myteam />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
