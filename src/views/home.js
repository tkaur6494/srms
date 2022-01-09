import React, { useState, useEffect, useRef } from 'react';

import {
  adminRoot
} from '../constants/defaultValues';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import GlideComponent from '../components/carousel/GlideComponent';
import { scroller } from 'react-scroll'
import Headroom from 'react-headroom'

const slideSettings = {
  type: "carousel",
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    "600": { perView: 1 },
    "992": { perView: 2 },
    "1200": { perView: 3 },
  },
};

const slideItems = [
  {
    icon: "iconsminds-timer",
    title: "Realtime",
    detail:
      "Provides Realtime insights and updates of the system and keeps user updated.",
  },
  {
    icon: "iconsminds-line-chart-3",
    title: "Smart Insights",
    detail:
      "Built-in AI/ML technology in backend to make smart decision and help people to select the best.",
  },
  {
    icon: "iconsminds-dollar",
    title: "Cost efficient",
    detail:
      "Pay less, Use more. SRMS has unique pricing which brings user quickly on platform without investing so much money.",
  },
  {
    icon: "iconsminds-smartphone-4",
    title: "Mobile App",
    detail:
      "Delivers the SRMS to mobile as an app, so that users can access website features directly without the need of browser.",
  }
];

const features = [
  {
    title: "SMART SOCIAL DISTANCING",
    img: "./assets/img/landing-page/features/plesant-design.png",
    detail:
      "This brilliant feature of smart restroom monitoring system tracks the number of people entering a facility in real time which can be monitored, controlled and managed by threshold limits which can also be connected to the smart lock and the status  is displayed on an interactive screen at the entrance which shows the real time data to maintain social distancing. (just as a traffic light)<br/>",
  },
  {
    title: "SMART SOLUTION FOR SMART CITIES",
    img: "./assets/img/landing-page/features/extra-responsive.png",
    detail:
      "Rapid urbanization has mandated the need for smart city solutions. Experts worldwide point out that smart cities will be the future enablers in accelerating economic growth and improving the quality of citizen's lifestyle.<br/>",
  },
  {
    title: "SMART MONITORING SYSTEM",
    img: "./assets/img/landing-page/features/superfine-charts.png",
    detail:
      "SRMX control unit is designed exclusively for precise controlling of the attached sensors for a flexible and reliable communication and sending the real time data to the cloud and command centre.",
  },
  {
    title: "ON-DEMAND CLEANING",
    img: "./assets/img/landing-page/features/layouts-for-the-job.png",
    detail:
      "",
  },
  {
    title: "SMART CLEANER'S APP",
    img: "./assets/img/landing-page/features/layouts-for-the-job-2.png",
    detail:
      "",
  },
  {
    title: "TOUCHLESS QR FEEDBACK",
    img: "./assets/img/landing-page/features/layouts-for-the-job-3.png",
    detail:
      "",
  },
  {
    title: "SMART DASHBOARD",
    img: "./assets/img/landing-page/features/smart-menu.png",
    detail:
      "Smart Restroom offers smart monitoring  dashboard that is the most efficient way to track multiple data sources. It provides a central location for facility managers to monitor and analyze performance. Real-time monitoring reduces the hours of analyzing and long line of communication that previously a challenge.",
  }
];

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);
  
  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    }
  }, []);

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect()

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = homeRect.x - 580 + "px";

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX = event.target.innerWidth - homeRect.x - 2000 + "px";

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  }

  const onWindowClick = () => {
    setShowMobileMenu(false);
  }

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  }

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100
    });
    return false;
  }
  
  return (
    <div className={classnames('landing-page', {
      'show-mobile-menu': showMobileMenu
    })}>
      <div className="mobile-menu" onClick={(event) => event.stopPropagation()} >
        <a className="logo-mobile c-pointer" href="#scroll" onClick={(event) => scrollTo(event, 'home')} >
          <span></span>
        </a>
        <ul className="navbar-nav">
          <li className="nav-item"><a className="c-pointer" href="#scroll" onClick={(event) => scrollTo(event, 'features')}>FEATURES</a></li>
          <li className="nav-item">
            <div className="separator"></div>
          </li>
          <li className="nav-item text-center">
            <NavLink className="btn btn-outline-primary btn-sm mobile-menu-cta" to={adminRoot}>
                    LOGIN NOW <i className="simple-icon-arrow-right"></i>
                    </NavLink>
          
          </li>
        </ul>
      </div>

      <div className="main-container">
        <Headroom className="landing-page-nav">
          <nav>
            <div className="container d-flex align-items-center justify-content-between">
              <a className="navbar-logo pull-left c-pointer" href="#scroll" onClick={(event) => scrollTo(event, 'home')}>
                <span className="white"></span>
                <span className="dark"></span>
              </a>
              <ul className="navbar-nav d-none d-lg-flex flex-row">
                <li className="nav-item"><a className="c-pointer" href="#scroll" onClick={(event) => scrollTo(event, 'features')}>FEATURES</a></li>
                <li className="nav-item pl-4">
                  <NavLink className="btn btn-outline-semi-light btn-sm pr-4 pl-4" to={adminRoot}>
                    LOGIN NOW <i className="simple-icon-arrow-right"></i>
                    </NavLink>
                </li>
              </ul>
              <span className="mobile-menu-button" onClick={(event) => { setShowMobileMenu(!showMobileMenu); event.stopPropagation() }}>
                <i className="simple-icon-menu"></i>
              </span>
            </div>
          </nav>
        </Headroom>
        <div className="content-container" id="home">

          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row" ref={refRowHome}>
                <div className="col-12 d-block d-md-none">
                  <NavLink to="/">
                   <img alt="mobile hero" className="mobile-hero"
                      src="./assets/img/landing-page/home-hero-mobile.png" /> 
                  </NavLink>
                </div>

                <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div className="home-text">
                    <div className="display-1">SMART RESTROOM  <br />MONITORING SYSTEM</div>
                    <p className="white mb-5">
                    SMART RESTROOM is an intelligent supervising solution for the wash rooms/restrooms located at Public places in order to monitor, track & assure the cleanliness, hygiene & social distancing. <br/><br/>This system is smart enough to automate certain tasks to be initiated & terminated when required precisely.<br /><br />
                    </p>
                    <NavLink className="btn btn-light btn-xl mr-2 mb-2" to={adminRoot}>
                    LOGIN NOW <i className="simple-icon-arrow-right"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6  d-none d-md-block">
                  <NavLink to={adminRoot}>
                    <img alt="hero" src="./assets/img/landing-page/home-hero.png" />
                  </NavLink>
                </div>
              </div>

              <div className="row">
                <div className="col-12 p-0">
                  <div className="home-carousel">
                    <GlideComponent settings={slideSettings}>
                      {
                        slideItems.map((f, index) => (
                          <div key={`slide_${index}`} className="card">
                            <div className="card-body text-center">
                              <div>
                                <i className={f.icon + ' large-icon'}></i>
                                <h5 className="mb-3 font-weight-semibold">{f.title}</h5>
                              </div>
                              <div>
                                <p className="detail-text">{f.detail}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </GlideComponent>
                  </div>
                </div>
              </div>

              <div className="row">
                <a className="btn btn-circle btn-outline-semi-light hero-circle-button"
                  href="#scroll" onClick={(event) => scrollTo(event, 'features')}>
                  <i className="simple-icon-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container" id="features">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Features At a Glance</h1>
                  <p>
                    Smart real-time monitoring of public restrooms in order to assure the cleanliness, social distancing & hygiene levels and also to regulate the maintenance operations and to automate certain tasks when required precisely while keeping a log of the daily tasks at the command center.
                  </p>
                </div>
              </div>
              {
                features.map((feature, i) => (
                  <div key={`feature_${i}`} >

                    {i % 2 === 0 && (
                      <div className="row feature-row">
                        <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                          <div className="feature-text-container">
                            <h2>{feature.title}</h2>
                            <p dangerouslySetInnerHTML={{
                              __html: feature.detail
                            }}></p>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
                          <img alt={feature.title} src={feature.img}
                            className="feature-image-right feature-image-charts position-relative" />
                        </div>
                      </div>
                    )}
                    {i % 2 === 1 && (
                      <div className="row feature-row" >
                        <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                          <img alt={feature.title} src={feature.img}
                            className="feature-image-left feature-image-charts" />
                        </div>
                        <div
                          className="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2">
                          <div className="feature-text-container">
                            <h2>{feature.title}</h2>
                            <p dangerouslySetInnerHTML={{
                              __html: feature.detail
                            }}></p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              }
            </div>
          </div>
          <div className="section background background-no-bottom mb-0 pb-0">
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Enjoying so Far?</h1>
                  <p>Purchase SRMS to get a fresh start with your own system.</p>
                </div>
                <div className="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                  <div className="text-center mb-3">
                  <NavLink className="btn btn-light btn-xl mr-2 mb-2" to={adminRoot}>
                      LOGIN NOW <i className="simple-icon-arrow-right"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll" onClick={(event) => scrollTo(event, 'home')}><i className="simple-icon-arrow-up"></i></a>
                </div>
                <div className="col-12 text-center footer-content">
                  <a className="c-pointer" href="#scroll" onClick={(event) => scrollTo(event, 'home')}>
                    <img className="footer-logo" alt="footer logo"
                      src="./assets/logos/white-full.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12"></div>
                <div className="col-12 text-center">
                  <p className="mb-0">2020 © 6iNSIGHTS</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div >
    </div >
  )
};

export default Home;
