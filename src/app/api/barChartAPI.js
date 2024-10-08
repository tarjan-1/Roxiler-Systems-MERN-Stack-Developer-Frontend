export const getBarChartDataByMonth = async (month) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/bar-chart/?month=${month}`
  );
  const data = await res.json();

  return data;
};
