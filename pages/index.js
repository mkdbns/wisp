import React from 'react';
import Header from '../components/header';
import Sider from '../components/siderdemo';

export default () => (
  <div className="container">
    <style jsx global>{`
      html, body, .viewport {
        width: 100%;
        height: 100%;
        margin: 0;
      }
      .full {
        height: 100%;
      }
      body > div,
      body > div > div {
        height: 100%;
      }
      .container {
        background-color: red;
        height: 100%;
      }
    `}</style>
    <Header/>
    <Sider/>
  </div>
)
