import Hheader from "./components/layout/Header";
import "./App.css";
import { ConfigProvider } from "antd";
import MainLayout from "./components/layout/MainLayout";
import { Provider } from "react-redux";

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
