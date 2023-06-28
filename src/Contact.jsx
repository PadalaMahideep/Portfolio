import Contact1 from "./Contact1";
import Contact2 from "./Contact2";

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
