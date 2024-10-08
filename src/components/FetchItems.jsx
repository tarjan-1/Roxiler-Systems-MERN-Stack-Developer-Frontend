import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "../app/features/itemsSlice";
import SelectMonth from "./SelectMonth";
import { getBySearchnMonth } from "../app/api/itemsAPI";
import { setSearch } from "../app/features/searchSlice";

const FetchItems = () => {
  const month = useSelector((state) => state.month.month);
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearch({ search: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getBySearchnMonth(search, month);
    dispatch(setItems({ items: data.transactions }));
  };

  return (
    <div className="flex flex-wrap justify-between items-center m-5">
      <form method="post" onSubmit={handleSubmit}>
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
                value={search}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </form>

      <SelectMonth />
    </div>
  );
};

export default FetchItems;
