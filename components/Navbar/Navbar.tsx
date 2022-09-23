import Link from "next/link";
import Image from "next/image";
import Logo from "../../utils/tiktik-logo.png";
const Navbar = () => {
  return (
    <div className="w-full justify-between flex items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href={"/"}>
        <div className="w-[200px] md:w-[130px] ">
          <Image className="cursor-pointer" src={Logo} alt="tiktik" layout="responsive"/>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
