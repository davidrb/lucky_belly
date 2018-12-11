import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import { Grid } from 'semantic-ui-react/dist/commonjs/collections/Grid';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { backgroundColor: 'black' };
    return (
      <Menu style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Image style={ { marginLeft: '2rem', width: '80%' } }
                 src={'http://www.luckybelly.com/img/lucky-logo-light.png'} />
        </Menu.Item>
        <Menu.Item position="right">
          <Dropdown text="Menus" pointing="top right">
            <Dropdown.Menu>
              <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
              <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item position="right">
          <Dropdown text="Info" pointing="top right">
            <Dropdown.Menu>
              <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
              <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item position="right">
          <Dropdown text="Breaking Bread Hospitality" pointing="top right">
            <Dropdown.Menu>
              <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
              <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
