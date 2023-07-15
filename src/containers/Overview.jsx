import { Tire } from "../components/OverIcon"

import Crd1  from "../assets/imgs/Unresolve.png"
import Crd2  from "../assets/imgs/Tasks.png"

  const Overview = ()=>{
    return(
       <div className="overview">
        <div className="ov__cards">
            <div className="ov__card">
                <p className="card__title">Unresolved</p>
                <h1 className="number">60</h1>
            </div>
            <div className="ov__card">
                <p className="card__title">Overdue</p>
                <h1 className="number">16</h1>
            </div>
            <div className="ov__card">
                <p className="card__title">Open</p>
                <h1 className="number">43</h1>
            </div>
            <div className="ov__card">
                <p className="card__title">On hold</p>
                <h1 className="number">64</h1>
            </div>
        </div>
        <div className="trends">
            <div className="left">
                <h3 className="left__title">Today’s trends</h3>
                <div className="left__subtitle">
                    <p>as of 25 May 2019, 09:41 PM</p>
                    <span>
                        <Tire/>
                        <p className="today">Today</p>
                        <Tire/>
                        <p>Yesterday</p>
                    </span>
                </div>
            </div>
            <div className="right">
                <div className="ov__box">
                    <p className="box__title">Resolved</p>
                    <span className="box__number">449</span>
                </div>
                <div className="ov__box">
                    <p className="box__title">Resolved</p>
                    <span className="box__number">426</span>
                </div>
                <div className="ov__box">
                    <p className="box__title">Average first response time</p>
                    <span className="box__number">33m</span>
                </div>
                <div className="ov__box">
                    <p className="box__title">Average response time</p>
                    <span className="box__number">3h 8m</span>
                </div>
                <div className="ov__box">
                    <p className="box__title">Resolution within SLA</p>
                    <span className="box__number">94%</span>
                </div>
            </div>
        </div>
        <div className="ov__bottom">   
            <div className="bot__left">
                <img src={Crd1} alt="" />
            </div>  
            <div className="bot__right">
                 <img src={Crd2} alt="" />
            </div>      
                
               
        </div>
       </div>
    )
  }

  export default Overview