import React from "react";
import Layout from "../../components/Layout/Layout";
import ContactNavigation from "../../components/ContactNavigation/ContactNavigation";
import { Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <Layout navigationContent={<ContactNavigation />}>
      <Outlet />
    </Layout>
  );
}
