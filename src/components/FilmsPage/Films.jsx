import './Films.css'
import Container from './Container'

function Films() {
  return (
    <div className="filmsContainer">
      <div className="filmsInfo">
        <h1>Popular films</h1>
        <a href="">Visit our youtube channel</a>
      </div>
      <div className="scrollContainer">
        <Container
          image="https://simonscat-com.stackstaging.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/6500/simons-cat-film-Monster-Monster.webp?v=1704987988"
          header="Monster Monster"
          para="Beware of the most vicious monster… The Vacuum Cleaner!"
          height="14rem"
          width="25rem"
        />
        <Container
          image="https://simonscat-com.stackstaging.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/6497/simons-cat-film-TV-Dinner.webp?v=1704987988"
          header="TV Dinner"
          height="14rem"
          width="25rem"
          para="Simon's Cat tries to gain his owner's attention."
        />
        <Container
          image="https://simonscat-com.stackstaging.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/6494/simons-cat-film-Let-me-in.webp?v=1704987988"
          header="Let me in"
          height="14rem"
          width="25rem"
          para="A hungry cat wants in...or not...."
        />
        <Container
          image="https://simonscat-com.stackstaging.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/6491/simons-cat-film-Double-trouble.webp?v=1704987988"
          header="Double trouble"
          height="14rem"
          width="25rem"
          para="A new arrival causes chaos..."
        />
        <Container
          image="https://simonscat-com.stackstaging.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/6485/simons-cat-film-The-box.webp?v=1704987988"
          header="The box"
          height="14rem"
          width="25rem"
          para="A curious cat investigates an empty cardboard box."
        />
        <Container
          image="https://simonscat-com.stackstaging.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/9479/Thumbnail_Cat_man_do_resized.webp?v=1704987988%2C0.5%2C0.5"
          header="cat man do"
          height="14rem"
          width="25rem"
          para="A hungry cat resorts to increasingly..."
        />
        <Container
          image="https://simonscat-com.stackstaging.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/6482/simons-cat-film-Hot-water.webp?v=1704987988"
          header="hot water"
          para="A hungry cat gets his owner into some hot water..."
          height="14rem"
          width="25rem"
        />
        <Container
          image="https://simonscat-com.stackstaging.com/assets/images/_375xAUTO_crop_center-center_85_none_ns/6479/simons-cat-film-Fly-guy.webp?v=1704987988"
          header="fly guy"
          height="14rem"
          width="25rem"
          para="A funny cat resorts to increasingly desperate measures..."
        />
      </div>
    </div>
  )
}

export default Films
