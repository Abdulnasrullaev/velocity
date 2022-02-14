import styled from 'styled-components'

export const Service = styled.div`
  width: 100%;
  background: #192024;
  color: white;

  .title {
    padding: 50px 0;
    text-align: center;
    font-size: 30px;
    text-transform: uppercase;

    span {
      font-size: 17px;
    }
  }

  .card-wraper {
    display: flex;
    justify-content: center;
    width: 85%;
    margin: auto;
    padding: 30px 0;

    .cards {
      margin: 0px 30px;
      width: 37.7%;
      text-align: center;

      .service {
        padding: 20px 0;
        text-transform: uppercase;
        font-size: 22px;
      }

      .lorem {
        padding: 10px 20px;
      }

      button {
        border: 1px solid white;
        background: transparent;
        color: white;
        margin: 10px auto;
        text-transform: uppercase;
        padding: 10px 20px;
        font-size: 16px;
      }
    }
  }
`

export const Section = styled.div`
  width: 100%;

  .title {
    color: #676770;
    font-size: 30px;
    text-transform: uppercase;
    padding: 40px 0;
    text-align: center;

    span {
      font-size: 17px;
    }
  }

  .buttons {
    text-align: center;
    padding: 1px 0 30px 0;

    button {
      margin: 0px 20px;
      padding: 4px 30px;
      text-transform: uppercase;
      border: none;
      background: #92A0AD;
      color: white;
      border-radius: 4px;
    }

    .active {
      background: #2E80B6;
    }
  }

  .sections {
    margin: 20px auto;
    text-align: center;
    width: fit-content;

    img {
      margin: 10px auto;
    }

    .some-text {
      width: 70%;
      margin: auto;
      font-size: 30px;
      text-transform: capitalize;

      span {
        color: #6A859C;
        font-size: 16px;
      }
    }
  }
`

export const EndTitle = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
margin: 10px auto;
  .cardss {
    width: 28%;
    margin: 10px 20px;

    p {
      color: #676770;
      text-transform: uppercase;

      span {
        text-transform: none;
        color: #6A859C;

      }
    }
    nav{
      list-style: none;
      margin: 12px 0 0 0;
      line-height: 40px;
      color: #668CAD;
    hr{
      border: 1px solid #D5D5E0;
      
    }
      li{
       color: #668CAD;
text-transform: capitalize;
      }
    }
  }
`