import React, { Component } from 'react';
import { Link } from "react-router-dom"


const NewsNavBar = props => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">KabarKabur</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/sport">Olahraga<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ekonomi">Ekonomi<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hiburan">Hiburan<span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Lainnya
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/kesehatan">Kesehatan</Link>
                                <Link className="dropdown-item" to="/teknologi">Teknologi</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">Selengkapnya</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" onClick={() => props.postSignout()} className="nav-link">Keluar<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Masuk<span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NewsNavBar;