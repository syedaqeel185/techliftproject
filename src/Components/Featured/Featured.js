import React from "react";
import useFetch from "../Hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Rwp");
  
  return (
    <div className="featured">
    {loading ? "Loading..." :  <> <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Amazing Room</h1>
          <h3>{data[0]}</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Amazing Room</h1>
          <h3>{data}</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Amazing Room</h1>
          <h3>{data}</h3>
        </div>
      </div> </>}
    </div>
  );
};

export default Featured;
