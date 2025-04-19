// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Service() {
  return (
    <>
      <Navbar />
    <br />
    <br />
    <br />
    <div className="max-w-screen-xl mx-auto px-8">
      <section id="services" className="services">
    <div className="container">
      <div className="row text-center">
        <h1 className="display-3 fw-bold">Our Services</h1>
        <div className="heading-line mb-1" />
      </div>
      {/* START THE DESCRIPTION CONTENT  */}
      <div className="row pt-2 pb-2 mt-0 mb-3">
        <div className="col-md-6 border-right">
          <div className="bg-white p-3">
            <h2 className="fw-bold text-capitalize text-center">
            Professional Digital Services —
            I’m ready to help you build your website and digital strategy effectively and reliably.
            </h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-white p-4 text-start">
            <p className="fw-light">
            <h2 className="fw-bold text-capitalize text-center"> Creative & Efficient Digital Solutions</h2>
            Looking to build a company website, process data, or develop your thesis ideas? I offer comprehensive services tailored to your needs.
             With experience and expertise in technology, I’m here to help you achieve your digital goals.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* START THE CONTENT FOR THE SERVICES  */}
    <div className="container">
      {/* START THE MARKETING CONTENT  */}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
          <div className="services__content">
            <div className="icon d-block fas fa-paper-plane" />
            <h3 className="display-3--title mt-1">Company Website Development (Laravel, PHP Native, JavaScript)</h3>
            <p className="lh-lg">
            We specialize in building professional and fully responsive websites tailored to your business. 
            Whether you need a corporate site, a landing page, or a custom web app, we use modern technologies like Laravel,
             PHP Native, and JavaScript to deliver high-performance and scalable solutions.
            </p>
            <button
              type="button"
              className="rounded-pill btn-rounded border-primary"
            >
              Learn more
              <span>
                <i className="fas fa-arrow-right" />
              </span>
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
          <div className="services__pic">
            <img
              src="images/services/service-1.png"
              alt="marketing illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      {/* START THE WEB DEVELOPMENT CONTENT  */}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
          <div className="services__pic">
            <img
              src="images/services/service-2.png"
              alt="web development illustration"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
          <div className="services__content">
            <div className="icon d-block fas fa-code" />
            <h3 className="display-3--title mt-1">Data Mining & Analysis</h3>
            <p className="lh-lg">
            Unlock the hidden potential of your data. We offer data mining and analytical services to help you extract valuable insights,
             discover patterns, 
            and make informed business or research decisions using statistical and machine learning techniques.
            </p>
            <button
              type="button"
              className="rounded-pill btn-rounded border-primary"
            >
              Learn more
              <span>
                <i className="fas fa-arrow-right" />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* START THE CLOUD HOSTING CONTENT  */}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
          <div className="services__content">
            <div className="icon d-block fas fa-cloud-upload-alt" />
            <h3 className="display-3--title mt-1">Thesis Assistance (Final Project Support)
            </h3>
            <p className="lh-lg">
            Stuck with your final project or thesis? We provide discreet, comprehensive support—from topic selection, 
            research development, system creation, documentation, to final presentation preparation.
             Ideal for IT, Computer Science, and related fields.
            </p>
            <button
              type="button"
              className="rounded-pill btn-rounded border-primary"
            >
              Learn more
              <span>
                <i className="fas fa-arrow-right" />
              </span>
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
          <div className="services__pic">
            <img
              src="images/services/service-3.png"
              alt="cloud hosting illustration"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
          <div className="services__pic">
            <img
              src="images/services/service-2.png"
              alt="web development illustration"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
          <div className="services__content">
            <div className="icon d-block fas fa-code" />
            <h3 className="display-3--title mt-1">Digital Marketing Services
            </h3>
            <p className="lh-lg">
            Grow your business with proven digital marketing strategies. We handle social media management, 
            SEO optimization, content creation, and ad campaign management to help your brand reach the right 
            audience and drive real results
            </p>
            <button
              type="button"
              className="rounded-pill btn-rounded border-primary"
            >
              Learn more
              <span>
                <i className="fas fa-arrow-right" />
              </span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  </div>
     
      
      <Footer />
    </>
  );
}

export default Service;
