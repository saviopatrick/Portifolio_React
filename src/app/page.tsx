import Image from 'next/image'
import { Header } from './components/header/header'

export default function Home() {
  return (
    <main>
      <Header />
      <div className='experience'>
        <h3>Experience</h3>
        <p>discrição</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>🇺🇸 EN - Fluent</span>
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>🎓</span>
            <span> Computer Science Bachelors Degree - Universidade Federal do Maranhão</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact Me</button>
        </div>
      </div>

    </main>
  )
}
