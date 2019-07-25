import React from "react";
import { AuthConsumer } from "../auth/Guard";
import Infos from "./DashboardInfos";
import Admin from "./DashboardAdmin";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>

      <AuthConsumer>
        {({ loginStatus, user }) => {
          return loginStatus === true ? (
            <>
              <div className="dashboard-infos-container">
                <h2 className="dasboard-hello">Hello {user.name}</h2>
                <Infos user={user} />
                <Admin user={user} />
              </div>
            </>
          ) : (
            <div />
          );
        }}
      </AuthConsumer>
    </div>
  );
}
