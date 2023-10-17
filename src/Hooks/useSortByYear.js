import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";

function useSortByYear() {
  const { dispatchSearchParams, dispatchOffsetPages, setSearchInfo } =
    useAppState();

  const sortByYear = useCallback(
    (year = 0) => {
      dispatchSearchParams({
        type: "change_search_params",
        params: {
          pageSize: 12,
          fields: ["title", "year", "coverImage", "id", "rating"],
          sort: [{ field: "id", direction: "desc" }],
          offset: null,
          filterByFormula: `IF({year} = ${year}, {year}, BLANK())`,
        },
      });
      dispatchOffsetPages({ type: "reset" });
      setSearchInfo({ sortByRating: false, info: `рік - ${year}` });
    },
    [setSearchInfo, dispatchSearchParams, dispatchOffsetPages]
  );

  return sortByYear;
}

export default useSortByYear;