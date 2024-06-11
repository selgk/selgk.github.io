"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4623],{7344:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>t,default:()=>u,frontMatter:()=>n,metadata:()=>m,toc:()=>o});var i=r(4848),l=r(8453);const n={slug:"linuxsysmem",title:"Linux System memory konfig\xfcrasyonu.",authors:"selcuk",tags:["linux"]},t=void 0,m={permalink:"/blog/linuxsysmem",source:"@site/blog/2022-09-05-linux-system-mem/index.md",title:"Linux System memory konfig\xfcrasyonu.",description:"Bu b\xf6l\xfcmde sistem memory kullan\u0131m\u0131 geli\u015ftirmek i\xe7in kullan\u0131lan memory-related kernel parametlerini a\xe7\u0131klayaca\u011f\u0131m. Bu parametreleri set etmek i\xe7in kullanaca\u011f\u0131m\u0131z komut sysctl komutudur. Set edece\u011fimiz de\u011ferler /proc dizininde yer al\u0131r.Memory kullan\u0131m\u0131n\u0131 basit olarak bir veya daha fazla kernel parametrelerini set ederek d\xfczenleyebiliriz.",date:"2022-09-05T00:00:00.000Z",tags:[{inline:!1,label:"linux",permalink:"/blog/tags/linux",description:"linux"}],readingTime:1.845,hasTruncateMarker:!0,authors:[{name:"Selcuk Gok",title:"Maintainer",url:"https://github.com/selcukgk29",imageURL:"https://avatars.githubusercontent.com/u/36342161?s=400&u=24c9a3b5bdc0717dd3a73952862c8078861a0b6d&v=4",key:"selcuk"}],frontMatter:{slug:"linuxsysmem",title:"Linux System memory konfig\xfcrasyonu.",authors:"selcuk",tags:["linux"]},unlisted:!1,prevItem:{title:"Dockerize MQTT protocol Logger.",permalink:"/blog/dockerizeprotocollogger"},nextItem:{title:"A MQTT client with PyQt5",permalink:"/blog/mqttclient"}},s={authorsImageUrls:[void 0]},o=[];function d(e){const a={p:"p",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Bu b\xf6l\xfcmde sistem memory kullan\u0131m\u0131 geli\u015ftirmek i\xe7in kullan\u0131lan memory-related kernel parametlerini a\xe7\u0131klayaca\u011f\u0131m. Bu parametreleri set etmek i\xe7in kullanaca\u011f\u0131m\u0131z komut sysctl komutudur. Set edece\u011fimiz de\u011ferler /proc dizininde yer al\u0131r.Memory kullan\u0131m\u0131n\u0131 basit olarak bir veya daha fazla kernel parametrelerini set ederek d\xfczenleyebiliriz."}),"\n",(0,i.jsx)(a.p,{children:"\xd6rnek"}),"\n",(0,i.jsx)(a.p,{children:"overcommit_memory ge\xe7ici olarak 1 e set etmek i\xe7in"}),"\n",(0,i.jsx)(a.p,{children:"Kal\u0131c\u0131 set i\xe7in"}),"\n",(0,i.jsx)(a.p,{children:"/etc/sysctl.conf dizindeki dosyadan veya direkt a\u015fa\u011f\u0131daki komutla konfig\xfcre edilebilir."}),"\n",(0,i.jsx)(a.p,{children:"#sysctl vm.overcommit_memory=1 /etc/sysctl.conf"}),"\n",(0,i.jsx)(a.p,{children:"#sysctl -p komutu ile uygulanm\u0131\u015f t\xfcm konfig\xfcrasyonlar\u0131 g\xf6rebilirsiniz."}),"\n",(0,i.jsx)(a.p,{children:"Virtual Memory Parameters"}),"\n",(0,i.jsx)(a.p,{children:"Virtual memory parametreleri genellikle /proc/sys/vm dizini alt\u0131nda bulunur."}),"\n",(0,i.jsxs)(a.p,{children:["dirty_ratio",":Y","\xfczdesel bir de\u011ferdir. Total system memory bu de\u011fer kadar de\u011fi\u015fti\u011finde, system geri kalan de\u011fi\u015fiklikleri disk e yazmaya ba\u015fl\u0131yor.Default de\u011feri %20 dir."]}),"\n",(0,i.jsxs)(a.p,{children:["dirty_background_ratio ",":Y","\xfczdesel bir de\u011ferdir. Total system memory bu de\u011fer kadar de\u011fi\u015fti\u011finde, system geri kalan de\u011fi\u015fiklikleri arkaplanda disk e yazmaya ba\u015fl\u0131yor.Default de\u011feri %10 dur."]}),"\n",(0,i.jsxs)(a.p,{children:["overcommit_memory",":Fazla"," memory kullan\u0131m\u0131n\u0131 engellemeyi veya kabul etmeyi tan\u0131mlad\u0131\u011f\u0131m\u0131z parametredir."]}),"\n",(0,i.jsx)(a.p,{children:"Default de\u011feri 0 d\u0131r. Bu modda kernel heuristic algoritmas\u0131n\u0131 kullanarak memory kullan\u0131m\u0131na karar verir.(Heuristic algoritma en iyi sonucu garanti etmez fakat makul s\xfcrede iyiye yak\u0131n bir sonu\xe7 verir). Process lerde oom killer \xe7al\u0131\u015fma riski vard\u0131r."}),"\n",(0,i.jsx)(a.p,{children:"Parametre 1 e ayarland\u0131\u011f\u0131nda kernel memory ta\u015fmalar\u0131na kar\u015f\u0131 bir i\u015flem ger\xe7ekle\u015ftirmez. Yo\u011fun bellek kullan\u0131mlar\u0131nda performans\u0131 art\u0131r\u0131r."}),"\n",(0,i.jsx)(a.p,{children:"Parametre 2 e ayarland\u0131\u011f\u0131nda kernel memory kullan\u0131m istekleri, toplam kullan\u0131labilir swap memory ve overcommit_ratio da tan\u0131mlad\u0131\u011f\u0131m\u0131z fiziksel RAM y\xfczdesinden fazlaysa engeller. Bu mod belle\u011fin a\u015f\u0131r\u0131 y\xfcklenme riskini azalt\u0131r sadece yeteri kadar swap memory ve physical memory varsa kullan\u0131lmal\u0131d\u0131r."}),"\n",(0,i.jsxs)(a.p,{children:["overcommit_radio",":overcommit_memory"," 2 olarak ayarland\u0131\u011f\u0131nda dikkate al\u0131nan RAM y\xfczdesini belirtir.Varsay\u0131lan de\u011feri %50 dir."]}),"\n",(0,i.jsxs)(a.p,{children:["max_map_count",":Processlerin"," kulland\u0131\u011f\u0131 maximum memory map alanlar\u0131n\u0131 tan\u0131mlar.Default de\u011feri 65530."]}),"\n",(0,i.jsxs)(a.p,{children:["min_free_kbytes",":Systemde"," tutulacak minimum bo\u015f aland\u0131r.Kb cinsinde de\u011fer tan\u0131mlan\u0131r. D\xfc\u015f\xfck de\u011ferler tan\u0131mlanmal\u0131d\u0131r.Fazla de\u011fer tan\u0131m\u0131 sistemin hemen yetersiz bellek durumuna ge\xe7mesine ve kilitlenmesine neden olabilir."]}),"\n",(0,i.jsxs)(a.p,{children:["oom_adj",":OOM"," Killer \xe7al\u0131\u015ft\u0131\u011f\u0131nda sistem kendini recover edene kadar oom_score en y\xfcksekten ba\u015flayarak processleri kill eder. oom_adj processlerin oom_score unu tan\u0131mlaya yard\u0131m eder. E\u011fer oom_adj = -17 olursa oom_killer o process i kill etmez."]}),"\n",(0,i.jsx)(a.p,{children:"Swappiness: RAM kullan\u0131m\u0131n\u0131n yeterli olmad\u0131\u011f\u0131 durumlarda sistem diskten bir b\xf6l\xfcm ay\u0131rarak kullan\u0131r. Bu ay\u0131r\u0131lan b\xf6l\xfcme swap memory denir. 0\u2013100 aras\u0131 bir de\u011fer al\u0131r. Default de\u011feri 60 d\u0131r. Swappiness parametresi ne kadar y\xfcksekse swap memory kullan\u0131m\u0131 o kadar artar.Bu da systemde yava\u015flamaya neden olabilir.D\xfc\u015f\xfck de\u011ferlerde swap yerine daha \xe7ok physcal RAM kullan\u0131laca\u011f\u0131ndan sistem daha h\u0131zl\u0131 olur. Bu y\xfczden genellikle h\u0131zland\u0131rmak i\xe7in bu de\u011fer d\xfc\u015f\xfck se\xe7ilir."})]})}function u(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,a,r)=>{r.d(a,{R:()=>t,x:()=>m});var i=r(6540);const l={},n=i.createContext(l);function t(e){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function m(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(n.Provider,{value:a},e.children)}}}]);