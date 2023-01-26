import React from "react";
import Layout from "../../components/Layout/Layout";
import MessageNavigation from "../../components/MessageNavigation/MessageNavigation";

export default function Home() {
  return (
    <Layout navigationContent={<MessageNavigation />}>
      This is the test page
    </Layout>
  );
}
