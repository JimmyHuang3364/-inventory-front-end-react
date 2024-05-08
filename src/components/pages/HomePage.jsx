import styled from "styled-components"

const HomeMain = styled.main`
  .mold-img{
    width: 100px;
    height: 100px;
    margin: 0 3px;
    border: 1px red solid;
  }
`

const HomeFooter = styled.footer`
  .customer-img {
    width: 160px;
    max-height: 66px;
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
      
      <HomeFooter>
        <div>
          <h3 className="customer">我們的客戶</h3>
          <img src="https://images.1111.com.tw/oad/301936.jpg" alt="台弟工業股份有限公司" title="台弟工業股份有限公司" className="customer-img"/>
          <a href="https://www.ezb2b.com/tch/" target="_blank" rel="noreferrer">
            <img src="data:image/jpeg;base64,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" alt="中陽實業股份有限公司" title="中陽實業股份有限公司" className="customer-img"/>
          </a>
          <img src="https://twtmsearch.tipo.gov.tw/pic/20221126/111/085/271/pic_111085271_20221125_1.jpg" alt="瑞浪股份有限公司" title="瑞浪股份有限公司" className="customer-img"/>
        </div>
      </HomeFooter>
    </>
  )
}

export default HomePage