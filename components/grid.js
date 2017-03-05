import React from 'react';
import {
  Row,
  Col
} from 'antd';
import Wisp from './wisp';

const wisps = [
  {
    //
    // image: 'https://placeimg.com/225/400/any/grayscale?x=1',
    // 
    image: '/static/img/card-01.png',
    audio: 'http://www2.cellsea.com/content/ringtone/2011/RT4dab183e9068b.mp3',
    message: 'Yeah!',
    from: '@blahblah'
  }, {
    image: '/static/img/card-02.png',
    audio: 'http://www2.cellsea.com/content1/ringtone/2009/RT4a8fa8c40eb67.mp3',
    message: 'Miss You, sweetie',
    from: '@mom'
  }, {
    image: '/static/img/card-03.png',
    audio: 'http://www3.cellsea.com/content/ringtone/2012/RT4f8df41c6efa9.mp3',
    message: 'Off we go',
    from: '@mdebonis'
  }, {
    image: '/static/img/card-04.png',
    audio: 'http://www3.cellsea.com/content/ringtone/2013/RT524b235138fa0.mp3',
    message: 'Uh, uh uh uh',
    from: '@chaggas'
  }, {
    image: '/static/img/card-05.png',
    audio: "http://dringtone.info/uploads/f2000/huntin',fishin'andlovin'everyday.mp3",
    message: 'It was a good day!',
    from: '@codyruggio'
  }
];

export default class Grid extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <style jsx global>{`
          .wisp {
            padding-bottom: 16px;
          }
        `}</style>
        <Row type="flex" justify="space-around">
          <Col className="wisp" sm={8} md={6} lg={4}><Wisp data={wisps[4]}/></Col>
          <Col className="wisp" sm={8} md={6} lg={4}><Wisp data={wisps[1]}/></Col>
          <Col className="wisp" sm={8} md={6} lg={4}><Wisp data={wisps[2]}/></Col>
          <Col className="wisp" sm={8} md={6} lg={4}><Wisp data={wisps[3]}/></Col>
        </Row>
      </div>
    );
  }
}
