import React from 'react';
import {
  Menu,
  Icon
} from 'antd';

export default () => (
  <div>
    <style jsx global>{`
      .ant-layout-sider-collapsed .anticon {
        font-size: 16px;
      }
      .ant-layout-sider-collapsed .menu-text {
        display: none;
      }
    `}</style>
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="menu-text">Menu 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="menu-text">Menu 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="menu-text">Menu 3</span>
        </Menu.Item>
    </Menu>
  </div>
)
