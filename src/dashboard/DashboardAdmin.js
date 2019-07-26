import React from "react";
import Request from "./../Component/Request";
import Offer from "./../Component/Offers";
import AcceptedTasks from "./../Pages/AcceptedTasks";
import WhatyouSaidYesTo from "./../Pages/WhatyouSaidYesTo";

export default function DashboardAdmin({ user }) {
  return (
    <>
      <div className="requests-big-container">
        <h2 className="dashboard-title"> Your needs for help :</h2>
        <div className="dashboard-request-big-container">
          <Request user={user} />
        </div>
      </div>
      <div className="requests-big-container">
        <h2 className="dashboard-title"> Your offers for help :</h2>
        <div className="dashboard-request-big-container">
          <Offer user={user} />
        </div>
      </div>
      <div className="accept-tasks-big-container">
        <h2 className="dashboard-title"> Notifications :</h2>
        <AcceptedTasks user={user} />
      </div>
      <div className="accepted-tasks-big-container">
        <h2 className="dashboard-title"> Your next Volunteers missions :</h2>
        <WhatyouSaidYesTo user={user} />
      </div>
    </>
  );
}
