import React from "react";
import Layout from "../../components/Layout/Layout";
import ContactNavigation from "../../components/ContactNavigation/ContactNavigation";
import { Outlet } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

export default function Contact({ loading = false }) {
  return (
    <Layout navigationContent={<ContactNavigation />}>
      {loading ? <LoadingPage /> : <Outlet />}
    </Layout>
  );
}
