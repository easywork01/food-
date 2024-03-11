import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div>
      <a href="/">
        <img
          className="h-28 p-2 rounded-full mx-auto"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqad2NojnemZwLvqUCCP7eKKQlFDfDZzZ24Jp9AYzcbxlh4WvK"
        />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between bg-white-100 shadow-lg sm:bg-white-400 text-black-400 font-bold">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">
              {" "}
              <button
                type="button"
                className=" bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Home
              </button>
            </li>
          </Link>

          <Link to="/about">
            <li className="px-2">
              <button
                type="button"
                className=" bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                About Us
              </button>
            </li>
          </Link>

          <Link to="/contact">
            <li className="px-2">
              <button
                type="button"
                className="bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Contact Us
              </button>
            </li>
          </Link>

          <Link to="cart">
            <li className="px-2">
              <button
                type="button"
                className="bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Cart
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
