import React from "react";
import { useSelector } from "react-redux";

const TransTable = () => {
  const items = useSelector((state) => state.items.items);

  return (
    <div className="overflow-x-auto m-5">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Title</th>
            <th className="text-center">Description</th>
            <th className="text-center">Price</th>
            <th className="text-center">Category</th>
            <th className="text-center">Sold</th>
            <th className="text-center">Image</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>{`${item.sold}`}</td>
                  <td>{item.image}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan="7"
                className="text-center text-red-400 font-extralight p-20"
              >
                No items found, Try changing the month or query.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransTable;
