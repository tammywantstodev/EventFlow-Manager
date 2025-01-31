import React from "react";
import { LuBellRing } from "react-icons/lu";

const NotificationBell = ({ daysRemaining }) => {
    let bellColor = "D3D3D3"; // Default gray color

    if (daysRemaining === 3) bellColor = "green";
    if (daysRemaining === 2) bellColor = "yellow";
    if (daysRemaining === 1) bellColor = "orange";
    if (daysRemaining === 0) bellColor = "red"; 

    return (
        <div className="notification-bell">
            <LuBellRing color={bellColor} size={44} />
            {daysRemaining <= 3 && (
                <span className="notification-text">
                    {daysRemaining === 0 ? "Today is the event!" : `${daysRemaining} days left!`}
                </span>
            )}
        </div>
    );
};

export default NotificationBell;
