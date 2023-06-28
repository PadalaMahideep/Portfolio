/* eslint-disable react-hooks/rules-of-hooks */

const contact2 = () => {
  return (
    <div className="contact2">
      <form className="form">
        <label>
          <input type="text" required="" placeholder="" className="input" />
          <span>first name</span>
        </label>

        <label>
          <input required="" placeholder="" type="email" className="input" />
          <span>email</span>
        </label>

        <label>
          <textarea
            required=""
            rows="3"
            placeholder=""
            className="input01"
          ></textarea>
          <span>message</span>
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
