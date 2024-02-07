import './common/style.scss'

// import hook
import { useContext } from 'react'

// import contexts
import { ModalContext } from '../contexts/ModalContext'

// import components
import Navbar from '../components/Navbar'
import AppContainer from "../components/AppContainer"
import AddItemModal from "../components/AddItemModal"
import EditItemModal from '../components/EditItemModal'
import AppTypeSwitch from '../components/AppTypeSwitch'
import Footer from '../components/Footer'
import QuestionMark from '../components/QuestionMark'
import ManualModal from '../components/ManualModal'

export default function MainPage() {
  const { showModal, modalType } = useContext(ModalContext)

  return (
    <div id="mainPageContainer">
      <Navbar />
      <AppContainer />
      <AppTypeSwitch />
      { showModal === true && modalType === 'add' && <AddItemModal /> }
      { showModal === true && modalType === 'edit' && <EditItemModal /> }
      { showModal === true && modalType === 'manual' && <ManualModal /> }
      <Footer />
      <QuestionMark />
    </div>
  )
}