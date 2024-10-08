import './Comic.css'

function Comic() {
  return (
    <div className="comic">
      <div className="comicUp">
        <div>
          <h1>COMICS</h1>
          <h2>A comic a day keeps the blues away.</h2>
        </div>
        <div>
          <a href="#">VIEW MORE COMICS</a>
        </div>
      </div>
      <div className="comicImage"></div>
    </div>
  )
}

export default Comic
