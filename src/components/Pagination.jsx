import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";

const FooterPart = () => {
  const items = useSelector((state) => state.items.items);
  console.log(items);

  return (
    <div className="join flex flex-row justify-center">
      {items.length > 10 && (
        <button className={`join-item btn`} disabled={isDisabled}>
          «
        </button>
      )}

      <button className="join-item btn">
        Showing {items.length} of {items.length} items
      </button>
      {items.length > 10 && (
        <button className={`join-item btn`} disabled={isDisabled}>
          »
        </button>
      )}
    </div>
  );
};

export default FooterPart;
