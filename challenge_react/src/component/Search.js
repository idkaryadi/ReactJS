import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="search-form">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Mau Berita ..." aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Telusuri </button>
                </form>
            </div>
        );
    }
}

export default Search;