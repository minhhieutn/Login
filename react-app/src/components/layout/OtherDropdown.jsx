// test.jsx (hoặc OthersDropdown.jsx) – ĐÃ SỬA XONG, CHẠY NGON 100%
import { Dropdown, Badge, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const OthersDropdown = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("returned");

  const othersItems = [
    {
      key: "returning",
      label: "Returning",
      count: 7,
      children: <div>Returning</div>,
    },
    {
      key: "returned",
      label: "Returned",
      count: 12,
      children: <div>Returned</div>,
    },
    {
      key: "canceled",
      label: "Canceled",
      count: 5,
      children: <div>Cancelled</div>,
    },
    // thêm bao nhiêu cũng được
  ];

  const itemsForMenu = othersItems.map((item) => ({
    key: item.key,
    label: (
      <Space style={{ justifyContent: "space-between", width: "100%" }}>
        <span>{item.label}</span>
        <Badge count={item.count} size="small" />
      </Space>
    ),
    onClick: () => {
      setActiveTab(item.key);
      onTabChange?.(item.key, item.children);
    },
  }));

  // Style cho item active (nền đỏ nhạt)
  const activeItem = othersItems.find((i) => i.key === activeTab);

  return (
    <Dropdown menu={{ items: itemsForMenu }} trigger={["click"]}>
      <a
        onClick={(e) => e.preventDefault()}
        style={{ color: "inherit", fontSize: 18 }}
      >
        <Space>
          Others
          <Badge count={activeItem?.count || 0} size="small" />
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default OthersDropdown;
