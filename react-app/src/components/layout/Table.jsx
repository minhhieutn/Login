import {
  Table,
  Tag,
  Space,
  Button,
  Spin,
  Typography,
  Empty,
  Alert,
  Badge,
  Popover,
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import CostPopoverContent from "./CostPopoverContent";
import { useSelector } from "react-redux";
import { useState } from "react";

const Table_Data = () => {
  const filteredData = useSelector((state) => state.filteredData) || [];
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: filteredData.length,
  });

  const handleTableChange = (pag) => {
    setPagination({
      current: pag.current,
      pageSize: pag.pageSize,
      total: filteredData.length,
    });
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "80px 0" }}>
        <Spin size="large" tip="Đang lọc dữ liệu..." />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Lỗi khi lọc dữ liệu"
        description={error}
        type="error"
        showIcon
        style={{ margin: "24px" }}
      />
    );
  }

  if (filteredData.length === 0) {
    return (
      <Empty
        description="Không tìm thấy dữ liệu phù hợp"
        style={{ padding: "60px 0" }}
      />
    );
  }

  const columns = [
    {
      title: "SHIPMENTS",
      // sorter: (a, b) => {
      //   // Chuyển chuỗi "16/12/2025 14:30:45" thành Date để so sánh chính xác
      //   const parseDate = (str) => {
      //     const [datePart, timePart] = str.split(" ");
      //     const [day, month, year] = datePart.split("/");
      //     return new Date(
      //       `${year}-${month.padStart(2, "0")}-${day.padStart(
      //         2,
      //         "0"
      //       )}T${timePart}`
      //     );
      //   };
      //   return parseDate(b.datetime) - parseDate(a.datetime); // desc: mới → cũ
      // },
      // defaultSortOrder: "ascend",
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
      render: () => (
        <Space>
          <Button
            className="Button_Hide_Sider"
            shape="square"
            style={{
              borderRadius: 8,
              border: "none",
              backgroundColor: "lightpink",
            }}
            icon={
              <img
                src="placeholder.png"
                alt="View"
                style={{ width: 20, height: 20 }}
              />
            }
            onClick={() => {}}
          />
          <Button
            className="Button_Hide_Sider"
            shape="square"
            style={{
              borderRadius: 8,
              border: "none",
              backgroundColor: "lightgrey",
            }}
            icon={<EllipsisOutlined />}
            onClick={() => {}}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          ...pagination,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20", "50"],
        }}
        onChange={handleTableChange}
        style={{ borderRadius: 8 }}
        bordered
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(
              `Selected Row Keys: ${selectedRowKeys}`,
              "Selected Rows: ",
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
