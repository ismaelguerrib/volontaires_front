import React from "react";
import Request from "./../Component/Request";
import Offer from "./../Component/Offers";

export default function DashboardAdmin({ user }) {
  return (
    <>
      <Request user={user} />
      <Offer user={user} />
      <h2>{user.role}</h2>
    </>
  );
}
