import React, { Children, useState } from "react";
import "./Layout.css";
import {
  CarOutlined,
  DashboardOutlined,
  LaptopOutlined,
  NotificationOutlined,
  TrademarkCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Collapse, Dropdown, Input, Layout, Menu } from "antd";
const { Search } = Input;
const SearchBar = () => {
  const [loading, setLoading] = useState(false);

  const onSearch = (value) => {
    if (!value.trim()) return;
    console.log("Đang tìm:", value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Đã tìm: "${value}"`);
    }, 800);
  };
  return (
    <Search
      placeholder="Tìm kiếm đơn hàng, mã vận đơn..."
      allowClear
      enterButton="Search"
      loading={loading}
      onSearch={onSearch}
      style={{
        width: 400,
        maxWidth: "100%",
      }}
    />
  );
};

export default SearchBar;
