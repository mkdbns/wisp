import React from 'react';
import {
  Row,
  Col
} from 'antd';
import Wisp from './wisp';

const wisps = [
  {
    image: 'https://placeimg.com/300/300/any/grayscale?x=1',
    audio: 'https://soundcloud.com/aramisschultz/tears-for-fears-everybody',
    message: 'Some cool text',
    from: '@blahblah'
  }, {
    image: 'https://placeimg.com/300/300/any/grayscale?x=2',
    audio: 'https://soundcloud.com/beyonce/7-11',
    message: 'I am so witty',
    from: '@thehaggas'
  }, {
    image: 'https://placeimg.com/300/300/any/grayscale?x=3',
    audio: 'https://soundcloud.com/luis-carlos-vieira/3rd-bass-pop-goes-the-weasel-lp-version',
    message: 'I love whiskey',
    from: '@mdebonis'
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
        <Row type="flex" justify="end">
          <Col className="wisp" span={8}><Wisp data={wisps[0]}/></Col>
          <Col className="wisp" span={8}><Wisp data={wisps[1]}/></Col>
          <Col className="wisp" span={8}><Wisp data={wisps[2]}/></Col>
        </Row>
      </div>
    );
  }
}
