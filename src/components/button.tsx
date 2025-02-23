import type { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> { }

export function Button(props: ButtonProps) {
  return (
    <button
      className="bg-gray-500 h-12 flex items-center justify-between text-blue font-semibold px-5 py-2 rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      { ...props }
    />
  )
}