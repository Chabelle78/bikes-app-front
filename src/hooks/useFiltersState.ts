import { useEffect } from 'react'
import { useAppDispatch } from '@/app/hooks'
import { enableFilters, disableFilters } from '@/features/settings/settingsSlice'

// Enable or disable filters based on the current page
export const useFiltersState = (enabled: boolean) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (enabled) {
      dispatch(enableFilters())
    } else {
      dispatch(disableFilters())
    }
  }, [enabled, dispatch])
}
