import React from 'react'
import './Home.css'
import Navrbar from '../../components/Navbar/Navbar'
import Hero_banner from '../../assets/hero_banner.jpg'
import Hero_title from '../../assets/hero_title.png'
import Play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navrbar />
      <div className="hero">
        <img src={Hero_banner} alt="home background" className='banner-img' />
        <div className="hero-caption">
          <img src={Hero_title} alt="title" className='caption-img'/>
          <p>Hakan is a young shopkeeper whose modern world gets turned upside down when he learns that he is connected to a secret ancient order that is tasked with protecting Istanbul from an immortal enemy. He struggles to choose between his duties as the Protector and a new love he comes across. Later, as Hakan disregards his training and Protector duties, he learns that an immortal's blood contains a secret power.</p>
          <div className="hero-btns">
            <button className='btn'>
              <img src={Play} alt="play" /> Play
            </button>
            <button className='btn dark-btn'>
              <img src={info} alt="information" />More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for you"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home