import "./Layout.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, theme, Form, Button, Modal, message } from "antd";
import UserSider from "./Sider";
import SearchBar from "./Search";
import UserProfile from "./UserProfile";
import InputForm from "./InputForm";
import USerTable from "./Table_Form";
import { useState } from "react";
import CreateNewShipment from "./Modal";

import { useDispatch } from "react-redux";
import { createShipment } from "../../store/Actions";
const { Header, Content } = Layout;

const Hheader = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleCreateShipment = () => {
    form
      .validateFields()
      .then((values) => {
        const now = new Date();
        const formattedDateTime = now.toLocaleString("vi-VN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        const newShipment = {
          ...values,
          datetime: formattedDateTime,
          key: Date.now().toString(), // key unique tạm thời
          // Các field mặc định nếu cần
          trackingNumber: values.trackingNumber || `SPX${Date.now()}`, // tự sinh nếu không nhập
          referenceNo: values.referenceNo || "",
          serviec: true,
          prepaid: true,
          noOfPackage: values.noOfPackage || 1,
          weight: values.weight || "1kg",
          codAmount: values.codAmount || "0đ",
        };
        dispatch(createShipment(newShipment));
        message.success("Shipment created successfully");
        setIsModalOpen(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Failed to create shipment:", info);
      });
  };
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
                onClick={() => setIsModalOpen(true)}
              >
                Create new Shipment
              </Button>
            </div>
          </div>
          <InputForm />
          <USerTable />
        </Layout>
        <Modal
          title="Create New Shipment"
          width={1000}
          open={isModalOpen}
          onOk={handleCreateShipment}
          onCancel={() => {
            setIsModalOpen(false), form.resetFields();
          }}
          okText="Create"
          cancelText="Cancel"
        >
          <CreateNewShipment form={form} />
        </Modal>
      </Layout>
    </Layout>
  );
};
export default Hheader;
