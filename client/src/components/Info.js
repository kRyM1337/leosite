import React, {useEffect} from 'react'
import '../styles/myInfo.css'
import About from './About.js'
import Projects from './Projects.js'
import Skills from './Skills.js'
// import * as PIXI from 'pixi.js'

export default function Info() {
   useEffect(() => {
      if (window.innerWidth <= 600) {
         document.getElementsByClassName('tablinks')[0].classList.remove('defaultOpen')
         document.getElementsByClassName('tablinks')[1].classList.add('defaultOpen')
      }
      document.getElementsByClassName('defaultOpen')[0].click()
   }, [])
   return (
      <div id='info-section'>
         <About />
         <Skills />
         <Projects />
         <aside>
            <details className='tabs'>
               <summary>
                  <img src={require(`../assets/welcome.png`)} alt='Welcome' />
               </summary>
               <button className='tablinks defaultOpen about' onClick={openDesc}>
                  About
               </button>
               <button className='tablinks' onClick={openSkills}>
                  Skills
               </button>
               <button className='tablinks' onClick={openProjects}>
                  Projects
               </button>
            </details>
         </aside>
      </div>
   )
}
function openDesc(e) {
   e.preventDefault()
   const tabcontent = document.getElementsByClassName('tabcontent')
   for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
   }
   const tablinks = document.getElementsByClassName('tablinks')
   for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
   }
   document.getElementById('about-me').style.display = 'block'
   e.currentTarget.className += ' active'
}

function openSkills(e) {
   e.preventDefault()
   const tabcontent = document.getElementsByClassName('tabcontent')
   for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
   }
   const tablinks = document.getElementsByClassName('tablinks')
   for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
   }
   document.getElementById('skills-container').style.display = 'flex'
   // document.getElementById('mini-skills-container').style.display = 'flex'
   e.currentTarget.className += ' active'
}

function openProjects(e) {
   e.preventDefault()
   const tabcontent = document.getElementsByClassName('tabcontent')
   for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
   }
   const tablinks = document.getElementsByClassName('tablinks')
   for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '')
   }
   document.getElementById('projects-container').style.display = 'flex'
   e.currentTarget.className += ' active'
}
