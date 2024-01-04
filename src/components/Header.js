import { Link } from "react-router-dom";

const Title = ()=>{
    return (
      <a href="/">
        <img className = "h-28 p-2"
        alt = "logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqad2NojnemZwLvqUCCP7eKKQlFDfDZzZ24Jp9AYzcbxlh4WvK"
      />
      </a>
    );
};

const Header = ()=>{
    return (
     <div className="flex justify-between bg-green-100 shadow-lg sm:bg-red-400">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
              <Link to="/">
              <li className="px-2" >Home</li>
              </Link>
              
              <Link to="/about">
              <li className="px-2" >About Us</li>
              </Link>

             <Link to="/contact"> 
             <li className="px-2" >Contact Us</li>
             </Link>
             
              <Link to="cart">
              <li className="px-2" >Cart</li>
              </Link>
          </ul>
        </div>
     </div>
    );
  }

export default Header;
