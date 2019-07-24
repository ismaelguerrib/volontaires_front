import React from "react";
import Request from "./../Component/Request";
import Offer from "./../Component/Offers";
import AcceptedTasks from "./../Pages/AcceptedTasks";
import WhatyouSaidYesTo from "./../Pages/WhatyouSaidYesTo";

export default function DashboardAdmin({ user }) {
  return (
    <>
      <Request user={user} />
      <Offer user={user} />
      <AcceptedTasks user={user} />
      <WhatyouSaidYesTo user={user} />
    </>
  );
}
