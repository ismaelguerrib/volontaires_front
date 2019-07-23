import React from "react";
import Request from "./../Component/Request";

export default function DashboardAdmin({ user }) {
  return (
    <>
      <Request user={user} />
    </>
  );
}
