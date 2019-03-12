import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">KabarKabur</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sepak Bola<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ekonomi<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Publik<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hiburan<span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Lainnya
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Makanan</a>
                                    <a className="dropdown-item" href="#">Wisata</a>
                                    <a className="dropdown-item" href="#">Karir</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Selengkapnya</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Masuk<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Daftar<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
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
                        <div className="col-md-6">
                            <div className="news">
                                <div className="news-item">
                                    <img src="./assets/img/mui.jpg" className="news-picture" />
                                    <span className="news-title"><strong>MUI DKI: Munajat 212 Bukan Tanggung Jawab Kami</strong></span><br />
                                    <span className="news-author">Senin, 11 Maret 2019</span><br />
                                    <span className="news-author">Author: Kompas.com</span>
                                    <p>
                                        JAKARTA, KOMPAS.com — Majelis Ulama Indonesia ( MUI) DKI Jakarta memenuhi panggilan Bawaslu DKI untuk memberikan klarifikasi terkait dugaan pelanggaran pemilu pada kegiatan Munajat 212.
                                        </p>
                                    <a href="#">Selengkapnya...</a>
                                    <div className="news-footer">
                                        <a href="#"><img className="icon" src="./assets/img/ico/like.png"/></a>
                                        <a href="#"><img className="icon" src="./assets/img/ico/dislike.png"/></a>
                                        <a href="#"><img className="icon" src="./assets/img/ico/share.png"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="news">
                                <div className="news-item">
                                    <img src="./assets/img/mahasiswa.jpg" className="news-picture" />
                                    <span className="news-title"><strong>Peluang Usaha Modal Kecil Untung Besar Untuk Mahasiswa</strong></span><br />
                                    <span className="news-author">Senin, 5 Maret 2019</span><br />
                                    <span className="news-author">Author: Sepulsa.com</span>
                                    <p>
                                        JAKARTA, KOMPAS.com — Majelis Ulama Indonesia ( MUI) DKI Jakarta memenuhi panggilan Bawaslu DKI untuk memberikan klarifikasi terkait dugaan pelanggaran pemilu pada kegiatan Munajat 212.
                                        </p>
                                    <a href="#">Selengkapnya...</a>
                                    <div className="news-footer">
                                        <a href="#"><img className="icon" src="./assets/img/ico/like.png"/></a>
                                        <a href="#"><img className="icon" src="./assets/img/ico/dislike.png"/></a>
                                        <a href="#"><img className="icon" src="./assets/img/ico/share.png"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="news">
                                <div className="news-item">
                                    <img src="./assets/img/pesawat.jpg" className="news-picture" />
                                    <span className="news-title"><strong>Kemenhub Larang Sementara Penerbangan Boeing 737 Max 8</strong></span><br />
                                    <span className="news-author">Senin, 11 Maret 2019</span><br />
                                    <span className="news-author">Author: Tirto.com</span>
                                    <p>
                                    Direktorat Jenderal Perhubungan Udara Kementerian Perhubungan memutuskan untuk melarang terbang sementara pesawat Boeing 737-8 MAX di Indonesia. Direktur Jenderal Perhubungan Udara, Polana B. Pramesti mengatakan, langkah tersebut diambil menyusul jatuhnya Pesawat Ethiopian Airlines berjenis Boeing 737-8 MAX. 
                                    </p>
                                    <a href="#">Selengkapnya...</a>
                                    <div className="news-footer">
                                        <a href="#"><img className="icon" src="./assets/img/ico/like.png"/></a>
                                        <a href="#"><img className="icon" src="./assets/img/ico/dislike.png"/></a>
                                        <a href="#"><img className="icon" src="./assets/img/ico/share.png"/></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;