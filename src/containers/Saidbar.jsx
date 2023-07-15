import Logo from "../assets/imgs/icons/logo.svg";
import { Chart, Ticket, Idea, Contacts, Agents, Articles, Settings, Subscription, Liner} from "../components/Icons";
import SaidbarBtn from "../components/SaidbarBtn";

const Saidbar = () => {
    return (
        <div className="saidbar">
            <div className="saidbar__header">
                <img  src={Logo} alt="" />
                <h2>Dashboard Kit</h2>
            </div>
            <SaidbarBtn img ={<Chart/>} title = "Overview"/>
            <SaidbarBtn img ={<Ticket/>} title = "Tickets"/>
            <SaidbarBtn img ={<Idea/>} title = "Ideas"/>
            <SaidbarBtn img ={<Contacts/>} title = "Contacts"/>
            <SaidbarBtn img ={<Agents/>} title = "Agents"/>
            <SaidbarBtn img ={<Articles/>} title = "Articles"/>
            <Liner/>
            <SaidbarBtn img ={<Settings/>} title = "Settings"/>
            <SaidbarBtn img ={<Subscription/>} title = "Subscription"/>
        </div>

    )

}

export default Saidbar