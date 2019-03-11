import React, { Component } from 'react';

class TopNews extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            {/* Pencarian */}
                            <div className="search-form">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Mau Berita ..." aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Telusuri </button>
                                </form>
                            </div>
                            {/* Top News */}
                            <div className="top-news">
                                <div className="row head-top-news">
                                    <span className="mr-auto"><strong>BERITA TERKINI</strong></span>
                                    <span className="ml-auto">Lihat Semua</span>
                                </div>
                                <div className="top-news-item">
                                    <div className="rating"><strong>#1</strong></div>
                                    <div>MUI DKI: Munajat 212 Bukan Tanggung Jawab Kami</div>
                                </div>
                                <div className="top-news-item">
                                    <div className="rating"><strong>#2</strong></div>
                                    <div>Kemenhub Larang Boeing 737 MAX 8 Terbang Sementara</div>
                                </div>
                                <div className="top-news-item">
                                    <div className="rating"><strong>#3</strong></div>
                                    <div>Dear Anker, Jalur KRL Jakarta-Bogor Sudah Pulih</div>
                                </div>
                                <div className="top-news-item">
                                    <div className="rating"><strong>#4</strong></div>
                                    <div>Soal Debat Cawapres, BPN: Sandi Tak Akan Menyerang tapi Beberkan Fakta BPJS</div>
                                </div>
                                <div className="top-news-item">
                                    <div className="rating"><strong>#5</strong></div>
                                    <div>Rahasia Oda Terbongkar! Pendekar-Pendekar 'Nomor Satu' di One Piece Selalu Punya 1 Hal Ini!</div>
                                </div>
                            </div>
                        </div>
                        {/* News */}
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNews;