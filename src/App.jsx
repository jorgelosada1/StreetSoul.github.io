import { Navegador } from "./components/Navegador";
import { Footer } from "./components/Footer";
import { Carta } from "./components/Carta";
import './Sass/App.scss'

function App() {
  return (
    <>
      <nav>
        <Navegador></Navegador>
      </nav>
      <main>
        <div className="titulo">Camisetas Urbanas</div>
        <div className="Cartas">
        <Carta imagenUrl="./src/img/imagen1.jpeg" talla="L & XL" precio="$35.000"></Carta>
        <Carta imagenUrl="./src/img/imagen2.jpeg" talla="L & XL" precio="$35.000"></Carta>
        <Carta imagenUrl="./src/img/imagen3.jpeg" talla="L & XL" precio="$35.000"></Carta>
        <Carta imagenUrl="./src/img/imagen4.jpeg" talla="L & XL" precio="$35.000"></Carta>
        <Carta imagenUrl="./src/img/imagen5.jpeg" talla="L & XL" precio="$35.000"></Carta>
        <Carta imagenUrl="./src/img/imagen6.jpeg" talla="L & XL" precio="$35.000"></Carta>
        <Carta imagenUrl="./src/img/imagen7.jpeg" talla="L & XL" precio="$35.000"></Carta>
        <Carta imagenUrl="./src/img/imagen8.jpeg" talla="L & XL" precio="$35.000"></Carta>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App;
