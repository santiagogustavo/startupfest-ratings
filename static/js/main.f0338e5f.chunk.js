(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(n,t,e){"use strict";var r=e(4),a=e(5);function i(){var n=Object(r.a)(["\n    @media (min-width: ",") {\n      ","\n    }\n  "]);return i=function(){return n},n}var o={small:"576px",medium:"768px",large:"992px",extraLarge:"1200px"};t.a=Object.keys(o).reduce(function(n,t){return n[t]=function(){return Object(a.a)(i(),o[t],a.a.apply(void 0,arguments))},n},{})},103:function(n,t,e){"use strict";e.r(t);var r=e(104);e.d(t,"default",function(){return r.default})},104:function(n,t,e){"use strict";e.r(t);var r=e(278),a=e(4),i=e(46),o=e(47),c=e(52),u=e(48),l=e(53),s=e(0),f=e.n(s),d=e(51),m=e(279),p=e.n(m),v=e(27),b=e(5),g=e(10);function h(){var n=Object(a.a)(["\n    width: fit-content;\n  "]);return h=function(){return n},n}function E(){var n=Object(a.a)(["\n    background: var(--color-background);\n    color: var(--color-primary);\n    &:hover {\n      background: var(--color-background);\n      color: var(--color-primary-hover);\n    }\n  "]);return E=function(){return n},n}function j(){var n=Object(a.a)(["\n  cursor: pointer;\n  border-radius: 32px;\n  font-family: var(--font-family-primary);\n  font-weight: var(--font-weight-primary);\n  background: var(--color-primary);\n  color: var(--color-background);\n  padding: 8px 32px;\n  text-align: center;\n  border: var(--color-primary) 2px solid;\n  width: auto;\n  transition: all 200ms ease;\n\n  &:hover {\n    background: var(--color-primary-hover);\n    border-color: var(--color-primary-hover);\n  }\n\n  ","\n\n  ","\n"]);return j=function(){return n},n}var x=b.b.div(j(),function(n){return n.invert&&Object(b.a)(E())},g.a.medium(h())),y=function(n){var t=n.children,e=n.invert,r=Object(v.a)(n,["children","invert"]);return f.a.createElement(x,Object.assign({invert:e},r),t)};y.defaultProps={invert:!1};var I=y,O=e(116);function R(){var n=Object(a.a)(["\n    cursor: pointer;\n    transition: all 200ms ease;\n\n    &:hover {\n      transform: scale(1.1);\n      transform-origin: center;\n      color: var(--color-primary-hover);\n    }\n  "]);return R=function(){return n},n}function A(){var n=Object(a.a)(["\n    color: var(--color-primary);\n  "]);return A=function(){return n},n}function C(){var n=Object(a.a)(["\n  font-size: ",";\n  margin: 0 2px;\n\n  ","\n\n  ","\n"]);return C=function(){return n},n}var w=b.b.div(C(),function(n){return n.size},function(n){return n.active&&Object(b.a)(A())},function(n){return n.clickable&&Object(b.a)(R())}),S=function(n){switch(n){case"fill":return"fas fa-star";case"half":return"fas fa-star-half-alt";case"empty":default:return"far fa-star"}},k=function(n){var t=n.fill,e=n.size,r=n.active,a=n.clickable,i=Object(v.a)(n,["fill","size","active","clickable"]);return f.a.createElement(w,Object.assign({className:S(t),active:r,clickable:a,size:e},i))};k.defaultProps={fill:"empty",size:"32px",active:!1,clickable:!0};var B=k,Y=e(115),z=e(49),G=e(50),L=function(n){return Number(n).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")},N=e(7);function M(){var n=Object(a.a)(['\n        {\n          allStartups(filter: { name: "','" }) {\n            name\n            imageUrl\n            description\n            teamCount\n            annualReceipt\n            Segment {\n              name\n            }\n          }\n        }\n      '],['\n        {\n          allStartups(filter: { name: \\"','\\" }) {\n            name\n            imageUrl\n            description\n            teamCount\n            annualReceipt\n            Segment {\n              name\n            }\n          }\n        }\n      ']);return M=function(){return n},n}var Q=function(n){function t(){var n,e;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=Object(c.a)(this,(n=Object(u.a)(t)).call.apply(n,[this].concat(o)))).state={startup:{name:"",Segment:{name:""}},proposal:0,pitch:0,development:0,isLoading:!1},e.fetchStartup=function(n){e.setState({isLoading:!0}),z.a.query({query:Object(d.b)(M(),n)}).then(function(n){var t=n.data,r=n.error;e.setState({isLoading:!1}),r||e.setState({startup:t.allStartups[0]})})},e.handleCategoryRating=function(n,t){return e.setState(Object(r.a)({},n,t))},e.renderStartup=function(){var n=e.state,t=n.startup,r=n.proposal,a=n.pitch,i=n.development;return f.a.createElement(N.SlideContainer,null,f.a.createElement(N.StartupImage,{src:t.imageUrl}),f.a.createElement(N.InfosContainer,null,f.a.createElement(N.LineWrapper,null,f.a.createElement(N.Title,{style:{marginRight:16}},t.name),f.a.createElement(Y.a,{invert:!0},t.Segment.name)),f.a.createElement(N.Infos,null,f.a.createElement(N.Subtitle,null,"Descri\xe7\xe3o"),f.a.createElement(N.Description,null,t.description),f.a.createElement("br",null),f.a.createElement(N.LineWrapper,null,f.a.createElement("b",{style:{marginRight:16}},"Membros na equipe:"),f.a.createElement(N.Description,null,t.teamCount)),f.a.createElement(N.LineWrapper,null,f.a.createElement("b",{style:{marginRight:16}},"Receita anual:"),f.a.createElement(N.Description,null,"R$ ",L(t.annualReceipt)))),f.a.createElement(N.RateContainer,null,f.a.createElement(N.TitleAlt,null,"Avaliar"),f.a.createElement(N.Infos,null,f.a.createElement(N.Description,null,"Use as estrelas para atribuir notas \xe0 startup em cada categoria. Quando concluir, use o bot\xe3o ao fim para enviar sua avalia\xe7\xe3o!")),f.a.createElement(N.LineWrapper,null,f.a.createElement(N.RatingTitle,null,"Proposta"),f.a.createElement(N.StarsContainer,null,[1,2,3,4,5].map(function(n){return f.a.createElement(B,{key:"proposal-star-".concat(n),fill:n<=r?"fill":"empty",active:n<=r,onClick:function(){return e.handleCategoryRating("proposal",n)}})}))),f.a.createElement(N.LineWrapper,null,f.a.createElement(N.RatingTitle,null,"Apresenta\xe7\xe3o/Pitch"),f.a.createElement(N.StarsContainer,null,[1,2,3,4,5].map(function(n){return f.a.createElement(B,{key:"pitch-star-".concat(n),fill:n<=a?"fill":"empty",active:n<=a,onClick:function(){return e.handleCategoryRating("pitch",n)}})}))),f.a.createElement(N.LineWrapper,null,f.a.createElement(N.RatingTitle,null,"Desenvolvimento"),f.a.createElement(N.StarsContainer,null,[1,2,3,4,5].map(function(n){return f.a.createElement(B,{key:"development-star-".concat(n),fill:n<=i?"fill":"empty",active:n<=i,onClick:function(){return e.handleCategoryRating("development",n)}})})))),f.a.createElement(N.ButtonsContainer,null,f.a.createElement(I,null,"Avaliar"),f.a.createElement(I,{onClick:function(){return G.a.push("/")},invert:!0},"Voltar"))))},e}return Object(l.a)(t,n),Object(o.a)(t,[{key:"componentDidMount",value:function(){var n=this.props.location.search,t=p.a.parse(n);this.fetchStartup(t.name)}},{key:"render",value:function(){var n=this.state.isLoading;return f.a.createElement(N.Container,null,n?f.a.createElement(N.LoaderContainer,null,f.a.createElement(O.a,null)):this.renderStartup())}}]),t}(f.a.Component);t.default=Q},113:function(n,t,e){"use strict";e.d(t,"a",function(){return a});var r=["#c62828","#AD1457","#6A1B9A","#4527A0","#283593","#1565C0","#0277BD","#00838F","#00695C","#2E7D32","#558B2F","#9E9D24","#F9A825","#FF8F00","#EF6C00","#D84315","#4E342E","#424242","#37474F"],a=function(){return r[Math.floor(Math.random()*r.length)]}},115:function(n,t,e){"use strict";var r=e(27),a=e(0),i=e.n(a),o=e(4),c=e(5);function u(){var n=Object(o.a)(["\n    background: var(--color-primary);\n    color: var(--color-background);\n    & > i {\n      color: var(--color-background);\n    }\n  "]);return u=function(){return n},n}function l(){var n=Object(o.a)(["\n  border-radius: var(--border-radius-default);\n  font-family: var(--font-family-secondary);\n  font-weight: var(--font-weight-secondary);\n  background: var(--color-background);\n  margin-bottom: 8px;\n  padding: 4px 16px;\n  padding-left: 8px;\n  width: fit-content;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  & > i {\n    color: var(--color-primary);\n    margin-right: 8px;\n  }\n\n  ","\n"]);return l=function(){return n},n}var s=c.b.div(l(),function(n){return n.invert&&Object(c.a)(u())}),f=function(n){var t=n.children,e=n.invert,a=Object(r.a)(n,["children","invert"]);return i.a.createElement(s,Object.assign({invert:e},a),i.a.createElement("i",{className:"fas fa-star"}),t)};f.defaultProps={invert:!1};t.a=f},116:function(n,t,e){"use strict";var r=e(27),a=e(0),i=e.n(a),o=e(4),c=e(5);function u(){var n=Object(o.a)(["\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  & div {\n    position: absolute;\n    top: 27px;\n    width: 11px;\n    height: 11px;\n    border-radius: 50%;\n    background: ",";\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  & div:nth-child(1) {\n    left: 6px;\n    animation: "," 0.6s infinite;\n  }\n  & div:nth-child(2) {\n    left: 6px;\n    animation: "," 0.6s infinite;\n  }\n  & div:nth-child(3) {\n    left: 26px;\n    animation: "," 0.6s infinite;\n  }\n  & div:nth-child(4) {\n    left: 45px;\n    animation: "," 0.6s infinite;\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(o.a)(["\n  0% { transform: scale(1); }\n  100% { transform: scale(0); }\n"]);return l=function(){return n},n}function s(){var n=Object(o.a)(["\n  0% { transform: translate(0, 0); }\n  100% { transform: translate(19px, 0); }\n"]);return s=function(){return n},n}function f(){var n=Object(o.a)(["\n  0% { transform: scale(0); }\n  100% { transform: scale(1); }\n"]);return f=function(){return n},n}var d=Object(c.c)(f()),m=Object(c.c)(s()),p=Object(c.c)(l()),v=c.b.div(u(),function(n){return n.color},d,m,m,p),b=function(n){var t=n.color,e=Object(r.a)(n,["color"]);return i.a.createElement(v,Object.assign({color:t},e),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))};b.defaultProps={color:"#4e4e4e"};t.a=b},165:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(114),o=e(277),c=e.n(o),u=e(158),l=e.n(u),s=e(45);describe("Testing Root...",function(){Object(i.configure)({adapter:new c.a}),it("should render correctly without props",function(){var n=Object(i.shallow)(a.a.createElement(s.default,null));expect(l()(n)).toMatchSnapshot()})})},268:function(n,t,e){n.exports=e.p+"static/media/Logo.48ce5aae.png"},276:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUE2MzRCRUFCM0U5MTFFNzhDRjdGMTE2MDBCMDIwRDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUE2MzRCRUJCM0U5MTFFNzhDRjdGMTE2MDBCMDIwRDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QTYzNEJFOEIzRTkxMUU3OENGN0YxMTYwMEIwMjBENSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QTYzNEJFOUIzRTkxMUU3OENGN0YxMTYwMEIwMjBENSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvZq3ZQAAAyuSURBVHja7N3pVuLo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"},282:function(n,t,e){n.exports=e(562)},287:function(n,t,e){},288:function(n,t,e){},299:function(n,t,e){var r={"./routes":44,"./routes/":44,"./routes/index":44,"./routes/index.json":44,"./routes/root":75,"./routes/root/":75,"./routes/root/Root":45,"./routes/root/Root.jsx":45,"./routes/root/__tests__/Root.test":165,"./routes/root/__tests__/Root.test.jsx":165,"./routes/root/__tests__/__snapshots__/Root.test.jsx.snap":549,"./routes/root/index":75,"./routes/root/index.js":75,"./routes/root/styles":40,"./routes/root/styles.js":40,"./routes/startup":103,"./routes/startup/":103,"./routes/startup/Startup":104,"./routes/startup/Startup.jsx":104,"./routes/startup/index":103,"./routes/startup/index.js":103,"./routes/startup/styles":7,"./routes/startup/styles.js":7};function a(n){var t=i(n);return e(t)}function i(n){var t=r[n];if(!(t+1)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,n.exports=a,a.id=299},318:function(n,t){},330:function(n,t){},332:function(n,t){},40:function(n,t,e){"use strict";e.r(t);var r=e(4),a=e(5),i=e(27),o=e(0),c=e.n(o),u=e(113),l=e(276),s=e.n(l),f=e(115);function d(){var n=Object(r.a)(["\n  font-family: var(--font-family-primary);\n  font-weight: var(--font-weight-primary);\n  font-size: var(--font-size-card);\n  color: var(--color-background);\n  margin-top: 16px;\n  text-align: center;\n"]);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  background: var(--color-background);\n  border-radius: var(--border-radius-half);\n  overflow: hidden;\n  height: 175px;\n  width: 100%;\n  object-fit: cover;\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  cursor: pointer;\n  min-height: 230px;\n  width: 256px;\n  padding: 24px;\n  border-radius: var(--border-radius-default);\n  background: ",";\n"]);return p=function(){return n},n}var v=a.b.div(p(),function(n){return n.color}),b=a.b.img(m()),g=a.b.div(d()),h=function(n){var t=n.className,e=n.color,r=n.name,a=n.imageUrl,o=n.segment,u=Object(i.a)(n,["className","color","name","imageUrl","segment"]);return c.a.createElement(v,Object.assign({className:t,color:e},u),o&&c.a.createElement(f.a,null,o),c.a.createElement(b,{src:a}),c.a.createElement(g,null,r))};h.defaultProps={className:void 0,color:Object(u.a)(),imageUrl:s.a,segment:void 0};var E=h,j=e(10);function x(){var n=Object(r.a)(["\n  width: 100%;\n  height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n  ","\n  margin: 16px;\n  animation: "," 500ms ","ms 1 forwards ease;\n"]);return y=function(){return n},n}function I(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]);return I=function(){return n},n}function O(){var n=Object(r.a)(["\n    padding: 32px 64px;\n  "]);return O=function(){return n},n}function R(){var n=Object(r.a)(["\n  background: var(--color-background);\n  padding: 8px 16px;\n  padding-bottom: 32px;\n\n  ","\n"]);return R=function(){return n},n}function A(){var n=Object(r.a)(["\n  0% {\n    ","\n  }\n  100% {\n    pointer-events: initial;\n    opacity: 1;\n    transform: scaleX(1) translateY(0px);\n  }\n"]);return A=function(){return n},n}function C(){var n=Object(r.a)(["\n  pointer-events: none;\n  opacity: 0;\n  transform: scaleX(0.8) translateY(32px);\n"]);return C=function(){return n},n}e.d(t,"CardPopUp",function(){return S}),e.d(t,"Container",function(){return k}),e.d(t,"CardsContainer",function(){return B}),e.d(t,"AnimatedCard",function(){return Y}),e.d(t,"LoaderContainer",function(){return z});var w=Object(a.a)(C()),S=Object(a.c)(A(),w),k=a.b.div(R(),j.a.medium(O())),B=a.b.div(I()),Y=Object(a.b)(E)(y(),w,S,function(n){return n.delay}),z=a.b.div(x())},44:function(n){n.exports=[{name:"React Boiler Room",component:"/root",path:"/",exact:!0},{name:"Startup",component:"/startup",path:"/startup",exact:!1}]},45:function(n,t,e){"use strict";e.r(t);var r=e(4),a=e(46),i=e(47),o=e(52),c=e(48),u=e(53),l=e(0),s=e.n(l),f=e(51),d=e(116),m=e(113),p=e(49),v=e(50),b=e(40);function g(){var n=Object(r.a)(["\n        {\n          allStartups {\n            name\n            imageUrl\n            description\n            Segment {\n              name\n            }\n          }\n        }\n      "]);return g=function(){return n},n}var h=function(n){function t(){var n,e;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return(e=Object(o.a)(this,(n=Object(c.a)(t)).call.apply(n,[this].concat(i)))).state={startups:[],isLoading:!1},e.fetchStartups=function(){e.setState({isLoading:!0}),p.a.query({query:Object(f.b)(g())}).then(function(n){var t=n.data,r=n.error;e.setState({isLoading:!1}),r||e.setState({startups:t.allStartups})})},e.handleCardClick=function(n){v.a.push("/startup?name=".concat(n))},e.renderCards=function(){var n=e.state.startups;return s.a.createElement(b.CardsContainer,null,n.map(function(n,t){return s.a.createElement(b.AnimatedCard,{key:"startup-card-".concat(t),color:Object(m.a)(),name:n.name,imageUrl:n.imageUrl,segment:n.Segment.name,delay:250*t,onClick:function(){return e.handleCardClick(n.name)}})}))},e}return Object(u.a)(t,n),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchStartups()}},{key:"render",value:function(){var n=this.state.isLoading;return s.a.createElement(b.Container,null,n?s.a.createElement(b.LoaderContainer,null,s.a.createElement(d.a,null)):this.renderCards())}}]),t}(s.a.Component);t.default=h},49:function(n,t,e){"use strict";var r=e(51);t.a=new r.a({uri:"https://startups-project-mytvsxrgeb.now.sh"})},50:function(n,t,e){"use strict";var r=e(563).createBrowserHistory();t.a=r},505:function(n,t){},549:function(n,t,e){n.exports=e.p+"static/media/Root.test.jsx.65e286d1.snap"},562:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(38),o=e.n(i),c=e(568),u=e(569),l=e(567),s=e(566),f=e(275),d=(e(287),e(288),e(46)),m=e(47),p=e(52),v=e(48),b=e(53),g=e(268),h=e.n(g),E=e(4),j=e(5),x=e(10);function y(){var n=Object(E.a)(["\n  display: none;\n  border: none;\n  border-bottom: 1px solid var(--color-text);\n  background: transparent;\n  padding: 8px;\n  font-family: var(--font-family-secondary);\n  font-weight: var(--font-weight-secondary);\n"]);return y=function(){return n},n}function I(){var n=Object(E.a)(["\n    display: block;\n  "]);return I=function(){return n},n}function O(){var n=Object(E.a)(["\n  ","\n  display: none;\n  margin-top: 8px;\n  margin-left: 32px;\n  font-family: var(--font-family-primary);\n  font-weight: var(--font-weight-primary);\n\n  ","\n"]);return O=function(){return n},n}function R(){var n=Object(E.a)(["\n    display: none;\n  "]);return R=function(){return n},n}function A(){var n=Object(E.a)(["\n  ","\n  position: absolute;\n  top: 12px;\n  left: 32px;\n  display: block;\n  font-size: 32px;\n\n  ","\n"]);return A=function(){return n},n}function C(){var n=Object(E.a)(["\n  color: var(--color-primary);\n  text-decoration: none;\n  transition: all 200ms ease;\n\n  &:hover {\n    color: var(--color-primary-hover);\n  }\n"]);return C=function(){return n},n}function w(){var n=Object(E.a)(["\n  display: block;\n  height: 40px;\n  width: auto;\n"]);return w=function(){return n},n}function S(){var n=Object(E.a)(["\n    margin-left: 32px;\n  "]);return S=function(){return n},n}function k(){var n=Object(E.a)(["\n  flex: 0;\n  padding: 16px;\n  width: fit-content;\n  margin-left: 0px;\n\n  ","\n"]);return k=function(){return n},n}function B(){var n=Object(E.a)(["\n    justify-content: flex-start;\n  "]);return B=function(){return n},n}function Y(){var n=Object(E.a)(["\n  background: linear-gradient(var(--color-background) 75%, transparent);\n  position: sticky;\n  top: 0;\n  left: 0;\n  height: 64px;\n  width: 100%;\n  padding-bottom: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n\n  ","\n"]);return Y=function(){return n},n}var z=j.b.div(Y(),x.a.medium(B())),G=j.b.a(k(),x.a.medium(S())),L=j.b.img(w()),N=Object(j.a)(C()),M=j.b.a(A(),N,x.a.medium(R())),Q=j.b.a(O(),N,x.a.medium(I())),T=j.b.input(y()),U=function(n){function t(){var n,e;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(p.a)(this,(n=Object(v.a)(t)).call.apply(n,[this].concat(a)))).state={search:""},e.handleSearchChange=function(n){return e.setState({search:n.target.value})},e}return Object(b.a)(t,n),Object(m.a)(t,[{key:"render",value:function(){var n=this.state.search;return a.a.createElement(z,null,a.a.createElement(M,{href:"/results"},a.a.createElement("i",{className:"fas fa-clipboard-list"})),a.a.createElement(G,{href:"/"},a.a.createElement(L,{src:h.a})),a.a.createElement(Q,{href:"/results"},"Resultados"),a.a.createElement(T,{type:"text",id:"navbar-search",placeholder:"Buscar por nome",onChange:this.handleSearchChange,value:n}))}}]),t}(a.a.Component),Z=e(44),D=e(49),P=e(50),V=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(U,null),a.a.createElement(f.a,{client:D.a},a.a.createElement(c.a,{basename:"/startupfest-ratings",history:P.a},a.a.createElement(u.a,null,Z.map(function(n){return a.a.createElement(l.a,{key:"route".concat(n.path),exact:n.exact,path:n.path,component:e(299)("./routes".concat(n.component)).default})}),a.a.createElement(s.a,{to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},7:function(n,t,e){"use strict";e.r(t),e.d(t,"Container",function(){return Y}),e.d(t,"SlideContainer",function(){return z}),e.d(t,"LoaderContainer",function(){return G}),e.d(t,"StartupImage",function(){return L}),e.d(t,"InfosContainer",function(){return N}),e.d(t,"Title",function(){return M}),e.d(t,"Subtitle",function(){return Q}),e.d(t,"LineWrapper",function(){return T}),e.d(t,"Infos",function(){return U}),e.d(t,"Description",function(){return Z}),e.d(t,"RateContainer",function(){return D}),e.d(t,"TitleAlt",function(){return P}),e.d(t,"RatingTitle",function(){return V}),e.d(t,"StarsContainer",function(){return F}),e.d(t,"ButtonsContainer",function(){return X});var r=e(4),a=e(5),i=e(10);function o(){var n=Object(r.a)(["\n    flex-direction: row;\n    & > * {\n      margin-right: 16px;\n      margin-bottom: initial;\n    }\n  "]);return o=function(){return n},n}function c(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  & > * {\n    margin-right: initial;\n    margin-bottom: 16px;\n  }\n\n  ","\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n    margin-left: 24px;\n    margin-right: initial;\n    margin-bottom: 24px;\n  "]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 40px;\n\n  ","\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(["\n    text-align: initial;\n    width: initial;\n  "]);return s=function(){return n},n}function f(){var n=Object(r.a)(["\n  font-family: 'Lobster', sans-serif;\n  font-size: 32px;\n  text-align: center;\n  width: 100%;\n\n  ","\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  margin-top: 40px;\n  margin-bottom: 16px;\n  font-size: 24px;\n  font-family: var(--font-family-primary);\n"]);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  margin: 16px 0;\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  margin-top: 0;\n  color: var(--color-text-light);\n  font-weight: 300;\n"]);return p=function(){return n},n}function v(){var n=Object(r.a)(["\n    border-top: initial;\n    border-left: var(--color-primary) 3px solid;\n    padding-top: initial;\n    padding-left: 16px;\n    padding-bottom: initial;\n  "]);return v=function(){return n},n}function b(){var n=Object(r.a)(["\n  margin: 16px 0;\n  font-family: var(--font-family-secondary);\n  font-weight: var(--font-weight-secondary);\n  border-top: var(--color-primary) 3px solid;\n  border-left: initial;\n  padding-top: 16px;\n  padding-left: initial;\n  padding-bottom: 16px;\n\n  ","\n\n  & b {\n    margin-bottom: 8px;\n  }\n"]);return b=function(){return n},n}function g(){var n=Object(r.a)(["\n    flex-direction: row;\n  "]);return g=function(){return n},n}function h(){var n=Object(r.a)(["\n  display: flex;\n  align-items: baseline;\n  flex-direction: column;\n\n  ","\n"]);return h=function(){return n},n}function E(){var n=Object(r.a)(["\n  margin-top: 0;\n  margin-bottom: 16px;\n  font-size: 20px;\n  font-family: var(--font-family-secondary);\n"]);return E=function(){return n},n}function j(){var n=Object(r.a)(["\n  margin-top: 0;\n  margin-bottom: 16px;\n  font-size: 40px;\n  font-family: var(--font-family-primary);\n"]);return j=function(){return n},n}function x(){var n=Object(r.a)(["\n    margin-left: 64px;\n  "]);return x=function(){return n},n}function y(){var n=Object(r.a)(["\n  margin-left: initial;\n\n  ","\n"]);return y=function(){return n},n}function I(){var n=Object(r.a)(["\n    width: 30%;\n    margin-bottom: initial;\n  "]);return I=function(){return n},n}function O(){var n=Object(r.a)(["\n  display: block;\n  width: 100%;\n  height: 256px;\n  border-radius: var(--border-radius-default);\n  object-fit: cover;\n  margin-bottom: 32px;\n\n  ","\n"]);return O=function(){return n},n}function R(){var n=Object(r.a)(["\n  width: 100%;\n  height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return R=function(){return n},n}function A(){var n=Object(r.a)(["\n    flex-direction: row;\n  "]);return A=function(){return n},n}function C(){var n=Object(r.a)(["\n  display: flex;\n  animation: "," 500ms 1 ease;\n  flex-direction: column;\n\n  ","\n"]);return C=function(){return n},n}function w(){var n=Object(r.a)(["\n    padding: 32px 64px;\n  "]);return w=function(){return n},n}function S(){var n=Object(r.a)(["\n  background: var(--color-background);\n  padding: 8px 16px;\n  padding-bottom: 32px;\n\n  ","\n"]);return S=function(){return n},n}function k(){var n=Object(r.a)(["\n  0% {\n    opacity: 0;\n    transform: translateX(-30px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n"]);return k=function(){return n},n}var B=Object(a.c)(k()),Y=a.b.div(S(),i.a.medium(w())),z=a.b.div(C(),B,i.a.medium(A())),G=a.b.div(R()),L=a.b.img(O(),i.a.medium(I())),N=a.b.div(y(),i.a.medium(x())),M=a.b.h2(j()),Q=a.b.h4(E()),T=a.b.div(h(),i.a.medium(g())),U=a.b.div(b(),i.a.medium(v())),Z=a.b.p(p()),D=a.b.div(m()),P=a.b.h3(d()),V=a.b.span(f(),i.a.medium(s())),F=a.b.div(l(),i.a.medium(u())),X=a.b.div(c(),i.a.medium(o()))},75:function(n,t,e){"use strict";e.r(t);var r=e(45);e.d(t,"default",function(){return r.default})}},[[282,1,2]]]);
//# sourceMappingURL=main.f0338e5f.chunk.js.map