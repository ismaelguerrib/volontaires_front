import React from "react";
import { AuthConsumer } from "../auth/Guard";
import Infos from "./DashboardInfos";
import Admin from "./DashboardAdmin";

export default function Dashboard() {
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <p>Yo, welcome to your private page</p>
      <AuthConsumer>
        {({ user }) => {
          return (
            <>
              <Infos user={user} />
              <Admin user={user} />
            </>
          );
        }}
      </AuthConsumer>
    </div>
  );
}
