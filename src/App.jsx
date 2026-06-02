// import { Productspage } from "./pages/Productspage";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Productspage } from "./pages/Productspage";
import { Women } from "./pages/Women";
import { Men } from "./pages/Men";
import { Jewelery } from "./pages/Jewelery";
const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Productspage" element={<Productspage />} />
        <Route path="/womenpage" element={<Women />} />
        <Route path="/menpage" element={<Men />} />
        <Route path="/jewelerypage" element={<Jewelery />} />
      </Routes>
    </div>
  );
};
export default App;
