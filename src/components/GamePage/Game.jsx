import Container from '../FilmsPage/Container'
import './Game.css'

function Game() {
  return (
    <div className="gameContainer">
      <h1 className="playNow">PLAY NOW</h1>
      <div className="scrollContainer">
        <Container
          className="gameComponents"
          image="https://simonscat.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/12457/Story-time-PR.webp?v=1704988241"
          header="Story time"
          para="A story-driven puzzle game!"
          headerDisplay="block"
          height="14rem"
          width="25rem"
          price=""
        />
        <Container
          className="gameComponents"
          image="https://simonscat.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/12486/Pop-PR.webp?v=1704988241"
          header="Pop time"
          para="A 'Bubble Shooter' adventure game!"
          headerDisplay="block"
          height="14rem"
          width="25rem"
          price=""
        />
        <Container
          className="gameComponents"
          image="https://simonscat.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/12516/Crunch-PR.webp?v=1704988241"
          header="Crunch Time"
          headerDisplay="block"
          height="14rem"
          width="25rem"
          price=""
          para="Connect treats with Simon's Cat!"
        />
        <Container
          image="https://i.pinimg.com/736x/e6/60/df/e660dff7537111806cb2e748d9fb46d4.jpg"
          className="gameComponents"
          headerDisplay="block"
          height="14rem"
          width="25rem"
          price=""
          para=""
          header="More games coming soon..."
        />
      </div>
    </div>
  )
}

export default Game
