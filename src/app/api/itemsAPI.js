export const getAllItems = async (month) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/transactions?month=${month}`
  );
  const data = await res.json();

  return data;
};

export const getBySearchnMonth = async (searchItem, month) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_BACKEND_API_URL
    }/transactions/?search=${searchItem}&month=${month}`
  );
  const data = await res.json();

  return data;
};

export const getByPagenPerPage = async (searchItem, month, page) => {
  // Filtering transactions based on page
  if (page && page == 0) {
    page = 1;
  }
  const res = await fetch(
    `${
      import.meta.env.VITE_BACKEND_API_URL
    }/transactions/?search=${searchItem}&month=${month}&page=${page}`
  );
  const data = await res.json();

  return data;
};
