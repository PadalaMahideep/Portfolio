/* eslint-disable react-hooks/rules-of-hooks */

const contact2 = () => {
  return (
    <div className="contact2">
      <form
        className="form"
        action="https://getform.io/f/717140a8-2ac1-4c5e-8988-65fe61d7a0a3"
        method="post"
      >
        <label>
          <input
            type="text"
            required=""
            placeholder=""
            className="input"
            name="name"
          />
          <span>Name</span>
        </label>

        <label>
          <input
            required=""
            placeholder=""
            type="email"
            className="input"
            name="email"
          />
          <span>Email</span>
        </label>

        <label>
          <textarea
            required=""
            rows="3"
            placeholder=""
            className="input01"
            name="message"
          ></textarea>
          <span>Message</span>
        </label>

        <button className="fancy" href="#">
          <span className="top-key"></span>
          <span className="text">submit</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </div>
  );
};

export default contact2;
