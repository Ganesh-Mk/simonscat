import './Shop.css'
import Container from '../FilmsPage/Container'
import { useState } from 'react'

function Shop() {
  const [posOfCat, setPosOfCat] = useState(41)

  const handleCatHover = () => {
    setPosOfCat((prevPos) => (prevPos === 1 ? 41 : 1))
  }
  return (
    <>
      <div className="shopMainImage">
        <div
          className="catSleepingImage"
          style={{ left: `${posOfCat}vw` }}
          onMouseEnter={handleCatHover}
          onClick={handleCatHover}
        ></div>
      </div>

      <div className="ShopContainer">
        <div className="shopCatImage"></div>
        <h1>SIMON&apos;S CAT LOVES</h1>
        <p>These are a few of our favourite things!</p>
      </div>
      <div className="scrollContainer">
        <Container
          image="https://cdn.shopify.com/s/files/1/2283/2295/files/d24012wirodiary.jpg?v=1694772457"
          para="Simon's Cat 2024 A5 Wiro Diary"
          height="17rem"
          width="17rem"
          price="$12.99"
          headerDisplay="none"
          header=" "
        />

        <Container
          image="https://cdn.shopify.com/s/files/1/2283/2295/products/SICAT012MAG.jpg?v=1565176896"
          para="Feed me Magnet"
          height="17rem"
          width="17rem"
          price="$4.99"
          headerDisplay="none"
          header=""
        />
        <Container
          image="https://cdn.shopify.com/s/files/1/2283/2295/products/SICAT046COAST.jpg?v=1569222401"
          para="Simon's Cat Tea Cups Coaster"
          height="17rem"
          width="17rem"
          price="$4.99"
          headerDisplay="none"
          header=""
        />
        <Container
          image="https://cdn.shopify.com/s/files/1/2283/2295/products/SICAT023E2ETOTE.jpg?v=1569222401"
          para="Cattitude Tote Bag"
          height="17rem"
          width="17rem"
          price="$14.99"
          headerDisplay="none"
          header=""
        />
        <Container
          image="https://cdn.shopify.com/s/files/1/2283/2295/products/AIRF76_SCAIRF.jpg?v=1533728047"
          para="Simon's Clawsome Air Freshener"
          height="17rem"
          width="17rem"
          price="$1.99"
          headerDisplay="none"
          header=""
        />
        <Container
          image="https://cdn.shopify.com/s/files/1/2283/2295/products/SICAT28072020_STICKERSHEET.jpg?v=1595944907"
          para="Simon's Cat Sticker Sheet"
          height="17rem"
          width="17rem"
          price="$6.99"
          headerDisplay="none"
          header=""
        />

        <Container
          image="https://cdn.shopify.com/s/files/1/2283/2295/products/SICAT15ANI_TOTE.jpg?v=1678096158"
          para="Simon's Cat 15th Anniversary"
          height="17rem"
          width="17rem"
          price="$6.99"
          headerDisplay="none"
          header=""
        />
        <Container
          image="https://cdn.shopify.com/s/files/1/2283/2295/products/PSC014CIM_0505051a-1e63-4107-baf6-d461c948bfbe.jpg?v=1569222402"
          para="Feed Me Coloured Insert Mug"
          height="17rem"
          width="17rem"
          price="$14.99"
          headerDisplay="none"
          header=""
        />
      </div>
    </>
  )
}

export default Shop
