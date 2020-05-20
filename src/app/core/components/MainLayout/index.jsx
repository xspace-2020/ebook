import React from "react";
import { Layout, Menu } from "antd";
const { Header, Content } = Layout;

export default function MainLayout(props) {
  return (
    <Layout>
      <Header className="">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </Layout>
  );
}
