import React from "react";
import { AuthConsumer } from "../auth/Guard";
import Infos from "./DashboardInfos";
import Admin from "./DashboardAdmin";
import Chatroom from "../Chatroom";

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
              <h2>Hello {user.firstname}</h2>
              <Infos user={user} />
              <Admin user={user} />
              <Chatroom user={user} />
            </>
          ) : (
            <div />
          );
        }}
      </AuthConsumer>
    </div>
  );
}
