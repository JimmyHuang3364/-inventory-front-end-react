import styled from "styled-components"

const Nav = styled.nav`
  height: 4em;
  padding: 0 0 0 20px;
  background: #575757;
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
  }
  .nav-menu {
    color: white;
    margin: 0;
    padding: 0 0 0 20px;
    display: flex;
    list-style: none;
    li {
      margin: 0 10px;
      cursor: pointer;
      i {
        margin: 0 15px 0 5px;
        position: relative;
      }
      i::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-25%);
        border: 8px solid;
        border-color: white transparent transparent transparent;
      }
    }
  }
`

const Navbar = () => {
  const titleName = 'Title Name'

  return (
    <Nav>
      <h1>{titleName}</h1>
      <ul className="nav-menu">
        <li>首頁<i></i></li>
        <li>倉庫<i></i></li>
        <li>報表<i></i></li>
        <li>人員管理<i></i></li>
      </ul>
    </Nav>
  )
}

export default Navbar