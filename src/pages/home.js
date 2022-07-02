import React from "react";
import Product from "../comp/product";
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const {
    tags,
    filters,
    products,
    order,
    tagname,
    col,
    search,
    cart,
    user,
    loggedin,
  } = state;
  const handleSearch = (e) => {
    const { value } = e.target;
    dispatch({ type: "search", payload: value });
  };
  const handleFilters = (e) => {
    const payload = e.target.id;
    dispatch({ type: "sort", payload });
  };

  const handleTags = (e) => {
    const payload = e.target.id;
    dispatch({ type: "tagname", payload });
  };

  return (
    <main>
      <div>
        {filters?.map((x) => (
          <button key={x} id={x} onClick={handleFilters}>
            {x}
          </button>
        ))}
      </div>
      <div>
        {tags?.map((x) => (
          <button key={x.t} onClick={handleTags} id={x.t}>
            {x.t} {x.c}
          </button>
        ))}
      </div>
      <div>
        <input placeholder="search" value={search} onChange={handleSearch} />
      </div>
      <section>
        {products
          ?.filter((x) => x?.tags.startsWith(tagname))
          ?.filter((x) => Object.values(x).join("").includes(search))
          ?.sort((x,y) => order?(x[col]-y[col]):(y[col]-x[col]))
          ?.map((x) => (
            <Product key={x._id} {...x} />
          ))}
      </section>
    </main>
  );
}
