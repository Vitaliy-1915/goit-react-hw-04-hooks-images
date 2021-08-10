(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{18:function(n,e,t){},19:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var i,o,a,c,r,p,s,d=t(0),l=t.n(d),b=t(10),x=t.n(b),u=(t(18),t(19),t(9)),h=t(5),g=t(11),j=t.n(g),f=t(3),m=t(4),O=m.a.header(i||(i=Object(f.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),v=m.a.form(o||(o=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),w=m.a.button(a||(a=Object(f.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n']))),k=m.a.span(c||(c=Object(f.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),y=m.a.input(r||(r=Object(f.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),S=t(1);function z(n){var e=n.onSubmit,t=Object(d.useState)(""),i=Object(h.a)(t,2),o=i[0],a=i[1];return Object(S.jsx)(O,{children:Object(S.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(e(o),a("")):alert("Enter images and photos")},children:[Object(S.jsx)(w,{type:"submit",children:Object(S.jsx)(k,{children:"Search"})}),Object(S.jsx)(y,{type:"text",name:"imageName",value:o,onChange:function(n){a(n.currentTarget.value.toLowerCase())},autocomplete:"off",placeholder:"Search images and photos"})]})})}var C=m.a.li(p||(p=Object(f.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),E=m.a.img(s||(s=Object(f.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])));var I,L=function(n){var e=n.smallImage,t=n.tag,i=n.onClick;return Object(S.jsx)(C,{onClick:i,children:Object(S.jsx)(E,{src:e,alt:t})})},F=m.a.ul(I||(I=Object(f.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])));var T,M=function(n){var e=n.images,t=n.openModal;return Object(S.jsx)(F,{children:e.map((function(n){var e=n.id,i=n.webformatURL,o=n.largeImageURL,a=n.tags;return Object(S.jsx)(L,{tag:a,smallImage:i,onClick:function(){return t(o,a)}},e)}))})},B=m.a.button(T||(T=Object(f.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  :hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"])));var J,N,R=function(n){var e=n.onClick;return Object(S.jsx)(B,{type:"button",onClick:e,children:"Load more"})},U=m.a.div(J||(J=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),_=m.a.div(N||(N=Object(f.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"])));function q(n){var e=n.onClose,t=n.image;Object(d.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}));var i=function(n){"Escape"===n.code&&e()};return Object(S.jsx)(U,{onClick:function(n){n.currentTarget===n.target&&e()},children:Object(S.jsx)(_,{children:Object(S.jsx)("img",{src:t.src,alt:t.alt})})})}var A,D={FetchImages:function(n,e){return fetch("https://pixabay.com/api/?q=".concat(n,"&page=").concat(e,"&key=21859800-af94843fb327cc57780ddd667&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There is no images with name ".concat(n)))}))}},H=m.a.div(A||(A=Object(f.a)(["\n  text-align: center;\n  padding: 5px;\n  background-color: #61dafb78;\n"])));function P(){var n=Object(d.useState)(""),e=Object(h.a)(n,2),t=e[0],i=e[1],o=Object(d.useState)(1),a=Object(h.a)(o,2),c=a[0],r=a[1],p=Object(d.useState)([]),s=Object(h.a)(p,2),l=s[0],b=s[1],x=Object(d.useState)(!1),g=Object(h.a)(x,2),f=g[0],m=g[1],O=Object(d.useState)(null),v=Object(h.a)(O,2),w=v[0],k=v[1],y=Object(d.useState)("idle"),C=Object(h.a)(y,2),E=C[0],I=C[1],L=Object(d.useState)(null),F=Object(h.a)(L,2),T=F[0],B=F[1];Object(d.useEffect)((function(){t&&(I("pending"),D.FetchImages(t,c).then((function(n){return n.hits})).then((function(n){b((function(e){return[].concat(Object(u.a)(e),Object(u.a)(n))})),I("resolved"),c!==r&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})).catch((function(n){B(n),I("rejected")})))}),[t,c]);return Object(S.jsxs)(H,{children:[Object(S.jsx)(z,{onSubmit:function(n){r(1),b([]),I("idle"),i(n)}}),f&&Object(S.jsx)(q,{image:w,onClose:function(){return m(!1)}}),"idle"===E&&Object(S.jsx)("h1",{children:"Start your search "}),"pending"===E&&Object(S.jsx)(j.a,{type:"Watch",color:"#00BFFF",height:300,width:300,timeout:3e3}),"rejected"===E&&Object(S.jsx)("h1",{children:T.message}),"resolved"===E&&Object(S.jsx)(M,{images:l,openModal:function(n,e){m(!0),k({src:n,alt:e})}}),"resolved"===E&&l.length<1&&Object(S.jsx)("h2",{children:"invalid name!!!"}),l.length>0&&Object(S.jsx)(R,{onClick:function(){r((function(n){return n+1}))}})]})}var W=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(P,{})})};x.a.render(Object(S.jsx)(l.a.StrictMode,{children:Object(S.jsx)(W,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.0fcfa7ff.chunk.js.map