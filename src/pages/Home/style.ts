import styled from 'styled-components'

export const WrapperAll = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background: #282a36;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .leftbox {
    height: 450px;
    width: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .sim {
      margin: -140px 0px 0px 8px;
      height: 22px;
      width: 4px;
      background: rgb(156, 151, 151);
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      z-index: 0;
    }

    .vUp {
      height: 30px;
      width: 4px;
      background: rgb(156, 151, 151);
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      margin: 16px 0px 6px 8px;
      z-index: 0;
    }

    .vDown {
      height: 30px;
      width: 4px;
      background: rgb(156, 151, 151);
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      margin: -2px 0px 6px 8px;
      z-index: 0;
    }
  }

  .rightbox {
    height: 450px;
    width: 10px;
    display: flex;
    justify-content: center;
    .Power {
      height: 43px;
      width: 4px;
      background: rgb(156, 151, 151);
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      margin: 144px 0px 6px -10px;
      z-index: 0;
    }
  }

  .box {
    background: rgb(197, 188, 188);
    height: 450px;
    width: 228px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    box-shadow: 10px 10px 10px #383a5999, -10px -10px 10px #383a5978;
    .outter {
      height: 440px;
      width: 220px;
      background: black;
      border-radius: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }

    .inner {
      height: 426px;
      width: 203px;
      background: rgb(156, 151, 151);
      background-image: url('https://www.frontpagetech.com/wp-content/uploads/2021/09/IMG_7278.png');
      background-size: cover;
      border-radius: 35px;
      display: flex;
      justify-content: center;
    }

    .notch {
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
      border: bottom radius 10px;
      height: 18px;
      width: 82px;
      background-color: black;
      display: flex;
      justify-content: center;
    }
  }

  .notch:after {
    display: block;
    content: '';
    height: 3px;
    width: 50px;
    background: rgb(58, 57, 57);
    border-radius: 20x;
  }

  .notch:before {
    display: block;
    content: '';
    height: 8px;
    width: 8px;
    background: rgb(61, 61, 61);
    border-radius: 20px;
    position: absolute;
    margin: 5px 0px 0px -60px;
  }
`
