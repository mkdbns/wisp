import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import MyCard from './mycard';

const { Header, Sider, Content } = Layout;


export default class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
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
      <div className="full">
        <style jsx global>{`
          .trigger {
            font-size: 18px;
            line-height: 64px;
            padding: 0 16px;
            cursor: pointer;
            transition: color .3s;
          }

          .trigger:hover {
            color: #108ee9;
          }

          .logo {
            height: 32px;
            background: #333;
            border-radius: 6px;
            margin: 16px;
          }

          .ant-layout-sider-collapsed .anticon {
            font-size: 16px;
          }

          .ant-layout-sider-collapsed .nav-text {
            display: none;
          }
        `}</style>
        <Layout className="full">
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            onMouseEnter={this.open}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout onMouseEnter={this.close}>
            <Header style={{ background: '#fff', padding: 0 }}>
              {/* <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              /> */}
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                <MyCard/>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
