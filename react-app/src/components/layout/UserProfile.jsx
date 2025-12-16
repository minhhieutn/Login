import { Avatar, Dropdown, Space } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LockOutlined,
  LogoutOutlined,
  DownOutlined,
} from "@ant-design/icons";

const UserProfile = () => {
  const items = [
    {
      key: "1",
      label: (
        <Space>
          <UserOutlined /> Thông tin cá nhân
        </Space>
      ),
    },
    {
      key: "2",
      label: (
        <Space>
          <SettingOutlined /> Cài đặt tài khoản
        </Space>
      ),
    },
    {
      key: "3",
      label: (
        <Space>
          <LockOutlined /> Đổi mật khẩu
        </Space>
      ),
    },
    { type: "divider" },
    {
      key: "4",
      danger: true,
      icon: <LogoutOutlined />,
      label: "Đăng xuất",
      onClick: () => alert("Đã đăng xuất!"),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
      <Space style={{ cursor: "pointer" }}>
        <Avatar size={38} src="https://i.pravatar.cc/150?u=admin" />
        <DownOutlined style={{ fontSize: 12, color: "#999" }} />
      </Space>
    </Dropdown>
  );
};

export default UserProfile;
