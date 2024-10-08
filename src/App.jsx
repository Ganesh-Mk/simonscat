import MainPage from './components/MainPage/MainPage'
import Header from './components/Header/Header'
import Films from './components/FilmsPage/Films'
import Shop from './components/ShopPage/Shop'
import Comic from './components/ComicPage/Comic'
import KnowCat from './components/KnowCatPage/KnowCat'
import Quiz from './components/QuizPage/Quiz'
import Game from './components/GamePage/Game'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="main-container">
      <Header />
      <MainPage />
      <Films />
      <Shop />
      <Comic />
      <KnowCat />
      <Quiz />
      <Game />
      <Footer />
    </div>
  )
}

export default App
