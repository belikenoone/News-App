import React from "react";

const HeadlineItem = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>{item.urlToImage ? <img src={item.urlToImage} /> : null}</figure>
      <div className="card-body">
        <h2 className="card-title text-white">{item.title}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          <div
            className="tooltip  tooltip-left tooltip-primary"
            data-tip="View"
          >
            <a href={item.url} className="btn btn-primary">
              View Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineItem;
