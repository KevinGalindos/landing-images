import { Card } from "./../Card";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const Gallery = ({ data }) => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery_cards">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {data.map((item, key) => (
                <Card
                  key={key}
                  imgSrc={item.urls.small}
                  altImg={item.alt_description}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
};
