import styled from "styled-components"
import Footer from "../Footer"

const HomeMain = styled.main`
  .mold-img{
    width: 100px;
    height: 100px;
    margin: 0 3px;
    border: 1px red solid;
  }
`

const HomePage = () => {
  return (
    <>
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