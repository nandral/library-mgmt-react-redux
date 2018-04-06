import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

import * as Actions from '../../sagas/actionTypes'
import { SideNav } from '../../components'
import styles from './Books.css';
import links from '../links'

class Books extends React.Component {
  componentDidMount() {
    this.props.onRequestBooks();
    this.props.onRequestMostReadBooks();
  }
  render() {
    const { fetching, books, mostReadBookIDs, error } = this.props;

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
        <div>
          <h2>List of Books</h2>
          {fetching ? <div>Fetching data .... </div> : null}

          {books.length > 0 ? (
            <div>Number of books in Library : {books.length}</div>
          ) : null}

          {mostReadBookIDs.length ? <h4>Most Read Books :{mostReadBookIDs}</h4> : null}
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
export default connect(mapStateToProps, mapDispatchToProps)(Books);
