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
    h1{
      margin: 0;
    }
  }
`

// 輪播圖
// TEMP: 改成無限循環撥放樣式
// TODO: 須繼續優化(調整視窗大小不未及時更新banner間距)
const TopBnner = () => {
  const topBanner = useRef(null)
  const carousel = useRef(null)
  let viewWidth = 0
  let num = 0
  let h1Width = 0

  const fetchViewWidth = () => {
    viewWidth = -carousel.current.offsetWidth
    h1Width = carousel.current.offsetWidth
    setH1Width(h1Width)
  }

  const setH1Width = (width) => {
    for(let el of topBanner.current.children) {
      el.style = `width: ${width}px`
    }
  }

  const changeBanner = () => {
    fetchViewWidth()
    if (num === topBanner.current.children.length)  num = 0
    topBanner.current.style = `left: ${viewWidth * num}px`
    num++
  }
  useEffect(() => {
    fetchViewWidth()
    setInterval(() => changeBanner(), 3000)
  })


  return (
    <Banner ref={carousel}>
      <div id="topBanner" ref={topBanner} className="title">
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