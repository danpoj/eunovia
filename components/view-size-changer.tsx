'use client'

import { viewSizeStore } from '@/store/view-size-store'
import { ReactNode } from 'react'
import { useSnapshot } from 'valtio'

export const ViewSizeChanger = ({ children }: { children: ReactNode }) => {
  const { size } = useSnapshot(viewSizeStore)

  const zoom = `${100 + (size - 5) * 5}%`

  return (
    <div
      style={{
        zoom: zoom,
      }}
    >
      {children}
    </div>
  )
}
