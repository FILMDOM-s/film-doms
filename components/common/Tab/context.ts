import { useContext, createContext } from 'react'

export type TabContextType = {
  selected: string
  onChange: (selected: TabContextType['selected']) => void
}

export const TabContext = createContext<TabContextType | null>(null)

export const useTab = () => {
  const context = useContext(TabContext)

  if (!context) {
    throw new Error('Provider 내부에서 사용해주세요.')
  }

  return context
}
