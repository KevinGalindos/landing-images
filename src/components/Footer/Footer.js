import Facebook from "../../assets/images/Facebook.svg";
import Youtube from "../../assets/images/Youtube.svg";
import Twitter from "../../assets/images/Twitter.svg";
import Google from "../../assets/images/Google.svg";
import Dribble from "../../assets/images/Dribble.svg";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer_copyrights">
          <p>
            {" "}
            © 2016 - <a href="/">Sneak</a> All Rigth Reserved{" "}
          </p>
        </div>
        <div className="footer_social">
          <a href="/">
            <img src={Facebook} alt="Facebook"/>
          </a>
          <a href="/">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="/">
            <img src={Dribble} alt="Dribble" />
          </a>
          <a href="/">
            <img src={Google} alt="Google+" />
          </a>
          <a href="/">
            <img src={Youtube} alt="Youtube" />
          </a>
        </div>
      </div>
    </section>
  );
};
