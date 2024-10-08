import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import { getBarChartDataByMonth } from "../app/api/barChartAPI";

const Chart = () => {
  const [barData, setBarData] = useState();
  const [month, setMonth] = useState(3);

  const handleMonthChange = async () => {
    let data = await getBarChartDataByMonth(month);
    if (data) {
      setBarData(data);
      console.log("bardata: ", barData);
      console.log("selected month: ", month);
    }
  };

  useEffect(() => {
    handleMonthChange();
  }, [month, setMonth]);

  return (
    <div className="hero min-h-[500px] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Bar Chart Stats: </h1>
          {/* dropdown to select month  */}
          <select
            className="select mt-2 max-w-xs"
            defaultValue={month}
            onChange={(e) => {
              {
                setMonth(e.target.value);
                handleMonthChange();
              }
            }}
          >
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
          {/* statistics data */}
        </div>
        <BarChart dataSet={barData} />
      </div>
    </div>
  );
};

export default Chart;
