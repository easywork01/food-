import { Link } from "react-router-dom";

const Title = ()=>{
    return (
      <a href="/">
        <img className = "logo"
        alt = "logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqad2NojnemZwLvqUCCP7eKKQlFDfDZzZ24Jp9AYzcbxlh4WvK"
      />
      </a>
    );
};

const Header = ()=>{
    return (
     <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
              <Link to="/">
              <li>Home</li>
              </Link>
              
              <Link to="/about">
              <li>About Us</li>
              </Link>

             <Link to="/contact"> 
             <li>Contact Us</li>
             </Link>
             
              <Link to="cart">
              <li>Cart</li>
              </Link>
          </ul>
        </div>
     </div>
    );
  }

export default Header;
