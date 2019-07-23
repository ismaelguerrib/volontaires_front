import React from "react";

export default function DashboardInfos({ user }) {
  return (
    user && (
      <>
        <h3>
          {user.firstname} {user.lastname}
        </h3>
        <h5>{user.email}</h5>
        <img src={user.avatar} alt="your cool avatar" />
      </>
    )
  );
}
