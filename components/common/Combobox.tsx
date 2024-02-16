'use client'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = Readonly<{
  genres: {
    value: string
    label: string
  }[]
}>

export function Combobox(props: Props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const router = useRouter()
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? props.genres.find((genre) => genre.value === value)?.label
            : 'Select Genre...'}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Genre..." />
          <CommandEmpty>No Genre found.</CommandEmpty>
          <CommandGroup>
            {props.genres.map((genre) => (
              <CommandItem
                key={genre.value}
                value={genre.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                  router.push(`/${genre.value}`)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === genre.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {genre.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
