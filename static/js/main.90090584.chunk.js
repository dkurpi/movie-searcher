(this["webpackJsonpmovies-searcher"]=this["webpackJsonpmovies-searcher"]||[]).push([[0],{89:function(n,e,t){"use strict";t.r(e);var c,r,i,a=t(0),o=t.n(a),s=t(16),l=t.n(s),d=t(4),j=t(3),b=t(1),u={primary:"#E50914",bright:"#E5091450",bar:"rgb(5,5,20,0.2)",background:"#181c24",black:"rgb(28,33,40)",white:"#FFF",pureBlack:"#111"},h=function(n){var e=n.children;return Object(b.jsx)(j.a,{theme:u,children:Object(b.jsxs)(x,{children:[Object(b.jsx)(O,{}),e]})})},x=j.c.div(c||(c=Object(d.a)(["\n  text-align: center;\n  background-color: ",";\n  min-height: 100vh;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"])),u.background),O=Object(j.b)(r||(r=Object(d.a)(['\nbody {\n  margin: 0;\n  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n    "Helvetica Neue", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na {\n  font-size: 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\na:hover {\n  color: rgb(0, 174, 255);\n}\n']))),p=t(13),m=t(25),f=t.n(m),v=t(34),g=t(35),w=t.n(g),y="https://omdbapi.com/?apikey=aeae8ab",k=function(){var n=Object(v.a)(f.a.mark((function n(e){var t,c,r,i,a=arguments;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=a.length>1&&void 0!==a[1]?a[1]:VideoType.ALL,c=a.length>2&&void 0!==a[2]?a[2]:1,n.prev=2,e){n.next=5;break}throw alert("Type title!");case 5:return n.next=7,w()("".concat(y,"&s=").concat(e,"&type=").concat(t,"&page=").concat(c));case 7:if(r=n.sent,i=r.data,console.log(i),"False"!==i.Response){n.next=12;break}throw i.Error;case 12:return n.abrupt("return",i);case 15:throw n.prev=15,n.t0=n.catch(2),n.t0;case 18:case"end":return n.stop()}}),n,null,[[2,15]])})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=Object(v.a)(f.a.mark((function n(e){var t,c;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e){n.next=3;break}throw alert("Something went wrong!");case 3:return n.next=5,w()("".concat(y,"&i=").concat(e));case 5:if(t=n.sent,"False"!==(c=t.data).Response){n.next=9;break}throw c.Error;case 9:return console.log(c),n.abrupt("return",c);case 13:throw n.prev=13,n.t0=n.catch(0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}();!function(n){n.ALL="",n.MOVIES="movie",n.SERIES="series"}(i||(i={}));var T,S,A,z,F,I,R,E,L,D,N,M,P,B=Object.entries(i),q=t(5),H=t(7),G=j.c.main(T||(T=Object(d.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1440px;\n  margin: 5vh auto;\n  justify-content: center;\n"]))),U=j.c.section(S||(S=Object(d.a)(["\n  max-width: 20%;\n  flex-grow: 1;\n  padding: 20px;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: 0.4s;\n  :hover {\n    transform: translate(0, 10px);\n  }\n\n  @media (max-width: 1080px) {\n    max-width: 48%;\n    padding: 5px;\n  }\n"]))),W=j.c.div(A||(A=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),Y=j.c.img(z||(z=Object(d.a)(["\n  object-fit: cover;\n  margin-bottom: 20px;\n  height: 400px;\n\n  position: relative;\n\n  @media (max-width: 1080px) {\n    height: 40vh;\n  }\n"]))),J=j.c.p(F||(F=Object(d.a)(["\n  font-weight: 500;\n  font-size: 20px;\n  text-overflow: ellipsis;\n"]))),V=j.c.p(I||(I=Object(d.a)(["\n  font-size: 12px;\n  font-weight: 400;\n"]))),_=j.c.div(R||(R=Object(d.a)(["\n  font-size: 12px;\n  font-weight: 400;\n  background-color: black;\n  padding: 5px 0;\n"]))),X=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(U,Object(q.a)(Object(q.a)({},t),{},{children:Object(b.jsx)(W,{children:e})}))};X.Image=function(n){var e=n.src;return Object(b.jsx)(Y,{src:"N/A"===e?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sm5Mc_-7mF6ja6vXo-H_H9JmybWFqPNfAA&usqp=CAU":e,alt:""})},X.Title=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(J,Object(q.a)(Object(q.a)({},t),{},{children:e}))},X.Year=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(V,Object(q.a)(Object(q.a)({},t),{},{children:e}))},X.Type=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(_,Object(q.a)(Object(q.a)({},t),{},{children:e}))},X.Wrapper=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(G,Object(q.a)(Object(q.a)({},t),{},{children:e}))};var K=j.c.span(E||(E=Object(d.a)(["\n  font-weight: 300;\n  font-size: 1.2em;\n\n  @media (max-width: 768px) {\n    padding: 20px 0;\n    font-size: 1.5em;\n    font-weight: 500;\n  }\n"]))),Q=j.c.input(L||(L=Object(d.a)(["\n  cursor: pointer;\n  font-size: 1.4em;\n  margin: 40px 1vw;\n  padding: 12px 18px;\n  color: ",";\n  text-decoration: none;\n  border: none;\n  font-family: montserrat;\n  border-bottom: 3px solid #999;\n  transition: 0.2s;\n  background-color: transparent;\n  width: 400px;\n  text-align: center;\n  :active {\n    background-color: transparent;\n  }\n  :focus {\n    outline: none;\n    border-bottom: 3px solid ",";\n    background-color: transparent;\n  }\n  :hover {\n    outline: none;\n    border-bottom: 3px solid ",";\n    background-color: transparent;\n  }\n  ::selection {\n    background-color: ",";\n  }\n\n  @media (max-width: 1080px) {\n    width: 30vw;\n  }\n\n  @media (max-width: 768px) {\n    width: 70vw;\n    margin: 10px 1vw;\n  }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.primary}),(function(n){return n.theme.primary}),(function(n){return n.theme.primary})),Z=j.c.form(D||(D=Object(d.a)(["\n  padding: 1em 0;\n  @media (max-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),$=j.c.button(N||(N=Object(d.a)(["\n  background: transparent;\n  border-radius: 5px;\n  padding: 0.75em 2em;\n  margin: 0 15px;\n  font-size: 20px;\n  border-radius: 15px;\n  border: none;\n  color: black;\n  font-weight: 500;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: 0.2s;\n  border: 3px solid transparent;\n  :focus {\n    outline: none;\n  }\n\n  ","\n"])),(function(n){var e=n.theme;return"\n      background-color: ".concat(e.primary,";\n      color: ").concat(e.white,";\n\n      :hover {\n        background-color: transparent;\n        color: ").concat(e.primary,";\n        border-color: ").concat(e.primary,";\n      }\n    ")})),nn=j.c.select(M||(M=Object(d.a)(["\n  max-width: 12ch;\n  padding: 0.25em 0.5em;\n  border: none;\n  font-size: 1.2rem;\n  font-family: Montserrat;\n  text-transform: uppercase;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n  line-height: 1.4;\n  background-color: transparent;\n  margin: 0 auto 0 1em;\n  @media (max-width: 768px) {\n    margin: 2vh auto;\n  }\n"]))),en=j.c.option(P||(P=Object(d.a)(["\n  background-color: black;\n"]))),tn=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(Z,Object(q.a)(Object(q.a)({onSubmit:function(n){return n.preventDefault()},action:"","data-testid":"search-form"},t),{},{children:e}))};tn.Text=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(K,Object(q.a)(Object(q.a)({},t),{},{children:e}))},tn.Select=function(n){var e=n.children,t=n.value,c=n.onChange,r=Object(H.a)(n,["children","value","onChange"]);return Object(b.jsx)(nn,Object(q.a)(Object(q.a)({id:"country","data-testid":"select",name:"country",onChange:c,value:t},r),{},{children:e}))},tn.Option=function(n){var e=n.name,t=n.value,c=Object(H.a)(n,["name","value"]);return Object(b.jsx)(en,Object(q.a)(Object(q.a)({"data-testid":"select-option",value:t},c),{},{children:e}))},tn.Button=function(n){var e=n.children,t=n.onClick,c=Object(H.a)(n,["children","onClick"]);return Object(b.jsx)($,Object(q.a)(Object(q.a)({onClick:t},c),{},{children:e}))},tn.Input=function(n){var e=n.value,t=n.onChange,c=(n.children,Object(H.a)(n,["value","onChange","children"]));return Object(b.jsx)(Q,Object(q.a)({"data-testid":"title-input",type:"text",name:"title",id:"title",value:e,autoComplete:"off",onChange:t},c))};var cn,rn,an=t(113),on=t(111),sn=function(n){var e=n.onChange,t=n.count,c=n.page,r=Object(H.a)(n,["onChange","count","page"]),i=dn();return Object(b.jsx)(ln,{children:Object(b.jsx)(an.a,Object(q.a)({classes:{ul:i.ul},count:t,page:c,onChange:e,color:"secondary"},r))})},ln=j.c.div(cn||(cn=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n"]))),dn=Object(on.a)((function(){return{ul:{"& .MuiPaginationItem-root":{color:"#fff",margin:"20px 0 50px"}}}})),jn=t(112);function bn(){return Object(b.jsx)(hn,{children:Object(b.jsx)(jn.a,{color:"secondary",size:"100px"})})}var un,hn=j.c.div(rn||(rn=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgb(0, 0, 0, 0.5);\n"])));function xn(n){var e=n.mainText,t=n.secondText;return Object(b.jsxs)(An,{children:[Object(b.jsx)("h1",{children:e}),Object(b.jsx)("small",{children:t})]})}var On,pn,mn,fn,vn,gn,wn,yn,kn,Cn,Tn,Sn,An=j.c.div(un||(un=Object(d.a)(["\n  margin: 15vh 0;\n"]))),zn=t(22),Fn=Object(j.c)(zn.b.div)(On||(On=Object(d.a)(["\n  background-color: ",";\n  padding: 10vh 0;\n  top: 0;\n  position: relative;\n  transition: 0.5s;\n  @media (max-width: 768px) {\n    padding: 4vh 0;\n  }\n"])),(function(n){return n.theme.black})),In=j.c.div(pn||(pn=Object(d.a)(["\n  font-size: 12px;\n  margin: 0.5em 0;\n"]))),Rn=j.c.div(mn||(mn=Object(d.a)(["\n  max-width: 1080px;\n  display: flex;\n  margin: 0 auto;\n  transition: 0.5s;\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),En=j.c.section(fn||(fn=Object(d.a)(["\n  margin: 2vh auto;\n"]))),Ln=j.c.p(vn||(vn=Object(d.a)(["\n  font-size: 18px;\n  margin: 1em 0;\n"]))),Dn=j.c.div(gn||(gn=Object(d.a)(["\n  display: block;\n  cursor: pointer;\n  font-size: 18px;\n  padding: 5px;\n  color: ",";\n  background-color: ",";\n  transition: 0.3s;\n  :hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.bar}),(function(n){return n.theme.white}),(function(n){return n.theme.bright})),Nn=j.c.span(wn||(wn=Object(d.a)(["\n  display: inline-block;\n  font-size: 15px;\n  padding: 3px 8px;\n  border: 1px solid gray;\n  border-radius: 10px;\n  margin-right: 10px;\n"]))),Mn=j.c.span(yn||(yn=Object(d.a)(["\n  font-size: 18px;\n"]))),Pn=j.c.p(kn||(kn=Object(d.a)(["\n  font-size: 16px;\n"]))),Bn=j.c.div(Cn||(Cn=Object(d.a)([""]))),qn=j.c.div(Tn||(Tn=Object(d.a)(["\n  width: 60%;\n  padding: 0 2em;\n  text-align: left;\n  @media (max-width: 768px) {\n    padding: 0 5px;\n    width: 94%;\n    margin: 0 auto;\n  }\n"]))),Hn=j.c.img(Sn||(Sn=Object(d.a)(["\n  object-fit: cover;\n  margin-bottom: 20px;\n  width: 400px;\n  transition: 0.5s;\n  cursor: pointer;\n  :hover {\n    transform: scale(0.98);\n  }\n\n  @media (max-width: 768px) {\n    width: 94%;\n  }\n"]))),Gn=t(114),Un=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(Fn,Object(q.a)(Object(q.a)({},t),{},{children:Object(b.jsx)(Rn,{children:e})}))};Un.ImageContainer=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(Bn,Object(q.a)(Object(q.a)({},t),{},{children:e}))},Un.Image=function(n){var e=n.src;return Object(b.jsx)(Hn,{"data-testid":"movie-img",src:"N/A"===e?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sm5Mc_-7mF6ja6vXo-H_H9JmybWFqPNfAA&usqp=CAU":e,alt:""})},Un.Description=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(qn,Object(q.a)(Object(q.a)({},t),{},{children:e}))},Un.Rating=function(n){n.children;var e=n.value,t=n.size;return Object(b.jsx)(Gn.a,{name:"rating",value:e,size:t,readOnly:!0,max:10,precision:.1})},Un.Title=function(n){var e=n.children;return Object(b.jsx)("h2",{children:e})},Un.Date=function(n){var e=n.children;return Object(b.jsx)(In,{children:e})},Un.Tag=function(n){var e=n.children;return Object(b.jsx)(Nn,{children:e})},Un.Genre=function(n){var e=n.children;return Object(b.jsx)(Mn,{children:e})},Un.About=function(n){var e=n.children;return Object(b.jsx)(Pn,{children:e})},Un.RateSection=function(n){var e=n.children;return Object(b.jsx)(En,{children:e})},Un.Atrributes=function(n){n.children;var e=n.name,t=n.values;return Object(b.jsxs)(Ln,{children:[Object(b.jsx)("b",{children:e}),": ",Object(b.jsx)("span",{children:t})]})},Un.Bar=function(n){n.children;var e=n.text,t=n.onClick;return Object(b.jsx)(Dn,{onClick:t,children:e})};var Wn=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(zn.a,Object(q.a)(Object(q.a)({exitBeforeEnter:!0},t),{},{children:e}))},Yn={hidden:{y:20,opacity:0,transition:{duration:.5}},visible:{y:0,opacity:1,transition:{duration:.5}},exit:{x:-20,opacity:0,transition:{duration:.2}}};Wn.Children=function(n){var e=n.children,t=Object(H.a)(n,["children"]);return Object(b.jsx)(zn.b.div,Object(q.a)(Object(q.a)({variants:Yn,initial:"hidden",animate:"visible",exit:"exit"},t),{},{children:e}))};var Jn,Vn,_n,Xn=function(n){var e=n.titleID,t=n.close,c=n.setIsLoading,r=Object(a.useState)(null),i=Object(p.a)(r,2),o=i[0],s=i[1];return Object(a.useEffect)((function(){c(!0),C(e).then((function(n){s(n),c(!1)})).catch((function(n){c(!1),alert(n)}))}),[e]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(Un,{children:[Object(b.jsx)(Un.ImageContainer,{children:Object(b.jsx)(Un.Image,{src:null===o||void 0===o?void 0:o.Poster})}),Object(b.jsxs)(Un.Description,{children:[Object(b.jsx)(Un.Title,{children:null===o||void 0===o?void 0:o.Title}),Object(b.jsx)(Un.Date,{children:null===o||void 0===o?void 0:o.Type.toUpperCase()}),Object(b.jsxs)("div",{children:[Object(b.jsx)(Un.Tag,{children:null===o||void 0===o?void 0:o.Year}),Object(b.jsxs)(Un.Tag,{children:[null===o||void 0===o?void 0:o.Country," "]}),Object(b.jsxs)(Un.Tag,{children:[null===o||void 0===o?void 0:o.Runtime," "]})]}),Object(b.jsx)(Un.Genre,{children:null===o||void 0===o?void 0:o.Genre}),"N/A"!==(null===o||void 0===o?void 0:o.imdbRating)?Object(b.jsxs)(Un.RateSection,{children:[Object(b.jsxs)("h1",{children:[null===o||void 0===o?void 0:o.imdbRating," stars"]}),Object(b.jsxs)("p",{children:[null===o||void 0===o?void 0:o.imdbVotes," votes"]}),Object(b.jsx)(Un.Rating,{value:Number(null===o||void 0===o?void 0:o.imdbRating),size:"large"})]}):Object(b.jsx)(Un.RateSection,{children:Object(b.jsx)("h1",{children:"No rating"})}),Object(b.jsx)(Un.About,{children:null===o||void 0===o?void 0:o.Plot}),Object(b.jsx)(Un.Atrributes,{name:"Actors",values:null===o||void 0===o?void 0:o.Actors}),Object(b.jsx)(Un.Atrributes,{name:"Production",values:null===o||void 0===o?void 0:o.Production})]})]}),Object(b.jsx)(Un.Bar,{onClick:function(){t()},text:"close"})]})};function Kn(){return Object(b.jsx)($n,{children:Object(b.jsxs)(Zn,{href:"/movie-searcher",children:[Object(b.jsx)(Qn,{children:"MOVIE"}),Object(b.jsx)("span",{children:"SEARCHER"})]})})}var Qn=j.c.span(Jn||(Jn=Object(d.a)(["\n  color: ",";\n  font-weight: 200;\n  :hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.primary})),Zn=j.c.a(Vn||(Vn=Object(d.a)(["\n  display: block;\n  top: 0;\n  left: 0;\n  right: 0;\n  font-weight: 800;\n  padding: 2vh 0;\n  text-align: left;\n  max-width: 1380px;\n  margin: 0 auto;\n  cursor: pointer;\n  color: white;\n  :link {\n    text-decoration: none;\n    color: #06c;\n  }\n  :hover {\n    color: white;\n  }\n  text-align: center;\n"]))),$n=j.c.nav(_n||(_n=Object(d.a)([""])));function ne(){var n=Object(a.useState)(!1),e=Object(p.a)(n,2),t=e[0],c=e[1],r=Object(a.useState)(!0),o=Object(p.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)(""),j=Object(p.a)(d,2),u=j[0],h=j[1],x=Object(a.useState)(i.ALL),O=Object(p.a)(x,2),m=O[0],f=O[1],v=Object(a.useState)(1),g=Object(p.a)(v,2),w=g[0],y=g[1],C=Object(a.useState)(""),T=Object(p.a)(C,2),S=T[0],A=T[1],z=Object(a.useState)(0),F=Object(p.a)(z,2),I=F[0],R=F[1],E=Object(a.useState)([]),L=Object(p.a)(E,2),D=L[0],N=L[1],M=Object(a.useState)(""),P=Object(p.a)(M,2),q=P[0],H=P[1];Object(a.useEffect)((function(){S&&(c(!0),k(S,m,w).then((function(n){N(n.Search),R(Number(n.totalResults)),c(!1)})).catch((function(n){N([]),R(0),c(!1)})))}),[S,w,m]);var G=function(){H("")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Wn,{children:q&&Object(b.jsx)(Wn.Children,{children:Object(b.jsx)(Xn,{titleID:q,close:G,setIsLoading:c})},q)}),Object(b.jsxs)(tn,{children:[Object(b.jsx)(tn.Text,{children:"Find  video:"}),Object(b.jsx)(tn.Input,{onChange:function(n){var e=n.target.value;h(e)},value:u}),Object(b.jsx)(tn.Select,{value:m,onChange:function(n){f(n.target.value),y(1)},children:B.map((function(n){return Object(b.jsx)(tn.Option,{name:n[0],value:n[1]},n[0])}))}),Object(b.jsx)(tn.Button,{onClick:function(){A(u),y(1),l(!1),G()},children:"Search"})]}),Object(b.jsx)(Wn,{children:!!D.length&&!t&&S&&Object(b.jsxs)(Wn.Children,{children:[Object(b.jsx)("small",{children:'For "'.concat(S,'", found ').concat(I," ").concat(m===i.ALL?"titles":m," (click on poster to get more info)")}),Object(b.jsx)(X.Wrapper,{children:D.map((function(n){return Object(b.jsxs)(X,{onClick:function(){var e;e=n.imdbID,H(e),window.scrollTo(0,0)},children:[Object(b.jsx)(X.Type,{children:n.Type}),Object(b.jsx)(X.Image,{src:n.Poster}),Object(b.jsx)(X.Title,{children:n.Title}),Object(b.jsx)(X.Year,{children:n.Year})]},n.imdbID)}))}),Object(b.jsx)(sn,{count:Math.ceil(I/10),page:Number(w),onChange:function(n,e){y(e),window.scrollTo(0,0),G()}})]},S)}),Object(b.jsx)(Wn,{children:!D.length&&!t&&S&&Object(b.jsx)(Wn.Children,{children:Object(b.jsx)(xn,{mainText:'For title "'.concat(S,"\", didn't found any ").concat(m===i.ALL?"titles":m),secondText:"Try another one :)"})},S)}),!!t&&Object(b.jsx)(bn,{}),Object(b.jsx)(Wn,{children:s&&Object(b.jsx)(Wn.Children,{children:Object(b.jsx)(xn,{mainText:"Welcome!",secondText:"App was made for recruitment task to From Poland with Dev by Dawid Kurpiel "})},S)}),Object(b.jsx)(Wn,{children:!S&&!s&&Object(b.jsx)(Wn.Children,{children:Object(b.jsx)(xn,{mainText:"You forgot to type title!",secondText:"Or just testing corner cases :)"})},S)})]})}var ee=function(){return Object(b.jsxs)(h,{children:[Object(b.jsx)(Kn,{}),Object(b.jsx)(ne,{})]})},te=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,116)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),c(n),r(n),i(n),a(n)}))};l.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(ee,{})}),document.getElementById("root")),te()}},[[89,1,2]]]);
//# sourceMappingURL=main.90090584.chunk.js.map