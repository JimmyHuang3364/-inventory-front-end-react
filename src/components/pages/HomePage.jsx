import styled from "styled-components"
import Footer from "../Footer"
import {useRef, useEffect} from "react";

const HomeMain = styled.main`
  padding: 0 5%;
  .mold-img{
    width: 100px;
    height: 100px;
    margin: 0 3px;
    border: 1px red solid;
  }
`
const Banner = styled.div`
  width: 100%;
  height: 250px;
  background: blue;
  position: relative;
  overflow: hidden;
  .title {
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    transition: 0.5s;
    &.content-1 {
      left: calc(-961px * 0);
    }
    &.content-2 {
      left: calc(-961px * 1);
    }
    &.content-3 {
      left: calc(-961px * 2);
    }
    h1{
      margin: 0;
      width: 961px;
    }
  }
`

// 輪播圖
const TopBnner = () => {
  let num = 1
  const topBanner = useRef(null)
  const changeBanner = () => {
    topBanner.current.classList.remove(`content-${num}`)
    if (num === 3) {
      num = 1
    } else {
      num++
    }
    topBanner.current.classList.add(`content-${num}`)
  }
  useEffect(() => {
    setInterval(() => changeBanner(), 5000)
  })


  return (
    <Banner>
      <div id="topBanner" ref={topBanner} className="title content-1">
        <h1>專業設計</h1>
        <h1>金屬代工服務</h1>
        <h1>為知名企業代工</h1>
      </div>
    </Banner>
  )
}



const HomePage = () => {
  return (
    <>
      <TopBnner />
      <HomeMain>
        <section>
          <h1>專業沖壓模具設計製造</h1>
          <div>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
          </div>
          <h4>提供專業的模具設計及製造服務</h4>
        </section>
        <hr />
        <section>
          <h1>金屬代工(沖壓、車床、攻牙、鉚接)</h1>
          <div>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
            <img src="https://png.pngtree.com/png-vector/20201225/ourmid/pngtree-cartoon-hand-drawn-popsicle-mold-png-image_2626203.jpg" alt="" className="mold-img"/>
          </div>
          <h4>提供各項金屬代工，不論是沖壓、數控車床、攻牙還是鉚接，我們都有。</h4>
        </section>
        <hr />
      </HomeMain>
      <Footer />
    </>
  )
}

export default HomePage