import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useFiltersState } from "@/hooks/useFiltersState";
import {
  fetchBikes,
  selectFilteredBikes,
  selectBikesLoading,
  selectBikesError,
} from "@/features/bikesSlice";
import { fetchBrands } from "@/features/brandsSlice";
import { useNavigate } from "react-router-dom";

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

  return { bikes, loading, error, handleDetailsClick };
}
