import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SideNav.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class SideNav extends Component {

  render() {
    const {
      className,
    } = this.props;

    const containerClassName = cx({
      container: true,
      [className]: !!className,
    },
  );
    return (
      <div className={containerClassName}>
        {this.props.children}
      </div>
    );
  }
}

SideNav.Item = (props) => (
  <div className={styles.item}>
    {props.children}
  </div>
);
SideNav.Item.propTypes = {
  children: PropTypes.any,
};

SideNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
export default SideNav;
