(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2266:(e,t,i)=>{Promise.resolve().then(i.bind(i,2140))},2140:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>k});var a=i(3528),r=i(5316),n=i(6282),s=i(7369);i(8083);var o=i(5214),l=i(7240),c=i(1805);let d=r.forwardRef(function(e,t){let{showArrow:i,children:r,disabled:n,portalled:s,content:o,contentProps:d,portalRef:h,...p}=e;return n?r:(0,a.jsxs)(l.sb,{...p,children:[(0,a.jsx)(l.k$,{asChild:!0,children:r}),(0,a.jsx)(c.Z,{disabled:!s,container:h,children:(0,a.jsx)(l.ol,{children:(0,a.jsxs)(l.ZI,{ref:t,...d,children:[i&&(0,a.jsx)(l.PR,{children:(0,a.jsx)(l.Mo,{})}),o]})})})]})});var h=i(5868),p=i(3138),f=i(4830),x=i(8458),m=i(4862);let u=r.forwardRef(function(e,t){let{children:i,indicatorPlacement:r="end",...n}=e;return(0,a.jsxs)(f.Sx,{...n,ref:t,children:["start"===r&&(0,a.jsx)(f.Fr,{rotate:{base:"-90deg",_open:"0deg"},children:(0,a.jsx)(m.zrT,{})}),(0,a.jsx)(x.z,{gap:"4",flex:"1",textAlign:"start",width:"full",children:i}),"end"===r&&(0,a.jsx)(f.Fr,{children:(0,a.jsx)(m.zrT,{})})]})}),g=r.forwardRef(function(e,t){return(0,a.jsx)(f.b,{children:(0,a.jsx)(f.i$,{...e,ref:t})})}),j=f.Xl,y=f.As;var b=i(4946),w=i(2446);function k(){let[e,t]=(0,r.useState)({public_repos:0,followers:0}),[i,o]=(0,r.useState)("https://f.imnyang.xyz/profile/imnyang.webp"),[l,c]=(0,r.useState)("/"),[f,x]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=new URLSearchParams(window.location.search);(()=>{if(e.has("kawaii")?(o("https://f.imnyang.xyz/profile/hatchu_imnyang.webp"),c("/")):(o("https://f.imnyang.xyz/profile/imnyang.webp"),c("/?kawaii")),e.has("no_hair")&&e.has("no_ear")?o("https://f.imnyang.xyz/profile/no_ear_no_long_hair.png"):e.has("no_ear")?o("https://f.imnyang.xyz/profile/no_ear.png"):e.has("no_hair")&&o("https://f.imnyang.xyz/profile/no_hair.avif"),e.has("fast")){let e=document.createElement("style");e.innerHTML="\n          .avatar:hover {\n            animation: rotate 1ms linear infinite;\n          }\n        ",document.head.appendChild(e)}})()},[]),(0,r.useEffect)(()=>{(async function(){try{let e=await fetch("https://api.github.com/users/imnyang"),i=await e.json();t({public_repos:i.public_repos,followers:i.followers})}catch(e){console.error("Error fetching user info:",e)}})()},[]),(0,r.useEffect)(()=>{let e=()=>{x(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let m=e=>{let{href:t,icon:i,tooltip:r}=e;return(0,a.jsx)(d,{content:r,openDelay:100,positioning:{placement:"bottom"},children:(0,a.jsx)(s.default,{href:t,style:{color:"#b2a1af",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)("i",{className:i,style:{fontSize:"24px"}})})})},[b,w]=(0,r.useState)(["about"]);return(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsxs)("div",{className:"main",children:[(0,a.jsxs)("div",{className:"profile flex flex-col items-center gap-4 mt-10 mb-10",children:[(0,a.jsx)(n.default,{src:i,width:128,height:128,className:"rounded-full avatar",alt:"Profile",priority:!0}),(0,a.jsx)("h1",{className:"text-white text-2xl font-bold",children:"hyun._.suk"}),(0,a.jsxs)("p",{children:["Team. ",(0,a.jsx)(s.default,{href:"https://sqlare.com",children:"Sqlare"})," & ",(0,a.jsx)(s.default,{href:"https://github.com/objectiveTM",children:"Objective"})]}),(0,a.jsxs)("div",{className:"flex flex-row gap-6",children:[f&&(0,a.jsx)(m,{href:"supertoss://send?bank=토스뱅크&accountNo=100079352039&origin=qr",icon:"fa-solid fa-circle-dollar-to-slot",tooltip:"Toss"}),(0,a.jsx)(m,{href:l,icon:"fa-brands fa-github",tooltip:"Github | ".concat(e.public_repos," Repos")}),(0,a.jsx)(m,{href:"mailto:me@imnyang.xyz",icon:"fa-solid fa-at",tooltip:"Mail"}),(0,a.jsx)(m,{href:"https://instagram.com/fur_local",icon:"fa-brands fa-instagram",tooltip:"Instagram"}),(0,a.jsx)(m,{href:"https://x.com/fur_local",icon:"fa-brands fa-x-twitter",tooltip:"X"})]})]}),(0,a.jsx)(h.B,{width:"full",maxW:"450px",mx:"auto",children:(0,a.jsx)(j,{multiple:!0,collapsible:!0,value:b,onValueChange:e=>w(e.value),children:E.map(e=>(0,a.jsxs)(y,{value:e.value,children:[(0,a.jsxs)(u,{style:{marginBottom:"0.5rem"},children:[(0,a.jsx)(p.I,{fontSize:"lg",color:"fg.subtle",children:e.icon}),e.title]}),(0,a.jsx)(g,{maxH:"250px",overflow:"auto",children:e.content})]},e.value))})})]})})}(0,r.forwardRef)((e,t)=>(0,a.jsx)("a",{...e,ref:t})).displayName="TippyWrapper";let E=[{value:"about",icon:(0,a.jsx)(b.A,{}),title:"About",content:"안녕하세요. imnyang이라는 닉네임으로 활동중인 남현석입니다.\n"},{value:"project",icon:(0,a.jsx)(w.A,{}),title:"Project",content:(0,a.jsxs)("div",{className:"flex flex-col text-sky-300",children:[(0,a.jsx)("p",{className:"text-white",children:"imnyang"}),(0,a.jsx)(s.default,{href:"https://instagram.com/today.isangjeong",children:"오늘 인천 상정중학교"}),(0,a.jsx)(s.default,{href:"https://time.imnyang.xyz",children:"Local Time"}),(0,a.jsx)(s.default,{href:"https://github.com/imnyang/siru",children:"Siru"}),(0,a.jsx)(s.default,{href:"https://github.com/imnyang/discord-voice-rec",children:"Discord Voice Recorder"}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{className:"text-white",children:"Sqlare"}),(0,a.jsx)(s.default,{href:"https://github.com/sqlare/sqlr.kr/tree/main",children:"sqlr.kr (sqlite)"})]})},{value:"timeline",icon:(0,a.jsx)(w.A,{}),title:"Timeline",content:(0,a.jsx)("div",{className:"timeline text-white",children:[{date:"2024-12-14",description:"2024 글로벌스타트업학교 K-청소년스타트업 경진대회 우수상 수상",category:"Award",link:"https://www.ncf.or.kr/projects/'2024-%EA%B8%80%EB%A1%9C%EB%B2%8C%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%ED%95%99%EA%B5%90-k-%EC%B2%AD%EC%86%8C%EB%85%84%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-%EA%B2%BD%EC%A7%84%EB%8C%80%ED%9A%8C'-%EC%B0%B8%EA%B0%80%EC%9E%90-%EB%AA%A8%EC%A7%91"},{date:"2024-12-07",description:"글로벌 스타트업 학교 팀 1위",category:"Award",link:"https://blog.imnyang.xyz/blog/gss"},{date:"2024-12-07",description:"글로벌 스타트업 학교 개인 최우수상",category:"Award",link:"https://blog.imnyang.xyz/blog/gss"},{date:"2024-08-18",description:"29회 해킹캠프 CTF 1위 (고민중독)",category:"Award",link:"https://ctf.hackingcamp.org/"},{date:"2024-08-05",description:"29회 해킹캠프 선발",category:"Conference",link:"https://hackingcamp.org/"},{date:"2024-08-01",description:"글로벌 스타트업 학교 2기 베트남 해외 연수 데모데이 대상 (1위)",category:"Award",link:"http://ncf.or.kr"},{date:"2024-05-16",description:"글로벌 스타트업 학교 2기 합격",category:"Education",link:"http://ncf.or.kr"},{date:"2024-05-11",description:"LG AI 청소년 캠프 1기 LG 탐색상 수상",category:"Award",link:"https://lgaiyouthcamp.or.kr/"},{date:"2024-05-11",description:"LG AI 청소년 캠프 1기 수료",category:"Award",link:"https://lgaiyouthcamp.or.kr/"},{date:"2024-04-22",description:"@isangjeong.today (인천상정중학교의 오늘 급식)",category:"Project",link:"https://www.instagram.com/isangjeong.today/"},{date:"2024-03-24",description:"Dreamhack #133",link:"https://dreamhack.io/users/40116/wargame"},{date:"2024-03-24",description:"Ubuntu Mirror [Not Working Now]",link:"https://launchpad.net/ubuntu/+mirror/mirror.imnyang.xyz-release"},{date:"2024-03-24",description:"내 목소리로 AI Cover 만들기",category:"Project",link:"https://colab.research.google.com/drive/1a4G4hD9huBeGRZhEL2HNDMpqSuf4y61k?usp=sharing"},{date:"2023-12-20",description:"LG AI 청소년 캠프 1기 합격",category:"Education"},{date:"2023-11-14",description:"인천상정중학교 2023학년도 SW 문제 해결 활동 우수상(2위) 수여",category:"Award"},{date:"2023-11-01",description:"블로그 시작",link:"https://blog.imnyang.xyz",category:"Project"},{date:"2023-09-02",description:"선린인터넷고등학교 제6회 소프트웨어나늠축제 Layer7 부서 과정 이수"},{date:"2023-07-24",description:"한국정보기술연구원이 주도하는 사이버 가디언즈 보안캠프 수료"},{date:"2023-05-15",description:"한국 코드페어 예선 진출"},{date:"2022-12-20",description:"2022 SW영재 창작대회 은상 수상"},{date:"2022-09-27",description:"2022 삼성 주니어 SW 창작대회 본선 진출"},{date:"2022-05-23",description:"2022학년도 석정초SW영재학급 첫 수업"},{date:"2022-07-26",description:"제 14회 맑은하늘 맑은웃음 공모전에서 맑은웃음상 수여"},{date:"2021-11-14",description:"Become a ZEPETO Creator 이수"},{date:"2021-05-19",description:"소프트웨어와 전자신문이 주관한 소프트웨어재단 꿈찾기 캠프 이수"},{date:"2018-01-27",description:"제4회 맑은하늘 맑은웃음 어린이 문예공모전에서 위닉스상(2위) 수여"}].map((e,t)=>(0,a.jsxs)("div",{className:"flex flex-col gap-2 mb-3",children:[(0,a.jsx)("p",{className:"tabular-nums text-base text-gray-400",children:e.date}),(0,a.jsxs)("div",{className:"flex items-center",children:[e.link&&(0,a.jsxs)(s.default,{href:e.link,className:"flex gap-2 text-base",children:[(0,a.jsx)("span",{className:"text-base",children:e.description}),(0,a.jsx)(o.A,{width:18})]}),!e.link&&(0,a.jsx)("span",{className:"text-base",children:e.description})]})]},t))})}]},8083:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[498,997,616,182,465,743,358],()=>t(2266)),_N_E=e.O()}]);