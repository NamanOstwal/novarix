import { createContext, useContext, type ReactNode } from 'react'

type ConsultContextValue = {
  openConsult: () => void
}

const ConsultContext = createContext<ConsultContextValue | null>(null)

export function ConsultProvider({
  children,
  openConsult,
}: {
  children: ReactNode
  openConsult: () => void
}) {
  return (
    <ConsultContext.Provider value={{ openConsult }}>
      {children}
    </ConsultContext.Provider>
  )
}

export function useConsult() {
  const ctx = useContext(ConsultContext)
  if (!ctx) throw new Error('useConsult must be used within ConsultProvider')
  return ctx
}
