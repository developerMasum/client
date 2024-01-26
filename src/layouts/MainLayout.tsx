import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/home/Sidebar";
import { Header, Content } from "antd/lib/layout/layout";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SearchBar from "../components/home/SearchBar";

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100%",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#1C2E4C",
            color: "white",
          }}
        >
          <div style={{ flex: 1 }}>
            <SearchBar />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              style={{ backgroundColor: "#87d068", marginRight: "8px" }}
              icon={<UserOutlined />}
            />
            <Button style={{ marginRight: "16px" }}>Logout</Button>
          </div>
        </Header>

        <Content style={{ margin: "64px 0 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              backgroundColor: "#1C2E4C",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
