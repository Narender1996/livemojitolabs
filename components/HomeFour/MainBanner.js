import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.min.css';

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div className="main-banner-four">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <h1>Applying Data Science & Analytics To Life</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                        <div className="banner-btn">
                                            <Link href="/about-us">
                                                <a className="default-btn-one">
                                                    About Us <span></span>
                                                </a>
                                            </Link>

                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="video-btn popup-youtube"
                                                > 
                                                    <i className="fa fa-play"></i>
                                                    Watch Video
                                                </a> 
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* If you want to change the video need to update below videoID */}
                                <ModalVideo 
                                    channel='youtube' 
                                    isOpen={this.state.isOpen} 
                                    videoId='_ysd-zHamjk' 
                                    onClose={() => this.setState({isOpen: false})} 
                                />

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <img src={require("../../images/home-four/main-image4.png")} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape">
                    <img src={require("../../images/main-banner-shape/home-shape-4.png")} alt="image" />
                </div>
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }
}

export default MainBanner;