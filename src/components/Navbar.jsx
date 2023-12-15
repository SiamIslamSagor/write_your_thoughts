import { IoHomeSharp } from "react-icons/io5";
import { PiNoteFill } from "react-icons/pi";

const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "Home",
      icon: <IoHomeSharp />,
    },
    {
      path: "/about",
      name: "About",
      icon: <PiNoteFill />,
    },
    {
      path: "/login",
      name: "Login",
      icon: <PiNoteFill />,
    },
  ];

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Navbar</h1>
    </div>
  );
};

export default Navbar;
