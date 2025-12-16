import "./App.css";
import { ConfigProvider } from "antd";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeight: 35,
          fontSize: 15,
        },
        components: {},
      }}
    >
      <>
        <MainLayout />
      </>
    </ConfigProvider>
  );
}

export default App;
