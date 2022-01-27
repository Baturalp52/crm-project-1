"use strict";(self.webpackChunkcrm_ui=self.webpackChunkcrm_ui||[]).push([[371],{7371:function(e,n,a){a.r(n),a.d(n,{default:function(){return U}});var t=a(2791),r=a(7913),s=a(9439),i=a(3912),o=a(1413),d=a(1889),l=a(3767),c=a(4518),u=a(9650),m={id:0,name:"",surname:"",CVAddress:"",phoneNumbers:[],emailAdresses:[],address:"",extraAddress:"",zipCode:"",city:"",country:"",mapsCoord:"",creatorMember:{},previousJobs:[],skills:[],comment:"",salaryExpectation:0,departments:[],keywords:[],situation:"free"},x=a(217),h=a(920),p=a(8068),Z=a(3433),j=a(7621),f=a(9585),g=a(9504),v=a(2363),y=a(7391),C=a(3466),b=a(3400),k=a(5370),w=a(8087),A=a(184),E=function(e){var n=e.label,a=e.id,r=e.data,i=(0,t.useState)(Array(r.length).fill(0)),o=(0,s.Z)(i,2),l=o[0],u=o[1];return(0,A.jsxs)(j.Z,{sx:{border:"none",width:"100%",m:1},children:[(0,A.jsx)(f.Z,{title:n}),(0,A.jsx)(g.Z,{children:(0,A.jsx)(d.ZP,{container:!0,spacing:2,mx:"auto",children:r.map((function(e,n){return(0,A.jsx)(d.ZP,{item:!0,xs:12,children:(0,A.jsx)(c.Z,{variant:"outlined",color:l[n]?"error":"inherit",sx:{width:"100%"},onMouseOut:function(){var e=(0,Z.Z)(l);e[n]=0,u(e)},onMouseOver:function(){var e=(0,Z.Z)(l);e[n]=1,u(e)},children:l[n]?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(k.Z,{})," Delete"]}):e},n)})}))})}),(0,A.jsx)(v.Z,{children:(0,A.jsx)(y.Z,{label:"",id:a,sx:{marginLeft:"auto",width:"100%"},InputProps:{endAdornment:(0,A.jsx)(C.Z,{position:"end",children:(0,A.jsx)(b.Z,{children:(0,A.jsx)(w.Z,{})})})},variant:"standard"})})]})},P=a(4052),O=a(8898),I=a(9763),F=a(1768),S=function(e){var n=e.position,a=e.setPosition;(0,F.zV)({click:function(e){a(e.latlng)}});var r=(0,t.useRef)(null),s=(0,t.useMemo)((function(){return{dragend:function(){var e=r.current;null!=e&&a(e.getLatLng())}}}),[a]);return(0,A.jsx)(A.Fragment,{children:n&&(0,A.jsx)(I.J,{ref:r,eventHandlers:s,draggable:!0,position:n})})},M=a(5861),z=a(7757),D=a.n(z),L=a(4569),J=a.n(L)().create({timeout:1e3}),T=function(){var e=(0,M.Z)(D().mark((function e(n,a){var t,r;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://routing.openstreetmap.de/routed-foot/route/v1/driving/".concat(n.lng.toFixed(5),",").concat(n.lat.toFixed(5),";").concat(a.lng.toFixed(5),",").concat(a.lat.toFixed(5),"?overview=false&geometries=polyline&steps=false"),r=0,e.next=4,J.get(t).then((function(e){r=e.data.routes[0].distance}));case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),N=a(3168),$=function(e){var n=e.mainCoords,a=(0,N.$)("components",{keyPrefix:"mapsInput"}).t,r=(0,t.useState)(null),i=(0,s.Z)(r,2),o=i[0],d=i[1],l=(0,t.useState)(0),c=(0,s.Z)(l,2),u=c[0],m=c[1];return(0,t.useEffect)((function(){o&&T(n,o).then((function(e){m((e/1e3).toFixed(3))}))}),[o,n,m]),(0,A.jsxs)(j.Z,{sx:{m:1},children:[(0,A.jsx)(f.Z,{title:"".concat(u," ").concat(a("title"))}),(0,A.jsx)(g.Z,{children:(0,A.jsxs)(P.h,{center:n,zoom:16,id:"map",style:{height:"400px",width:"100%",color:"black"},scrollWheelZoom:!1,children:[(0,A.jsx)(O.I,{attribution:"",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,A.jsx)(I.J,{position:n}),(0,A.jsx)(S,{position:o,setPosition:d})]})})]})},H={lat:39.92069001103445,lng:32.854006924076806},R=a(7553),V=["05000000050","05000000051"],_=["example@example.com","example@example.com"],K=["Job 1","Job 2"],B=["Department 1","Department 2"],G=["Keyword 1","Keyword 2"],W=function(e){var n=e.candidate,a=e.isOpen,t=e.setIsOpen,r=(0,N.$)("pages",{keyPrefix:"candidates.modal"}).t,s=(0,u.TA)({initialValues:n?(0,o.Z)({},n):(0,o.Z)({},m),onSubmit:function(){},enableReinitialize:!0});return(0,A.jsx)(R.Z,{isOpen:a,setIsOpen:t,title:s.values.id?r("edit"):r("add"),saveFunction:function(){},children:(0,A.jsxs)(d.ZP,{container:!0,spacing:2,padding:2,children:[(0,A.jsxs)(d.ZP,{item:!0,xs:12,md:4,children:[(0,A.jsx)(x.Z,{label:r("form.id"),type:"number",value:s.values.id,name:"id",onChange:s.handleChange,disabled:!0}),(0,A.jsx)(x.Z,{label:r("form.name"),type:"text",value:s.values.name,name:"name",onChange:s.handleChange}),(0,A.jsx)(x.Z,{label:r("form.surname"),type:"text",value:s.values.surname,name:"surname",onChange:s.handleChange}),(0,A.jsx)(x.Z,{label:r("form.address"),type:"text",value:s.values.address,name:"address",onChange:s.handleChange}),(0,A.jsx)(x.Z,{label:r("form.extraAddress"),type:"text",value:s.values.extraAddress,name:"extraAddress",onChange:s.handleChange}),(0,A.jsx)(x.Z,{label:r("form.zipCode"),type:"text",value:s.values.zipCode,name:"zipCode",onChange:s.handleChange}),(0,A.jsx)(x.Z,{label:r("form.city"),type:"text",value:s.values.city,name:"city",onChange:s.handleChange}),(0,A.jsx)(x.Z,{label:r("form.country"),type:"text",value:s.values.country,name:"country",onChange:s.handleChange}),(0,A.jsx)(x.Z,{label:r("form.comment"),type:"text",value:s.values.comment,name:"comment",onChange:s.handleChange}),(0,A.jsx)(x.Z,{label:r("form.salaryExpectation"),type:"number",value:s.values.salaryExpectation,name:"salaryExpectation",onChange:s.handleChange})]}),(0,A.jsxs)(d.ZP,{item:!0,xs:12,md:4,children:[(0,A.jsx)(E,{label:r("form.phoneNumbers"),id:"phone-numbers",data:V}),(0,A.jsx)(E,{label:r("form.emailAddresses"),id:"email-addresses",data:_}),(0,A.jsx)(E,{label:r("form.previousJobs"),id:"previous-jobs",data:K}),(0,A.jsx)(E,{label:r("form.departments"),id:"departments",data:B}),(0,A.jsx)(E,{label:r("form.keywords"),id:"keywords",data:G})]}),(0,A.jsxs)(d.ZP,{item:!0,xs:12,md:4,children:[(0,A.jsx)($,{mainCoords:H}),s.values.id?(0,A.jsxs)(l.Z,{sx:{m:1},direction:"row",spacing:1,children:[(0,A.jsxs)(c.Z,{variant:"contained",color:"success",children:[(0,A.jsx)(h.Z,{})," ",r("form.cv.download")]}),(0,A.jsxs)(c.Z,{variant:"contained",color:"secondary",children:[(0,A.jsx)(p.Z,{})," ",r("form.cv.upload-new")]})]}):(0,A.jsxs)(c.Z,{sx:{m:1},variant:"contained",color:"secondary",children:[(0,A.jsx)(p.Z,{})," ",r("form.cv.upload")]})]})]})})},q=a(9975),Q=function(){var e=(0,N.$)("pages",{keyPrefix:"candidates.table"}).t,n=(0,t.useState)(!1),a=(0,s.Z)(n,2),r=a[0],o=a[1],d=(0,t.useState)(void 0),l=(0,s.Z)(d,2),c=l[0],u=l[1];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(W,{candidate:c,isOpen:r,setIsOpen:o}),(0,A.jsx)(q.Z,{data:i.Z,cellNames:[e("id"),e("name"),e("surname"),e("city")],keysToShow:["id","name","surname","city"],setModalData:u,setIsDataModalOpen:o})]})},U=function(){return(0,t.useEffect)((function(){r.r.dispatch({type:"CHANGE_TITLE",payload:{title:"candidates"}})})),(0,A.jsx)(Q,{})}},7553:function(e,n,a){a(2791);var t=a(8944),r=a(7621),s=a(9585),i=a(3400),o=a(9504),d=a(2363),l=a(4518),c=a(9598),u=a(920),m=a(3168),x=a(184);n.Z=function(e){var n=e.isOpen,a=e.setIsOpen,h=e.title,p=e.saveFunction,Z=e.children,j=(0,m.$)("components",{keyPrefix:"actionModal"}).t;return(0,x.jsx)(t.Z,{open:n,onClose:function(){return a(!1)},children:(0,x.jsxs)(r.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"95%",height:"85%",bgcolor:"background.paper",border:"none"},children:[(0,x.jsx)(s.Z,{sx:{p:2,bgcolor:"success.dark",color:"white"},title:h,action:(0,x.jsx)(i.Z,{onClick:function(){a(!1)},children:(0,x.jsx)(c.Z,{htmlColor:"white"})})}),(0,x.jsx)(o.Z,{sx:{height:"76%",overflow:"auto"},children:Z}),(0,x.jsx)(d.Z,{children:(0,x.jsx)(l.Z,{sx:{border:"none !important",marginLeft:"auto"},startIcon:(0,x.jsx)(u.Z,{}),color:"success",variant:"contained",onClick:function(){a(!1),p()},children:j("save")})})]})})}},9975:function(e,n,a){var t=a(3433),r=a(9439),s=a(1526),i=a(8087),o=a(9981),d=a(703),l=a(9281),c=a(9836),u=a(6890),m=a(5855),x=a(3994),h=a(9174),p=a(3382),Z=a(4518),j=a(6282),f=a(3767),g=a(2199),v=a(2791),y=a(3168),C=a(184);n.Z=function(e){var n=e.data,a=e.cellNames,b=e.setModalData,k=e.keysToShow,w=e.setIsDataModalOpen,A=e.customDataComponent,E=A||[],P=(0,y.$)("components",{keyPrefix:"crudTable"}).t,O=(0,v.useState)(0),I=(0,r.Z)(O,2),F=I[0],S=I[1],M=(0,v.useState)(10),z=(0,r.Z)(M,2),D=z[0],L=z[1],J=(0,v.useState)([]),T=(0,r.Z)(J,2),N=T[0],$=T[1];return(0,C.jsxs)(d.Z,{sx:{width:"calc(100% - 40px)",marginLeft:"auto",overflow:"hidden",boxShadow:"none"},children:[(0,C.jsx)(l.Z,{sx:{maxHeight:"500px"},children:(0,C.jsxs)(c.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,C.jsx)(u.Z,{children:(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(x.Z,{children:(0,C.jsx)(h.Z,{value:"all",checked:n.length===N.length,onChange:function(e){e.target.checked?$(n.map((function(e){return e.id}))):$([])}})}),a.map((function(e){return(0,C.jsx)(x.Z,{children:e})})),(0,C.jsx)(x.Z,{})]})}),(0,C.jsx)(p.Z,{children:n.slice(F*D,(F+1)*D).map((function(e,n){return(0,C.jsxs)(m.Z,{children:[(0,C.jsx)(x.Z,{children:(0,C.jsx)(h.Z,{value:e.id,checked:N.includes(e.id),onChange:function(n){if(n.target.checked){var a=(0,t.Z)(N);a.push(e.id),$(a)}else{var r=(0,t.Z)(N);r.splice(r.indexOf(e.id),1),$(r)}}})}),k.map((function(n){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(x.Z,{children:Object.keys(E).includes(n)?E[n](e[n]):e[n]})})})),(0,C.jsx)(x.Z,{children:(0,C.jsx)(Z.Z,{sx:{border:"none !important"},color:"warning",variant:"contained",onClick:function(){b(e),w(!0)},children:(0,C.jsx)(s.Z,{})})})]},n)}))})]})}),(0,C.jsx)(j.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:n.length,rowsPerPage:D,page:F,onPageChange:function(e,n){S(n)},onRowsPerPageChange:function(e){L(+e.target.value),S(0)}}),(0,C.jsx)(f.Z,{padding:"1rem",children:(0,C.jsxs)(g.Z,{sx:{marginLeft:"auto"},"aria-label":"medium button group contained",variant:"contained",children:[(0,C.jsx)(Z.Z,{sx:{border:"none !important"},startIcon:(0,C.jsx)(i.Z,{}),color:"success",onClick:function(){b(void 0),w(!0)},children:P("add")}),(0,C.jsx)(Z.Z,{sx:{border:"none !important"},startIcon:(0,C.jsx)(o.Z,{}),color:"error",children:P("delete")})]})})]})}},217:function(e,n,a){a(2791);var t=a(8096),r=a(4925),s=a(7078),i=a(184);n.Z=function(e){var n=e.label,a=e.type,o=e.value,d=e.name,l=e.onChange,c=e.disabled;return(0,i.jsxs)(t.Z,{error:!Boolean(o),sx:{width:"100%",m:1},children:[(0,i.jsx)(r.Z,{htmlFor:d,children:n}),(0,i.jsx)(s.Z,{id:d,name:d,value:o,type:a,onChange:l,disabled:c})]})}},3912:function(e,n){n.Z=[{id:1,name:"Example",surname:"Candidate",city:"Ankara"},{id:2,name:"Example",surname:"Candidate",city:"Ankara"},{id:3,name:"Example",surname:"Candidate",city:"Ankara"},{id:4,name:"Example",surname:"Candidate",city:"Ankara"},{id:5,name:"Example",surname:"Candidate",city:"Ankara"},{id:6,name:"Example",surname:"Candidate",city:"Ankara"},{id:7,name:"Example",surname:"Candidate",city:"Ankara"},{id:8,name:"Example",surname:"Candidate",city:"Ankara"},{id:9,name:"Example",surname:"Candidate",city:"Ankara"},{id:10,name:"Example",surname:"Candidate",city:"Ankara"},{id:11,name:"Example",surname:"Candidate",city:"Ankara"},{id:12,name:"Example",surname:"Candidate",city:"Ankara"},{id:13,name:"Example",surname:"Candidate",city:"Ankara"},{id:14,name:"Example",surname:"Candidate",city:"Ankara"},{id:15,name:"Example",surname:"Candidate",city:"Ankara"},{id:16,name:"Example",surname:"Candidate",city:"Ankara"},{id:17,name:"Example",surname:"Candidate",city:"Ankara"},{id:18,name:"Example",surname:"Candidate",city:"Ankara"},{id:19,name:"Example",surname:"Candidate",city:"Ankara"}]}}]);
//# sourceMappingURL=371.20a7d790.chunk.js.map