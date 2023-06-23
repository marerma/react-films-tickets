import { useMemo } from "react";
import { filterFilms } from "shared/utils/getFilteredData";
import { useAppSelector } from "store/hooks";
import { useGetAllFilmsQuery, filmsApi } from "store/reducer/FilmsApiSlice";
import { IsActiveFilter, ActiveFilters } from "store/selector/Selectors";

const useFilteredFilms = () => {
  const { data: allFilms, isLoading, isError } = useGetAllFilmsQuery();
  const isActiveFilter = useAppSelector(IsActiveFilter);
  const filters = useAppSelector(ActiveFilters);
  const {data: filmsInCinema, isSuccess: filmsInCinemaFetched, isLoading: filmsInCinemaLoading, isFetching: filmsInCinemaFetching} = filmsApi.endpoints.getCinemaFilms.useQueryState(filters.cinema);

  const filteredFilms = useMemo(() => {    
    if (allFilms && isActiveFilter) {
      return filmsInCinemaFetched ? 
        filterFilms(allFilms.filter((film) => filmsInCinema.find(el => el.id === film.id)), filters)
        : 
        filterFilms(allFilms, filters);
    }
    return allFilms;
  }, [filmsInCinemaFetched, allFilms, isActiveFilter, filmsInCinema, filters]);

  return {filteredFilms, isLoading, isError, filmsInCinemaLoading, filmsInCinemaFetching}
}

export default useFilteredFilms;