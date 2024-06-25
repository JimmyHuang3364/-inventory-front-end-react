import styled from "styled-components"

const GoogleMap = styled.div`
  width: 99%;
`

const ContactUs = () => {
  return (
    <>
      <h1>聯繫我們</h1>
      <h3>地址：台中市大雅區昌平路四段687巷45弄29號(貴浦橡膠旁)</h3>
      <h3>連絡電話:(04)2567-5642</h3>
      <h3>傳真:(04)2567-5642</h3>
      {/* 鑲嵌google Map */}
      <h2>Google Map</h2>
      <GoogleMap>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d909.5592474099384!2d120.6717344558397!3d24.233488616997985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1715156910506!5m2!1szh-TW!2stw" title="test"  width="100%" height="500" loading="lazy"></iframe>
      </GoogleMap>
    </>
  )
}

export default ContactUs