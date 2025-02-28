"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[608],{9184:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=r(4848),a=r(8453);const t={slug:"BasicMLProject",title:"Voice Recognation with Pi Pico using TinyML(Edge Impulse)",authors:"selcuk",tags:["pico","edge impulse","ML"]},l=void 0,o={permalink:"/blog/BasicMLProject",source:"@site/blog/2025-03-01-BasicMLProject/index.md",title:"Voice Recognation with Pi Pico using TinyML(Edge Impulse)",description:"Video",date:"2025-03-01T00:00:00.000Z",tags:[{inline:!0,label:"pico",permalink:"/blog/tags/pico"},{inline:!0,label:"edge impulse",permalink:"/blog/tags/edge-impulse"},{inline:!0,label:"ML",permalink:"/blog/tags/ml"}],readingTime:1.765,hasTruncateMarker:!1,authors:[{name:"Selcuk Gok",title:"Maintainer",url:"https://github.com/selcukgk29",imageURL:"https://avatars.githubusercontent.com/u/36342161?s=400&u=24c9a3b5bdc0717dd3a73952862c8078861a0b6d&v=4",key:"selcuk"}],frontMatter:{slug:"BasicMLProject",title:"Voice Recognation with Pi Pico using TinyML(Edge Impulse)",authors:"selcuk",tags:["pico","edge impulse","ML"]},unlisted:!1,nextItem:{title:"Smart Cluster for Electric Karting",permalink:"/blog/karting-cluster"}},s={authorsImageUrls:[void 0]},c=[{value:"Video",id:"video",level:3},{value:"Genel Bak\u0131\u015f | Overview",id:"genel-bak\u0131\u015f--overview",level:3}];function d(e){const i={a:"a",br:"br",h3:"h3",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"video",children:"Video"}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://youtube.com/shorts/Wo9ATN-_wF4",frameborder:"0",allowfullscreen:!0}),"\n",(0,n.jsx)(i.h3,{id:"genel-bak\u0131\u015f--overview",children:"Genel Bak\u0131\u015f | Overview"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"T\xfcrk\xe7e:"}),(0,n.jsx)(i.br,{}),"\n","Bu proje, Raspberry Pi Pico mikrodenetleyicisi ve Edge Impulse platformunu kullanarak makine \xf6\u011frenimi tabanl\u0131 bir ses s\u0131n\u0131fland\u0131rma sistemi geli\u015ftirmeyi hedeflemektedir. Proje, d\xfc\u015f\xfck g\xfc\xe7l\xfc mikrodenetleyicilerle ses tan\u0131ma uygulamalar\u0131 geli\u015ftirmek isteyenler i\xe7in iyi bir \xf6rnek sunar."]}),"\n",(0,n.jsx)(i.p,{children:"Raspberry Pi Pico, mikrodenetleyici tabanl\u0131 bir cihaz olup, \xe7evresel cihazlarla ileti\u015fim kurarak veri toplama ve i\u015fleme i\u015flemleri ger\xe7ekle\u015ftirebilir. Bu projede, seri port \xfczerinden ses verisi toplan\u0131r ve bu veriler WAV format\u0131nda kaydedilir. Bu sayede, ses verileri model e\u011fitimi i\xe7in uygun hale getirilir."}),"\n",(0,n.jsx)(i.p,{children:"Edge Impulse, makine \xf6\u011frenimi ve yapay zeka projelerini geli\u015ftirmek i\xe7in kullan\u0131lan bir platformdur. Bu platform, mikrodenetleyicilerle \xe7al\u0131\u015fan cihazlar \xfczerinde veri toplama, s\u0131n\u0131fland\u0131rma ve model e\u011fitimi yapmay\u0131 kolayla\u015ft\u0131r\u0131r. Proje, Arduino veya Raspberry Pi Pico gibi d\xfc\u015f\xfck g\xfc\xe7l\xfc mikrodenetleyiciler ile ses verisi kaydedilmesi, s\u0131n\u0131fland\u0131r\u0131lmas\u0131 ve model e\u011fitimi s\xfcre\xe7lerini ad\u0131m ad\u0131m a\xe7\u0131klar."}),"\n",(0,n.jsx)(i.p,{children:"Ses tan\u0131ma uygulamalar\u0131, sesli komutlar\u0131 tan\u0131mak, sesli yan\u0131tlar \xfcretmek veya belirli sesleri tan\u0131mak gibi bir\xe7ok alanda kullan\u0131lmaktad\u0131r. Bu proje, d\xfc\u015f\xfck enerji t\xfcketimiyle \xe7al\u0131\u015fabilen mikrodenetleyicilerle ses tan\u0131ma sistemleri geli\u015ftirmek isteyenler i\xe7in faydal\u0131 bir rehber sunar."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"English:"}),(0,n.jsx)(i.br,{}),"\n","This project aims to develop a machine learning-based voice classification system using the Raspberry Pi Pico microcontroller and the Edge Impulse platform. The project provides a good example for those who want to develop voice recognition applications with low-power microcontrollers."]}),"\n",(0,n.jsx)(i.p,{children:"The Raspberry Pi Pico is a microcontroller-based device that can communicate with peripheral devices to collect and process data. In this project, audio data is collected via the serial port and saved in WAV format. This allows the audio data to be made suitable for model training."}),"\n",(0,n.jsx)(i.p,{children:"Edge Impulse is a platform used to develop machine learning and artificial intelligence projects. It simplifies data collection, classification, and model training for devices working with microcontrollers. The project explains step-by-step how to record audio data, classify it, and train a model using low-power microcontrollers like Arduino or Raspberry Pi Pico."}),"\n",(0,n.jsx)(i.p,{children:"Voice recognition applications are used in many fields, such as recognizing voice commands, generating spoken responses, or identifying specific sounds. This project provides a useful guide for those who want to develop voice recognition systems using low-energy microcontrollers."}),"\n",(0,n.jsxs)(i.p,{children:["Kodlar i\xe7in:\r\n",(0,n.jsx)(i.a,{href:"https://github.com/selcukgk29/voice_commandPiPico",children:"GitHub"})]})]})}function m(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>o});var n=r(6540);const a={},t=n.createContext(a);function l(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);