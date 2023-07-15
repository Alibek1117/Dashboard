import { Search, Notification, Line } from "../components/NavIcons";
import NavMan from "../assets/imgs/photo.png";

const Navbar = ()=>{
    return(
        <div className="navbar">
            <h3 className="nav__title">Tickets</h3>
            <div className="right">
                <a href="#"><Search/></a>
                <a href="#"> <Notification/></a>
               
                <Line/>
                <p className="jones">Jones Ferdinand</p>
                <img src={NavMan} alt="man" />
            </div>
        </div>
    )
}

export default Navbar