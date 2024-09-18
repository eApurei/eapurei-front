'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
