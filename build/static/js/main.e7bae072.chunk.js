(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,n,t){e.exports={popoverHover:"HoverFx_popoverHover__YXSoa",OPACTITYTRANSFORM:"HoverFx_OPACTITYTRANSFORM__kFYuB",popoverHoverOut:"HoverFx_popoverHoverOut__1Vr4V",OPACTITYTRANSFORMOUT:"HoverFx_OPACTITYTRANSFORMOUT__1u43u",fadeInText:"HoverFx_fadeInText__2aMOv",FADEINTEXT:"HoverFx_FADEINTEXT__3DEJw",fadeOutText:"HoverFx_fadeOutText__1ksVx",FADEOUTTEXT:"HoverFx_FADEOUTTEXT__1iqF8"}},184:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(35),i=t.n(r),l=(t(89),t(90),t(3)),c=t(5),s=t(68),u=t.n(s),p=t(4),d=t(69),m=t.n(d),h=t(70),f=t.n(h),x=t(71);function b(){var e=Object(l.a)(["\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 200px;\n  display: flex;\n  justify-content: flex-end;\n  font-size: 30px;\n  color: white;\n  z-index: 3;\n  a {\n    color: white;\n  }\n  i {\n    margin: 0 8px;\n    cursor: pointer;\n    &:hover {\n      color: #f53b54;\n    }\n  }\n"]);return b=function(){return e},e}function g(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  height; 100vh;\n\n"]);return g=function(){return e},e}function w(){var e=Object(l.a)(['\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(18%, 22%, 31%, 0.8);\n  color: white;\n  h1 {\n    font-family: "Montserrat", sans-serif;\n    font-weight: 200;\n    padding: 30vh 0 0 0;\n    margin: 0;\n    font-size: 100px;\n    animation: TEXT-FADE 2.5s ease;\n    span {\n      color: #e8374f;\n    }\n    @media (max-width: 1100px) {\n      font-size: 80px;\n    }\n    @media (max-width: 850px) {\n      font-size: 65px;\n    }\n    @media (max-width: 680px) {\n      font-size: 55px;\n    }\n  }\n  h2 {\n    font-family: "Montserrat", sans-serif;\n    font-size: 40px;\n    font-weight: 300;\n    margin: 0;\n    animation: TEXT-FADE 3s ease;\n    span {\n      color: #e8374f;\n    }\n    @media (max-width: 1100px) {\n      font-size: 35px;\n    }\n    @media (max-width: 850px) {\n      font-size: 30px;\n    }\n    @media (max-width: 680px) {\n      font-size: 25px;\n    }\n  }\n  button {\n    color: #f53b54;\n    border: 2px solid #f53b54;\n    background: transparent;\n    font-size: 20px;\n    font-family: "Montserrat", sans-serif;\n    width: 205px;\n    height: 45px;\n    margin: 15px;\n    position: relative;\n    z-index: 2;\n    animation: TEXT-FADE 4s ease;\n    &:hover {\n      background: #f53b54;\n      color: white;\n    }\n  }\n\n  @keyframes TEXT-FADE {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n']);return w=function(){return e},e}function v(){var e=Object(l.a)(["\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-color: black;\n  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);\n"]);return v=function(){return e},e}var E={particles:{number:{value:52,density:{enable:!0,value_area:2e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:1,color:"#bbbbbb"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2.891476416322726,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.1,width:1},move:{enable:!0,speed:1.206824121731046,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:0,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};function y(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],r=n[1];return o.a.createElement(m.a,{speed:2},o.a.createElement(k,null,o.a.createElement(j,null,o.a.createElement("h1",null,"Tanner Williams"),o.a.createElement("h2",null,o.a.createElement("span",null,"Full Stack")," Web Developer"),o.a.createElement(x.a,{particlesAmountCoefficient:10,oscillationCoefficient:60,direction:"top",color:"#e8374f",hidden:t},o.a.createElement("button",{onClick:function(e){e.stopPropagation(),r(!0),setTimeout(function(){window.scrollTo(window.innerWidth>900?{top:2*window.innerHeight+700,left:0,behavior:"smooth"}:{top:3*window.innerHeight+800,left:0,behavior:"smooth"})},100),setTimeout(function(){r(!1)},4e3)},style:{cursor:"pointer"}},"See My Projects"))),o.a.createElement(O,{className:"particles",params:E})),o.a.createElement(T,null,o.a.createElement("a",{href:"https://github.com/Tannerwill756",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab fa-github"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/tanner-m-williams/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-linkedin"})),o.a.createElement("a",{href:"https://twitter.com/TannerMWilliams",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("i",{className:"fab fa-twitter"})),o.a.createElement("i",{onClick:function(e){window.location.href="mailto:Tannerwill756@gmail.com"},className:"fas fa-envelope-open"})))}var k=p.a.div(v(),u.a),j=p.a.div(w()),O=Object(p.a)(f.a)(g()),T=p.a.div(b()),z=t(80),_=t.n(z);function S(){var e=Object(l.a)(["\n  width: 390px;\n  background: rgba(255, 255, 255, 0.98);\n  z-index: 5;\n  padding: 0 45px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.2);\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  border-top-left-radius: 20px;\n  @media (max-width: 650px) {\n    justify-content: center;\n    width: 100%;\n    border-top-left-radius: 0;\n  }\n  ul {\n    white-space: nowrap;\n    display: flex;\n    list-style: none;\n    li {\n      cursor: pointer;\n      margin: 5px 10px;\n      font-weight: 400;\n      &:hover {\n        text-decoration: underline;\n      }\n    }\n  }\n"]);return S=function(){return e},e}function I(e){return o.a.createElement(M,null,o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(e){window.scrollTo({top:0,left:0,behavior:"smooth"})}},"home"),o.a.createElement("li",{onClick:function(e){window.scrollTo({top:window.innerHeight+100,left:0,behavior:"smooth"})}},"about me"),o.a.createElement("li",{onClick:function(e){window.scrollTo(window.innerWidth>900?{top:2*window.innerHeight+700,left:0,behavior:"smooth"}:{top:3*window.innerHeight+800,left:0,behavior:"smooth"})}},"portfolio"),o.a.createElement("li",{onClick:function(e){window.innerWidth>900?window.scrollTo({top:4500,left:0,behavior:"smooth"}):window.scrollTo({top:5500,left:0,behavior:"smooth"})}},"contact")))}var M=p.a.div(S()),N=t(74),H=t.n(N),C=t(1),F=t.n(C),L=t(14);function A(){var e=Object(l.a)(['\n  font-size: 17px;\n  font-weight: 400;\n  font-style: italic;\n  margin: 10px auto 20px;\n  width: 90%;\n  max-width: 700px;\n  font-family: "Montserrat", sans-serif;\n  @media (max-width: 900px) {\n    font-size: 14px;\n    margin-bottom: 0;\n  }\n']);return A=function(){return e},e}function P(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: #07a828;\n  color: white;\n  opacity: 0;\n  cursor: default;\n  p {\n    cursor: default;\n  }\n"]);return P=function(){return e},e}function R(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  magin: 10px auto;\n  background: rgba(0, 0, 0, 0.09);\n  padding: 5px 80px;\n  font-weight: 400;\n  @media (max-width: 650px) {\n    padding: 5px 40px;\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  h4 {\n    font-size: 20px;\n    margin: 0;\n    color: #e8374f;\n  }\n"]);return R=function(){return e},e}function D(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  magin: 10px auto;\n  background: rgba(0, 0, 0, 0.03);\n  padding: 5px 80px;\n  font-weight: 400;\n  @media (max-width: 650px) {\n    padding: 5px 40px;\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  h4 {\n    font-size: 20px;\n    margin: 0;\n    color: #e8374f;\n  }\n"]);return D=function(){return e},e}function J(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 10px;\n  @media (max-width: 900px) {\n    flex-direction: column;\n  }\n"]);return J=function(){return e},e}function W(){var e=Object(l.a)(["\n  padding: 10px;\n  width: 55%;\n  color: black;\n  background: white;\n  @media (max-width: 900px) {\n    width: 100%;\n    margin-top: 25px;\n  }\n  i {\n    font-size: 75px;\n    @media (max-width: 650px) {\n      font-size: 50px;\n    }\n  }\n  h3 {\n    font-size: 25px;\n    font-weight: 400;\n    @media (max-width: 650px) {\n      font-size: 20px;\n    }\n  }\n"]);return W=function(){return e},e}function X(){var e=Object(l.a)(["\n  text-align: start;\n  padding: 10px;\n  width: 45%;\n  font-size: 20px;\n  span {\n    font-weight: 800;\n    font-size: 24px;\n    @media (max-width: 900px) {\n      font-size: 20px;\n    }\n  }\n  @media (max-width: 900px) {\n    width: 100%;\n    border-right: 0px solid rgba(0, 0, 0, 0);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.8);\n    font-size: 16px;\n  }\n"]);return X=function(){return e},e}function G(){var e=Object(l.a)(['\n  marign: auto;\n  width: 100%;\n  min-height: 300px;\n  max-width: 1800px;\n  padding: 15px;\n  font-family: "Montserrat", sans-serif;\n  h2 {\n    font-size: 60px;\n    margin: 10px;\n    font-weight: 100;\n\n    @media (max-width: 900px) {\n      font-size: 48px;\n    }\n  }\n']);return G=function(){return e},e}function Y(){var e=Object(l.a)(["\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  padding: 100px 40px;\n  padding-bottom: 100px;\n  width: 100vw;\n  background: #343434;\n  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 100%);\n  color: white;\n  @media (max-width: 900px) {\n    clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);\n    padding: 100px 10px;\n  }\n"]);return Y=function(){return e},e}function B(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(!1),l=Object(c.a)(i,2),s=l[0],u=l[1],p=Object(a.useState)(!1),d=Object(c.a)(p,2),m=d[0],h=d[1],f=Object(a.useState)(!1),x=Object(c.a)(f,2),b=x[0],g=x[1],w=Object(a.useState)(!1),v=Object(c.a)(w,2),E=v[0],y=v[1],k=Object(a.useState)(!1),j=Object(c.a)(k,2),O=j[0],T=j[1],z=Object(L.a)({threshold:0}),_=Object(c.a)(z,2),S=_[0],I=_[1],M=Object(L.a)({threshold:0}),N=Object(c.a)(M,2),C=N[0],A=N[1];return o.a.createElement(Q,{style:{backgroundImage:"url(".concat(H.a,")")}},o.a.createElement(U,null,o.a.createElement("h2",{className:I?F.a.fadeInText:F.a.fadeOutText,ref:S},"About Me"),o.a.createElement("hr",null),o.a.createElement(ne,{className:I?F.a.fadeInText:F.a.fadeOutText},'"...Persistence and determination alone are omnipotent. The slogan Press On! has solved and always will solve the problems of the human race...\u201d ',o.a.createElement("br",null),"- Calvin Coolidge"),o.a.createElement(K,null,o.a.createElement(V,null,o.a.createElement("p",{ref:C,className:A?F.a.fadeInText:F.a.fadeOutText,style:{fontWeight:400}},o.a.createElement("span",null,"Hi, everyone!")," ",o.a.createElement("br",null)," ",o.a.createElement("br",null)," My name is Tanner Williams and I'm a full stack software developer from Hershey, Pennsylvania. I love to create and I'm excited to learn and grow in the tech field. ",o.a.createElement("br",null),o.a.createElement("br",null),"Over the past few years I was working full time jobs while attending college pursuing a bachelor's degree in Mechanical Engineering. I felt like I was running around in circles not getting anywhere. However, that's when I found my true passion in learning to create software.",o.a.createElement("br",null),o.a.createElement("br",null)," I began my journey in late-2019 with JavaScript by picking up some books, courses, and anything else I could get my hands on. I spent 6+ hours a day trying to learn EVERYTHING that I possibly could and accelerate my learning as much as possible. By early 2020, I began attending Lambda School (an online, fully immersive, 9 month full stack school).",o.a.createElement("br",null),o.a.createElement("br",null)," I can proudly say that after more than a half a year and 1,000 hours of study, I'm ready to make my move into the workforce. I would love to discuss how my talents may fit with your company!")),o.a.createElement(q,null,o.a.createElement("h3",null,"Technologies"),o.a.createElement(Z,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-css3-alt"}),o.a.createElement("h4",null,"CSS"),o.a.createElement(ee,{className:t?F.a.popoverHover:F.a.popoverHoverOut,onMouseEnter:function(e){r(!0)},onMouseLeave:function(e){r(!1)}},o.a.createElement("p",null,"Experienced in CSS, SASS, LESS"))),o.a.createElement($,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-html5"}),o.a.createElement("h4",null,"HTML"),o.a.createElement(ee,{className:s?F.a.popoverHover:F.a.popoverHoverOut,onMouseEnter:function(e){u(!0)},onMouseLeave:function(e){u(!1)}},o.a.createElement("p",null,"Practiced in semantic HTML and JSX"))),o.a.createElement(Z,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-js"}),o.a.createElement("h4",null,"JavaScript"),o.a.createElement(ee,{className:m?F.a.popoverHover:F.a.popoverHoverOut,onMouseEnter:function(e){h(!0)},onMouseLeave:function(e){h(!1)}},o.a.createElement("p",null,"Writing clean, ES6 syntax JavaScript is a strength"))),o.a.createElement($,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-react"}),o.a.createElement("h4",null,"React JS"),o.a.createElement(ee,{className:b?F.a.popoverHover:F.a.popoverHoverOut,onMouseEnter:function(e){g(!0)},onMouseLeave:function(e){g(!1)}},o.a.createElement("p",null,"Excellent at modern React/Redux (incuding hooks)"))),o.a.createElement(Z,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-node-js"}),o.a.createElement("h4",null,"Node JS "),o.a.createElement(ee,{className:E?F.a.popoverHover:F.a.popoverHoverOut,onMouseEnter:function(e){y(!0)},onMouseLeave:function(e){y(!1)}},o.a.createElement("p",null,"Node/Express backend development is a favorite"))),o.a.createElement($,{style:{position:"relative"}},o.a.createElement("i",{className:"fab fa-github"}),o.a.createElement("h4",null,"Git"),o.a.createElement(ee,{className:O?F.a.popoverHover:F.a.popoverHoverOut,onMouseEnter:function(e){T(!0)},onMouseLeave:function(e){T(!1)}},o.a.createElement("p",null,"Solid git habbits are very important in my day to day development")))))))}var Q=p.a.div(Y()),U=p.a.div(G()),V=p.a.div(X()),q=p.a.div(W()),K=p.a.div(J()),Z=p.a.div(D()),$=p.a.div(R()),ee=p.a.div(P()),ne=p.a.p(A()),te=t(76),ae=t.n(te),oe=t(77),re=t.n(oe),ie=t(78),le=t.n(ie),ce=t(79),se=t.n(ce);function ue(){var e=Object(l.a)(["\n  display: none;\n  @media (max-width: 850px) {\n    display: block;\n  }\n  a {\n    color: blue;\n  }\n"]);return ue=function(){return e},e}function pe(){var e=Object(l.a)(['\n  margin: 0 auto 30px auto;\n  box-sizing: border-box;\n  width: 80vw;\n  max-width: 900px;\n  min-height: 100px;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.05);\n  position: relative;\n  font-family: "Montserrat", sans-serif;\n  p {\n    font-size: 16px;\n    font-weight: 400;\n  }\n']);return pe=function(){return e},e}function de(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  background: rgba(255, 255, 255, 0.1);\n  position: absolute;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media (max-width: 650px) {\n    min-height: 225px;\n    height: 225px;\n  }\n  div {\n    width: 80%;\n    padding: 60px 0;\n    background: rgba(255, 255, 255, 0.99);\n    border: 1px solid black;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    @media (max-width: 650px) {\n      height: 155px;\n    }\n    h3 {\n      color: #f53b54;\n      font-size: 35px;\n      font-weight: 400;\n      margin: 0;\n      @media (max-width: 650px) {\n        font-size: 28px;\n      }\n    }\n    p {\n      color: black;\n      padding: 0 20px;\n      font-weight: 400;\n      @media (max-width: 650px) {\n        font-size: 14px;\n      }\n    }\n  }\n"]);return de=function(){return e},e}function me(){var e=Object(l.a)(['\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #333333;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: "Montserrat", sans-serif;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n  p {\n    font-size: 34px;\n    font-weight: 800px;\n    color: white;\n    margin: 0;\n    @media (max-width: 600px) {\n      font-size: 28px;\n    }\n  }\n  button {\n    cursor: pointer;\n    width: 155px;\n    height: 40px;\n    margin: 10px;\n    color: white;\n    font-size: 20px;\n    opacity: 1;\n    @media (max-width: 600px) {\n      width: 105px;\n      height: 30px;\n    }\n    &:nth-child(1) {\n      background: #19ab33;\n      border: 2px solid #19ab33;\n    }\n    &:nth-child(2) {\n      background: white;\n      border: 2px solid white;\n      color: #19ab33;\n    }\n  }\n']);return me=function(){return e},e}function he(){var e=Object(l.a)(['\n  margin: 30px auto 0 auto;\n  box-sizing: border-box;\n  width: 90vw;\n  max-width: 1000px;\n  min-height: 275px;\n  background: #28af3e;\n  background-size: cover;\n  background-position: center;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: relative;\n  font-family: "Montserrat", sans-serif;\n\n  @media (max-width: 650px) {\n    min-height: 225px;\n  }\n']);return he=function(){return e},e}function fe(){var e=Object(l.a)(["\n  width: 100vw;\n  padding: 0 55px 50px 55px;\n  @media (max-width: 850px) {\n    padding: 0 0 50px 0;\n  }\n  background-image: url(",');\n  font-family: "Montserrat", sans-serif;\n  h2 {\n    padding-top: 80px;\n    font-size: 45px;\n    color: black;\n    margin: 0;\n    font-weight: 200;\n  }\n']);return fe=function(){return e},e}var xe=function(e){var n=Object(a.useState)(!1),t=Object(c.a)(n,2),r=t[0],i=t[1],l=Object(a.useState)(!1),s=Object(c.a)(l,2),u=s[0],p=s[1],d=Object(a.useState)(!1),m=Object(c.a)(d,2),h=m[0],f=m[1],x=Object(L.a)({threshold:0}),b=Object(c.a)(x,2),g=b[0],w=b[1];return o.a.createElement(be,null,o.a.createElement("h2",{ref:g,className:w?F.a.fadeInText:F.a.fadeOutText},"Recent Projects"),o.a.createElement("hr",{style:{marginBottom:"60px"}}),o.a.createElement(ge,{style:{backgroundImage:"url(".concat(le.a,")")}},o.a.createElement(we,{onMouseEnter:function(e){return i(!0)},onMouseLeave:function(e){return i(!1)},className:r?F.a.popoverHover:F.a.popoverHoverOut},o.a.createElement("p",null,"Check it out!"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(e){return window.open("https://github.com/lambda-comake/back-end","_blank")}},"github"),o.a.createElement("button",{onClick:function(e){return window.open("https://co-make-fe.vercel.app/","_blank")}},"live site"))),o.a.createElement(ve,null,o.a.createElement("div",null,o.a.createElement("h3",null,"Co-Make"),o.a.createElement("p",null,"An application that helps spread awareness of issues in your community for your local government to see and prioritize.")))),o.a.createElement(Ee,null,o.a.createElement("p",null,"Co-Make was a project orginally planned to be built during one week, I was the back-end developer and another student was the front-end developer. Due to personal issues the front-end devolper never finished his portion so in my free time I decided to build the front-end from scratch and this is what you see here. Technologies used: React/Redux, Node.js/Express, and PostgreSQL."),o.a.createElement(ye,null,o.a.createElement("p",null,"github:"," ",o.a.createElement("a",{href:"https://github.com/Tannerwill756/front-end",target:"_blank",rel:"noopener noreferrer"},"https://github.com/Tannerwill756/front-end")),o.a.createElement("p",null,"live site:"," ",o.a.createElement("a",{href:"https://github.com/Tannerwill756/front-end",target:"_blank",rel:"noopener noreferrer"},"https://expat-journal-bw.vercel.app/")))),o.a.createElement(ge,{style:{backgroundImage:"url(".concat(re.a,")")}},o.a.createElement(we,{onMouseEnter:function(e){return p(!0)},onMouseLeave:function(e){return p(!1)},className:u?F.a.popoverHover:F.a.popoverHoverOut},o.a.createElement("p",null,"Check it out!"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(e){return window.open("https://github.com/Tannerwill756/front-end","_blank")}},"github"),o.a.createElement("button",{onClick:function(e){return window.open("https://expat-journal-bw.vercel.app/","_blank")}},"live site"))),o.a.createElement(ve,null,o.a.createElement("div",null,o.a.createElement("h3",null,"Expat Journal"),o.a.createElement("p",null,"An application that utilizes Redux for the front end and Node JS for the backend to allow users to see others posts and post about journey's they are on.")))),o.a.createElement(Ee,null,o.a.createElement("p",null,"Expat Journal was initially built in 1 week with a group of 5 students from Lambda School, all at different portions in the school. My roll was the lead Front End developer, working with 2 others Front End students as well as constant communication with the Back End team. We reached our goals for the week and were super happy with how it turned out. As I wanted to show off this project on my portfolio website, I cloned the project and continued working on it in my free time. Technologies used include: React/Redux, Node.js/Express, and PostgreSQL. I assisted in the entire stack by implementing features on both the front and back end."),o.a.createElement(ye,null,o.a.createElement("p",null,"github:"," ",o.a.createElement("a",{href:"https://github.com/Tannerwill756/front-end",target:"_blank",rel:"noopener noreferrer"},"https://github.com/Tannerwill756/front-end")),o.a.createElement("p",null,"live site:"," ",o.a.createElement("a",{href:"https://expat-journal-bw.vercel.app/",target:"_blank",rel:"noopener noreferrer"},"https://expat-journal-bw.vercel.app/")))),o.a.createElement(ge,{style:{backgroundImage:"url(".concat(se.a,")")}},o.a.createElement(we,{onMouseEnter:function(e){return f(!0)},onMouseLeave:function(e){return f(!1)},className:h?F.a.popoverHover:F.a.popoverHoverOut},o.a.createElement("p",null,"Check it out!"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(e){return window.open("https://github.com/Tannerwill756/LoL-random-champ-FE","_blank")}},"github"),o.a.createElement("button",{onClick:function(e){return window.open("https://lol-random-champ.vercel.app/","_blank")}},"live site"))),o.a.createElement(ve,null,o.a.createElement("div",null,o.a.createElement("h3",null,"Champion Generator"),o.a.createElement("p",null,"An application to help you choose which champion you want to play for League of Legends!")))),o.a.createElement(Ee,null,o.a.createElement("p",null,"Champion Generator was a fun 48 hour project built out by my brother and myself. The back-end was built using Node.js/Express with a PostgreSQL database, seeding all the data ourselves. The front-end just uses react with css for styling."),o.a.createElement(ye,null,o.a.createElement("p",null,"github:"," ",o.a.createElement("a",{href:"https://github.com/Tannerwill756/LoL-random-champ-FE",target:"_blank",rel:"noopener noreferrer"},"https://github.com/Tannerwill756/LoL-random-champ-FE")),o.a.createElement("p",null,"live site:"," ",o.a.createElement("a",{href:"https://lol-random-champ.vercel.app/",target:"_blank",rel:"noopener noreferrer"},"https://lol-random-champ.vercel.app/")))))},be=p.a.div(fe(),ae.a),ge=p.a.div(he()),we=p.a.div(me()),ve=p.a.div(de()),Ee=p.a.div(pe()),ye=p.a.div(ue());t(95);function ke(){var e=Object(l.a)(["\n  width: 350px;\n  height: 100px;\n  color: white;\n  background: #1d40aa;\n  padding: 20px;\n  position: fixed;\n  bottom: 100px;\n  left: 10px;\n  animation: 0.5s "," ease-out;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: white;\n    background: transparent;\n    border: none;\n    font-size: 22px;\n    cursor: pointer;\n  }\n"]);return ke=function(){return e},e}function je(){var e=Object(l.a)(["\n  width: 350px;\n  height: 100px;\n  color: white;\n  background: #db3830;\n  padding: 20px;\n  position: fixed;\n  bottom: 100px;\n  left: 10px;\n  animation: 0.5s "," ease-out;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: white;\n    background: transparent;\n    border: none;\n    font-size: 22px;\n    cursor: pointer;\n  }\n"]);return je=function(){return e},e}function Oe(){var e=Object(l.a)(["\n  width: 350px;\n  height: 100px;\n  color: white;\n  background: #1cac35;\n  position: fixed;\n  bottom: 100px;\n  left: 10px;\n  animation: 0.5s "," ease-out;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n  z-index: 5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  button {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    color: white;\n    background: transparent;\n    border: none;\n    font-size: 22px;\n    cursor: pointer;\n  }\n"]);return Oe=function(){return e},e}function Te(){var e=Object(l.a)(["\n  0% {\n    opacity: 0;\n    left: -100px\n  }\n  100% {\n    opacity: 1;\n    left: 10px;\n  }\n"]);return Te=function(){return e},e}function ze(){var e=Object(l.a)(["\n  padding: 40px;\n  color: white;\n  margin: auto;\n  width: 100vw;\n  max-width: 700px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: flex-start;\n  h3 {\n    font-size: 35px;\n    margin: 0 auto;\n  }\n  form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    input {\n      width: 90%;\n      margin: 10px 0;\n      height: 35px;\n      padding: 10px;\n      font-size: 16px;\n    }\n    textarea {\n      width: 90%;\n      margin: 10px 0;\n      height: 120px;\n      padding: 10px;\n      font-size: 16px;\n    }\n    button {\n      width: 125px;\n      height: 35px;\n      font-size: 18px;\n      color: white;\n      border: none;\n      cursor: pointer;\n      background: #1cac35;\n    }\n  }\n"]);return ze=function(){return e},e}function _e(){var e=Object(l.a)(["\n  width: 100vw;\n  min-height: 230px;\n  background: #333333;\n  color: white;\n  text-align: left;\n  padding: 10px;\n  padding-bottom: 80px;\n  a {\n    color: white;\n    &:hover {\n      color: #f53b54;\n    }\n  }\n  p {\n    text-align: center;\n  }\n"]);return _e=function(){return e},e}function Se(){var e=Object(a.useState)(""),n=Object(c.a)(e,2),t=(n[0],n[1],Object(a.useState)("")),r=Object(c.a)(t,2),i=(r[0],r[1],Object(a.useState)("")),l=Object(c.a)(i,2),s=(l[0],l[1],Object(a.useState)("")),u=Object(c.a)(s,2),p=(u[0],u[1],Object(a.useState)(!1)),d=Object(c.a)(p,2),m=d[0],h=d[1],f=Object(a.useState)(!1),x=Object(c.a)(f,2),b=x[0],g=x[1],w=Object(a.useState)(!1),v=Object(c.a)(w,2),E=v[0],y=v[1],k=Object(L.a)({threshold:0}),j=Object(c.a)(k,2),O=j[0],T=j[1];return o.a.createElement(Ie,null,m&&o.a.createElement(He,{onClick:function(e){h(!1)}},o.a.createElement("button",null,"x"),o.a.createElement("p",null,"successfully sent your message!")),b&&o.a.createElement(Ce,{onClick:function(e){g(!1)}},o.a.createElement("button",null,"x"),o.a.createElement("p",null,"hmmm... unfortunately I wasnt able to process this message. Might be a slight bug on my end. You can try again, or check out my email directly below!")),E&&o.a.createElement(Fe,{onClick:function(e){y(!1)}},o.a.createElement("button",null,"x"),o.a.createElement("p",null,"Looks like you missed a couple things! Please provide at least a name, email, and some content so that I know who you are.")),o.a.createElement(Me,null,o.a.createElement("h3",{ref:O,className:T?F.a.fadeInText:F.a.fadeOutText},"Contact me!")),o.a.createElement("p",null,"email: Tannerwill756@gmail.com"),o.a.createElement("p",null,"phone: (717)-856-6456"),o.a.createElement("p",null,"LinkedIn:"," ",o.a.createElement("a",{href:"https://www.linkedin.com/in/tanner-m-williams/",rel:"noopener noreferrer",target:"_blank"},"https://www.linkedin.com/in/tanner-m-williams/")),o.a.createElement("p",null,"GitHub:"," ",o.a.createElement("a",{href:"https://github.com/Tannerwill756/",rel:"noopener noreferrer",target:"_blank"},"https://github.com/Tannerwill756")))}var Ie=p.a.div(_e()),Me=p.a.div(ze()),Ne=Object(p.b)(Te()),He=p.a.div(Oe(),Ne),Ce=p.a.div(je(),Ne),Fe=p.a.div(ke(),Ne);function Le(){var e=Object(l.a)(['\n  width: 100vw;\n  min-height: 400px;\n  background: #f53b54;\n  padding-bottom: 20px;\n  font-family: "Montserrat", sans-serif;\n  @media (max-width: 900px) {\n    padding-bottom: 40px;\n  }\n  h2 {\n    margin: 0 auto 10px auto;\n    padding: 30px 10px;\n    width: 70%;\n    max-width: 800px;\n    color: white;\n    font-size: 35px;\n    text-align: start;\n  }\n  div {\n    width: 70%;\n    margin: auto;\n    border: 1px solid white;\n    text-align: start;\n    display: flex;\n    max-width: 800px;\n    li {\n      color: white;\n      font-size: 20px;\n      font-weight: 400;\n      list-style-type: square;\n      @media (max-width: 900px) {\n        font-size: 16px;\n      }\n    }\n  }\n  p {\n    width: 60%;\n    color: white;\n    margin: 15px auto;\n    font-weight: 400;\n  }\n']);return Le=function(){return e},e}var Ae=p.a.div(Le()),Pe=function(){var e=Object(L.a)({threshold:0}),n=Object(c.a)(e,2),t=n[0],a=n[1];return o.a.createElement(Ae,null,o.a.createElement("h2",{className:a?F.a.fadeInText:F.a.fadeOutText},"I'm currently learning..."),o.a.createElement("div",{className:a?F.a.fadeInText:F.a.fadeOutText},o.a.createElement("ul",{ref:t},o.a.createElement("li",null,"AWS"),o.a.createElement("li",null,"Python"),o.a.createElement("li",null,"Algorithms/Data Structures"),o.a.createElement("li",null,"GraphQL"),o.a.createElement("li",null,"Apollo"))))},Re=t(18);var De=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(_.a,null),o.a.createElement(Re.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(y,e)}}),o.a.createElement(Re.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(B,e)}}),o.a.createElement(Re.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(Pe,e)}}),o.a.createElement(Re.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(xe,e)}}),o.a.createElement(Re.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(Se,e)}}),o.a.createElement(Re.a,{path:"/",render:function(e){return o.a.createElement(I,e)}}))},Je=t(44);i.a.render(o.a.createElement(Je.a,null,o.a.createElement(De,null)),document.getElementById("root"))},68:function(e,n,t){e.exports=t.p+"static/media/Profile-Pic.71eefc2b.jpg"},74:function(e,n,t){e.exports=t.p+"static/media/ep_naturalblack.23e2b6cf.png"},76:function(e,n,t){e.exports=t.p+"static/media/debut_light.b70048d2.png"},77:function(e,n,t){e.exports=t.p+"static/media/expat.c4117654.PNG"},78:function(e,n,t){e.exports=t.p+"static/media/coMake.de6f87e3.PNG"},79:function(e,n,t){e.exports=t.p+"static/media/randChamp.79d5d9e1.PNG"},84:function(e,n,t){e.exports=t(184)},89:function(e,n,t){},90:function(e,n,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.e7bae072.chunk.js.map