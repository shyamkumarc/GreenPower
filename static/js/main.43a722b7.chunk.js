(this.webpackJsonpgreenpower1=this.webpackJsonpgreenpower1||[]).push([[0],{211:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),j=a(42),s=a.n(j),i=(a(211),a(181)),r=a(355),d=a(88),l=a(356),x=a(360),h=a(77),b=a(78),o=a(94),O=a(92),m=a(107),v=a(59),p=a(361),u=a(108),y=a(1),f=[{name:"01:00",pv:480,uv:1500},{name:"02:00",pv:720,uv:1500},{name:"03:00",pv:900,uv:1650},{name:"04:00",pv:1680,uv:700},{name:"05:00",pv:1211,uv:1690},{name:"06:00",pv:1141,uv:1750},{name:"07:00",pv:1061,uv:1932},{name:"08:00",pv:1291,uv:1581},{name:"09:00",pv:1750,uv:1932},{name:"10:00",pv:2032,uv:1750},{name:"11:00",pv:2430,uv:1850},{name:"12:00",pv:2610,uv:2e3},{name:"13:00",pv:3100,uv:2040},{name:"14:00",pv:3241,uv:2040},{name:"15:00",pv:3500,uv:2040},{}],g=[{date:"2018",wind:9,solar:14},{date:"2019",wind:12,solar:16},{date:"2020",wind:14,solar:19},{date:"2021",wind:15,solar:22}],k=function(e){var t,a=e.x,c=e.y,n=e.width,j=e.value;return Object(y.jsxs)("g",{children:[Object(y.jsx)("circle",{cx:a+n/2,cy:c,fill:"black"}),Object(y.jsx)("text",{x:a+n/2,y:c,fill:"black",textAnchor:"middle",dominantBaseline:"top",children:null===(t=g.find((function(e){return e.date===j})))||void 0===t?void 0:t.solar})]})},w=function(e){var t,a=e.x,c=e.y,n=e.width,j=e.value;return Object(y.jsxs)("g",{children:[Object(y.jsx)("circle",{cx:a+n/2,cy:c,fill:"black"}),Object(y.jsx)("text",{x:a+n/2,y:c,fill:"black",textAnchor:"middle",dominantBaseline:"top",children:null===(t=g.find((function(e){return e.date===j})))||void 0===t?void 0:t.wind})]})},M=[{},{name:"Oct",mg:30},{name:"Nov",mg:28},{name:"Dec",mg:27},{name:"Jan",mg:27},{name:"Feb",mg:28},{name:"Mar",mg:29},{name:"Apr",mg:30},{name:"May",mg:32},{name:"Jun",mg:33},{name:"July",mg:34},{name:"Aug",mg:33},{name:"Sep",mg:25}],T=function(e){var t=e.x,a=e.y,c=e.stroke,n=e.value;return Object(y.jsx)("text",{x:t,y:a,dy:-4,fill:c,fontSize:10,textAnchor:"middle",children:n})},A=function(e){var t=e.x,a=e.y,c=e.payload;return Object(y.jsx)("g",{transform:"translate(".concat(t,",").concat(a,")"),children:Object(y.jsx)("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:c.value})})};var W=a(31),K=a(24),P=a(369),F=function(){return Object(y.jsx)(P.a,{className:"header-page",children:Object(y.jsxs)(i.a,{children:[Object(y.jsxs)(P.a.Brand,{href:"/",children:["            ",Object(y.jsx)("img",{className:"d-inline-block align-top",src:"/greenPower/logo.png",alt:"logo"})]}),Object(y.jsx)(P.a.Toggle,{}),Object(y.jsx)(P.a.Collapse,{className:"justify-content-end",children:Object(y.jsxs)(P.a.Text,{children:[Object(y.jsx)("h1",{children:"Green Power"}),Object(y.jsx)("h6",{children:"Helping Utilities Transition to Clean Energy"})]})})]})})},B=[{name:"PV - T+3",pv:15600},{name:"PV - T+4",pv:14800}],D=[{name:"01:00",pv:0},{name:"01:03",pv:0},{name:"02:00",pv:0},{name:"02:30",pv:0},{name:"03:00",pv:0},{name:"03:30",pv:350},{name:"04:00",pv:500},{name:"04:30",pv:650},{name:"05:00",pv:941},{name:"05:30",pv:1120},{name:"06:00",pv:950},{name:"06:30",pv:670},{name:"07:00",pv:500},{name:"07:30",pv:300},{name:"08:00",pv:0},{name:"08:30",pv:0}],C=[{name:"01:00",pv:0},{name:"01:03",pv:0},{name:"02:00",pv:0},{name:"02:30",pv:0},{name:"03:00",pv:0},{name:"03:30",pv:431},{name:"04:00",pv:631},{name:"04:30",pv:761},{name:"05:00",pv:911},{name:"05:30",pv:1011},{name:"06:00",pv:810},{name:"06:30",pv:670},{name:"07:00",pv:420},{name:"07:30",pv:270},{name:"08:00",pv:0},{name:"08:30",pv:0}],S=function(e){var t=e.x,a=e.y,c=e.stroke,n=e.value;return Object(y.jsx)("text",{x:t,y:a,dy:-4,fill:c,fontSize:10,textAnchor:"left",children:n})},E=function(e){var t,a=e.x,c=e.y,n=e.width,j=e.value;return Object(y.jsxs)("g",{children:[Object(y.jsx)("circle",{cx:a+n/2,cy:c,fill:"black"}),Object(y.jsx)("text",{x:a+n/2,y:c,fill:"black",textAnchor:"middle",dominantBaseline:"top",children:null===(t=B.find((function(e){return e.name===j})))||void 0===t?void 0:t.pv})]})},I=function(e){var t=e.x,a=e.y,c=e.payload;return Object(y.jsx)("g",{transform:"translate(".concat(t,",").concat(a,")"),children:Object(y.jsx)("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:c.value})})},G=function(e){var t=e.x,a=e.y,c=e.stroke,n=e.value;return Object(y.jsx)("text",{x:t,y:a,dy:-4,fill:c,fontSize:10,textAnchor:"middle",children:n})},V=function(e){var t=e.x,a=e.y,c=e.payload;return Object(y.jsx)("g",{transform:"translate(".concat(t,",").concat(a,")"),children:Object(y.jsx)("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:c.value})})},N=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(r.a,{children:[Object(y.jsxs)(d.a,{xs:12,md:8,children:[Object(y.jsx)("h3",{children:"PV Generation T+1"}),Object(y.jsxs)(l.a,{width:600,height:300,data:D,margin:{top:20,right:30,left:0,bottom:10},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60,tick:Object(y.jsx)(I,{})}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{type:"monotone",name:"forecast",dataKey:"pv",stroke:"#EEB183",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(S,{})})})]})]}),Object(y.jsxs)(d.a,{xs:6,md:4,children:[Object(y.jsx)("h3",{children:"PV Forecaste(MWh) - 3days"}),Object(y.jsxs)(p.a,{width:250,height:250,data:B,barSize:55,children:[Object(y.jsx)(h.a,{dataKey:"name"}),Object(y.jsx)(x.a,{vertical:!1}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(u.a,{name:"PV",dataKey:"pv",fill:"#EEB183",children:Object(y.jsx)(v.a,{dataKey:"name",content:E})})]})]})]}),Object(y.jsx)(r.a,{children:Object(y.jsxs)(d.a,{xs:12,md:8,children:[Object(y.jsx)("h3",{children:"PV Generation T+2"}),Object(y.jsxs)(l.a,{width:600,height:300,data:C,margin:{top:20,right:30,left:0,bottom:10},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60,tick:Object(y.jsx)(V,{})}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{type:"monotone",dataKey:"pv",stroke:"#EEB183",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(G,{})})})]})]})})]})},R=a(365),z=a(196),J=a(362),L=a(366),_=[{id:1,name:"Bhadla Solar Park, Rajasthan",capacity:"150MW",peak_generation:"89MW",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308190.07374474!2d69.37647972366301!3d26.56986127897766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1633427221617!5m2!1sen!2sin"},{id:2,name:"Pavagada Solar Park, Karnataka",capacity:"350MW",peak_generation:"290MW",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7893324.417860208!2d71.81766028814265!3d14.983692396505225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x41f1d28cd1757cd5!2sKarnataka!5e0!3m2!1sen!2sin!4v1633427449163!5m2!1sen!2sin"},{id:3,name:"Kurnool Ultra Mega Solar Park, Andhra Pradesh",capacity:"100MW",peak_generation:"100MW",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860838.953004828!2d76.2769628503478!3d15.840808031689336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3546f8ae93d47f%3A0x33d1bbbe95adcd83!2sAndhra%20Pradesh!5e0!3m2!1sen!2sin!4v1633427313365!5m2!1sen!2sin"},{id:4,name:"Rewa Ultra Mega Solar, Madhya Pradesh",capacity:"260MW",peak_generation:"50MW",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7469433.299879!2d73.92479774066334!3d23.91852958669439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39667381d35aea05%3A0xe0106b0d4e701c1e!2sMadhya%20Pradesh!5e0!3m2!1sen!2sin!4v1633427413935!5m2!1sen!2sin"}],U=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(r.a,{children:Object(y.jsx)(d.a,{children:Object(y.jsxs)(R.a,{className:"d-flex",children:[Object(y.jsx)(z.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search"}),Object(y.jsx)(J.a,{variant:"outline-success",children:"Search"})]})})}),Object(y.jsx)(r.a,{children:Object(y.jsx)(d.a,{children:_.map((function(e){return Object(y.jsx)(L.a,{id:"monitorlist",defaultActiveKey:e.id,children:Object(y.jsx)(W.b,{to:"/solardashboard/"+e.id,children:Object(y.jsxs)(L.a.Item,{action:!0,children:[Object(y.jsx)("h1",{children:e.name}),Object(y.jsxs)("h5",{children:["Capacity: ",e.capacity]}),Object(y.jsxs)("h5",{children:["Peak Generation:",e.peak_generation]})]})})})}))})})]})},H=function(){var e=[{name:"Wind - T+3",wind:14200},{name:"Wind - T+4",wind:16300}],t=function(e){var t=e.x,a=e.y,c=e.stroke,n=e.value;return Object(y.jsx)("text",{x:t,y:a,dy:-4,fill:c,fontSize:10,textAnchor:"middle",children:n})},a=function(e){var t=e.x,a=e.y,c=e.payload;return Object(y.jsx)("g",{transform:"translate(".concat(t,",").concat(a,")"),children:Object(y.jsx)("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:c.value})})},c=function(e){var t=e.x,a=e.y,c=e.payload;return Object(y.jsx)("g",{transform:"translate(".concat(t,",").concat(a,")"),children:Object(y.jsx)("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:c.value})})};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(r.a,{children:[Object(y.jsxs)(d.a,{xs:12,md:8,children:[Object(y.jsx)("h3",{children:"Wind Generation T+1"}),Object(y.jsxs)(l.a,{width:600,height:300,data:[{name:"01:00",pv:400},{name:"01:03",pv:350},{name:"02:00",pv:850},{name:"02:30",pv:900},{name:"03:00",pv:750},{name:"03:30",pv:640},{name:"04:00",pv:760},{name:"04:30",pv:780},{name:"05:00",pv:820},{name:"05:30",pv:860},{name:"06:00",pv:790},{name:"06:30",pv:700},{name:"07:00",pv:1e3},{name:"07:30",pv:1100},{name:"08:00",pv:1200},{name:"08:30",pv:1100},{name:"09:00",pv:950}],margin:{top:20,right:30,left:0,bottom:10},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60,tick:Object(y.jsx)(a,{})}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{name:"Generation(MW)",type:"monotone",dataKey:"pv",stroke:"#E7823B",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(t,{})})})]})]}),Object(y.jsxs)(d.a,{xs:6,md:4,children:[Object(y.jsx)("h3",{children:"Wind Forecaste(MWh) - 3days"}),Object(y.jsxs)(p.a,{width:250,height:250,data:e,barSize:30,children:[Object(y.jsx)(h.a,{dataKey:"name"}),Object(y.jsx)(x.a,{vertical:!1}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(u.a,{dataKey:"wind",fill:"#767171",children:Object(y.jsx)(v.a,{dataKey:"name",content:function(t){var a,c=t.x,n=t.y,j=t.width,s=t.value;return Object(y.jsxs)("g",{children:[Object(y.jsx)("circle",{cx:c+j/2,cy:n,fill:"black"}),Object(y.jsx)("text",{x:c+j/2,y:n,fill:"black",textAnchor:"middle",dominantBaseline:"top",children:null===(a=e.find((function(e){return e.name===s})))||void 0===a?void 0:a.wind})]})}})})]})]})]}),Object(y.jsx)(r.a,{children:Object(y.jsxs)(d.a,{xs:12,md:8,children:[Object(y.jsx)("h3",{children:"Wind Generation T+2"}),Object(y.jsxs)(l.a,{width:600,height:300,data:[{name:"01:00",pv:400},{name:"01:03",pv:350},{name:"02:00",pv:850},{name:"02:30",pv:900},{name:"03:00",pv:750},{name:"03:30",pv:640},{name:"04:00",pv:760},{name:"04:30",pv:780},{name:"05:00",pv:820},{name:"05:30",pv:860},{name:"06:00",pv:790},{name:"06:30",pv:700},{name:"07:00",pv:1e3},{name:"07:30",pv:1100},{name:"08:00",pv:1200},{name:"08:30",pv:1100},{name:"09:00",pv:950}],margin:{top:20,right:30,left:0,bottom:10},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60,tick:Object(y.jsx)(c,{})}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{name:"Generation(MW)",type:"monotone",dataKey:"pv",stroke:"#E7823B",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(t,{})})})]})]})})]})},Y=[{id:1,name:"Muppandal wind farm, Tamil Nadu",capacity:"110MW",peak_generation:"40MW",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4013472.107355065!2d76.04324088427373!3d10.780156848457207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1633426738193!5m2!1sen!2sin"},{id:2,name:"Jaisalmer Wind Park , Rajasthan",capacity:"20MW",peak_generation:"12MW",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308190.07374474!2d69.37647972366301!3d26.56986127897766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1633427221617!5m2!1sen!2sin"},{id:3,name:"Brahmanvel wind farm, Maharashtra",capacity:"100MW",peak_generation:"65MW",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7736499.982678703!2d72.27573140414904!3d18.77193659493283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b2f22924be04fb6!2sMaharashtra!5e0!3m2!1sen!2sin!4v1633427271605!5m2!1sen!2sin"},{id:4,name:"Beluguppa Wind Park , Andra pradesh",capacity:"105MW",peak_generation:"50MW",location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860838.953004828!2d76.2769628503478!3d15.840808031689336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3546f8ae93d47f%3A0x33d1bbbe95adcd83!2sAndhra%20Pradesh!5e0!3m2!1sen!2sin!4v1633427313365!5m2!1sen!2sin"}],q=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(r.a,{children:Object(y.jsx)(d.a,{children:Object(y.jsxs)(R.a,{className:"d-flex",children:[Object(y.jsx)(z.a,{type:"search",placeholder:"Search",className:"mr-2","aria-label":"Search"}),Object(y.jsx)(J.a,{variant:"outline-success",children:"Search"})]})})}),Object(y.jsx)(r.a,{children:Object(y.jsx)(d.a,{children:Y.map((function(e){return Object(y.jsx)(L.a,{id:"monitorlist",defaultActiveKey:e.id,children:Object(y.jsx)(W.b,{to:"/winddashboard/"+e.id,children:Object(y.jsxs)(L.a.Item,{action:!0,children:[Object(y.jsx)("h1",{children:e.name}),Object(y.jsxs)("h5",{children:["Capacity: ",e.capacity]}),Object(y.jsxs)("h5",{children:["Peak Generation:",e.peak_generation]})]})})})}))})})]})},Q=a(368),X=function(){var e=Object(K.f)();console.log(e);var t=e.pathname.split("/");return Object(y.jsx)(d.a,{children:Object(y.jsxs)(L.a,{as:"ul",children:[Object(y.jsx)(L.a.Item,{as:"li",className:""===t[1]?"active":"",children:Object(y.jsx)(W.b,{to:"/",children:"Home"})}),Object(y.jsx)(Q.a,{children:Object(y.jsxs)(Q.a.Item,{eventKey:"0",children:[Object(y.jsx)(Q.a.Header,{children:"Solar"}),Object(y.jsxs)(Q.a.Body,{children:[Object(y.jsx)(L.a.Item,{as:"li",className:"solarforecast"===t[1]?"active":"",children:Object(y.jsx)(W.b,{to:"/solarforecast",children:"Solar Generation Forecast"})}),Object(y.jsx)(L.a.Item,{as:"li",className:"monitorsolar"===t[1]?"active":"",children:Object(y.jsx)(W.b,{to:"/monitorsolar",children:"Monitor Solar Farm"})})]})]})}),Object(y.jsx)(Q.a,{children:Object(y.jsxs)(Q.a.Item,{eventKey:"0",children:[Object(y.jsx)(Q.a.Header,{children:"Wind"}),Object(y.jsxs)(Q.a.Body,{children:[Object(y.jsx)(L.a.Item,{as:"li",className:"windforecast"===t[1]?"active":"",children:Object(y.jsx)(W.b,{to:"/windforecast",children:"Wind Generation Forecast"})}),Object(y.jsx)(L.a.Item,{as:"li",className:"monitorwind"===t[1]?"active":"",children:Object(y.jsx)(W.b,{to:"/monitorwind",children:"Monitor Wind Farm"})})]})]})}),Object(y.jsx)(L.a.Item,{as:"li",className:"energydemand"===t[1]?"active":"",children:Object(y.jsx)(W.b,{to:"/energydemand",children:"Energy Demand"})}),Object(y.jsx)(L.a.Item,{as:"li",className:"energyresources"===t[1]?"active":"",children:Object(y.jsx)(W.b,{to:"/energyresources",children:"Distributed Energy Resources"})})]})})},Z=function(){var e=[{name:"01:00",pv:480,uv:1500},{name:"02:00",pv:720,uv:1500},{name:"03:00",pv:900,uv:1650},{name:"04:00",pv:1680,uv:700},{name:"05:00",pv:1211,uv:1690},{name:"06:00",pv:1141,uv:1750},{name:"07:00",pv:1061,uv:1932},{name:"08:00",pv:1291,uv:1581},{name:"09:00",pv:1750,uv:1932},{name:"10:00",pv:2032,uv:1750},{name:"11:00",pv:2430,uv:1850},{name:"12:00",pv:2610,uv:2e3},{name:"13:00",pv:3100,uv:2040},{name:"14:00",pv:3241,uv:2040},{name:"15:00",pv:3500,uv:2040},{}],t=[{name:"T+2",load:98450,generation:72463},{name:"T+3",load:96450,generation:75631}],a=function(e){var t=e.x,a=e.y,c=e.stroke,n=e.value;return Object(y.jsx)("text",{x:t,y:a,dy:-4,fill:c,fontSize:10,textAnchor:"middle",children:n})},c=function(e){var t=e.x,a=e.y,c=e.payload;return Object(y.jsx)("g",{transform:"translate(".concat(t,",").concat(a,")"),children:Object(y.jsx)("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666",transform:"rotate(-35)",children:c.value})})};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(r.a,{children:Object(y.jsx)(d.a,{children:Object(y.jsxs)(l.a,{width:800,height:300,data:e,margin:{top:5,right:30,left:20,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60,tick:Object(y.jsx)(c,{})}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{type:"monotone",name:"Total RE Generation",dataKey:"pv",stroke:"#8884d8",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})}),Object(y.jsx)(m.a,{type:"monotone",name:"Aggregate Load",dataKey:"uv",stroke:"#82ca9d",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})})]})})}),Object(y.jsxs)(r.a,{children:[Object(y.jsxs)(d.a,{xs:6,md:4,children:[Object(y.jsx)("h5",{children:"Load Forecast(MWh)"}),Object(y.jsxs)(p.a,{width:300,height:300,data:t,margin:{top:20,right:30,left:0,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name"}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(u.a,{dataKey:"load",name:"Aggregated Load",fill:"#FFA114",children:Object(y.jsx)(v.a,{dataKey:"name",content:function(e){var a,c=e.x,n=e.y,j=e.width,s=e.value;return Object(y.jsxs)("g",{children:[Object(y.jsx)("circle",{cx:c+j/2,cy:n,fill:"black"}),Object(y.jsx)("text",{x:c+j/2,y:n,fill:"black",textAnchor:"middle",dominantBaseline:"top",children:null===(a=t.find((function(e){return e.name===s})))||void 0===a?void 0:a.load})]})}})}),Object(y.jsx)(u.a,{dataKey:"generation",name:"RE Generation",fill:"#0C67CE",children:Object(y.jsx)(v.a,{dataKey:"name",content:function(e){var a,c=e.x,n=e.y,j=e.width,s=e.value;return Object(y.jsxs)("g",{children:[Object(y.jsx)("circle",{cx:c+j/2,cy:n,fill:"black"}),Object(y.jsx)("text",{x:c+j/2,y:n,fill:"black",textAnchor:"middle",dominantBaseline:"top",children:null===(a=t.find((function(e){return e.name===s})))||void 0===a?void 0:a.generation})]})}})})]})]}),Object(y.jsx)(d.a,{xs:12,md:8,children:Object(y.jsxs)(l.a,{width:600,height:300,data:e,margin:{top:5,right:30,left:0,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60,tick:Object(y.jsx)(c,{})}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{type:"monotone",name:"Total RE Generation",dataKey:"pv",stroke:"#8884d8",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})}),Object(y.jsx)(m.a,{type:"monotone",name:"Aggregate Load",dataKey:"uv",stroke:"#82ca9d",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})})]})})]})]})},$=a(363),ee=a(370),te=a(40),ae=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(i.a,{children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(d.a,{children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsxs)(ee.a.Title,{children:[Object(y.jsx)("h2",{children:"Average Load Profile"}),Object(y.jsx)("h4",{children:"Load Profile"}),Object(y.jsx)("br",{})]}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(te.d,{}),"  2550 "]}),Object(y.jsx)("h5",{children:" MWh, 5 min ago "})]})]})})})}),Object(y.jsx)(d.a,{children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsxs)(ee.a.Title,{children:[Object(y.jsx)("h2",{children:"Total Generation"}),Object(y.jsx)("h4",{children:"Total Generation"}),Object(y.jsx)("br",{})]}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(te.c,{}),"  3200 "]}),Object(y.jsx)("h5",{children:" MWh, 5 min ago "})]})]})})})}),Object(y.jsx)(d.a,{children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsxs)(ee.a.Title,{children:[Object(y.jsx)("h2",{children:"Total Storage"}),Object(y.jsx)("h4",{children:"Operational Storage"}),Object(y.jsx)("br",{})]}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(te.c,{}),"  160 "]}),Object(y.jsx)("h5",{children:" MWh, 0 min ago "})]})]})})})})]})})})},ce=a(364),ne=a(371),je=a(82),se=a(64),ie=a(112),re=function(){var e=Object(K.g)().id,t=[{},{name:"Feb",uv:20,pv:14},{name:"Mar",uv:21,pv:24},{name:"Apr",uv:22,pv:26},{name:"May",uv:21,pv:29},{name:"June",uv:18,pv:28},{name:"July",uv:20,pv:26},{name:"Aug",uv:22,pv:22},{name:"Sep",uv:24,pv:24},{}],a=function(e){var t=e.x,a=e.y,c=e.stroke,n=e.value;return Object(y.jsx)("text",{x:t,y:a,dy:-4,fill:c,fontSize:10,textAnchor:"bottom",children:n})},c=_.filter((function(t){return t.id==e}));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("h5",{children:["PV Farm ",c[0].name," - Monitoring Dashboard"]}),Object(y.jsx)(i.a,{children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(d.a,{xs:4,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"Panel Info"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsx)("h6",{children:" Panel Id - PV 1344U "}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("h2",{children:[" ",Object(y.jsx)(te.b,{})," 290 ",Object(y.jsx)(te.a,{})," "]}),Object(y.jsxs)("h5",{children:["MW, Generation Capacity - ",c[0].capacity]})]})]})})})}),Object(y.jsx)(d.a,{children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"Disconnect PC System"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsx)("h4",{children:" Remotely managed PV "}),Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(te.b,{})," "]})]})]})})})}),Object(y.jsx)(d.a,{children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"PV Curtailment Current Month(MWh)"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(je.a,{}),"560 "]}),Object(y.jsx)("h5",{children:" MWh, 5 mins ago "})]})]})})})}),Object(y.jsx)(d.a,{children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"PV Curtailment Year Till Date(MWh)"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(je.a,{}),"4620 "]}),Object(y.jsx)("h5",{children:" MWh "})]})]})})})})]})}),Object(y.jsx)(i.a,{children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(d.a,{xs:6,md:4,children:Object(y.jsx)("iframe",{title:"solarmap",src:c[0].location,width:"350",height:"300",allowfullscreen:"",loading:"lazy"})}),Object(y.jsx)(d.a,{xs:6,md:6,children:Object(y.jsx)(ce.a,{width:"100%",height:300,children:Object(y.jsxs)(ne.a,{width:750,height:400,data:t,margin:{top:5,right:10,left:0,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(u.a,{dataKey:"pv",name:"Av Daily Performance Ration(PR)%",barSize:15,fill:"#005EB8",children:Object(y.jsx)(v.a,{dataKey:"name",content:function(e){var a,c=e.x,n=e.y,j=e.width,s=e.value;return Object(y.jsxs)("g",{children:[Object(y.jsx)("circle",{cx:c+j/2,cy:n,fill:"black"}),Object(y.jsx)("text",{x:c+j/2,y:n,fill:"black",textAnchor:"middle",dominantBaseline:"top",children:null===(a=t.find((function(e){return e.name===s})))||void 0===a?void 0:a.pv})]})}})}),Object(y.jsx)(m.a,{type:"monotone",name:"Av Daily Ambient Temp",dataKey:"uv",stroke:"#FF8C00",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})})]})})}),Object(y.jsx)(d.a,{xs:6,md:2,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsxs)(ee.a.Title,{children:[Object(y.jsx)("h2",{children:"Total Energy(MWh)"}),Object(y.jsx)("h5",{children:"Past 1 month"})]}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(se.a,{}),"4620 "]}),Object(y.jsx)("h5",{children:" MWh, 5 min ago "})]})]})})})})]})}),Object(y.jsx)(i.a,{children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(d.a,{md:2,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"Last Energy Reading"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(se.a,{}),"34.1 "]}),Object(y.jsx)("h5",{children:" MWh, 5 min ago "})]})]})})})}),Object(y.jsx)(d.a,{md:2,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"Total Energy(MWh)"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(se.a,{}),"260 "]}),Object(y.jsx)("h5",{children:" MWh, 5 min ago "})]})]})})})}),Object(y.jsx)(d.a,{md:6,children:Object(y.jsxs)(l.a,{width:500,height:300,data:[{name:"01:00",pv:60,uv:0},{name:"02:00",pv:65,uv:0},{name:"03:00",pv:59,uv:0},{name:"04:00",pv:55,uv:500},{name:"05:00",pv:57,uv:600},{name:"06:00",pv:62,uv:700},{name:"07:00",pv:64,uv:750},{name:"08:00",pv:64,uv:750},{name:"09:00",pv:66,uv:760},{name:"10:00",pv:68,uv:789},{name:"11:00",pv:69,uv:840},{name:"12:00",pv:68,uv:780},{name:"13:00",pv:70,uv:800},{name:"14:00",pv:75,uv:800},{name:"15:00",pv:80,uv:700},{}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name"}),Object(y.jsx)(b.a,{yAxisId:"left"}),Object(y.jsx)(b.a,{yAxisId:"right",orientation:"right"}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{yAxisId:"left",name:"Temperature",type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})}),Object(y.jsx)(m.a,{yAxisId:"right",name:"Power",type:"monotone",dataKey:"uv",stroke:"#FF8C00",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})})]})}),Object(y.jsx)(d.a,{md:2,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsxs)(ee.a.Title,{children:[Object(y.jsx)("h2",{children:"Device"}),Object(y.jsx)("h3",{children:"Manage Device"})]}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(ie.a,{}),"5 "]}),Object(y.jsx)("h4",{children:" Connected Device "})]})]})})})})]})})]})},de=function(){var e=Object(K.g)().id,t=[{},{name:"Feb",uv:20,pv:14},{name:"Mar",uv:21,pv:24},{name:"Apr",uv:22,pv:26},{name:"May",uv:21,pv:29},{name:"June",uv:18,pv:28},{name:"July",uv:20,pv:26},{name:"Aug",uv:22,pv:22},{name:"Sep",uv:24,pv:24},{}],a=function(e){var t=e.x,a=e.y,c=e.stroke,n=e.value;return Object(y.jsx)("text",{x:t,y:a,dy:-4,fill:c,fontSize:10,textAnchor:"bottom",children:n})},c=Y.filter((function(t){return t.id==e}));return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("h5",{children:["PV Farm ",c[0].name," - Monitoring Dashboard"]}),Object(y.jsx)(i.a,{children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(d.a,{xs:4,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"Panel Info"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsx)("h6",{children:" Panel Id - PV 1344U "}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("h2",{children:[" ",Object(y.jsx)(te.b,{})," 290 ",Object(y.jsx)(te.a,{})," "]}),Object(y.jsxs)("h5",{children:["MW, Generation Capacity - ",c[0].capacity," "]})]})]})})})}),Object(y.jsx)(d.a,{children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"Disconnect PC System"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsx)("h4",{children:" Remotely managed PV "}),Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(te.b,{})," "]})]})]})})})}),Object(y.jsx)(d.a,{children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"PV Curtailment Current Month(MWh)"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(je.a,{}),"560 "]}),Object(y.jsx)("h5",{children:" MWh, 5 mins ago "})]})]})})})}),Object(y.jsx)(d.a,{children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"PV Curtailment Year Till Date(MWh)"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(je.a,{}),"4620 "]}),Object(y.jsx)("h5",{children:" MWh "})]})]})})})})]})}),Object(y.jsx)(i.a,{children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(d.a,{xs:6,md:5,children:Object(y.jsx)("iframe",{title:"windmap",src:c[0].location,width:"350",height:"300",allowfullscreen:"",loading:"lazy"})}),Object(y.jsx)(d.a,{xs:6,md:5,children:Object(y.jsx)(ce.a,{width:"100%",height:300,children:Object(y.jsxs)(ne.a,{width:650,height:400,data:t,margin:{top:5,right:10,left:-10,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(u.a,{dataKey:"pv",name:"Av Daily Performance Ration(PR)%",barSize:15,fill:"#005EB8",children:Object(y.jsx)(v.a,{dataKey:"name",content:function(e){var a,c=e.x,n=e.y,j=e.width,s=e.value;return Object(y.jsxs)("g",{children:[Object(y.jsx)("circle",{cx:c+j/2,cy:n,fill:"black"}),Object(y.jsx)("text",{x:c+j/2,y:n,fill:"black",textAnchor:"middle",dominantBaseline:"top",children:null===(a=t.find((function(e){return e.name===s})))||void 0===a?void 0:a.pv})]})}})}),Object(y.jsx)(m.a,{name:"Av Daily Ambient Temp",type:"monotone",dataKey:"uv",fill:"#FF8C00",stroke:"#FF8C00",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})})]})})}),Object(y.jsx)(d.a,{xs:6,md:2,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsxs)(ee.a.Title,{children:[Object(y.jsx)("h2",{children:"Total Energy(MWh)"}),Object(y.jsx)("h5",{children:"Past 1 month"})]}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(se.a,{}),"4620 "]}),Object(y.jsx)("h5",{children:" MWh, 5 min ago "})]})]})})})})]})}),Object(y.jsx)(i.a,{children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(d.a,{md:2,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"Last Energy Reading"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(se.a,{}),"34.1 "]}),Object(y.jsx)("h5",{children:" MWh, 5 min ago "})]})]})})})}),Object(y.jsx)(d.a,{md:2,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsx)(ee.a.Title,{children:Object(y.jsx)("h2",{children:"Total Energy(MWh)"})}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(se.a,{}),"260 "]}),Object(y.jsx)("h5",{children:" MWh, 5 min ago "})]})]})})})}),Object(y.jsx)(d.a,{md:6,children:Object(y.jsxs)(l.a,{width:500,height:300,data:[{name:"01:00",pv:60,uv:0},{name:"02:00",pv:65,uv:0},{name:"03:00",pv:59,uv:0},{name:"04:00",pv:55,uv:500},{name:"05:00",pv:57,uv:600},{name:"06:00",pv:62,uv:700},{name:"07:00",pv:64,uv:750},{name:"08:00",pv:64,uv:750},{name:"09:00",pv:66,uv:760},{name:"10:00",pv:68,uv:789},{name:"11:00",pv:69,uv:840},{name:"12:00",pv:68,uv:780},{name:"13:00",pv:70,uv:800},{name:"14:00",pv:75,uv:800},{name:"15:00",pv:80,uv:700},{}],margin:{top:5,right:30,left:20,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name"}),Object(y.jsx)(b.a,{yAxisId:"left"}),Object(y.jsx)(b.a,{yAxisId:"right",orientation:"right"}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{yAxisId:"left",name:"Temperature",type:"monotone",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})}),Object(y.jsx)(m.a,{yAxisId:"right",name:"Power",type:"monotone",dataKey:"uv",stroke:"#FF8C00",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(a,{})})})]})}),Object(y.jsx)(d.a,{md:2,children:Object(y.jsx)($.a,{children:Object(y.jsx)(ee.a,{children:Object(y.jsxs)(ee.a.Body,{children:[Object(y.jsxs)(ee.a.Title,{children:[Object(y.jsx)("h2",{children:"Device"}),Object(y.jsx)("h3",{children:"Manage Device"})]}),Object(y.jsxs)(ee.a.Text,{children:[Object(y.jsxs)("h1",{children:[" ",Object(y.jsx)(ie.a,{}),"5 "]}),Object(y.jsx)("h4",{children:" Connected Device "})]})]})})})})]})})]})};a(352);s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsxs)(W.a,{children:[Object(y.jsx)(F,{}),Object(y.jsx)(i.a,{fluid:!0,children:Object(y.jsxs)(r.a,{children:[Object(y.jsx)(d.a,{xs:3,children:Object(y.jsx)(X,{})}),Object(y.jsx)(d.a,{children:Object(y.jsxs)(K.c,{children:[Object(y.jsx)(K.a,{exact:!0,path:"/",component:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(i.a,{children:Object(y.jsxs)(r.a,{children:[Object(y.jsxs)(d.a,{xs:6,children:[Object(y.jsx)("h2",{children:"Live Generation - 3495 MW"}),Object(y.jsx)("h4",{children:"PV Generation Today"}),Object(y.jsxs)(l.a,{width:500,height:300,data:f,margin:{top:5,right:30,left:0,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60,tick:Object(y.jsx)(A,{})}),Object(y.jsx)(b.a,{name:"2nd Y-Axis"}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{type:"monotone",name:"Actual",dataKey:"pv",stroke:"#4068CE",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(T,{})})}),Object(y.jsx)(m.a,{type:"monotone",name:"Forecast",dataKey:"uv",stroke:"#FFA114",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(T,{})})})]})]}),Object(y.jsxs)(d.a,{children:[Object(y.jsx)("h5",{children:"Installed Capacity PV - 22 GV"}),Object(y.jsx)("h5",{children:"Installed Capacity Wind - 15 GV"}),Object(y.jsx)("h4",{children:"Installed Capacity(GV)"}),Object(y.jsxs)(p.a,{width:300,height:300,data:g,margin:{top:5,right:30,left:0,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"date"}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(u.a,{dataKey:"solar",name:"Solar",fill:"#FFA114",children:Object(y.jsx)(v.a,{dataKey:"date",content:k})}),Object(y.jsx)(u.a,{dataKey:"wind",name:"Wind",fill:"#0C67CE",children:Object(y.jsx)(v.a,{dataKey:"date",content:w})})]}),Object(y.jsx)("h6",{children:"Forecasted PV Peak Generation - 2150 MV"}),Object(y.jsx)("h6",{children:"Forecasted Wind Peak generation - 950 MV"})]}),Object(y.jsxs)(d.a,{children:[Object(y.jsx)("h4",{children:"Current Weather"}),Object(y.jsx)("h3",{children:"24\xb0C"}),Object(y.jsx)("h5",{children:"Solar Power"}),Object(y.jsx)("br",{}),Object(y.jsx)("h3",{children:"20.0"}),Object(y.jsx)("h3",{children:"W/m2"}),Object(y.jsx)("sub",{children:"*Based on a 4kWp PV array"}),Object(y.jsx)("p",{children:"Last update: 0 days ago"}),Object(y.jsx)("h5",{children:"Avoided Emmisions"}),Object(y.jsxs)("h5",{children:["36.5 Million Tones CO",Object(y.jsx)("sub",{children:"2"})]})]})]})}),Object(y.jsx)(i.a,{children:Object(y.jsxs)(r.a,{children:[Object(y.jsxs)(d.a,{children:[Object(y.jsx)("h4",{children:"PV Generation Today"}),Object(y.jsxs)(l.a,{width:500,height:300,data:f,margin:{top:5,right:30,left:0,bottom:5},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60,tick:Object(y.jsx)(A,{})}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{type:"monotone",name:"Actual",dataKey:"pv",stroke:"#4068CE",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(T,{})})}),Object(y.jsx)(m.a,{type:"monotone",name:"Forecast",dataKey:"uv",stroke:"#FFA114",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(T,{})})})]})]}),Object(y.jsxs)(d.a,{children:[Object(y.jsx)("h4",{children:"Monthwise Generation"}),Object(y.jsxs)(l.a,{width:400,height:300,data:M,margin:{top:20,right:30,left:0,bottom:10},children:[Object(y.jsx)(x.a,{strokeDasharray:"3 3"}),Object(y.jsx)(h.a,{dataKey:"name",height:60,tick:Object(y.jsx)(A,{})}),Object(y.jsx)(b.a,{}),Object(y.jsx)(o.a,{}),Object(y.jsx)(O.a,{}),Object(y.jsx)(m.a,{type:"monotone",dataKey:"mg",stroke:"#4068CE",children:Object(y.jsx)(v.a,{content:Object(y.jsx)(T,{})})})]})]})]})})]})}}),Object(y.jsx)(K.a,{path:"/solarforecast",component:N}),Object(y.jsx)(K.a,{path:"/monitorsolar",component:U}),Object(y.jsx)(K.a,{path:"/windforecast",component:H}),Object(y.jsx)(K.a,{path:"/monitorwind",component:q}),Object(y.jsx)(K.a,{path:"/energydemand",component:Z}),Object(y.jsx)(K.a,{path:"/energyresources",component:ae}),Object(y.jsx)(K.a,{path:"/solardashboard/:id",component:re}),Object(y.jsx)(K.a,{path:"/winddashboard/:id",component:de})]})})]})})]})}),document.getElementById("root"))}},[[353,1,2]]]);
//# sourceMappingURL=main.43a722b7.chunk.js.map