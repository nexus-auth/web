import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Dialog from '@/components/dialog'
import CreateAppForm from './form'

export default function CreateAppDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      title="Create app"
      description="To create a new app, give it a name."
      trigger={
        <Button size="sm" className="flex items-center gap-2">
          <Plus />
          <span>New app</span>
        </Button>
      }
    >
      <CreateAppForm closeDialog={() => setOpen(false)} />
    </Dialog>
  )
}
