import React from 'react';
import { Affix, Layout, Menu } from 'antd';
import Head from './head';

const {
  Header,
  Sider,
  Content
} = Layout;

export default class extends React.Component {

  constructor() {
    super();

    this.state = {
      collapsed: true,
    };
  }

  open = () => {
    this.setState({
      collapsed: false,
    });
  }

  close = () => {
    this.setState({
      collapsed: true,
    });
  }

  render() {
    return (
      <div className="page">
        <style jsx global>{`
          html, body, .viewport {
            width: 100%;
            height: 100%;
            margin: 0;
          }
          #__next, #__next > div:first-child {
            height: 100%;
          }
          .full {
            height: 100%;
          }
          .page {
            background-color: red;
            height: 100%;
          }
          .logo {
            height: 32px;
            background: #333;
            border-radius: 6px;
            margin: 16px;
          }
          .logo-header {
            width: 120px;
            height: 31px;
            background: #eee;
            border-radius: 6px;
            margin: 16px 32px 16px 16px;
            float: left;
          }
          .header {
            background: #fff;
            position:fixed;
            width:100%;
            padding: 0;
            left:0;
            top:0;
            right: 0;
            z-index: 1000;
          }
          .content {
            margin: 0px;
            padding: 90px 24px 24px 24px;
            background: #fff;
            min-height: 280;
          }
        `}</style>
        <Head/>
        <Layout className="full">
          <Header className="header">
            <div className="logo-header"/>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}>
              <Menu.Item key="1">Menu 1</Menu.Item>
              <Menu.Item key="2">Menu 2</Menu.Item>
              <Menu.Item key="3">Menu 3</Menu.Item>
            </Menu>
          </Header>
          <Content className="content">
              {this.props.children}
          </Content>
        </Layout>
      </div>
    );
  }
}
