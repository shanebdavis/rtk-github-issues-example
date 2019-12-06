import { useState, ChangeEvent } from 'react'

export function useTextField(initialValue: string) {
  const [currentValue, setValue] = useState(initialValue)
  return {
    value: currentValue,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  }
}
