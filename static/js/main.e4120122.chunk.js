(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(3),s=a.n(c),r=(a(15),a(4)),o=a(5),i=a(7),m=a(6),u=a(8),E=(a(16),a(1)),p=a.n(E),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={action:!1,positionX:"",positionY:""},a.scrollToMyProjects=function(){a.state.action&&a.setState({action:!1}),p()(document.querySelector("section.projects"))},a.scrollToAboutMe=function(){p()(document.querySelector("section.aboutMe"))},a.scrollHome=function(){p()(document.querySelector("header"))},a.mouseMoveOnHeader=function(e){a.setState({positionX:-e.clientX/40,positionY:-e.clientY/80-100}),console.log(e.clientX)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t="burger",a="",l="submenu";return this.state.action&&(t+=" action",a+=" action",l+=" action"),n.a.createElement("div",{className:"app"},n.a.createElement("header",{style:{backgroundPositionX:this.state.positionX,backgroundPositionY:this.state.positionY},className:"header",onMouseMove:this.mouseMoveOnHeader},n.a.createElement("p",null,"rafalkuchta.pl"),n.a.createElement("nav",{className:a},n.a.createElement("div",{className:l},n.a.createElement("div",{className:"middle"},n.a.createElement("div",{className:"menu"},n.a.createElement("li",{className:"item",id:"profile"},n.a.createElement("a",{href:"#profile",className:"btn",onClick:function(){return e.setState({action:!e.state.action})}},"Strona g\u0142\xf3wna")),n.a.createElement("li",{className:"item",id:"message"},n.a.createElement("a",{href:"#message",className:"btn projects"},"Projekty "),n.a.createElement("div",{className:"smenu"},n.a.createElement("a",{onClick:this.scrollToMyProjects,href:"#"},"Nowe"),n.a.createElement("a",{href:"#"},"Wys\u0142ane"))),n.a.createElement("li",{className:"item",id:"setting"},n.a.createElement("a",{href:"#setting",className:"btn"},"Ustawienia"),n.a.createElement("div",{className:"smenu"},n.a.createElement("a",{href:"#"},"Has\u0142o"),n.a.createElement("a",{href:"#"},"J\u0119zyk"))),n.a.createElement("li",{className:"item",id:"logout"},n.a.createElement("a",{href:"#logout",className:"btn",onClick:function(){return e.setState({action:!e.state.action})}},"Wyloguj")))))),n.a.createElement("div",{onClick:function(){return e.setState({action:!e.state.action})},className:t},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null)),n.a.createElement("div",{className:"wrapper"},n.a.createElement("h1",null,"Development"),n.a.createElement("p",null,"Poznaj moje projekty"),n.a.createElement("button",{onClick:this.scrollToMyProjects,className:"projects"},"Moje projekty"),n.a.createElement("button",{onClick:this.scrollToAboutMe,className:"about"},"O mnie"))),n.a.createElement("section",{className:"skills"},n.a.createElement("h1",null,"TWORZ\u0118 BARDZO DOBRE STRONY INTERNETOWE"),n.a.createElement("div",{className:"skills-mid"},n.a.createElement("div",{className:"skill-one"},n.a.createElement("h3",null,"Nowoczesne i zgodne z aktualnymi zasadami"),n.a.createElement("div",{className:"skill-three"},n.a.createElement("i",{className:"fab fa-html5"}),n.a.createElement("i",{className:"fab fa-css3-alt"}),n.a.createElement("i",{className:"fab fa-js"}))),n.a.createElement("div",{className:"skill-one"},n.a.createElement("h3",null,"W pe\u0142ni responsywne"),n.a.createElement("p",null,n.a.createElement("i",{className:"fas fa-mobile-alt"}))),n.a.createElement("div",{className:"skill-one"},n.a.createElement("h3",null,"Zoptymalizowane"),n.a.createElement("p",null,n.a.createElement("i",{className:"fab fa-google"}),n.a.createElement("i",{class:"fas fa-search"}))))),n.a.createElement("section",{className:"projects"},n.a.createElement("h1",null,"Projekty"),n.a.createElement("h3",null,"Strona w przygotowaniu"),n.a.createElement("div",{className:"projectsWrap"},n.a.createElement("div",{className:"project-first"},n.a.createElement("a",{href:"https://rafalkuchta.github.io/App-weather-fetch/"},n.a.createElement("img",{src:"/project-1st.jpg",alt:"project-first"}))),n.a.createElement("div",{className:"project-secound"},n.a.createElement("a",{href:"https://rafalkuchta.github.io/to-do-list-2/"},n.a.createElement("img",{src:"/project-2th.jpg",alt:"project-2th"}))),n.a.createElement("div",{className:"project-third"},n.a.createElement("a",{href:"https://rafalkuchta.github.io/React-router-app/"},n.a.createElement("img",{src:"/project-3th.jpg",alt:"project-3th"}))),n.a.createElement("div",{className:"project-fourth"},n.a.createElement("a",{href:"https://rafalkuchta.github.io/Game-Memory-2/"},n.a.createElement("img",{src:"/project-4th.jpg",alt:"project-4th"}))))),n.a.createElement("section",{className:"aboutMe"},n.a.createElement("h1",null,"O mnie"),n.a.createElement("h3",null,"Strona w przygotowaniu")),n.a.createElement("footer",null,n.a.createElement("p",null,"Stopka"),n.a.createElement("i",{onClick:this.scrollHome,className:"fas fa-arrow-circle-up"})))}}]),t}(l.Component);s.a.render(n.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.e4120122.chunk.js.map