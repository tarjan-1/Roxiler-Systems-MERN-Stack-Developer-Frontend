import { useEffect } from "react";

import FetchItems from "./components/FetchItems";
import TransTable from "./components/TransTable";
import Pagination from "./components/Pagination";
import Introduction from "./components/Introduction";

import { useSelector, useDispatch } from "react-redux";
import { getBySearchnMonth } from "./app/api/itemsAPI";
import { setItems, setRawDataOfItems } from "./app/features/itemsSlice";
import { setStatisticsData } from "./app/features/statisticsSlice";
import Statistics from "./components/Statistics";
import { getStatisticsByMonth } from "./app/api/statisticsAPI";
import Chart from "./components/Chart";

function App() {
  const month = useSelector((state) => state.month.month);
  const search = useSelector((state) => state.search.search);
  const statistics = useSelector((state) => state.statistics.statistics);

  const dispatch = useDispatch();

  const intitialData = async () => {
    const data = await getBySearchnMonth(search);
    console.log(data);
    dispatch(setItems({ items: data.transactions }));
    dispatch(setRawDataOfItems({ items: data }));

    const statisticsData = await getStatisticsByMonth(3);
    dispatch(setStatisticsData({ statistics: statisticsData }));
  };

  useEffect(() => {
    intitialData();
  }, []);

  return (
    <>
      <Introduction />
      <FetchItems />
      <TransTable />
      <Pagination />
      <div className="divider" />
      <Statistics />
      <div className="divider mt-20" />
      <Chart />
    </>
  );
}

export default App;
