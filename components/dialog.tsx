import {
  Dialog as BaseDialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { DialogDescription } from '@radix-ui/react-dialog'

interface Props {
  children: React.ReactNode
  trigger: React.ReactNode
  title: string
  description?: string
  open: boolean
  setOpen: (open: boolean) => void
}

export default function Dialog({ children, trigger, title, description, open, setOpen }: Props) {
  return (
    <BaseDialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader className="gap-y-2">
          <div>
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription className="text-sm text-gray-600 mt-1">
                {description}
              </DialogDescription>
            )}
          </div>

          {children}
        </DialogHeader>
      </DialogContent>
    </BaseDialog>
  )
}
