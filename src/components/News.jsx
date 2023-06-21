import React, { useContext, useEffect, useState } from "react";
import AppContext from "../store/context";
import HeadlineItem from "./HeadlineItem";

const News = () => {
  const { news, fetchNews } = useContext(AppContext);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetchNews(category);
  }, [category]);
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-4">
      <h2 className="text-7xl font-bold text-center">News</h2>
      <div className="flex justify-evenly items-center lg:flex-row flex-col gap-4">
        <h2 className="text-4xl font-bold">Results For: {category}</h2>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value={"general"}>General</option>
          <option value={"entertainment"}>Entertainment</option>
          <option value={"business"}>Business</option>
          <option value={"health"}>Health</option>
          <option value={"science"}>Science</option>
          <option value={"sports"}>Sports</option>
          <option value={"technology"}>Technology</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-9 justify-items-center">
        {news.map((item) => (
          <HeadlineItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default News;
