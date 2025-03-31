import { axios } from '@/lib/axios'
import { ApiResponse } from '@/types/api-response'
import { App } from '@/types/app'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'

export const createAppSchema = z.object({
  name: z.string()
})

export type CreateAppData = z.infer<typeof createAppSchema>

export function useCreateApp() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (payload: CreateAppData) => {
      return axios.post<ApiResponse<App>>('/apps', payload)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['apps'] })
    }
  })
}
