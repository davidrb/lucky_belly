import React from 'react';
import { Grid, Header, Image  } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react/dist/commonjs/collections/Menu';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '2rem' };
    return (
        <footer style={{backgroundColor: 'black', color: 'white', paddingTop: '2rem'}}>
          <Grid columns={3}>
            <Grid.Column>
              <Image style={{marginLeft: '2rem', width: '80%'}} src={'http://www.luckybelly.com/img/lucky-logo-light.png'}></Image>
            </Grid.Column>
            <Grid.Column>
              Links
              <hr />
              Department of Information and Computer Sciences <br />
              University of Hawaii<br />
              Honolulu, HI 96822
            </Grid.Column>
            <Grid.Column>
              Contact
              <hr />
              Department of Information and Computer Sciences <br />
              University of Hawaii<br />
              Honolulu, HI 96822
            </Grid.Column>
          </Grid>
        </footer>
    );
  }
}

export default Footer;
