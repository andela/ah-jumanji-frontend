/* eslint-disable react/require-default-props */
import React, { Component } from 'react';


class Bookmarks extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="panel">
            <div className="panel-body">
              <h6 className="article-header">
                <i className="fas fa-bookmark" />
                &nbsp;
                Bookmarks
              </h6>
              <hr />
              <div className="col-md-12">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href="/a/view_article/this-is-my-article-047b-629489">This is my article</a>
                    <span className="float-right text-muted">
                      <button className="dropdown-item more btn-link" type="button">
                        <i className="fas fa-trash-alt" />
                        &nbsp;Remove
                      </button>
                      &nbsp;
                    </span>
                  </li>
                  <li className="list-group-item">
                    <a href="/a/view_article/this-is-my-article-047b-629489">This is another article</a>
                    <span className="float-right text-muted">
                      <button className="dropdown-item more btn-link" type="button">
                        <i className="fas fa-trash-alt" />
                        &nbsp;Remove
                      </button>
                      &nbsp;
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Bookmarks;
