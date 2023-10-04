import { useState } from 'react'
import { Header } from './components/Header'
import { Home } from './components/home'
import { Products } from './components/products/products'
import { Footer } from './components/footer/footer'
import { AppRoutes } from './AppRoutes'
import './styles/index.css'


function App() {
  

  return (
    <>
      <Header />
      <Home/>
      <section className='Color'>
        <AppRoutes /> {/* Renderize suas rotas aqui */}
      </section>
      <Footer />
    </>
  )
}

export default App
