(this.webpackJsonpsparkadelic=this.webpackJsonpsparkadelic||[]).push([[0],{121:function(e,t,a){e.exports=a(222)},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){e.exports=a.p+"static/media/github.8a116e0a.png"},130:function(e,t,a){e.exports=a.p+"static/media/twitter.4f41a984.svg"},131:function(e,t,a){e.exports=a.p+"static/media/linkedin.ab46037f.svg"},132:function(e,t,a){e.exports=a.p+"static/media/medium.57c7706f.png"},133:function(e,t,a){e.exports=a.p+"static/media/telegram.a1994736.svg"},134:function(e,t,a){},213:function(e,t,a){e.exports=a.p+"static/media/iphoneBezel.f45c7b19.png"},214:function(e,t,a){e.exports=a.p+"static/media/sparky.bd75899c.jpg"},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){e.exports=a.p+"static/media/youtubeImage.8f9f0bd3.JPG"},220:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),i=a.n(l),c=(a(126),a(127),function(){return r.a.createElement("div",{className:"headerSection"},r.a.createElement("li",{id:"name"},"Sparky Evangelista"),r.a.createElement("ul",{className:"gotos"},r.a.createElement("li",{className:"nav"},r.a.createElement("a",{className:"headerLink",href:"https://drive.google.com/file/d/19tCyEFs4sOtZSrho0C6R5YI204dDlejf/view?usp=sharing",target:"_blank",id:"resume"},"Resume"))))}),s=(a(128),function(){return r.a.createElement("section",{className:"footerSection headerSection"},r.a.createElement("li",{id:"name"},"Sparky Evangelista"),r.a.createElement("ul",{className:"gotos"},r.a.createElement("li",{className:"items"},r.a.createElement("a",{href:"https://github.com/Sparkadelic177"},r.a.createElement("img",{className:"item-image",src:a(129),alt:"instagram"}))),r.a.createElement("li",{className:"items"},r.a.createElement("a",{href:"https://twitter.com/sparkyBrown_E"},r.a.createElement("img",{className:"item-image",src:a(130),alt:"twitter"}))),r.a.createElement("li",{className:"items"},r.a.createElement("a",{href:"https://linkedin.com/in/sparkyevangelista/"},r.a.createElement("img",{className:"item-image",src:a(131),alt:"linkedin"}))),r.a.createElement("li",{className:"items"},r.a.createElement("a",{href:"https://medium.com/@sparkyevangelista"},r.a.createElement("img",{className:"item-image medium",src:a(132),alt:"medium"}))),r.a.createElement("li",{className:"items"},r.a.createElement("a",{href:"mailto:sparkyevangelista@gmail.com"},r.a.createElement("img",{className:"item-image",src:a(133),alt:"telegram"})))))}),o=a(59),m=a(34),u=(a(134),a(110)),p=a(10),d=a(21),h=a(111),g=a(41),f=a(112),E=a(113),b=a(119),v=a(9),y=a(58),k=a(235),w=a(234),N=a(60),j=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(l)))).getRowClassName=function(e){var t=e.index,n=a.props,r=n.classes,l=n.onRowClick;return Object(v.a)(r.tableRow,r.flexContainer,Object(d.a)({},r.tableRowHover,-1!==t&&null!=l))},a.cellRenderer=function(e){var t=e.cellData,n=e.columnIndex,l=a.props,i=l.columns,c=l.classes,s=l.rowHeight,o=l.onRowClick;return r.a.createElement(k.a,{component:"div",className:Object(v.a)(c.tableCell,c.flexContainer,Object(d.a)({},c.noClick,null==o)),variant:"body",style:{height:s,fontSize:"large",fontWeight:"bold"},align:null!=n&&i[n].numeric?"right":"left"},2===n?r.a.createElement("a",{target:"_blank",href:t.toString().replace("api.","").replace("repos/","")},"Repository Link"):t)},a.headerRenderer=function(e){var t=e.label,n=e.columnIndex,l=a.props,i=l.headerHeight,c=l.columns,s=l.classes;return r.a.createElement(k.a,{component:"div",className:Object(v.a)(s.tableCell,s.flexContainer,s.noClick),variant:"head",style:{height:i,fontWeight:900,border:".02rem solid",fontSize:"larger"},align:c[n].numeric?"right":"left"},r.a.createElement("span",null,t))},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.columns,l=t.rowHeight,i=t.headerHeight,c=Object(p.a)(t,["classes","columns","rowHeight","headerHeight"]);return r.a.createElement(N.a,null,(function(t){var s=t.height,o=t.width;return r.a.createElement(N.c,Object.assign({height:s,width:o,rowHeight:l,gridStyle:{direction:"inherit"},headerHeight:i,className:a.table},c,{rowClassName:e.getRowClassName}),n.map((function(t,n){var l=t.dataKey,i=Object(p.a)(t,["dataKey"]);return r.a.createElement(N.b,Object.assign({key:l,headerRenderer:function(t){return e.headerRenderer(Object(u.a)({},t,{columnIndex:n}))},className:a.flexContainer,cellRenderer:e.cellRenderer,dataKey:l},i))})))}))}}]),t}(r.a.PureComponent);j.defaultProps={headerHeight:48,rowHeight:80};var x=Object(y.a)((function(e){return{flexContainer:{display:"flex",alignItems:"center",boxSizing:"border-box"},table:{"& .ReactVirtualized__Table__headerRow":{flip:!1,paddingRight:"rtl"===e.direction?"0px !important":void 0}},tableRow:{cursor:"pointer"},tableRowHover:{"&:hover":{backgroundColor:e.palette.grey[200]}},tableCell:{flex:1},noClick:{cursor:"initial"}}}))(j);function C(e){var t=e.data;return r.a.createElement(w.a,{style:{height:400,width:"100%"}},r.a.createElement(x,{rowCount:t.length,rowGetter:function(e){var a=e.index;return t[a]},columns:[{width:300,label:"Project Name",dataKey:"name"},{width:600,label:"Description",dataKey:"description"},{width:500,label:"URL",dataKey:"url"}]}))}var O=a(40),S=a.n(O),R=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){S.a.get("https://api.github.com/users/Sparkadelic177/repos",{headers:{Accept:"application/vnd.github.v3+json"}}).then((function(e){l(Object(o.a)(e.data))})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"content_container"},r.a.createElement("h2",{style:{textAlign:"Center"}},"Github Repos"),r.a.createElement("section",{className:"tableSection"},r.a.createElement(C,{data:a})))},_=function(){return r.a.createElement("div",{class:"aboutme-text"},r.a.createElement("h1",null,"Yes you guessed it right, my real name is Sparky."),r.a.createElement("br",null),r.a.createElement("p",{class:"text"},"I am a Application Developer at NYC Department of Citywide Administrative Services (DCAS) and I love the art of developing and creating things from scratch and being able to solve complex problems. I am fueled with passion by innovation and ground breaking technologies in hopes that I get to work them someday."))},H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:a(214),alt:"Sparky Brown Evangelista",class:"sparky"}),r.a.createElement("div",{class:"heroText"},r.a.createElement("h1",null,"Spark",r.a.createElement("span",{id:"dot"},".")," y"," "),r.a.createElement("br",null),r.a.createElement("h3",null,"/'sp\xe4rk\u0113/"),r.a.createElement("br",null),r.a.createElement("p",{class:"definition"},"adjective",r.a.createElement("span",{class:"language"},"British")),r.a.createElement("p",null,"1. lively and high-spirited."),r.a.createElement("p",null,'"His sparky personality"'),r.a.createElement("br",null),r.a.createElement("p",{class:"definition"},"noun",r.a.createElement("span",{class:"language"},"Informal British")),r.a.createElement("p",null," ","A",r.a.createElement("span",{class:"crossedout"},"Electrian")," Developer"," ")))},I=(a(215),function(){return r.a.createElement("div",{className:"home_container"},r.a.createElement("section",{class:"heroSection"},r.a.createElement(H,null)),r.a.createElement("section",{class:"aboutmeSection"},r.a.createElement(_,null)),r.a.createElement("section",{className:"projectSection"},r.a.createElement(R,null)))}),D=(a(216),function(e){var t=e.title,a=e.thumbnail,n=(e.pubDate,e.link);return r.a.createElement("a",{className:"blog_container",href:n,target:"_blank"},r.a.createElement("h2",{className:"blog_title"},t),r.a.createElement("div",{className:"image_container"},r.a.createElement("img",{className:"blog_image",src:a,alt:t})))}),A=(a(217),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){S.a.get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sparkyevangelista").then((function(e){return l(e.data.items)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{id:"blogs_container"},a.map((function(e,t){return r.a.createElement(D,{key:t,title:e.title,pubDate:e.pubDate,link:e.link,thumbnail:e.thumbnail})})))}),B=(a(218),a(78)),K=a(30);a(220);var z=function(){return console.log(),r.a.createElement(B.a,{className:"App"},r.a.createElement(c,null),r.a.createElement(K.c,null,r.a.createElement(K.a,{exact:!0,path:"/my-portfolio",component:I}),r.a.createElement(K.a,{exact:!0,path:"/blogs",component:A})),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[121,1,2]]]);
//# sourceMappingURL=main.a287a1ba.chunk.js.map