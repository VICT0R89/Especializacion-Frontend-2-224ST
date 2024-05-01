import './App.css'
import { Navbar } from './components/Navbar'
import { ProductList } from './components/ProductList'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'
import clsx from 'clsx'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <Navbar />
      <main className={clsx('w-full px-5 py-4 flex justify-between items-center shadow-sm',{
      'bg-white': theme === 'light',
      'bg-gray-800': theme === 'dark'
      })}>
        <ProductList />
      </main>
    </>
  )
}

export default App;
