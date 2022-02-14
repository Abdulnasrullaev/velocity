import styled from 'styled-components'
import background from '../../assest/background.png'

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px lightgrey;

  .logo {
    font-size: 26px;
    text-transform: capitalize;
    width: fit-content;
    margin: 23px 30px;
    color: #69B9FF;
  }

  nav {
    display: flex;
    align-content: center;
    align-items: center;
    width: min-content;
    margin: 30px 200px auto;

    li {
      margin: 0px 20px;
      font-size: 16px;
      text-transform: capitalize;
      list-style: none;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`

export const Homes = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(${background});

  .title {
    font-size: 60px;
    color: white;
    padding: 200px 0 10px 0;
    margin: 0 0px 100px 0;
    text-align: center;
    text-transform: uppercase;
  }

  .buttons {
    width: fit-content;
    margin: auto;
    padding-bottom: 135px;
    align-items: center;
    align-content: center;

    .sign-up {
      text-transform: uppercase;
      background: #69B9FF;
      border: none;
      margin: 0px 20px;
      padding: 13px 40px;
    }

    .learn-more {
      margin: 0px 40px;
      padding: 13px 50px;
      text-transform: uppercase;
      border: none;
    }
  }
`

export const Jobs = styled.div`
  width: 100%;
  margin: -19px 0 0 0;

  .title {
    text-transform: uppercase;
    font-size: 30px;
    padding: 34px 0;
    text-align: center;
  }

  .details {
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
  }

  .card-wrapper {
    display: flex;
    margin: 50px 0;
    text-align: center;
    justify-content: center;
    align-items: center;

    .cards {
      width: 310px;
      align-content: center;
      margin: 0px 20px;
      padding-bottom: 20px;
      border: 1px solid #DCEBF7;
      box-sizing: border-box;

      img {
        width: fit-content;
        margin: 20px auto;
      }

      .grapic {
        color: #676770;
        font-size: 20px;
        text-transform: uppercase;
        padding: 10px 20px;
      }

      .text {
        color: #6A859C;
        padding: 10px 20px;
      }
    }
  }
`