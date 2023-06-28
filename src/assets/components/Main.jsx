import SocialBar from "./SocialBar";
import "./Main.css";
import myImage from "./Images/download.jpeg";
const Main = () => {
  return (
    <div>
      <div className="Main">
        <div className="row">
          <div className="column1">
            <h1>Padala Mahideep</h1>
            <p className="About">
              {" "}
              Hi..! I am a highly skilled software developer and data analyst
              with a logical mindset and a passion for innovative solutions.
              Proficient in multiple programming languages and data analysis
              techniques, I excel at solving complex problems and delivering
              high-quality results. With strong communication skills and a
              commitment to continuous learning, I am eager to contribute to
              your team.
            </p>
            <SocialBar />
          </div>
          <div className="column2">
            <center>
              {" "}
              <img className="photo" src={myImage} alt="myprofile" />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
