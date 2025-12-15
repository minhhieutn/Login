import React, { Children } from "react";
import "./Layout.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  ReloadOutlined,
  CarOutlined,
  DashboardOutlined,
  LaptopOutlined,
  NotificationOutlined,
  TrademarkCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Collapse,
  DatePicker,
  Dropdown,
  Input,
  Layout,
  Menu,
  theme,
  Form,
  Select,
  AutoComplete,
  Space,
  Button,
} from "antd";
import UserSider from "./Sider";
import SearchBar from "./Search";
import UserProfile from "./UserProfile";
import InputForm from "./InputForm";
import USerTable from "./Table_Form";
import { useState } from "react";
const { Header, Content } = Layout;

const Hheader = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <UserSider collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            background: colorBgContainer,
            height: 64,
            lineHeight: "64px",
          }}
        >
          <Button
            className="Button_Hide_Sider"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              marginRight: 16,
              fontSize: 20,
              width: "auto",
              height: "auto",
            }}
          />
          <div>
            <SearchBar />
          </div>
          <div style={{ display: "flex", justifyContent: "end", flex: 1 }}>
            <UserProfile />
          </div>
        </Header>
        <Layout style={{ padding: "0 24px 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "300px 1fr",
            }}
          >
            <div>
              <p
                style={{
                  color: "black",
                  marginBottom: 0,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                DOMESTIC SHIPPING
              </p>
              <Breadcrumb
                items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
                style={{ margin: "10px 0" }}
              />
            </div>
            <div
              style={{
                height: "100%",
                width: "100%",
                minWidth: 200,
                alignItems: "center",
                justifyContent: "end",
                display: "flex",
              }}
            >
              <Button
                className="Button_Hide_Sider"
                type="primary"
                style={{ width: 200 }}
              >
                Create new Shipment
              </Button>
            </div>
          </div>
          <InputForm />
          <USerTable />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Hheader;
