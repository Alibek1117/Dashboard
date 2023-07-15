import MainContent from "./MainContent"
import Navbar from "./Navbar"
import Overview from "./Overview"


const Mainbar = () => {
    return(
       <div className="mainbar">
        <Navbar/>
        {/* <MainContent/> */}
        <Overview/>
       </div>
    )

}

export default Mainbar