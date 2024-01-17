import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <div className='header'>
      <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
        <h1>Hi, i'm Sávio!</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className='experience'>
        <h3>Experience</h3>
        <p>discrição</p>
        <div className="experience-time">

        </div>
        <div className="infos">
            <h3>Languages</h3>
            <div className="languages-info">
              <span>EN - Fluent</span>
              <span>PT-BR - Native Speaker</span>
            </div>
            <h3>Education</h3>
            <div className="educational-info">
              <span>emoji</span>
              <span> Computer ...</span>
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
