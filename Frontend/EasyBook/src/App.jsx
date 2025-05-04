import Navbar from "./assets/Component/Navbar";
import { Outlet } from 'react-router';
import ScrollToTop from "./assets/Component/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <Outlet /> {/* Child routes like Home, About, etc. will render here */}
    </>
  );
}

export default App;
