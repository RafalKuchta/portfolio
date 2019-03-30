import React, { Component } from 'react';
import './App.css';
import animateScrollTo from 'animated-scroll-to';

class App extends Component {
  state = {
    action: false,
    positionX: "",
    positionY: "",
  }

    scrollToMyProjects = () => {
      if(this.state.action){
      this.setState({action: false})
      }
    animateScrollTo(document.querySelector('section.projects'))
     }
    scrollToAboutMe = () => {
    animateScrollTo(document.querySelector('section.aboutMe'))
    }

    scrollHome = () => {
    animateScrollTo(document.querySelector('header'))
  }
  
  mouseMoveOnHeader = (e) => {
    this.setState({
    positionX: -e.clientX /40,
    positionY: -e.clientY /80 - 100
  })
    console.log(e.clientX)
  }

  render() {
   
    let classes = "burger";
    let classNav = "";
    let classSubmenu = "submenu";

    if(this.state.action){
      classes+= " action"
      classNav+= " action"
      classSubmenu+= " action"

    }



    return (
      
      <div className="app">
      
        <header style={{backgroundPositionX: this.state.positionX, backgroundPositionY: this.state.positionY}} className="header" onMouseMove={this.mouseMoveOnHeader}>
        <p>rafalkuchta.pl</p>
        <nav className={classNav}>
        <div className={classSubmenu}>

        <div className="middle">
        <div className="menu">

            <li className="item" id="profile">
                <a href="#profile" className="btn" onClick={()=> this.setState({action: !this.state.action})}>Strona główna</a>
                {/* <div className="smenu">
                    <a href="#">Moje projekty</a>
                    <a href="#">O mnie</a>
                </div> */}
            </li>

            <li className="item" id="message">
                <a href="#message" className="btn projects">Projekty </a>
                <div className="smenu">
                    <a onClick={this.scrollToMyProjects} href="#">Nowe</a>
                    <a href="#">Wysłane</a>
                </div>
            </li>

            <li className="item" id="setting">
                <a href="#setting" className="btn">Ustawienia</a>
                <div className="smenu">
                    <a href="#">Hasło</a>
                    <a href="#">Język</a>
                </div>
            </li>

            <li className="item" id="logout">
                <a href="#logout" className="btn" onClick={()=> this.setState({action: !this.state.action})}>Wyloguj</a>
            </li>
        </div>
    </div>

        </div>
        </nav>
        <div onClick={()=> this.setState({action: !this.state.action})} className={classes}>
        <span></span>
        <span></span>
        <span></span>
        
    </div>
        
        <div className="wrapper">
        <h1>Development</h1>
        <p>Poznaj moje projekty</p>
        <button onClick={this.scrollToMyProjects} className="projects">Moje projekty</button>
        <button onClick={this.scrollToAboutMe} className="about">O mnie</button>
        </div>
        </header>

        <section className="skills">
        <h1>TWORZĘ BARDZO DOBRE STRONY INTERNETOWE</h1>
        <div className="skills-mid">
        <div className="skill-one">
            <h3>Nowoczesne i zgodne z aktualnymi zasadami</h3>
            <div className="skill-three">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            </div>
            </div>
            <div className="skill-one">
          <h3>W pełni responsywne</h3>
          <p><i className="fas fa-mobile-alt"></i></p>
          </div>

          <div className="skill-one">
          <h3>Zoptymalizowane</h3>
          <p><i className="fab fa-google"></i><i class="fas fa-search"></i></p>
          </div>
          </div>
        </section>

        <section className="projects">
          <h1>Projekty</h1>
          <h3>Strona w przygotowaniu</h3>
            <div className="projectsWrap">
              <div className="project-first">
              <a href="https://rafalkuchta.github.io/App-weather-fetch/">
                  <img src="/project-1st.jpg" alt="project-first"/>
                </a>
              </div>
              <div className="project-secound">
              <a href="https://rafalkuchta.github.io/to-do-list-2/">
                <img src="/project-2th.jpg" alt="project-2th"/>
              </a>
              </div>
              <div className="project-third">
              <a href="https://rafalkuchta.github.io/React-router-app/">
                <img src="/project-3th.jpg" alt="project-3th"/>
              </a>
              </div>
              <div className="project-fourth">
              <a href="https://rafalkuchta.github.io/Game-Memory-2/">
                <img src="/project-4th.jpg" alt="project-4th"/>
              </a>
            </div>
          </div>
        </section>

        <section className="aboutMe">
        <h1>O mnie</h1>
          <h3>Strona w przygotowaniu</h3>
        </section>

        <footer><p>Stopka</p><i onClick={this.scrollHome} className="fas fa-arrow-circle-up"></i></footer>
      </div>
    );
  }
}

export default App;
