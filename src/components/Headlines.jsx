import React, { useContext, useEffect } from "react";
import AppContext from "../store/context";
import HeadlineItem from "./HeadlineItem";

const Headlines = () => {
  const { fetchHeadlines, headlines } = useContext(AppContext);
  useEffect(() => {
    fetchHeadlines();
  }, []);
  return (
    <div className="grid grid-flow-col w-[95%] xl:w-[90%] mx-auto my-10 gap-5 overflow-x-scroll rounded-3xl ">
      {headlines.map((item) => (
        <HeadlineItem item={item} key={item.publishedAt} />
      ))}
    </div>
  );
};

export default Headlines;
