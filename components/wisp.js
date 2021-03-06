import _ from 'lodash';
import React from 'react';
import { Card, Progress } from 'antd';
import ReactPlayer from 'react-player'

export default class Wisp extends React.Component {

  constructor() {
    super();

    this.state = {
      playing: false
    };
  }

  played = (value) => {
    this.setState({
      played: value.played * 100
    })
  }

  progress = () => {
    return this.state.played || 0;
  }

  touch = () => {
    console.log('touch');
    if(this.state.playing) {
      this.stop();
    } else {
      this.play();
    }
  }

  mouseover = () => {
    console.log('mouseover');
    this.play();
  }

  mouseout = () => {
    console.log('mouseout');
    this.stop();
  }

  play = () => {
      console.log('play');
    this.setState({
      playing: true
    });
  }

  stop = () => {
      console.log('stop');
    this.setState({
      playing: false
    });
  }

  render() {

    return (
      <div>
        <style jsx global>{`
          .card-image img {
            display: block;
          }
          .card-info {
            padding: 10px 16px;
          }
          .card-info p {
            color: #999;
          }
          .progress {
            line-height:0px;
            position: absolute;
          }
        `}</style>

        <Card
          style={{
            maxWidth: 225,
          }}
          bodyStyle={{
            padding: 0
          }}
          onMouseOver={this.mouseover}
          onMouseOut={this.mouseout}
          onTouchTap={this.touch}>
            <div className="card-image">
              <img width="100%" src={this.props.data.image}/>
            </div>
            <Progress className="progress" percent={this.progress()} strokeWidth={2} showInfo={false} />
            <div className="card-info">
              <h3>{this.props.data.message}</h3>
              <p>{this.props.data.from}</p>
            </div>
        </Card>

        <ReactPlayer
          url={this.props.data.audio}
          hidden={true}
          playing={this.state.playing}
          onProgress={this.played}
          progressFrequency={100}
        />

      </div>
    );
  }
}
