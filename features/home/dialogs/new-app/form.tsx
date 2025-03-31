'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateAppData, createAppSchema, useCreateApp } from '../../api/create-app'
import { HttpStatusCode } from 'axios'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export interface Props {
  closeDialog: () => void
}

export default function CreateAppForm({ closeDialog }: Props) {
  const { mutateAsync, isPending } = useCreateApp()

  const form = useForm<CreateAppData>({
    resolver: zodResolver(createAppSchema),
    defaultValues: {
      name: ''
    }
  })

  async function onSubmit(values: CreateAppData) {
    const response = await mutateAsync(values)

    if (response.status !== HttpStatusCode.Created) {
      return form.setError('root', { message: response.data.message })
    }

    toast('Application created successfully.')
    closeDialog()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>App name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" isLoading={isPending}>
          Create
        </Button>
      </form>
    </Form>
  )
}
