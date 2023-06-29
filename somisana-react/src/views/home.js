import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>somisana</title>
        <meta property="og:title" content="somisana" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-logo">
            <img
              alt="image"
              src="/egagasini-logo-200h.png"
              className="home-egagasini-logo"
            />
          </div>
          <div className="home-cta-container">
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <img alt="image" src="/default-img.svg" className="home-image" />
              <div data-role="CloseMobileMenu" className="home-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <div className="home-links-container">
                <a href="#features" className="home-link Anchor">
                  features
                </a>
                <a href="#services" className="home-link1 Anchor">
                  services
                </a>
                <a href="#about-us" className="home-link2 Anchor">
                  About Us
                </a>
                <a href="#contact" className="home-link3 Anchor">
                  contact
                </a>
              </div>
              <button className="home-cta-btn Anchor button">
                sTART BUILDING
              </button>
            </div>
            <div className="home-bot">
              <div className="home-social-links-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <a href="#about-us" className="home-about-link">
          <span className="Anchor">About</span>
          <br></br>
        </a>
        <a href="#data" className="home-data-link Anchor">
          Data
        </a>
        <a href="#people" className="home-people-link">
          People
        </a>
        <a href="#news" className="home-new-link">
          News
        </a>
        <a href="#contact" className="home-contacts-link Anchor">
          contact
        </a>
      </div>
      <div className="home-container2">
        <div className="home-container3">
          <h1 className="home-text02">
            <span className="home-text03">SOMISANA</span>
            <br></br>
          </h1>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div id="about-us" className="home-about-us">
        <div className="home-heading-container">
          <h2 className="home-text05 Section-Heading">
            Sustainable Ocean modelling initiative. A South African Approach
          </h2>
          <span className="home-secondary-text">
            <span className="Section-Text">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              Somisana, short for the Sustainable Ocean Modelling Initiative, is
              a pioneering effort undertaken by South Africa to enhance its
              capabilities in the field of numerical modelling. This initiative
              aims to leverage global advancements, particularly the work done
              by Copernicus CMEMS (Copernicus Marine Environment Monitoring
              Service), to develop high-resolution, regional-scale ocean models.
              By doing so, Somisana seeks to contribute to sustainable ocean
              management, conservation, and decision-making processes in South
              Africa.
            </span>
          </span>
          <button className="home-cta-btn1 button Anchor">
            START BUILDING
          </button>
        </div>
        <div className="home-container4 content-header">
          <h1 className="content-header">
            Expanding Capabilities in Numerical Modelling
          </h1>
          <span>
            <span>
              Numerical modelling plays a crucial role in understanding and
              predicting the complex dynamics of the ocean. It involves creating
              computer-based models that simulate various aspects of the marine
              environment, including currents, temperature, salinity, nutrient
              distribution, and ecosystem interactions. These models help
              researchers and policymakers gain valuable insights into the
              functioning of the ocean, assess potential impacts of human
              activities, and develop effective management strategies.
            </span>
            <br></br>
            <br></br>
            <span>
              Somisana recognizes the significance of numerical modelling in
              addressing marine challenges and aims to expand South
              Africa&apos;s modelling capabilities. By utilizing existing global
              models, such as those developed by Copernicus CMEMS, Somisana can
              build upon established frameworks and adapt them to regional
              contexts. This approach allows South Africa to leverage
              international expertise, data, and infrastructure while tailoring
              the models to address specific local concerns and conditions.
            </span>
            <br></br>
          </span>
          <h1 className="content-header-not-first-child content-header">
            Leveraging Copernicus CMEMS
          </h1>
          <span>
            Copernicus CMEMS, a comprehensive service dedicated to ocean
            monitoring and forecasting, provides a wealth of data, models, and
            tools to facilitate sustainable ocean management worldwide. Somisana
            acknowledges the contributions made by Copernicus CMEMS and seeks to
            integrate its advancements into South Africa&apos;s modelling
            efforts. By doing so, South Africa can access high-quality data,
            state-of-the-art modelling techniques, and validated algorithms,
            enabling more accurate and reliable predictions.
          </span>
          <h1 className="home-text17 content-header-not-first-child content-header">
            Regional-Scale Modelling
          </h1>
          <span className="content-header">
            <span>
              One of the primary goals of Somisana is to develop
              high-resolution, regional-scale ocean models. Traditional
              global-scale models may lack the necessary spatial resolution to
              capture localized phenomena accurately. Regional models, on the
              other hand, focus on specific areas, such as coastal regions or
              marine ecosystems, allowing for a more detailed representation of
              local processes and interactions.
            </span>
            <br></br>
            <br></br>
            <span>
              Through regional-scale modelling, Somisana aims to enhance South
              Africa&apos;s understanding of its coastal and marine
              environments. This includes analysing and predicting variables
              such as coastal circulation patterns, upwelling events, nutrient
              transport, harmful algal blooms, and the impacts of climate change
              on these processes. The ability to model these phenomena at a
              higher resolution will provide valuable insights for
              decision-makers, resource managers, and conservationists,
              ultimately contributing to the sustainable use and protection of
              South Africa&apos;s ocean resources.
            </span>
          </span>
          <h1 className="home-text23 content-header-not-first-child content-header">
            Benefits and Implications
          </h1>
          <span>
            <span>
              The implementation of Somisana carries several benefits and
              implications for South Africa. By expanding its modelling
              capabilities, South Africa can improve its ability to predict and
              manage marine processes and phenomena. This will be instrumental
              in developing effective conservation strategies, promoting
              sustainable fisheries practices, mitigating the impacts of climate
              change, and safeguarding marine biodiversity.
            </span>
            <br></br>
            <br></br>
            <span>
              Additionally, the Somisana initiative has the potential to foster
              collaboration and knowledge exchange between South African
              researchers, global modelling communities, and institutions like
              Copernicus CMEMS. By working together, sharing data, and refining
              modelling techniques, a more comprehensive understanding of the
              ocean can be achieved, benefiting not only South Africa but the
              global scientific community as well.
            </span>
          </span>
          <h1 className="home-text29 content-header-not-first-child content-header">
            Summary
          </h1>
          <span>
            Somisana, the Sustainable Ocean Modelling Initiative, represents
            South Africa&apos;s commitment to advancing its capabilities in
            numerical modelling for sustainable ocean management. By leveraging
            the work done globally, particularly by Copernicus CMEMS, South
            Africa aims to develop high-resolution, regional-scale models
            tailored to its unique coastal and marine environments. Through this
            initiative, South Africa seeks to enhance its understanding of the
            ocean
          </span>
        </div>
      </div>
      <div id="data" className="home-data">
        <div className="home-service-card">
          <div className="home-card-content">
            <h3 className="home-text31 BigCard-Heading">THREDDS Catalogue</h3>
            <span className="home-text32 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button button Anchor">READ MORE</button>
          </div>
        </div>
        <div className="home-service-card1">
          <div className="home-card-content1">
            <h3 className="home-text33 BigCard-Heading">Visualization tools</h3>
            <span className="home-text34 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button1 button Anchor">READ MORE</button>
          </div>
        </div>
        <div className="home-service-card2">
          <div className="home-card-content2">
            <h3 className="home-text35 BigCard-Heading">
              Algoa Bay (operational model)
            </h3>
            <span className="home-text36 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button2 Anchor button">READ MORE</button>
          </div>
        </div>
        <div className="home-service-card3">
          <div className="home-card-content3">
            <h3 className="home-text37 BigCard-Heading">
              SW Cape (operational model)
            </h3>
            <span className="home-text38 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <button className="home-button3 button Anchor">READ MORE</button>
          </div>
        </div>
      </div>
      <div id="people" className="home-people">
        <div className="home-heading-container1">
          <h2 className="home-text39 Section-Heading">People</h2>
          <span className="home-text40 Section-Text">
            National Ocean Modelling team for NRF-SAEON and OCIMS 
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-feature-card">
            <img alt="image" src="/jenny-200h.jpg" className="home-image1" />
            <span className="home-heading Card-Heading">
              Dr Jennifer Veitch
            </span>
            <span className="home-text41 Card-Text">
              Principal Numerical Ocean Modeler at SAEON Egagasini and founder
              of the SOMISANA Initiative. Responsible for bringing SAEON and
              OCIMS together on operational modelling. 
            </span>
          </div>
          <div className="home-feature-card1">
            <img alt="image" src="/giles-200w.jpg" className="home-image2" />
            <span className="home-heading1 Card-Heading">Dr Giles Fearon</span>
            <span className="home-text42 Card-Text">
              Senior Operational Ocean Modeler at SAEON, responsible for
              expanding the modelling framework and for skills sharing and
              development . 
            </span>
          </div>
          <div className="home-feature-card2">
            <img
              alt="image"
              src="/nkululekohr-pic-200w.jpg"
              className="home-image3"
            />
            <span className="home-heading2 Card-Heading">
              Mr Nkululeko Memela
            </span>
            <span className="home-text43 Card-Text">
              Junior Operational Ocean Modeler at SAEON responsible for model
              testing, evaluation, reporting and maintains this website.
            </span>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div id="news" className="home-news">
        <div className="home-heading-container2">
          <h2 className="home-text44 Section-Heading">News</h2>
          <span className="home-text45 Section-Text">
            Highlights from the most recent SAEON new- letter articles on the
            ocean modeling front.
          </span>
        </div>
        <div className="home-cards-container1">
          <a
            href="https://enews.saeon.ac.za/issue-01-2023/eastern-boundary-upwelling-systems-past-present-and-future/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link4"
          >
            <div className="home-testimonial-card">
              <div className="home-card-heading">
                <div className="home-name-and-position">
                  <span className="home-name">Dr Jennifer Veich</span>
                  <span className="home-position">
                    <span>Click to visit the story.</span>
                    <br></br>
                    <span>Date: 01 2023</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-stars-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon10"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon12"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon14"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon16"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon18"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text50">
                <span className="home-text51">
                  The Open Science Conference on Eastern Boundary Upwelling
                  Systems: Past, Present and Future and the Second International
                  Conference on the Humboldt Current System took place in Lima,
                  Peru.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div id="contact" className="home-contact">
        <div className="home-content-container">
          <h2 className="home-text53 Section-Heading">
            This is where to find us:
          </h2>
          <div className="home-locations-container">
            <div className="home-location-1">
              <span className="home-heading3">
                Cape Town: Egagasini NRF-SAEON Office
              </span>
              <div className="home-adress">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span>
                  Foretrust Building, Martin Hammerschlag Way, Foreshore, Cape
                  Town, 8001
                </span>
              </div>
              <div className="home-email">
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span>nc.memela@saeon.nrf.ac.za</span>
              </div>
              <div className="home-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="home-icon24"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
                <span className="Section-Text">087 1832 054</span>
              </div>
            </div>
          </div>
          <div className="home-social-links-container1">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon26">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon28">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon30">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/dir//Department+of+Forestry,+Fisheries+and+the+Environment+Foretrust+Building,+Martin+Hammerschlag+Way,+Foreshore+Cape+Town+8001/@-33.9199805,18.4332465,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1dcc5d8eb650196d:0x91bf4ba297bafd05!2m2!1d18.4332465!2d-33.9199805?entry=ttu"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link5"
        >
          <img
            id="egagsiniadress"
            alt="image"
            src="/egagsiniadress1-1500w.png"
            loading="eager"
            className="home-image4"
          />
        </a>
      </div>
    </div>
  )
}

export default Home
