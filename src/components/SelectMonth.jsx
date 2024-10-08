import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMonth } from "../app/features/monthSlice";
import { getBySearchnMonth } from "../app/api/itemsAPI";
import { setItems } from "../app/features/itemsSlice";

const SelectMonth = () => {
  const month = useSelector((state) => state.month.month);
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  const handleMonth = async (e) => {
    dispatch(setMonth({ month: e.target.value }));
    const data = await getBySearchnMonth(search, e.target.value);
    dispatch(setItems({ items: data.transactions }));
  };

  return (
    <>
      <select
        className="select select-bordered w-full max-w-xs"
        defaultValue={month}
        onChange={handleMonth}
      >
        {/* <option disabled selected value="March">
        March
      </option> */}
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </>
  );
};

export default SelectMonth;
