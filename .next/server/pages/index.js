(()=>{var e={};e.id=332,e.ids=[332],e.modules={7684:e=>{e.exports={price:"productCard_price__i3QGH",title:"productCard_title__nbzsy",cover:"productCard_cover__he8Hv",cardHover:"productCard_cardHover__mh0_y"}},2164:e=>{e.exports={container:"homecarousel_container__8NGt4",btn:"homecarousel_btn__5MqXR",btnLeft:"homecarousel_btnLeft__EpP5P",btnRight:"homecarousel_btnRight__c6W9n",dotContainer:"homecarousel_dotContainer__DGooF"}},4878:e=>{e.exports={container:"aboutHome_container__FR5LH",box:"aboutHome_box__dBfT4",title:"aboutHome_title__dKiF1",content:"aboutHome_content__QW1Jb",button:"aboutHome_button__TS9la",iywoc:"aboutHome_iywoc__29IJf"}},9045:e=>{e.exports={container:"categoriesHome_container__e4jf_",titleWrapper:"categoriesHome_titleWrapper__HEw4O",title:"categoriesHome_title__yFyjf",gridWrapper:"categoriesHome_gridWrapper__XL0Yv",categoryContainer:"categoriesHome_categoryContainer__6_Pgt",iconAndText:"categoriesHome_iconAndText__mnSyH",icon:"categoriesHome_icon__RR2kz",text:"categoriesHome_text__w1twU"}},1351:e=>{e.exports={container:"historyHome_container__QQ1Z5",top:"historyHome_top__f0V2x",title:"historyHome_title__e7anw",delete:"historyHome_delete__bkcTZ",bottom:"historyHome_bottom__cxxlx"}},9383:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>D,default:()=>G,getServerSideProps:()=>B,getStaticPaths:()=>z,getStaticProps:()=>L,reportWebVitals:()=>E,routeModule:()=>Z,unstable_getServerProps:()=>V,unstable_getServerSideProps:()=>X,unstable_getStaticParams:()=>U,unstable_getStaticPaths:()=>Q,unstable_getStaticProps:()=>F});var s={};r.r(s),r.d(s,{default:()=>$});var a=r(3865),i=r(9455),o=r(671),n=r(5525),c=r(2352),l=r(8732),d=r(2015),m=r(4776),h=r(9611),p=r(1106),u=r.n(p),x=r(4421),_=r(8071),g=r(8936),b=r(2164),j=r.n(b);let v=[{desktop:"/images/desktop-laptops.png",tablet:"/images/mobile-laptops.png",smartphone:"/images/mobile-laptops.png",link:"/category/laptops"},{desktop:"/images/desktop-videogames.png",tablet:"/images/mobile-videogames.png",smartphone:"/images/mobile-videogames.png",link:"/category/videogames"},{desktop:"/images/desktop-smartphones.png",tablet:"/images/mobile-smartphones.png",smartphone:"/images/mobile-smartphones.png",link:"/category/smartphones"}],f=e=>({desktop:{width:1600,height:340},tablet:{width:984,height:450},smartphone:{width:984,height:450}})[e],y=()=>{let{currentDevice:e}=(0,g.p)(),{width:t,height:r}=f(e);return(0,l.jsx)("div",{className:j().container,children:(0,l.jsxs)(x.CarouselProvider,{naturalSlideHeight:r,naturalSlideWidth:t,totalSlides:3,infinite:!0,isPlaying:!0,interval:5e3,children:[(0,l.jsx)(x.Slider,{children:v.map((t,r)=>(0,l.jsx)(x.Slide,{index:r,children:(0,l.jsx)(u(),{href:t.link,children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:t[e],alt:"mercadoabierto banner",style:{width:"100%"}})})})},r))}),(0,l.jsx)(x.ButtonBack,{className:`${j().btn} ${j().btnLeft}`,children:(0,l.jsx)(_.Icon,{color:"blue",size:"big",name:"chevron left"})}),(0,l.jsx)(x.ButtonNext,{className:`${j().btn} ${j().btnRight}`,children:(0,l.jsx)(_.Icon,{color:"blue",size:"big",name:"chevron right"})}),(0,l.jsx)(x.DotGroup,{className:j().dotContainer})]})})};var N=r(9151),S=r(9045),H=r.n(S);let P=()=>(0,l.jsxs)("div",{className:H().container,children:[(0,l.jsx)("div",{className:H().titleWrapper,children:(0,l.jsx)("h2",{className:H().title,children:"Categories"})}),(0,l.jsx)("div",{className:H().gridWrapper,children:N.v.map(({key:e,text:t,value:r,icon:s})=>(0,l.jsx)(u(),{href:`/category/${r}`,children:(0,l.jsx)("a",{className:H().categoryContainer,children:(0,l.jsxs)("div",{className:H().iconAndText,children:[(0,l.jsx)(_.Icon,{size:"big",name:s,className:H().icon}),(0,l.jsx)("h2",{className:H().text,children:t})]})})},e))})]});var w=r(9116),k=r(8137),C=r(0),q=r(1351),M=r.n(q);let I=()=>{let[e,t]=(0,d.useState)([]),r=async e=>{try{let r=[];for(let t of e){let{productData:e}=await k.A.getProductById(t);e&&r.push(e)}t(r)}catch({message:e}){console.error(e)}};return((0,d.useEffect)(()=>{let e=(0,C.s2)("historyIds-ma");e&&r(e.slice(0,6))},[]),0===e.length)?null:(0,l.jsxs)("div",{className:M().container,children:[(0,l.jsxs)("div",{className:M().top,children:[(0,l.jsx)("div",{className:M().title,children:"Your History"}),(0,l.jsx)("div",{className:M().delete,onClick:()=>{(0,C.dW)("historyIds-ma"),t([])},children:"Delete history"})]}),(0,l.jsx)("div",{className:M().bottom,children:e.map((e,t)=>(0,d.createElement)(w.A,{...e,key:t}))})]})};var W=r(4878),A=r.n(W);let R=()=>(0,l.jsxs)("div",{className:A().container,children:[(0,l.jsxs)("div",{className:A().box,children:[(0,l.jsxs)("h2",{className:A().title,children:[(0,l.jsx)("b",{children:"mercadolibre"})," clone"]}),(0,l.jsxs)("div",{className:A().content,children:["This website is a clone for ",(0,l.jsx)("a",{href:"https://www.mercadolibre.com/",target:"_blank",rel:"noopener noreferrer",children:"mercadolibre"})," ","website. It's one of the best clones out there."]}),(0,l.jsx)(u(),{href:"/about",children:(0,l.jsxs)("a",{className:A().button,children:["Learn more",(0,l.jsx)(_.Icon,{name:"arrow right"})]})})]}),(0,l.jsxs)("div",{className:A().box,children:[(0,l.jsx)("h2",{className:A().title,children:"Open Source Project"}),(0,l.jsxs)("div",{className:A().content,children:["This project is open source. Give me a star!",(0,l.jsx)("br",{}),(0,l.jsx)("p",{className:A().iywoc,children:"(if you want of course)"})]}),(0,l.jsxs)("a",{className:A().button,href:"https://github.com/coxato/mercadoabierto",target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsx)(_.Icon,{name:"github",id:"githubIcon-about-home"}),"Github",(0,l.jsx)(_.Icon,{name:"external"})]})]})]}),T=()=>(0,l.jsxs)(h.A,{children:[(0,l.jsx)(y,{}),(0,l.jsx)(P,{}),(0,l.jsx)(I,{}),(0,l.jsx)(R,{})]}),$=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.A,{title:"Mercadoabierto - tech marketplace",isHomepage:!0}),(0,l.jsx)(T,{})]}),G=(0,o.M)(s,"default"),L=(0,o.M)(s,"getStaticProps"),z=(0,o.M)(s,"getStaticPaths"),B=(0,o.M)(s,"getServerSideProps"),D=(0,o.M)(s,"config"),E=(0,o.M)(s,"reportWebVitals"),F=(0,o.M)(s,"unstable_getStaticProps"),Q=(0,o.M)(s,"unstable_getStaticPaths"),U=(0,o.M)(s,"unstable_getStaticParams"),V=(0,o.M)(s,"unstable_getServerProps"),X=(0,o.M)(s,"unstable_getServerSideProps"),Z=new a.PagesRouteModule({definition:{kind:i.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:c.default,Document:n.default},userland:s})},9116:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var s=r(8732);r(2015);var a=r(1106),i=r.n(a),o=r(8071),n=r(2902),c=r(7684),l=r.n(c);let d=e=>{let{title:t,id_product:r,cover:a,price:c,new:d}=e;return(0,s.jsxs)(o.Card,{fluid:!0,className:l().cardHover,children:[(0,s.jsx)(o.Card.Content,{extra:!0}),(0,s.jsx)(i(),{href:`/product/${r}`,children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:a,className:l().cover})})}),(0,s.jsx)(o.Card.Content,{children:(0,s.jsx)(i(),{href:`/product/${r}`,children:(0,s.jsxs)("a",{children:[(0,s.jsxs)("h2",{className:l().price,children:["USD$ ",c]}),(0,s.jsx)("h2",{className:l().title,children:(0,n.I)(t)}),(0,s.jsx)(o.Card.Meta,{children:(0,s.jsx)("span",{children:parseInt(d)?"New":"Used"})})]})})})]})}},4776:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var s=r(8732),a=r(7912),i=r.n(a);let o=({title:e,isHomepage:t=!1})=>(0,s.jsx)(i(),{children:(0,s.jsx)("title",{children:e+(t?"":" | mercadoabierto")})})},8936:(e,t,r)=>{"use strict";function s(){let e=document.body.clientWidth,t=!0,r;return e>=801?(t=!1,r="desktop"):r=e<801&&e>=540?"tablet":"smartphone",{isMobile:t,currentDevice:r}}r.d(t,{p:()=>s})},2902:(e,t,r)=>{"use strict";function s(e){let t=e.toLowerCase();return t[0].toUpperCase()+t.substring(1)}function a(e,t=30){let r=e.substring(0,t),i=e.length>t?"...":"";return s(r)+i}r.d(t,{I:()=>a,Z:()=>s})},2124:e=>{"use strict";e.exports=require("@tarekraafat/autocomplete.js/dist/js/autoComplete")},8938:e=>{"use strict";e.exports=require("axios")},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{"use strict";e.exports=require("next/head")},6653:e=>{"use strict";e.exports=require("nprogress")},4421:e=>{"use strict";e.exports=require("pure-react-carousel")},2015:e=>{"use strict";e.exports=require("react")},2326:e=>{"use strict";e.exports=require("react-dom")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},8071:e=>{"use strict";e.exports=require("semantic-ui-react")},7085:e=>{"use strict";e.exports=require("styled-jsx/style")},9021:e=>{"use strict";e.exports=require("fs")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4075:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[585,928,883,990,113,611],()=>r(9383));module.exports=s})();