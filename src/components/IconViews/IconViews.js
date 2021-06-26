import { Navbar } from '../Navbar'

import List from "../../assets/images/Column-Icon.svg";
import Grid from "../../assets/images/Grid-Icon.svg";

export const IconViews = () => {
  return (
    <section className="icon-views">
      <div className="container">
        <div className="icon-views_content">
          <button type="submit">
            <img src={Grid} alt="Grid View" />{" "}
          </button>
          <button type="submit">
            <img src={List} alt="List view" />{" "}
          </button>
        </div>
      </div>
        <Navbar/>
    </section>
  );
};
