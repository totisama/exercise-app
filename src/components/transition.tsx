'use client'

import type React from 'react'
import { motion } from 'framer-motion'

export const Transition = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {children}
    </motion.div>
  )
}
