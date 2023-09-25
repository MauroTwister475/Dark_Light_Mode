import { ChangeEvent } from "react";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

export function Input({value, onChange}: InputProps) {
  return (
    <input 
      id="texto"
      type="text"
      value={value}
      onChange={onChange}
      className="py-2 px-4 bg-slate-400 rounded-md"
    />
  )
}
