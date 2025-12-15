import { EyeOutlined } from "@ant-design/icons";
import { Space, Tag, Typography, Popover } from "antd";
import Text from "antd/es/typography/Text";
const CostPopoverContent = ({ record }) => (
  <div style={{ width: 300, padding: "12px 0" }}>
    <div style={{ padding: "0 16px 8px", borderBottom: "1px solid #f0f0f0" }}>
      <Text strong style={{ fontSize: 16, color: "#d4380d" }}>
        {record.trackingNumber}
      </Text>
      <br />
      <Text type="secondary" style={{ fontSize: 12 }}>
        {record.createdAt}
      </Text>
    </div>

    <div style={{ padding: "12px 16px" }}>
      <Space direction="vertical" size={8} style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text type="secondary">Shipping fee</Text>
          <Text strong style={{ color: "#52c41a" }}>
            35.000 đ
          </Text>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text type="secondary">Fuel surcharge</Text>
          <Text strong type="danger">
            2.450.000 đ
          </Text>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text type="secondary">Subtotal</Text>
          <Text strong>2.485.000 đ</Text>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text type="secondary">VAT (8%)</Text>
          <Text strong>198.800 đ</Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 8,
            borderTop: "1px dashed #ddd",
          }}
        >
          <Text strong>Total</Text>
          <Text strong style={{ fontSize: 16, color: "#fa541c" }}>
            2.683.800 đ
          </Text>
        </div>
      </Space>
    </div>

    <div
      style={{
        padding: "8px 16px",
        background: "#fafafa",
        borderTop: "1px solid #f0f0f0",
      }}
    >
      <Tag color="processing" icon={<EyeOutlined />}>
        Đang lấy hàng
      </Tag>
    </div>
  </div>
);
export default CostPopoverContent;
