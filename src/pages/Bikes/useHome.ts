import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  fetchBikes,
  selectFilteredBikes,
  selectBikesLoading,
  selectBikesError,
} from "@/features/bikesSlice";
import { fetchBrands } from "@/features/brandsSlice";

export default function useHome() {
  const dispatch = useAppDispatch();
  const bikes = useAppSelector(selectFilteredBikes);
  const loading = useAppSelector(selectBikesLoading);
  const error = useAppSelector(selectBikesError);

  useEffect(() => {
    dispatch(fetchBikes());
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleDetailsClick = (id: string) => {
    console.log(`Voir les détails du vélo ${id}`);
    // Ici vous pouvez ajouter votre logique de navigation
    // Par exemple: navigate(`/bikes/${id}`)
  };

  return { bikes, loading, error, handleDetailsClick };
}
