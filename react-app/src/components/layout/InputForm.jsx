import "./Layout.css";
import { DatePicker, Input, Form, Select } from "antd";
import { useDispatch } from "react-redux";
import { filterByDateRange } from "../../store/Actions";
import { filterByService } from "../../store/Actions";
const InputForm = () => {
  const dispatch = useDispatch();
  const handleRangeChange = (dates) => {
    dispatch(filterByDateRange(dates));
  };
  const handleServiceChange = (service) => {
    dispatch(filterByService(service));
  };
  return (
    <Form className="Form" layout="vertical">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "235px 235px 235px auto",
          gap: 10,
          alignItems: "end",
        }}
      >
        <Form.Item
          label={<span style={{ fontSize: 15, fontWeight: 500 }}>Time:</span>}
          name="time"
          style={{ width: "100%", minWidth: 200 }}
        >
          <DatePicker.RangePicker
            onChange={handleRangeChange}
            placeholder={["Từ ngày", "Đến ngày"]}
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ fontSize: 15, fontWeight: 500 }}>Service:</span>
          }
          name="service"
          style={{ width: "100%", minWidth: 200 }}
        >
          <Select
            placeholder="Select"
            allowClear
            onChange={handleServiceChange}
            options={[
              { label: "SPX", value: "SPX" },
              { label: "PHT", value: "PHT" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ fontSize: 15, fontWeight: 500 }}>
              Type of Goods:
            </span>
          }
          name="goodsType"
          style={{ width: "100%", minWidth: 200 }}
        >
          <Select
            placeholder="Select"
            options={[
              { label: "Tài liệu", value: "document" },
              { label: "Hàng hóa", value: "goods" },
              { label: "Thực phẩm", value: "food" },
            ]}
          />
        </Form.Item>

        <Form.Item style={{ width: "100%", minWidth: 200 }}>
          <Input.Search placeholder="Search" />
        </Form.Item>
      </div>
    </Form>
  );
};

export default InputForm;
