import { PropsWithChildren } from 'react'
import Footer from '../Footer'
import Header from '../Header'

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default AppLayout
