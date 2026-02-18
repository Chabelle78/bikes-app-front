import { useEffect, useState } from 'react'
import { getTeamEquipment } from '@/services/api/sportsdb.service'

export function useTeamEquipment(teamId?: number) {
  const [equipment, setEquipment] = useState<[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!teamId) return

    const fetchEquipment = async () => {
      setLoading(true)
      setError(null)

      try {
        const result = await getTeamEquipment(teamId)
        setEquipment(result ?? [])
      } catch (err) {
        setError(err as Error)
        setEquipment([])
      } finally {
        setLoading(false)
      }
    }

    fetchEquipment()
  }, [teamId])

  return {
    equipment,
    loading,
    error,
  }
}
