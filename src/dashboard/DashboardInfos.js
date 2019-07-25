import React from "react";

export default function DashboardInfos({ user }) {
  console.log(user);
  return (
    user && (
      <>
        <div className="dasboard-profile">
          <img
            className="dashboard-user-picture"
            src={user.avatar}
            alt="your cool avatar"
          />
          <h3 className="dashboard-user-id">
            {user.firstname} {user.lastname}
          </h3>
        </div>
      </>
    )
  );
}
