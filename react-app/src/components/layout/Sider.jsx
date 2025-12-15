import "./Layout.css";
import "./Layout.css";
import {
  CarOutlined,
  DashboardOutlined,
  TrademarkCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";

import { Button } from "antd";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
const UserSider = ({ collapsed, onCollapse }) => {
  const item1 = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "trackShipment",
      icon: <TrademarkCircleOutlined />,
      label: "Track Shipment",
    },
  ];
  const item2 = [
    {
      key: "domesticShipping",
      icon: <CarOutlined />,
      label: "Domestic Shipping",
      children: [
        {
          key: "createAShipment",

          label: "Create a Shipment",
        },
        {
          key: "shipmentList",

          label: "Shipment List",
        },
      ],
    },
    {
      key: "internationalShipping",
      icon: <CarOutlined />,
      label: "International Shipping",
      children: [
        {
          key: "createAShipment2",

          label: "Create a Shipment",
        },
        {
          key: "shipmentList2",

          label: "Shipment List",
        },
      ],
    },
  ];
  const item3 = [
    {
      key: "startaNewClaim",
      icon: <CarOutlined />,
      label: "Start a new Claim",
    },
    {
      key: "yourClaim",
      icon: <CarOutlined />,
      label: "Your Claims",
    },
  ];
  const item4 = [
    {
      key: "yourProfile",
      icon: <CarOutlined />,
      label: "Your Profile",
    },
    {
      key: "shippingAddress",
      icon: <CarOutlined />,
      label: "Shipping Address",
    },
  ];
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={250}
      style={{ background: "#fff", fontSize: 15 }}
    >
      <div
        style={{
          marginLeft: 20,
          marginTop: 10,
          fontSize: 30,
          fontWeight: "bold",
          color: "#1890ff",
        }}
      >
        PCS
      </div>
      <div className="Sider_form">
        <p style={{ opacity: collapsed ? 0 : 1 }} className="Sider_text">
          PLATFORM
        </p>
        <Menu
          className="Sider_item"
          mode="inline"
          defaultSelectedKeys={["create-shipment"]}
          defaultOpenKeys={["shipment"]}
          items={item1}
          onClick={({ key }) => {
            console.log("Clicked:", key);
          }}
        />
      </div>
      <div className="Sider_form">
        <p style={{ opacity: collapsed ? 0 : 1 }} className="Sider_text">
          SHIPMENT
        </p>
        <Menu
          className="Sider_item"
          mode="inline"
          items={item2}
          onClick={({ key }) => {
            console.log("Clicked:", key);
          }}
        />
      </div>
      <div className="Sider_form">
        <p style={{ opacity: collapsed ? 0 : 1 }} className="Sider_text">
          CLAIMS
        </p>
        <Menu
          mode="inline"
          className="Sider_item"
          items={item3}
          onClick={({ key }) => {
            console.log("Clicked:", key);
          }}
        />
      </div>
      <div className="Sider_form">
        <p style={{ opacity: collapsed ? 0 : 1 }} className="Sider_text">
          SETTING
        </p>
        <Menu
          className="Sider_item"
          mode="inline"
          items={item4}
          onClick={({ key }) => {
            console.log("Clicked:", key);
          }}
        />
      </div>
    </Sider>
  );
};

export default UserSider;
