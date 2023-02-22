import { PropsWithChildren } from 'react'
import Footer from '../Footer'

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
