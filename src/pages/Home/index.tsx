import Head from 'next/head'
import { WrapperAll } from './style'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <WrapperAll>
        <div className="leftbox">
          <div className="sim"></div>
          <div className="vUp"></div>
          <div className="vDown"></div>
        </div>

        <div className="box">
          <div className="outter">
            <div className="inner">
              <div className="notch"></div>
            </div>
          </div>
        </div>
        <div className="rightbox">
          <div className="Power"></div>
        </div>
      </WrapperAll>
    </>
  )
}

export default HomePage
