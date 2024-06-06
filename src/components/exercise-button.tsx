'use client'

import type React from 'react'

export const ExerciseButton = ({
  onClick,
  children,
  disabled = false,
  bgColor,
}: {
  onClick: () => void
  bgColor?: string
  disabled?: boolean
  children: React.ReactNode
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`fixed bottom-0 w-full ${bgColor} text-center font-semibold text-3xl rounded-3xl py-2 transition-transform duration-300 ease-in-out disabled:opacity-50 enabled:hover:scale-105`}
    >
      {children}
    </button>
  )
}
