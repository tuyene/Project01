import React from 'react';
import { FcShipped, FcSearch, FcSurvey } from 'react-icons/fc';
import './Homepage.css';
import Question from './Questions/Questions';
import Footer from '../Footer/Footer';
import videoxe from '../../assets/xe.mp4';

const HomePage = (props) => {
  const videoRef = React.createRef();

  return (
    <div className="homepage">
      <div className="homepage-container">
        <div className="homepage-container-video">
          <video
            ref={videoRef}
            loop
            muted
            controls={false}
            onLoadedData={() => videoRef.current.play()}
          >
            <source src={videoxe} type="video/mp4" />
          </video>
        </div>
        <div className="homepage-container-content">
          <div className="content-homepage">
            <h1>Make forms worth filling out</h1>
            <p>
              <span>
                Get more data—like signups, feedback, and anything else—with forms designed to be
                refreshingly different.
              </span>
            </p>
          </div>
          <a href="/">
            <button className="cssbuttons-io-button">
              Get started
              <div className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="homepage-content">
        <div className="homepage-content-title">
          <h2>Thuê xe máy tại Motorbike chỉ với 3 bước </h2>
        </div>
        <div className="homepage-content-item">
          <div className="homepage-item">
            <div className="item-icon">
              <FcSearch />
            </div>
            <div className="item-title">
              <div className="item-content-title">
                <h3>Đăng ký thuê xe máy</h3>
              </div>
              <div className="item-content-description">
                <p>
                  {' '}
                  Mô tả chi tiết nhu cầu thuê xe máy để Motorbike có thể tìm và giữ xe phù hợp nhất
                  cho bạn.
                </p>
              </div>
            </div>
          </div>
          <div className="homepage-item">
            <div className="item-icon">
              <FcSurvey />
            </div>
            <div className="item-title">
              <div className="item-content-title">
                <h3>Xác nhận thuê xe</h3>
              </div>
              <div className="item-content-description">
                <p>
                  {' '}
                  Sau khi đặt thành công, xác nhận thuê xe máy sẽ được gửi qua tin nhắn hoặc email
                </p>
              </div>
            </div>
          </div>
          <div className="homepage-item">
            <div className="item-icon">
              <FcShipped />
            </div>
            <div className="item-title">
              <div className="item-content-title">
                <h3>Nhận xe tại điểm hẹn</h3>
              </div>
              <div className="item-content-description">
                <p>Xuất trình xác nhận thuê xe tại điểm hẹn và bắt đầu trải nghiệm dịch vụ.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="list-moto row list-moto-brand ">

          <div class="col  align-items-center moto-item align-items-center">
            <div class="inner pt-5 pb-3  bg-gray">
              <div class="col-md-12 moto-header">
                <h3 class="moto-item-title">
                  <span>Yamaha Sirius 110cc</span>
                </h3>
                <p class="moto-item-price">
                  <span>130</span>.000/ Ngày                                </p>
              </div>
              <div class="col-md-12 ">

                <div class="moto-item-info">
                  <ul>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>02 mũ bảo hiểm 1/2 đầu                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>02 áo mưa mỏng                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>Giá đỡ điện thoại                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>Xe đi phượt ,đường dài phụ thu 50k/ngày                                            </li>
                  </ul>

                </div>
              </div>
              <div class="col-md-12 text-center moto-link">
                <a href="#"><img width="600" height="350" src="https://motogo.vn/wp-content/uploads/2023/09/cho-thue-xe-may-ha-noi-min.png" class="lazyloaded" data-ll-status="loaded"></img><noscript><img width="600" height="350" src="https://motogo.vn/wp-content/uploads/2023/09/cho-thue-xe-may-ha-noi-min.png"></img></noscript></a>                            <a href="tel:0338023344" class="btn btn-rental  btn-yellow">Đặt xe                        </a>
              </div>
            </div>
          </div>
          <div class="col  align-items-center moto-item align-items-center">
            <div class="inner pt-5 pb-3  bg-gray">
              <div class="col-md-12 moto-header">
                <h3 class="moto-item-title">
                  <span>Honda Vision 110cc</span>
                </h3>
                <p class="moto-item-price">
                  <span>180</span>.000/ Ngày                                </p>
              </div>
              <div class="col-md-12 ">

                <div class="moto-item-info">
                  <ul>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>02 mũ bảo hiểm 1/2 đầu                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>02 áo mưa mỏng                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>Giá đỡ điện thoại                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>Giấy tờ xe photo                                            </li>
                  </ul>

                </div>
              </div>
              <div class="col-md-12 text-center moto-link">
                <a href="#"><img width="600" height="350" src="https://motogo.vn/wp-content/uploads/2023/09/Honda-vision-2022.png" class="lazyloaded" data-ll-status="loaded"></img> <noscript><img width="600" height="350" src="https://motogo.vn/wp-content/uploads/2023/09/Honda-vision-2022.png"></img></noscript></a>                            <a href="tel:0338023344" class="btn btn-rental  btn-yellow">Đặt xe                        </a>
              </div>
            </div>
          </div>
          <div class="col  align-items-center moto-item align-items-center">
            <div class="inner pt-5 pb-3  bg-gray">
              <div class="col-md-12 moto-header">
                <h3 class="moto-item-title">
                  <span>Honda Airblade 125cc</span>
                </h3>
                <p class="moto-item-price">
                  <span>200</span>.000/ Ngày                                </p>
              </div>
              <div class="col-md-12 ">

                <div class="moto-item-info">
                  <ul>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>02 mũ bảo hiểm 1/2 đầu                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>02 áo mưa mỏng                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>Giá đỡ điện thoại                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>Giấy tờ xe photo                                            </li>
                  </ul>

                </div>
              </div>
              <div class="col-md-12 text-center moto-link">
                <a href="#"><img width="600" height="350" src="https://motogo.vn/wp-content/uploads/2024/04/Honda-Airblade-125cc-2023-website.png" class="lazyloaded" data-ll-status="loaded"></img><noscript><img width="600" height="350" src="https://motogo.vn/wp-content/uploads/2024/04/Honda-Airblade-125cc-2023-website.png"></img></noscript></a>                            <a href="tel:0338023344" class="btn btn-rental  btn-yellow">Đặt xe                        </a>
              </div>
            </div>
          </div>
          <div class="col  align-items-center moto-item align-items-center">
            <div class="inner pt-5 pb-3  bg-gray">
              <div class="col-md-12 moto-header">
                <h3 class="moto-item-title">
                  <span>Honda WinnerX 150cc</span>
                </h3>
                <p class="moto-item-price">
                  <span>300</span>.000/ Ngày                                </p>
              </div>
              <div class="col-md-12 ">

                <div class="moto-item-info">
                  <ul>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>02 mũ bảo hiểm 1/2 hoặc 3/4 đầu                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>02 áo mưa mỏng                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>Giá đỡ điện thoại                                            </li>
                    <li>
                      <i class="fa fa-check-circle" aria-hidden="true"></i>Giấy tờ xe photo                                            </li>
                  </ul>

                </div>
              </div>
              <div class="col-md-12 text-center moto-link">
                <a href="#"><img width="600" height="350" src="https://motogo.vn/wp-content/uploads/2023/09/WinnerX-150cc.png" class="lazyloaded" data-ll-status="loaded"></img><noscript><img width="600" height="350" src="https://motogo.vn/wp-content/uploads/2023/09/WinnerX-150cc.png"></img></noscript></a>                            <a href="tel:0338023344" class="btn btn-rental  btn-yellow">Đặt xe                        </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Question />

      <Footer />
    </div>
  );
};

export default HomePage;
