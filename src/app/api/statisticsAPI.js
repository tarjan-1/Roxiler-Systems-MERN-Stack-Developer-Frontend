export const getStatisticsByMonth = async (month) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_BACKEND_API_URL
    }/statistics/getAllStatistics/?month=${month}`
  );
  const data = await res.json();

  return data;
};
