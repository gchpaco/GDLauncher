// @flow
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './HorizontalMenu.css';

type Props = {};
export default class NavigationBar extends Component<Props> {
  props: Props;

  activeItem = {
    background: '#2980b9'
  }

  isLocation = (loc) => {
    if (loc === this.props.location) {
      return true;
    }
    return false;
  };

  render() {
    console.log(this.props.location)
    return (
      <div className={styles.main}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/home" draggable="false" className={styles.a} style={this.isLocation('/home') ? this.activeItem : null}>
              <Icon type="home" className={styles.i} />
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/profile" draggable="false" className={styles.a} style={this.isLocation('/profile') ? this.activeItem : null}>
              <Icon type="profile" className={styles.i} />
              My Profile
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/dmanager" draggable="false" className={styles.a} style={this.isLocation('/dmanager') ? this.activeItem : null}>
              <Icon type="play-circle" className={styles.i} />
              Instances
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}