import Navbar from "./assets/Component/Navbar";
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Child routes like Home, About, etc. will render here */}
    </>
  );
}

export default App;
