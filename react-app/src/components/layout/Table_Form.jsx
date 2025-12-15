import { Badge, Form, Tabs } from "antd";
import Table_Data from "./Table";

const USerTable = () => {
  const item = [
    {
      key: "1",
      label: (
        <>
          All <Badge count={20} size="small" offset={[5, -2]} />
        </>
      ),
    },
    {
      key: "2",
      label: (
        <>
          New <Badge count={6} size="small" offset={[5, -2]} />
        </>
      ),
    },
    {
      key: "3",
      label: (
        <>
          Picking <Badge count={1} size="small" offset={[5, -2]} />
        </>
      ),
    },
    {
      key: "4",
      label: (
        <>
          Picked up <Badge count={1} size="small" offset={[5, -2]} />
        </>
      ),
    },
    {
      key: "5",
      label: (
        <>
          In transit <Badge count={1} size="small" offset={[5, -2]} />
        </>
      ),
    },
    {
      key: "6",
      label: (
        <>
          Delivering <Badge count={1} size="small" offset={[5, -2]} />
        </>
      ),
    },
    {
      key: "7",
      label: (
        <>
          Delivered <Badge count={1} size="small" offset={[5, -2]} />
        </>
      ),
    },
  ];

  return (
    <div
      style={{
        marginTop: 16,
        padding: 24,
        backgroundColor: "white",
        fontSize: 15,
        borderRadius: 8,
        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div>
        <Tabs
          defaultActiveKey="1"
          items={item}
          tabBarGutter={24}
          tabBarStyle={{ margin: 0 }}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <Table_Data />
      </div>
    </div>
  );
};

export default USerTable;
