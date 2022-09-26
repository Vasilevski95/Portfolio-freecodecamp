import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/djolelogo.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['', 'Đ', 'o', 'r', 'đ', 'e', '.']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      return  setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <img src={LogoTitle} alt="developer" />

        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />

          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />

          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / JavaScript</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    <Logo />
    </div>
    <Loader type="pacman" />
    </>
  
  )
}

export default Home
