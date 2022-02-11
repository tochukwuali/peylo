import { useScrollHeight } from "../hooks/useScrollHeight";

const Header = () => {
  const scroll = useScrollHeight()
  return (
    <div
      className={`${
        scroll
          ? "bg-gray-800 fixed top-0 w-full z-30 text-gray-50"
          : "bg-gray-50 text-gray-800"
      } flex justify-between items-center px-24 h-20`}
    >
      <div className="relative">
        <a href="/" className="font-bold text-3xl">
          Peylo
        </a>
      </div>
      <div>
        <p className="font-bold text-xl">Toggle</p>
      </div>
    </div>
  );
};

export default Header;
