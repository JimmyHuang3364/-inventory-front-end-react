import styled from "styled-components"

const Nav = styled.nav`
  height: 4em;
  padding: 0 0 0 20px;
  background: #a30100;
  display: flex;
  align-items: center;
  color: white;
  h1 {
    margin: 0;
  }
  .nav-menu {
    margin: 0;
    padding: 0 0 0 20px;
    display: flex;
    list-style: none;
    // .menu-about {
    //   display: none;
    // }
    li {
      margin: 0 10px;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #fff;
      }

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

      .menu-list{
        // height: 0;
        position: absolute;
        background-color: white;
        color: rgba(0,0,0,0);
        padding: 0;
        div {
          transition: 0.3s;
          height: 0;
          overflow: hidden;
          li {
            margin: 0;
            padding: 2px;
            list-style: none;
            &:hover {
              background-color: green;
              color: white;
            }
          }
        }

        hr {
          width: 0;
          margin: 0 0.3rem;
        }
      }

      &:hover .menu-list{
        div {
          height: 80px;
          border: 1px solid black;
          li {
            a {
              color: #000;
            }
          }
        }
      }

      &:hover .menu-list{
        color: rgba(0,0,0,1);
        // display: block;
        hr {
          width: 100px;
          margin: 0 0.3rem;
        }
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
        <li><a href="/home">首頁</a></li>
        <li className="menu-about">關於
          <i></i>
          <ul className="menu-list">
            <div>
              <li><a href="/aboutUs">介紹</a></li>
              <hr />
              <li><a href="/home">模具設計製造</a></li>
              <hr />
              <li><a href="/home">金屬代工</a></li>
            </div>
          </ul>
        </li>
        <li><a href="/contactUs">聯繫我們</a></li>
      </ul>
    </Nav>
  )
}

export default Navbar