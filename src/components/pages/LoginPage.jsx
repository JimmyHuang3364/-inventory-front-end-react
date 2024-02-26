import styled from "styled-components"

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh
`

const LoginBox = styled.section`
  width: 500px;
  height: 300px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  // margin-top: 50px;
  h1 {
    text-align:center
  }
`
const InputBox = styled.div`
display: flex;
margin: 5px;
flex-direction: column;
background: #f3f6ff;
padding: 5px;
input {
  min-width: 200px;
  width: 200px;
  background: #f3f6ff;
  border: none;
  border-bottom: 1px solid black;
  transition: 0.5s;
  &:focus-visible {
    outline: none;
  }
  &:focus {
    width: 300px;
  }
}
`

const AuthButton = styled.button`
  color: #ff6600;
  background-color: #white;
  border: none;
  border-radius: 100px;
  min-width: 200px;
  margin: 40px 5px;
  transition: 0.3s;
  cursor: pointer;
  border: 2px solid #ff6600;
  &:hover {
    color: white;
    background-color: #ff6600;
  }
`

const LoginPage = () => {

  return (
    <Layout>
      <LoginBox>
          <h1>登入</h1>
          <InputBox>
            <label>name</label>
            <input type="text"></input>
          </InputBox>
          <InputBox>
            <label>password</label>
            <input type="password"></input>
          </InputBox>
          <AuthButton>Login</AuthButton>
      </LoginBox>
    </Layout>
    
  )
}

export default LoginPage