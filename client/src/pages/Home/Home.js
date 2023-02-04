import React from "react";
import Layout from "../../components/Layout/Layout";
import AddFriendList from "../../components/AddFriendList/AddFriendList";

export default function Home() {
  return (
    <Layout navigationContent={<>this is navigation</>}>
      {/* This is the main */}
      <AddFriendList/>
    </Layout>
    
  );
}
