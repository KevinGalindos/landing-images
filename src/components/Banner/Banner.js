import { Loading } from "./../Loading";
import useFetch from "../../@common/hooks/useFetch";

export const Banner = () => {
  const { loading, result } = useFetch({ url: "photos/random?count=1" });

  return loading ? (
    <Loading />
  ) : (
    <section className="banner">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${result[0].urls.full})`,
        }}
      ></div>
      <div className="banner_content">
        <div className="banner_content_text">
          <h1>EXPLORE BEYOND HORIZON</h1>
          <p>
            Magna mundi referrentur quo, no rebum dignissim qui. Per quodsi
            accusata id, agam labores.
          </p>
          <button>VIEW OUR WORK</button>
        </div>
      </div>
    </section>
  );
};
