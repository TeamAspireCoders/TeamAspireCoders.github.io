import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Main from '../Components/Main'
import Navbar from '../Components/Navbar'

const Root: React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Root
