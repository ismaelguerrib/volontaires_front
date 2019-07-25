import React from "react";

export default function DashboardInfos({ user }) {
  console.log(user);
  return (
    user && (
      <>
        <h3 className="dashboard-user-id">
          {user.firstname} {user.lastname}
        </h3>
        <h5 className="dashboard-user-id">{user.email}</h5>
        <img
          className="dashboard-user-picture"
          src={user.avatar}
          alt="your cool avatar"
        />
      </>
    )
  );
}
