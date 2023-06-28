import Contact1 from "./contact1";
import Contact2 from "./contact2";

const Contact = () => {
  return (
    <div className="contact">
      <div className="header">
        <h1>Contact Me</h1>
      </div>

      <div className="Field">
        <Contact1 />
        <Contact2 />
      </div>
    </div>
  );
};

export default Contact;
