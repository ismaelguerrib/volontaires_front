import React from "react";
import { AuthConsumer } from "../auth/Guard";
import Infos from "./DashboardInfos";
import Admin from "./DashboardAdmin";
import Header from "../Component/Header";
export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="dashboard-container">
        <AuthConsumer>
          {({ loginStatus, user }) => {
            return loginStatus === true ? (
              <>
                <div className="dashboard-infos-container">
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
    </>
  );
}
