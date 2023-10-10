import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Useraneme from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 uppercase bg-yellow-400 border-b border-stone-200 sm:px-6 ">
      <Link to="/" className="text-base font-medium tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Useraneme />
    </header>
  );
}

export default Header;
