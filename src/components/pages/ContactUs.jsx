import styled from "styled-components"

const GoogleMap = styled.div`
  width: 100%;
  height: 500px;
  background: #454545;
`

const ContactUs = () => {
  return (
    <>
      <h1>聯繫我們</h1>
      <h3>地址：台中市大雅區昌平路四段687巷45弄29號</h3>
      <h3>連絡電話:(04)2567-5642</h3>
      <h3>傳真:(04)2567-5642</h3>
      {/* 鑲嵌google Map */}
      <h2>Google Map</h2>
      <GoogleMap />
    </>
  )
}

export default ContactUs