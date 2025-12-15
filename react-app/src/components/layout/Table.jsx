import {
  Table,
  Tag,
  Space,
  Button,
  Input,
  Typography,
  Badge,
  Popover,
} from "antd";
import { Descriptions, Drawer } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import { SearchOutlined } from "@ant-design/icons";
import CostPopoverContent from "./CostPopoverContent";
import { DataSource } from "../../data/Data_souce";
import { useSelector } from "react-redux";
const { Title } = Typography;

const Table_Data = () => {
  const filteredData = useSelector((state) => state.filteredData) || [];
  const columns = [
    {
      title: "SHIPMENTS",
      render: (_, record) => (
        <div
          style={{
            fontSize: 15,
            lineHeight: "auto",
            width: 180,
          }}
        >
          <div style={{ fontWeight: 500, color: "red" }}>
            {record.trackingNumber}
          </div>
          <div style={{ fontWeight: 500, color: "black" }}>
            {record.serviec ? (
              <div>
                Dịch vụ: <Tag color="blue">SPX</Tag>
              </div>
            ) : (
              <div>
                Dịch vụ: <Tag color="red">PHT</Tag>
              </div>
            )}
          </div>
          <div>Ref.No: {record.referenceNo}</div>
          <div>{record.datetime}</div>
        </div>
      ),
    },
    {
      title: "SENDER",
      render: (_, record) => (
        <div
          style={{
            fontSize: 15,
            lineHeight: "auto",
            width: 290,
          }}
        >
          <div style={{ fontWeight: 500, color: "black" }}>
            {record.senderName}
          </div>
          <div>{record.senderPhone}</div>
          <div>{record.senderAddress}</div>
        </div>
      ),
    },
    {
      title: "RECIPIENT",
      render: (_, record) => (
        <div
          style={{
            fontSize: 15,
            lineHeight: "auto",
            width: 290,
          }}
        >
          <div style={{ fontWeight: 500, color: "black" }}>
            {record.receiverName}
          </div>
          <div>{record.receiverPhone}</div>
          <div>{record.receiverAddress}</div>
        </div>
      ),
    },
    {
      title: "PACKAGE INFO",
      render: (_, record) => (
        <div
          style={{
            lineHeight: "auto",
            width: 220,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "37px 100px 50px",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <div style={{ color: "black", justifyItems: "center" }}>
              <p style={{ marginTop: "0", marginBottom: "0" }}>Type</p>
              <p
                style={{
                  marginTop: "0",
                  fontWeight: 500,
                  justifyContent: "center",
                }}
              >
                {record.serviec ? <div>SPX</div> : <div>PHT</div>}
              </p>
            </div>
            <div
              style={{
                color: "black",
                justifyItems: "center",
              }}
            >
              <p style={{ marginTop: "0", marginBottom: "0" }}>No of package</p>
              <p style={{ marginTop: "0", fontWeight: 500 }}>
                {record.noOfPackage}
              </p>
            </div>
            <div style={{ color: "black", justifyItems: "center" }}>
              <p style={{ marginTop: "0", marginBottom: "0" }}>Weight</p>
              <p style={{ marginTop: "0", fontWeight: 500 }}>{record.weight}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "POSTAGE",
      render: (_, record) => (
        <div style={{ lineHeight: "auto", width: "auto" }}>
          <div style={{ fontWeight: 500, color: "black" }}>
            {record.prepaid ? (
              <Badge status="success" text="Prepaid" />
            ) : (
              <Badge status="error" text="Prepaid" />
            )}
          </div>
          <div>{record.codAmount}</div>
          <Popover
            placement="left"
            trigger="click"
            overlayInnerStyle={{ padding: 0, borderRadius: 8 }}
            content={<CostPopoverContent record={record} />}
          >
            <Typography.Link strong style={{ fontSize: 15 }}>
              Detail
            </Typography.Link>
          </Popover>
        </div>
      ),
    },
    {
      title: "ACTION",
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} của ${total} bản ghi`,
        }}
        style={{ borderRadius: 8 }}
        bordered
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(
              `selectedRowKeys: ${selectedRowKeys}`,
              "selectedRows: ",
              selectedRows
            );
          },
        }}
        scroll={{ x: "max-content" }} // hỗ trợ responsive trên mobile
      />
    </>
  );
};

export default Table_Data;
