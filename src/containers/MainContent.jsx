import { Down, Filter, Left, Points, Right, Sort } from "../components/MainIcons"

import Tom from "../assets/imgs/tom.png"
import Matt from '../assets/imgs/matt.png'
import Robert from '../assets/imgs/robert.png'
import Christian from '../assets/imgs/christian.png'
import Henry from '../assets/imgs/henry.png'
import Chris from '../assets/imgs/chris.png'
import Sam from '../assets/imgs/sam.png'
import Steve from '../assets/imgs/steve.png'
import Low from '../assets/imgs/low.svg'
import Normal from '../assets/imgs/normal.svg'
import High from '../assets/imgs/high.svg'

const MainContent = () => {
    return (
        <div className="main">
            <div className="main__head">
                <h2 className="ticket">All tickets</h2>
                <div className="head__right">
                    <Sort />
                    <h3 className="sort">Sort</h3>
                    <Filter />
                    <h3>Filter</h3>
                </div>
            </div>

            <div className="sub__head">
                <p className="d1">Ticket details</p>
                <p className="d2">Customer name</p>
                <p className="d3">Date</p>
                <p className="d4">Priority</p>

            </div>
            <div className="main__main">
                <div className="main__box">
                    <div className="details">
                        <img src={Tom} alt="" />
                        <div>
                            <h3 className="detail__title">Contact Email not Linked</h3>
                            <p className="detail__subtitle">Updated 1 day ago</p>
                        </div>
                    </div>
                    <div className="customer">
                        <h3 className="detail__title">Tom Cruise</h3>
                        <p className="detail__subtitle">on 24.05.2019</p>
                    </div>
                    <div className="date">
                        <h3 className="detail__title">May 26, 2019</h3>
                        <p className="detail__subtitle">6:30 PM</p>
                    </div>
                    <span className="priority"><img src={High} alt="" /></span>
                    <Points />
                </div>
                <div className="main__box">
                    <div className="details">
                        <img src={Matt} alt="" />
                        <div>
                            <h3 className="detail__title">Adding Images to Featured Posts</h3>
                            <p className="detail__subtitle">Updated 1 day ago</p>
                        </div>
                    </div>
                    <div className="customer">
                        <h3 className="detail__title">Matt Damon</h3>
                        <p className="detail__subtitle">on 24.05.2019</p>
                    </div>
                    <div className="date">
                        <h3 className="detail__title">May 26, 2019</h3>
                        <p className="detail__subtitle">8:00 AM</p>
                    </div>
                    <span className="priority"><img src={Low} alt="" /></span>
                    <Points />
                </div>
                <div className="main__box">
                    <div className="details">
                        <img src={Robert} alt="" />
                        <div>
                            <h3 className="detail__title">When will I be charged this month?</h3>
                            <p className="detail__subtitle">Updated 1 day ago</p>
                        </div>
                    </div>
                    <div className="customer">
                        <div>
                            <h3 className="detail__title">Robert Downey</h3>
                            <p className="detail__subtitle">on 24.05.2019</p>
                        </div>
                    </div>
                    <div className="date">
                        <h3 className="detail__title">May 26, 2019</h3>
                        <p className="detail__subtitle">7:30 PM</p>
                    </div>
                    <span className="priority"><img src={High} alt="" />{/* <High /> */}</span>
                    <Points />
                </div>
                <div className="main__box">
                    <div className="details">
                        <img src={Christian} alt="" />{/* <Christian /> */}
                        <div>
                            <h3 className="detail__title">Payment not going through</h3>
                            <p className="detail__subtitle">Updated 2 days ago</p>
                        </div>
                    </div>
                    <div className="customer">
                        <h3 className="detail__title">Christian Bale</h3>
                        <p className="detail__subtitle">on 24.05.2019</p>
                    </div>
                    <div className="date">
                        <h3 className="detail__title">May 25, 2019</h3>
                        <p className="detail__subtitle">5:00 PM</p>
                    </div>
                    <span className="priority"><img src={Normal} alt="" />{/* <Normal /> */}</span>
                    <Points />
                </div>
                <div className="main__box">
                    <div className="details">
                        <img src={Henry} alt="" />{/* <Henry/> */}
                        <div>
                            <h3 className="detail__title">Unable to add replies</h3>
                            <p className="detail__subtitle">Updated 2 day ago</p>
                        </div>
                    </div>
                    <div className="customer">
                        <h3 className="detail__title">Henry Cavil</h3>
                        <p className="detail__subtitle">on 24.05.2019</p>
                    </div>
                    <div className="date">
                        <h3 className="detail__title">May 25, 2019</h3>
                        <p className="detail__subtitle">4:00 PM</p>
                    </div>
                    <span className="priority"><img src={High} alt="" />{/* <High /> */}</span>
                    <Points />
                </div>
                <div className="main__box">
                    <div className="details">
                        <img src={Chris} alt="" />{/* <Chris/> */}
                        <div>
                            <h3 className="detail__title">Downtime since last week</h3>
                            <p className="detail__subtitle">Updated 3 day ago</p>
                        </div>
                    </div>
                    <div className="customer">
                        <h3 className="detail__title">Chris Evans</h3>
                        <p className="detail__subtitle">on 23.05.2019</p>
                    </div>
                    <div className="date">
                        <h3 className="detail__title">May 25, 2019</h3>
                        <p className="detail__subtitle">2:00 PM</p>
                    </div>
                    <span className="priority"><img src={Normal} alt="" />{/* <Normal /> */}</span>
                    <Points />
                </div>
                <div className="main__box">
                    <div className="details">
                        <img src={Sam} alt="" />{/* <Sam /> */}
                        <div>
                            <h3 className="detail__title">Referral Bonus</h3>
                            <p className="detail__subtitle">Updated 4 day ago</p>
                        </div>
                    </div>
                    <div className="customer">
                        <h3 className="detail__title">Sam Smith</h3>
                        <p className="detail__subtitle">on 22.05.2019</p>
                    </div>
                    <div className="date">
                        <h3 className="detail__title">May 25, 2019</h3>
                        <p className="detail__subtitle">11:30 AM</p>
                    </div>
                    <span className="priority"><img src={Low} alt="" />{/* <Low /> */}</span>
                    <Points />
                </div>
                <div className="main__box">
                    <div className="details">
                        <img src={Steve} alt="" />{/* <Steve/> */}
                        <div>
                            <h3 className="detail__title">How do I change my password?</h3>
                            <p className="detail__subtitle">Updated 6 day ago</p>
                        </div>
                    </div>
                    <div className="customer">
                        <h3 className="detail__title">Steve Rogers</h3>
                        <p className="detail__subtitle">on 21.05.2019</p>
                    </div>
                    <div className="date">
                        <h3 className="detail__title">May 24, 2019</h3>
                        <p className="detail__subtitle">1:00 PM</p>
                    </div>
                    <span className="priority"><img className="" src={Normal} alt="" /></span>
                    <Points />
                </div>
                <div className="main__box last__box">
                   
                    <p className="detail__subtitle">Rows per page: <span className="eight">8</span></p>
                        <Down/>
                    <p className="detail__subtitle oneto">1-8 of 1240</p>
                    <Left/>
                    <Right/>
                </div>
            </div>

        </div>
    )
}

export default MainContent