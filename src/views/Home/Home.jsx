import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import _ from 'lodash'
import { Cards, SideNav } from '../../components'
import styles from './Home.css';
import * as Actions from '../../sagas/actionTypes'
import links from '../links'

class Home extends Component {
  componentDidMount() {
    this.props.onRequestBooks();
    this.props.onRequestMostReadBooks();
  }
  render() {
    const { fetching, books, mostReadBookIDs, error } = this.props;
    // console.log("mostReadBookIDs", mostReadBookIDs)

    const mostReadBooks = _.map(mostReadBookIDs, id => {
      return _.find(books, { id })
    });
    // console.log("mostReadBooks", mostReadBooks)

    return (

      <div className={styles.container}>

        <SideNav className={styles.sideNav}>
          <SideNav.Item>
            {
              links.filter(link => link.label).map((link, index) => (
                <NavLink
                  exact
                  to={link.path}
                  key={index}
                  activeClassName={styles.active}>
                  {link.label}
                </NavLink>
              ))
            }
          </SideNav.Item>
        </SideNav>
        <div className={styles.page}>
          <div className={styles.welcomeText}>
            Welcome to Library Management!
        </div>

          <div className={styles.content}>
            <div className={styles.mostReadBooks}>
              <div className={styles.mostReadBooks__title}>
                Most read books
              </div>
              <Cards cardsContent={mostReadBooks} />
            </div>

            <div className={styles.trendingBooks}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    books: state.books,
    mostReadBookIDs: state.mostReadBooks,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestBooks: () => dispatch({ type: Actions.GET_BOOKS_REQUEST }),
    onRequestMostReadBooks: () => dispatch({ type: Actions.MOST_READ_BOOKS_REQUEST })
  };
};

// export default Books;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
