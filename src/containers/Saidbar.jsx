import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/imgs/icons/logo.svg";
import {
  Chart,
  Ticket,
  Idea,
  Contacts,
  Agents,
  Articles,
  Settings,
  Subscription,
  Liner,
} from "../components/Icons";
import SaidbarBtn from '../components/SaidbarBtn'

const Saidbar = ({navName, setNavName} ) => {
    // console.log("ssssss", navName, setNavName);
    

    const handleChange = (e) => {
        const text = e.target.innerText
         setNavName(text)
    }
    
    let data = [
        {
            id:1,
            title: "Overview",
            img : <Chart />,
        },
        {
            id:1,
            title: "Overview",
            img : <Chart />,
        },
        {
            id:1,
            title: "Overview",
            img : <Chart />,
        },
        {
            id:1,
            title: "Overview",
            img : <Chart />,
        },
    ]

  return (
    <div className="saidbar">
      <div className="saidbar__header">
        <img src={Logo} alt="" />
        <h2>Dashboard Kit</h2>
      </div>

     
{
    data.map(el => (
        console.log(el)
    ))
}
      <NavLink onClick={handleChange} to='/' className="btn saidbar-btn">
        <span className="img__btn">{<Chart/>}</span>
        <span>Overview</span>
      </NavLink>
      <NavLink onClick={handleChange} to='/tickets' className="btn saidbar-btn">
        <span className="img__btn">{<Ticket/>}</span>
        <span>Ticket</span>
      </NavLink>
      <NavLink onClick={handleChange} to='/ideas' className="btn saidbar-btn">
        <span className="img__btn">{<Idea/>}</span>
        <span>Ideas</span>
      </NavLink>
      <NavLink onClick={handleChange} to='/contacts' className="btn saidbar-btn">
        <span className="img__btn">{<Contacts/>}</span>
        <span>Contacts</span>
      </NavLink>
      <NavLink onClick={handleChange} to='/agents' className="btn saidbar-btn">
        <span className="img__btn">{<Agents/>}</span>
        <span>Agents</span>
      </NavLink>
      <NavLink onClick={handleChange} to='/articles' className="btn saidbar-btn">
        <span className="img__btn">{<Articles/>}</span>
        <span>Articles</span>
      </NavLink>
      <Liner />
      <NavLink onClick={handleChange} to='/settings' className="btn saidbar-btn">
        <span className="img__btn">{<Settings/>}</span>
        <span>Settings</span>
      </NavLink>
      <NavLink onClick={handleChange} to='/subscription' className="btn saidbar-btn">
        <span className="img__btn">{<Subscription/>}</span>
        <span>Subscription</span>
      </NavLink>

      {/* <SaidbarBtn navName={navName} setNavName={setNavName} link="/"  img={<Chart />} title="Overview" />
      <SaidbarBtn navName={navName} setNavName={setNavName} link="/tickets"   img={<Ticket />} title="Tickets" />
      <SaidbarBtn navName={navName} setNavName={setNavName} link="/ideas" img={<Idea />} title="Ideas" />
      <SaidbarBtn navName={navName} setNavName={setNavName} link="/contacts" img={<Contacts />} title="Contacts" />
      <SaidbarBtn navName={navName} setNavName={setNavName} link="/agents" img={<Agents />} title="Agents" />
      <SaidbarBtn navName={navName} setNavName={setNavName} link="/articles" img={<Articles />} title="Articles" />
      <Liner />
      <SaidbarBtn navName={navName} setNavName={setNavName} link="/settings" img={<Settings />} title="Settings" />
      <SaidbarBtn navName={navName} setNavName={setNavName} link="/subscription" img={<Subscription />} title ="Something" /> */}
    </div>
  );
};

export default Saidbar;
