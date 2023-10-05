import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Useraneme from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 flex items-center justify-between uppercase px-4 py-3 border-b border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest text-base font-medium">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Useraneme />
    </header>
  );
}

export default Header;
