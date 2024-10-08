import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatisticsByMonth } from "../app/api/statisticsAPI";
import { setStatisticsData } from "../app/features/statisticsSlice";

const Statistics = () => {
  const [selectedMonth, setSelectedMonth] = useState(3);
  const statistics = useSelector((state) => state.statistics.statistics);
  const dispatch = useDispatch();

  const getStatisticsData = async (chosenMonth) => {
    setSelectedMonth(chosenMonth);
    const statisticsData = await getStatisticsByMonth(selectedMonth);
    dispatch(setStatisticsData({ statistics: statisticsData }));
  };

  console.log("statistics: ", statistics);

  useEffect(() => {
    getStatisticsData(selectedMonth);
  }, [selectedMonth]);

  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Statistics: </h1>
          {/* dropdown to select month  */}
          <select
            className="select mt-2 max-w-xs"
            defaultValue={3}
            onChange={(e) => getStatisticsData(e.target.value)}
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
          {/* statistics data */}
          <div className="overflow-x-auto mt-5"></div>
          <table className="table">
            <thead className="bg-gray-200">
              <tr>
                <th>Total Sale</th>
                <th>Total Sold Items</th>
                <th>Total Items Not Sold</th>
              </tr>
            </thead>
            <tbody>
              {statistics && (
                <tr className="text-center">
                  <th>{`${statistics.totalSaleAmount.totalSalesAmountForGivenMonth}`}</th>
                  <td>{`${statistics.totalItemsSold.totalItemsSoldForGivenMonth}`}</td>
                  <td>{`${statistics.totalItemsNotSold.totalItemsNotSoldForGivenMonth}`}</td>
                </tr>
              )}
            </tbody>
          </table>
          {statistics.length === 0 && (
            <div className="text-center p-12 text-red-400 font-extralight">
              No data found, Check newtwork connection or try changing month
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
