import React from "react";
import { AuthConsumer } from "../auth/Guard";
import Infos from "./DashboardInfos";
import Admin from "./DashboardAdmin";
import Chatroom from "../Chatroom";

export default function Dashboard() {
  return (
    <div>
      <h1 className="title">Dashboard</h1>

      <AuthConsumer>
        {({ loginStatus, user }) => {
          return loginStatus === true ? (
            <>
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
