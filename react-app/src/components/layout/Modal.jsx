import { Form, Input } from "antd";

const CreateNewShipment = ({ form }) => {
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50 }}
      >
        <div>
          <p style={{ fontWeight: 700, marginBottom: 16 }}>
            Sender Information
          </p>
          <Form.Item
            label="Name"
            name="senderName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter sender name" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="senderPhone"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="senderAddress"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter address" />
          </Form.Item>
        </div>

        <div>
          <p style={{ fontWeight: 700, marginBottom: 16 }}>
            Recipient Information
          </p>
          <Form.Item
            label="Name"
            name="receiverName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter recipient name" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="receiverPhone"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="receiverAddress"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter address" />
          </Form.Item>
        </div>
      </Form>
    </>
  );
};
export default CreateNewShipment;
