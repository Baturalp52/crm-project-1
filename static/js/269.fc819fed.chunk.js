"use strict";(self.webpackChunkcrm_ui=self.webpackChunkcrm_ui||[]).push([[269],{4269:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});var t=a(2791),r=a(7913),s=a(9439),i=a(6958),d=a(1413),o=a(493),l=a(4852),c=a(9650),u={id:0,name:"",surname:"",tasks:[],candidatesCreated:[]},m=a(217),x=a(7553),h=a(3168),p=a(184),Z=function(e){var n=e.hrmember,a=e.isOpen,t=e.setIsOpen,r=(0,h.$)("pages",{keyPrefix:"hrMembers.modal"}).t,s=(0,c.TA)({initialValues:n?(0,d.Z)({},n):(0,d.Z)({},u),onSubmit:function(){},enableReinitialize:!0});return(0,p.jsx)(x.Z,{title:s.values.id?r("edit"):r("add"),isOpen:a,setIsOpen:t,saveFunction:function(){},children:(0,p.jsxs)(o.Z,{children:[(0,p.jsx)(l.ZP,{children:(0,p.jsx)(m.Z,{label:r("form.id"),type:"number",value:s.values.id,name:"id",onChange:s.handleChange,disabled:!0})}),(0,p.jsx)(l.ZP,{children:(0,p.jsx)(m.Z,{label:r("form.name"),type:"text",value:s.values.name,name:"name",onChange:s.handleChange})}),(0,p.jsx)(l.ZP,{children:(0,p.jsx)(m.Z,{label:r("form.address"),type:"text",value:s.values.surname,name:"address",onChange:s.handleChange})})]})})},f=a(1408),j=function(){var e=(0,t.useState)(!1),n=(0,s.Z)(e,2),a=n[0],r=n[1],d=(0,t.useState)(void 0),o=(0,s.Z)(d,2),l=o[0],c=o[1],u=(0,h.$)("pages",{keyPrefix:"hrMembers.table"}).t;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Z,{hrmember:l,isOpen:a,setIsOpen:r}),(0,p.jsx)(f.Z,{data:i.Z,cellNames:[u("id"),u("name"),u("surname")],keysToShow:["id","name","surname"],setModalData:c,setIsDataModalOpen:r})]})},g=function(){return(0,t.useEffect)((function(){r.r.dispatch({type:"CHANGE_TITLE",payload:{title:"hrMembers"}})})),(0,p.jsx)(j,{})}},7553:function(e,n,a){a(2791);var t=a(9143),r=a(7621),s=a(9585),i=a(3400),d=a(9504),o=a(2363),l=a(4518),c=a(9598),u=a(920),m=a(3168),x=a(184);n.Z=function(e){var n=e.isOpen,a=e.setIsOpen,h=e.title,p=e.saveFunction,Z=e.children,f=(0,m.$)("components",{keyPrefix:"actionModal"}).t;return(0,x.jsx)(t.Z,{open:n,onClose:function(){return a(!1)},children:(0,x.jsxs)(r.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"95%",height:"85%",bgcolor:"background.paper",border:"none"},children:[(0,x.jsx)(s.Z,{sx:{p:2,bgcolor:"success.dark",color:"white"},title:h,action:(0,x.jsx)(i.Z,{onClick:function(){a(!1)},children:(0,x.jsx)(c.Z,{htmlColor:"white"})})}),(0,x.jsx)(d.Z,{sx:{height:"76%",overflow:"auto"},children:Z}),(0,x.jsx)(o.Z,{children:(0,x.jsx)(l.Z,{sx:{border:"none !important",marginLeft:"auto"},startIcon:(0,x.jsx)(u.Z,{}),color:"success",variant:"contained",onClick:function(){a(!1),p()},children:f("save")})})]})})}},1408:function(e,n,a){a.d(n,{Z:function(){return A}});var t=a(3433),r=a(9439),s=a(1526),i=a(8087),d=a(9981),o=a(703),l=a(9281),c=a(9836),u=a(6890),m=a(5855),x=a(3994),h=a(9174),p=a(3382),Z=a(4518),f=a(6812),j=a(3767),g=a(2199),C=a(2791),v=a(3168),b=a(8769),k=a(1889),y=a(2167),P=a(7078),E=a(3466),w=a(184),I=function(e){var n=(0,v.$)("components",{keyPrefix:"searchInput"}).t,a=e.onChange;return(0,w.jsx)(P.Z,{type:"search",onChange:a,startAdornment:(0,w.jsx)(E.Z,{position:"start",children:(0,w.jsx)(y.Z,{})}),placeholder:n("placeholder"),sx:{width:"40em",mx:"auto"}})},O=a(4035),F=a(1413),S=a(9143),M=a(890),T=a(7391),$=function(e){var n=e.isOpen,a=e.setIsOpen,t=e.filters,s=e.searchForm,i=(0,C.useState)(s.values.search),d=(0,r.Z)(i,2),l=d[0],c=d[1],u=(0,v.$)("components",{keyPrefix:"crudTable.advanced-search-modal"}).t;return(0,w.jsx)(S.Z,{open:n,onClose:function(){return a(!1)},children:(0,w.jsxs)(o.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:"70%",minHeight:"60%",bgcolor:"background.paper",border:"none",padding:3,display:"flex",flexDirection:"column"},children:[(0,w.jsx)(j.Z,{mx:"auto",children:(0,w.jsx)(M.Z,{variant:"h5",component:"h6",children:u("title")})}),(0,w.jsx)(k.ZP,{container:!0,display:"flex",width:"100%",textAlign:"center",children:t.map((function(e,n){return(0,w.jsx)(k.ZP,{item:!0,xs:12,md:4,children:(0,w.jsx)(T.Z,{label:e.label,type:"text",name:e.name,value:l[e.name],variant:"standard",margin:"dense",onChange:function(n){var a=(0,F.Z)({},l);a[e.name]=n.target.value,c(a)}})},n)}))}),(0,w.jsx)(j.Z,{mt:"auto",ml:"auto",children:(0,w.jsx)(Z.Z,{variant:"contained",onClick:function(){a(!1),s.setFieldValue("search",l),s.submitForm()},startIcon:(0,w.jsx)(y.Z,{}),children:u("search")})})]})})},D=function(e){var n=e.searchForm,a=e.filters,t=(0,C.useState)(""),s=(0,r.Z)(t,2),i=s[0],d=s[1],o=(0,C.useState)(!1),l=(0,r.Z)(o,2),c=l[0],u=l[1],m=(0,v.$)("components",{keyPrefix:"crudTable.search-bar"}).t;return(0,w.jsxs)(w.Fragment,{children:[Boolean(a)&&(0,w.jsx)($,{isOpen:c,setIsOpen:u,searchForm:n,filters:a||[]}),(0,w.jsxs)(k.ZP,{container:!0,spacing:2,sx:{mr:"auto",width:"50%",ml:2,alignItems:"flex-end"},children:[(0,w.jsx)(k.ZP,{item:!0,xs:5,sx:{display:"flex"},children:(0,w.jsx)(I,{onChange:function(e){d(e.target.value)}})}),(0,w.jsx)(k.ZP,{item:!0,xs:2,children:(0,w.jsx)(Z.Z,{sx:{ml:"auto"},startIcon:(0,w.jsx)(y.Z,{}),onClick:function(){n.setFieldValue("search",{name:i}),n.submitForm()},children:m("search")})}),Boolean(a)&&(0,w.jsx)(k.ZP,{item:!0,xs:4,children:(0,w.jsx)(Z.Z,{sx:{ml:"auto"},startIcon:(0,w.jsx)(O.Z,{}),onClick:function(){u(!0)},children:m("advanced-search")})})]})]})},A=function(e){var n=e.data,a=e.cellNames,k=e.setModalData,y=e.keysToShow,P=e.setIsDataModalOpen,E=e.customDataComponent,I=e.searchForm,O=e.filters,F=E||[],S=(0,v.$)("components",{keyPrefix:"crudTable"}).t,M=(0,C.useState)(0),T=(0,r.Z)(M,2),$=T[0],A=T[1],B=(0,C.useState)(10),H=(0,r.Z)(B,2),L=H[0],N=H[1],V=(0,C.useState)([]),_=(0,r.Z)(V,2),R=_[0],z=_[1];return(0,w.jsxs)(o.Z,{sx:{width:"calc(100% - 40px)",marginLeft:"auto",overflow:"hidden",boxShadow:"none"},children:[Boolean(I)&&(0,w.jsx)(D,{searchForm:I,filters:O}),(0,w.jsx)(l.Z,{sx:{maxHeight:"500px"},children:(0,w.jsxs)(c.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,w.jsx)(u.Z,{children:(0,w.jsxs)(m.Z,{children:[(0,w.jsx)(x.Z,{children:(0,w.jsx)(h.Z,{value:"all",checked:n.length===R.length,onChange:function(e){e.target.checked?z(n.map((function(e){return e.id}))):z([])}})}),a.map((function(e,n){return(0,w.jsx)(x.Z,{children:e},n)})),(0,w.jsx)(x.Z,{})]})}),(0,w.jsx)(p.Z,{children:n.length>0?n.slice($*L,($+1)*L).map((function(e,n){return(0,w.jsxs)(m.Z,{children:[(0,w.jsx)(x.Z,{children:(0,w.jsx)(h.Z,{value:e.id,checked:R.includes(e.id),onChange:function(n){if(n.target.checked){var a=(0,t.Z)(R);a.push(e.id),z(a)}else{var r=(0,t.Z)(R);r.splice(r.indexOf(e.id),1),z(r)}}})},n),y.map((function(n,a){return(0,w.jsx)(x.Z,{children:Object.keys(F).includes(n)?F[n](e[n]):n.includes(".")?(0,b.Z)(n,e):e[n]},a)})),(0,w.jsx)(x.Z,{children:(0,w.jsx)(Z.Z,{sx:{border:"none !important"},color:"warning",variant:"contained",onClick:function(){k(e),P(!0)},children:(0,w.jsx)(s.Z,{})})})]},n)})):(0,w.jsx)(m.Z,{children:(0,w.jsx)(x.Z,{colSpan:a.length+1,align:"center",children:S("no-data")})})})]})}),(0,w.jsx)(f.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:n.length,rowsPerPage:L,page:$,onPageChange:function(e,n){A(n)},onRowsPerPageChange:function(e){N(+e.target.value),A(0)}}),(0,w.jsx)(j.Z,{padding:1,children:(0,w.jsxs)(g.Z,{sx:{marginLeft:"auto"},"aria-label":"medium button group contained",variant:"contained",children:[(0,w.jsx)(Z.Z,{sx:{border:"none !important"},startIcon:(0,w.jsx)(i.Z,{}),color:"success",onClick:function(){k(void 0),P(!0)},children:S("add")}),(0,w.jsx)(Z.Z,{sx:{border:"none !important"},startIcon:(0,w.jsx)(d.Z,{}),color:"error",children:S("delete")})]})})]})}},217:function(e,n,a){a(2791);var t=a(8096),r=a(4925),s=a(7078),i=a(184);n.Z=function(e){var n=e.label,a=e.type,d=e.value,o=e.name,l=e.onChange,c=e.disabled;return(0,i.jsxs)(t.Z,{error:!Boolean(d),sx:{width:"100%",m:1},children:[(0,i.jsx)(r.Z,{htmlFor:o,children:n}),(0,i.jsx)(s.Z,{id:o,name:o,value:d,type:a,onChange:l,disabled:c})]})}},8769:function(e,n,a){function t(e,n){return e.split(".").reduce((function(e,n){return e?e[n]:null}),n)}a.d(n,{Z:function(){return t}})},6958:function(e,n){n.Z=[{id:1,name:"Example",surname:"Candidate"},{id:2,name:"Example",surname:"Candidate"},{id:3,name:"Example",surname:"Candidate"},{id:4,name:"Example",surname:"Candidate"},{id:5,name:"Example",surname:"Candidate"},{id:6,name:"Example",surname:"Candidate"},{id:7,name:"Example",surname:"Candidate"},{id:8,name:"Example",surname:"Candidate"},{id:9,name:"Example",surname:"Candidate"},{id:10,name:"Example",surname:"Candidate"},{id:11,name:"Example",surname:"Candidate"},{id:12,name:"Example",surname:"Candidate"},{id:13,name:"Example",surname:"Candidate"},{id:14,name:"Example",surname:"Candidate"},{id:15,name:"Example",surname:"Candidate"},{id:16,name:"Example",surname:"Candidate"},{id:17,name:"Example",surname:"Candidate"},{id:18,name:"Example",surname:"Candidate"},{id:19,name:"Example",surname:"Candidate"}]}}]);
//# sourceMappingURL=269.fc819fed.chunk.js.map