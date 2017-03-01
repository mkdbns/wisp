import React from 'react';
import { Card } from 'antd';

class MyCard extends React.Component {
  render() {
    return (
      <div>
        <style jsx global>{`
          .custom-image img {
            display: block;
          }
          .custom-card {
            padding: 10px 16px;
          }
          .custom-card p {
            color: #999;
          }
        `}</style>
        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">
            <img alt="example" width="100%" src="/static/img/audio.png" />
          </div>
          <div className="custom-card">
            <h3>Damn straight!</h3>
            <p>@rainmaker</p>
          </div>
        </Card>
      </div>
    );
  }
}

export default MyCard;
