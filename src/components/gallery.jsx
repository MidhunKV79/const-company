import { Image } from "./image";
import React, { useState } from "react";

export const Gallery = (props) => {
  const [visibleImages, setVisibleImages] = useState(3);
  
  const loadMoreImages = () => {
    setVisibleImages(prevVisible => prevVisible + 3);
  };
  
  const collapseImages = () => {
    setVisibleImages(3);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Explore our portfolio showcasing our expertise in excavation and sheet piling projects that demonstrate our commitment to precision engineering and quality construction across Kerala.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.slice(0, visibleImages).map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 mb-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.largeImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        
        {props.data && (
          <div className="row mt-5">
            <div className="col-12">
              {visibleImages < props.data.length && (
                <button 
                  onClick={loadMoreImages}
                  className="btn btn-custom btn-lg me-2"
                >
                  Load More
                </button>
              )}
              {visibleImages > 3 && (
                <button 
                  onClick={collapseImages}
                  className="btn btn-custom btn-lg"
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
