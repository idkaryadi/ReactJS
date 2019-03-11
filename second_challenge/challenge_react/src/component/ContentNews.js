import React, { Component } from 'react';

class ContentNews extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-5"></div>
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
                                <a href="#"><img className="icon" src="./assets/img/ico/like.png" /></a>
                                <a href="#"><img className="icon" src="./assets/img/ico/dislike.png" /></a>
                                <a href="#"><img className="icon" src="./assets/img/ico/share.png" /></a>
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
                                <a href="#"><img className="icon" src="./assets/img/ico/like.png" /></a>
                                <a href="#"><img className="icon" src="./assets/img/ico/dislike.png" /></a>
                                <a href="#"><img className="icon" src="./assets/img/ico/share.png" /></a>
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
                                <a href="#"><img className="icon" src="./assets/img/ico/like.png" /></a>
                                <a href="#"><img className="icon" src="./assets/img/ico/dislike.png" /></a>
                                <a href="#"><img className="icon" src="./assets/img/ico/share.png" /></a>
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

export default ContentNews;