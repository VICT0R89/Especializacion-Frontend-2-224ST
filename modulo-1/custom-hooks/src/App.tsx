import { Modal, Sidebar } from './components';
import "./App.css";
import { useToggle } from './cutomHook/useToggle';
export default function App() {

  const {open:openSidebar, close:closeSidebar, isOpen:isOpenSidebar} = useToggle(false)
  const {open:openModal, close:closeModal, isOpen:isOpenModal} = useToggle(false)
  
  return (
    <div className="h-screen w-full">
      <div className="container">
        <Sidebar visible={isOpenSidebar} close={closeSidebar} />
        <h1>Custom Hook</h1>
        <div className="button-container">
          <button onClick={openSidebar}>Open sidebar</button>
          <button onClick={openModal}>Open modal</button>
        </div>
        <Modal visible={isOpenModal} close={closeModal} />
      </div>
    </div>
  );
}
