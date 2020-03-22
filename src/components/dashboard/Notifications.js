import React from "react";
import moment from "moment";
import "moment-timezone";

const Notifications = (props) => {
    const {notifications} = props;
    return (
        <section className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notification</span>
                    <ul className="notifications">
                        {   //rendering each notification to the dom :)
                            notifications && notifications.map(item => {
                                return (
                                    <li key={item.id}>
                                        <span className="pink-text">{item.user} </span>
                                        <span>{item.content}</span>
                                        <div className="grey-text notification-date">
                                            { moment(item.time.toDate()).tz("Asia/Tehran").fromNow() }
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
};


export default Notifications;