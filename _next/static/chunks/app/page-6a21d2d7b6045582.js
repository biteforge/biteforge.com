(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1367:function(A,t,e){Promise.resolve().then(e.t.bind(e,8173,23)),Promise.resolve().then(e.t.bind(e,231,23)),Promise.resolve().then(e.bind(e,6096)),Promise.resolve().then(e.bind(e,1188)),Promise.resolve().then(e.bind(e,4027)),Promise.resolve().then(e.bind(e,6929)),Promise.resolve().then(e.bind(e,543)),Promise.resolve().then(e.bind(e,1418)),Promise.resolve().then(e.bind(e,8339)),Promise.resolve().then(e.bind(e,2e3)),Promise.resolve().then(e.bind(e,8744)),Promise.resolve().then(e.bind(e,6614)),Promise.resolve().then(e.bind(e,500)),Promise.resolve().then(e.bind(e,8154))},6096:function(A,t,e){"use strict";e.r(t),e.d(t,{FadeIn:function(){return o},FadeInStagger:function(){return a}});var i=e(7437),r=e(2265),n=e(4501),s=e(3991);let h=(0,r.createContext)(!1),l={once:!0,margin:"0px 0px -200px"};function o(A){let t=(0,n.J)(),e=(0,r.useContext)(h);return(0,i.jsx)(s.E.div,{variants:{hidden:{opacity:0,y:t?0:24},visible:{opacity:1,y:0}},transition:{duration:.5},...e?{}:{initial:"hidden",whileInView:"visible",viewport:l},...A})}function a(A){let{faster:t=!1,...e}=A;return(0,i.jsx)(h.Provider,{value:!0,children:(0,i.jsx)(s.E.div,{initial:"hidden",whileInView:"visible",viewport:l,transition:{staggerChildren:t?.12:.2},...e})})}},1188:function(A,t,e){"use strict";e.d(t,{GridPattern:function(){return h}});var i=e(7437),r=e(2265),n=e(3991);function s(A){let{x:t,y:e,...r}=A;return(0,i.jsx)(n.E.path,{transform:`translate(${-32*e+96*t} ${160*e})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...r})}function h(A){let{yOffset:t=0,interactive:e=!1,...n}=A,h=(0,r.useId)(),l=(0,r.useRef)(null),o=(0,r.useRef)(),a=(0,r.useRef)(0),[d,u]=(0,r.useState)([]);return(0,r.useEffect)(()=>{if(e)return window.addEventListener("mousemove",A),()=>{window.removeEventListener("mousemove",A)};function A(A){if(!l.current)return;let e=l.current.getBoundingClientRect(),i=A.clientX-e.left,r=A.clientY-e.top;!(i<0)&&!(r<0)&&!(i>e.width)&&!(r>e.height)&&(i=i-e.width/2-32,r-=t,i+=Math.tan(.2)*r,i=Math.floor(i/96),r=Math.floor(r/160),(o.current?.[0]!==i||o.current?.[1]!==r)&&(o.current=[i,r],u(A=>{let t=a.current++;return[...A,[i,r,t]].filter(A=>!(A[0]===i&&A[1]===r&&A[2]!==t))})))}},[t,e]),(0,i.jsxs)("svg",{ref:l,"aria-hidden":"true",...n,children:[(0,i.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${h})`,strokeWidth:"0"}),(0,i.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map(A=>(0,i.jsx)(s,{x:A[0],y:A[1]},`${A}`)),d.map(A=>(0,i.jsx)(s,{x:A[0],y:A[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{u(t=>t.filter(t=>t[2]!==A[2]))}},A[2]))]}),(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:h,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,i.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},4027:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.456aa9d9.svg",height:36,width:184,blurWidth:0,blurHeight:0}},6929:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.5c8de99c.svg",height:36,width:184,blurWidth:0,blurHeight:0}},543:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.1704e6d8.svg",height:36,width:184,blurWidth:0,blurHeight:0}},1418:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.da1195d8.svg",height:36,width:184,blurWidth:0,blurHeight:0}},8339:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.249606f6.svg",height:36,width:184,blurWidth:0,blurHeight:0}},2e3:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.e19f9c9b.svg",height:36,width:184,blurWidth:0,blurHeight:0}},8744:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-dark.353d4760.svg",height:36,width:184,blurWidth:0,blurHeight:0}},6614:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.ada2d552.svg",height:36,width:184,blurWidth:0,blurHeight:0}},500:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.f6ce2960.svg",height:36,width:184,blurWidth:0,blurHeight:0}},8154:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/laptop.22dcb094.jpg",height:3e3,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABiCf/xAAWEAEBAQAAAAAAAAAAAAAAAAACAAT/2gAIAQEAAQUCWxG//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGBAAAwEBAAAAAAAAAAAAAAAAAQMRMQD/2gAIAQEABj8CjGWYAM7/xAAYEAACAwAAAAAAAAAAAAAAAAAAASFRYf/aAAgBAQABPyHLYhhR/9oADAMBAAIAAwAAABAL/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qj//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxB0/8QAGRAAAgMBAAAAAAAAAAAAAAAAASEAETFR/9oACAEBAAE/ED14mU2Y5yf/2Q==",blurWidth:6,blurHeight:8}}},function(A){A.O(0,[592,173,971,23,744],function(){return A(A.s=1367)}),_N_E=A.O()}]);