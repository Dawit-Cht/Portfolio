import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import './styles/footer.css'

export default function Footer() {
  return (
    <div class="footer">
            <h3 class="foot-credit">Dawit Cht</h3>
            <nav class="foot-nav">
                <a class="link" href="https://www.linkedin.com/in/dawit-chu/"> <img class="logo" alt="linkedin" src={linkedin} width="40" height="40" /></a>
                <a class="link" href="https://github.com/Dawit-Cht"> <img class="logo" alt="gothub" src={github} width="40" height="40" /></a>
            </nav>
    </div>
  )
}
