import React from 'react';
import TapEvent from 'react-tap-event-plugin';
import { Layout } from 'antd';
import Head from './head';
import Menu from './menu';

TapEvent();

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
          .header {
            background: #fff;
            padding: 0;
          }
          .content {
            margin: 24px 16px;
            padding: 24px;
            background: #fff;
            min-height: 280;
          }
        `}</style>
        <Head/>
        <Layout className="full">
          {/* <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            onMouseEnter={this.open}>
              <div className="logo" />
              <Menu/>
          </Sider> */}
          <Layout onMouseEnter={this.close}>
            <Header className="header"/>
            <Content className="content">
                {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
