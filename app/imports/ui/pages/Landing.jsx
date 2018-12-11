import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
          <Image style={{height: 'calc(80% - 2rem)', width: '100vw'}} src='http://www.luckybelly.com/img/bellybowl.jpg' />
    );
  }
}

export default Landing;
