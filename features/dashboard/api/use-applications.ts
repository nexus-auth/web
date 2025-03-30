import { axios } from '@/lib/axios'
import { ApiResponse } from '@/types/api-response'
import { App } from '@/types/app'
import { useQuery } from '@tanstack/react-query'

export function useApps() {
  return useQuery({
    queryKey: ['apps'],
    queryFn: async () => {
      const { data } = await axios.get<ApiResponse<App[]>>('/apps')
      return data
    }
  })
}
