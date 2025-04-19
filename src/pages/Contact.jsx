// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./Hero";

function Contact() {
  return (
    <>
      <Navbar />
 <br />
      <section id="contact" className="get-started">
    <div className="container">
      <div className="row text-center">
        <h1 className="display-3 fw-bold text-capitalize">Get started</h1>
        <div className="heading-line" />
        <p className="lh-lg">
        "Reach out today and let’s start turning your ideas into real digital solutions."</p>

      </div>
      {/* START THE CTA CONTENT  */}
      <div className="row text-white">
        <div className="col-12 col-lg-6 gradient shadow p-3">
            <div className="cta-info w-100">
            <h4 className="display-4 fw-bold">100% Satisfaction Guaranteed</h4>
            <p className="lh-lg">
                We are committed to delivering high-quality digital solutions with professionalism, transparency, and care. Your trust is our priority — that’s why we handle every project with clear communication, attention to detail, and a results-driven approach. You're in good hands.
            </p>
            <h3 className="display-3--brief">What happens next?</h3>
            <ul className="cta-info__list">
                <li>We'll prepare a tailored proposal for you.</li>
                <li>We’ll go over the details together.</li>
                <li>Once you're confident, we'll begin the project.</li>
            </ul>
            </div>

        </div>
        <div className="col-12 col-lg-6 bg-white shadow p-3">
          <div className="form w-100 pb-2">
            <h4 className="display-3--title mb-5">start your project</h4>
            <form action="#" className="row">
              <div className="col-lg-6 col-md mb-3">
                <input
                  type="text"
                  placeholder="First Name"
                  id="inputFirstName"
                  className="shadow form-control form-control-lg"
                />
              </div>
              <div className="col-lg-6 col-md mb-3">
                <input
                  type="text"
                  placeholder="Last Name"
                  id="inputLastName"
                  className="shadow form-control form-control-lg"
                />
              </div>
              <div className="col-lg-12 mb-3">
                <input
                  type="email"
                  placeholder="email address"
                  id="inputEmail"
                  className="shadow form-control form-control-lg"
                />
              </div>
              <div className="col-lg-12 mb-3">
                <textarea
                  name="message"
                  placeholder="message"
                  id="message"
                  rows={8}
                  className="shadow form-control form-control-lg"
                  defaultValue={""}
                />
              </div>
              <div className="text-center d-grid mt-1">
                <button
                  type="button"
                  className="btn btn-primary rounded-pill pt-3 pb-3"
                >
                  submit
                  <i className="fas fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
     
      
      <Footer />
    </>
  );
}

export default Contact;
