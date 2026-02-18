import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useFiltersState } from "@/hooks/useFiltersState";
import { fetchBikes, clearFilters } from "@/features/bikes/bikesSlice";
import {
  selectFilteredBikes,
  selectBikesLoading,
  selectBikesError,
} from "@/features/bikes/bikes.selector";
import { useNavigate } from "react-router-dom";
import { fetchBrands } from "@/features/brands/brandsSlice";

export default function useHome() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const bikes = useAppSelector(selectFilteredBikes);
  const loading = useAppSelector(selectBikesLoading);
  const error = useAppSelector(selectBikesError);

  // Enable filters on home page
  useFiltersState(true);

  useEffect(() => {
    dispatch(fetchBikes());
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleDetailsClick = (id: string) => {
    navigate(`/bikes/${id}`);
  };

  const handleResetFilters = () => {
    dispatch(clearFilters());
  };

  return { bikes, loading, error, handleDetailsClick, handleResetFilters };
}
