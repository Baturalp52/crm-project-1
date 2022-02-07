"use strict";(self.webpackChunkcrm_ui=self.webpackChunkcrm_ui||[]).push([[269],{4269:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});var t=a(2791),r=a(7913),s=a(9439),i=a(6958),d=a(1413),l=a(493),o=a(4852),c=a(9650),u={id:0,name:"",surname:"",tasks:[],candidatesCreated:[]},m=a(217),x=a(7553),h=a(3168),p=a(184),Z=function(e){var n=e.hrmember,a=e.isOpen,t=e.setIsOpen,r=(0,h.$)("pages",{keyPrefix:"hrMembers.modal"}).t,s=(0,c.TA)({initialValues:n?(0,d.Z)({},n):(0,d.Z)({},u),onSubmit:function(){},enableReinitialize:!0});return(0,p.jsx)(x.Z,{title:s.values.id?r("edit"):r("add"),isOpen:a,setIsOpen:t,saveFunction:function(){},children:(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(o.ZP,{children:(0,p.jsx)(m.Z,{label:r("form.id"),type:"number",value:s.values.id,name:"id",onChange:s.handleChange,disabled:!0})}),(0,p.jsx)(o.ZP,{children:(0,p.jsx)(m.Z,{label:r("form.name"),type:"text",value:s.values.name,name:"name",onChange:s.handleChange})}),(0,p.jsx)(o.ZP,{children:(0,p.jsx)(m.Z,{label:r("form.address"),type:"text",value:s.values.surname,name:"address",onChange:s.handleChange})})]})})},f=a(1886),j=function(){var e=(0,t.useState)(!1),n=(0,s.Z)(e,2),a=n[0],r=n[1],d=(0,t.useState)(void 0),l=(0,s.Z)(d,2),o=l[0],c=l[1],u=(0,h.$)("pages",{keyPrefix:"hrMembers.table"}).t;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Z,{hrmember:o,isOpen:a,setIsOpen:r}),(0,p.jsx)(f.Z,{data:i.Z,cellNames:[u("id"),u("name"),u("surname")],keysToShow:["id","name","surname"],setModalData:c,setIsDataModalOpen:r})]})},g=function(){return(0,t.useEffect)((function(){r.r.dispatch({type:"CHANGE_TITLE",payload:{title:"hrMembers"}})})),(0,p.jsx)(j,{})}},7553:function(e,n,a){a(2791);var t=a(9143),r=a(7621),s=a(9585),i=a(3400),d=a(9504),l=a(2363),o=a(4518),c=a(9598),u=a(920),m=a(3168),x=a(184);n.Z=function(e){var n=e.isOpen,a=e.setIsOpen,h=e.title,p=e.saveFunction,Z=e.children,f=(0,m.$)("components",{keyPrefix:"actionModal"}).t;return(0,x.jsx)(t.Z,{open:n,onClose:function(){return a(!1)},children:(0,x.jsxs)(r.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"95%",height:"85%",bgcolor:"background.paper",border:"none"},children:[(0,x.jsx)(s.Z,{sx:{p:2,bgcolor:"success.dark",color:"white"},title:h,action:(0,x.jsx)(i.Z,{onClick:function(){a(!1)},children:(0,x.jsx)(c.Z,{htmlColor:"white"})})}),(0,x.jsx)(d.Z,{sx:{height:"76%",overflow:"auto"},children:Z}),(0,x.jsx)(l.Z,{children:(0,x.jsx)(o.Z,{sx:{border:"none !important",marginLeft:"auto"},startIcon:(0,x.jsx)(u.Z,{}),color:"success",variant:"contained",onClick:function(){a(!1),p()},children:f("save")})})]})})}},1886:function(e,n,a){a.d(n,{Z:function(){return D}});var t=a(3433),r=a(9439),s=a(1526),i=a(8087),d=a(9981),l=a(703),o=a(9281),c=a(9836),u=a(6890),m=a(5855),x=a(3994),h=a(9174),p=a(3382),Z=a(4518),f=a(6812),j=a(3767),g=a(2199),C=a(2791),v=a(3168);var b=a(1889),k=a(2167),y=a(7078),P=a(3466),E=a(184),w=function(e){var n=(0,v.$)("components",{keyPrefix:"searchInput"}).t,a=e.onChange;return(0,E.jsx)(y.Z,{type:"search",onChange:a,startAdornment:(0,E.jsx)(P.Z,{position:"start",children:(0,E.jsx)(k.Z,{})}),placeholder:n("placeholder"),sx:{width:"40em",mx:"auto"}})},I=a(4035),O=a(1413),F=a(9143),S=a(890),M=a(7391),T=function(e){var n=e.isOpen,a=e.setIsOpen,t=e.filters,s=e.searchForm,i=(0,C.useState)(s.values.search),d=(0,r.Z)(i,2),o=d[0],c=d[1],u=(0,v.$)("components",{keyPrefix:"crudTable.advanced-search-modal"}).t;return(0,E.jsx)(F.Z,{open:n,onClose:function(){return a(!1)},children:(0,E.jsxs)(l.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",minWidth:"70%",minHeight:"60%",bgcolor:"background.paper",border:"none",padding:3,display:"flex",flexDirection:"column"},children:[(0,E.jsx)(j.Z,{mx:"auto",children:(0,E.jsx)(S.Z,{variant:"h5",component:"h6",children:u("title")})}),(0,E.jsx)(b.ZP,{container:!0,display:"flex",width:"100%",textAlign:"center",children:t.map((function(e,n){return(0,E.jsx)(b.ZP,{item:!0,xs:12,md:4,children:(0,E.jsx)(M.Z,{label:e.label,type:"text",name:e.name,value:o[e.name],variant:"standard",margin:"dense",onChange:function(n){var a=(0,O.Z)({},o);a[e.name]=n.target.value,c(a)}})},n)}))}),(0,E.jsx)(j.Z,{mt:"auto",ml:"auto",children:(0,E.jsx)(Z.Z,{variant:"contained",onClick:function(){a(!1),s.setFieldValue("search",o),s.submitForm()},startIcon:(0,E.jsx)(k.Z,{}),children:u("search")})})]})})},$=function(e){var n=e.searchForm,a=e.filters,t=(0,C.useState)(""),s=(0,r.Z)(t,2),i=s[0],d=s[1],l=(0,C.useState)(!1),o=(0,r.Z)(l,2),c=o[0],u=o[1],m=(0,v.$)("components",{keyPrefix:"crudTable.search-bar"}).t;return(0,E.jsxs)(E.Fragment,{children:[Boolean(a)&&(0,E.jsx)(T,{isOpen:c,setIsOpen:u,searchForm:n,filters:a||[]}),(0,E.jsxs)(b.ZP,{container:!0,spacing:2,sx:{mr:"auto",width:"50%",ml:2,alignItems:"flex-end"},children:[(0,E.jsx)(b.ZP,{item:!0,xs:5,sx:{display:"flex"},children:(0,E.jsx)(w,{onChange:function(e){d(e.target.value)}})}),(0,E.jsx)(b.ZP,{item:!0,xs:2,children:(0,E.jsx)(Z.Z,{sx:{ml:"auto"},startIcon:(0,E.jsx)(k.Z,{}),onClick:function(){n.setFieldValue("search",{name:i}),n.submitForm()},children:m("search")})}),Boolean(a)&&(0,E.jsx)(b.ZP,{item:!0,xs:4,children:(0,E.jsx)(Z.Z,{sx:{ml:"auto"},startIcon:(0,E.jsx)(I.Z,{}),onClick:function(){u(!0)},children:m("advanced-search")})})]})]})},D=function(e){var n=e.data,a=e.cellNames,b=e.setModalData,k=e.keysToShow,y=e.setIsDataModalOpen,P=e.customDataComponent,w=e.searchForm,I=e.filters,O=P||[],F=(0,v.$)("components",{keyPrefix:"crudTable"}).t,S=(0,C.useState)(0),M=(0,r.Z)(S,2),T=M[0],D=M[1],A=(0,C.useState)(10),B=(0,r.Z)(A,2),H=B[0],L=B[1],N=(0,C.useState)([]),V=(0,r.Z)(N,2),_=V[0],R=V[1];return(0,E.jsxs)(l.Z,{sx:{width:"calc(100% - 40px)",marginLeft:"auto",overflow:"hidden",boxShadow:"none"},children:[Boolean(w)&&(0,E.jsx)($,{searchForm:w,filters:I}),(0,E.jsx)(o.Z,{sx:{maxHeight:"500px"},children:(0,E.jsxs)(c.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,E.jsx)(u.Z,{children:(0,E.jsxs)(m.Z,{children:[(0,E.jsx)(x.Z,{children:(0,E.jsx)(h.Z,{value:"all",checked:n.length===_.length,onChange:function(e){e.target.checked?R(n.map((function(e){return e.id}))):R([])}})}),a.map((function(e,n){return(0,E.jsx)(x.Z,{children:e},n)})),(0,E.jsx)(x.Z,{})]})}),(0,E.jsx)(p.Z,{children:n.length>0?n.slice(T*H,(T+1)*H).map((function(e,n){return(0,E.jsxs)(m.Z,{children:[(0,E.jsx)(x.Z,{children:(0,E.jsx)(h.Z,{value:e.id,checked:_.includes(e.id),onChange:function(n){if(n.target.checked){var a=(0,t.Z)(_);a.push(e.id),R(a)}else{var r=(0,t.Z)(_);r.splice(r.indexOf(e.id),1),R(r)}}})},n),k.map((function(n,a){return(0,E.jsx)(x.Z,{children:Object.keys(O).includes(n)?O[n](e[n]):n.includes(".")?(t=n,r=e,t.split(".").reduce((function(e,n){return e?e[n]:null}),r)):e[n]},a);var t,r})),(0,E.jsx)(x.Z,{children:(0,E.jsx)(Z.Z,{sx:{border:"none !important"},color:"warning",variant:"contained",onClick:function(){b(e),y(!0)},children:(0,E.jsx)(s.Z,{})})})]},n)})):(0,E.jsx)(m.Z,{children:(0,E.jsx)(x.Z,{colSpan:a.length+1,align:"center",children:F("no-data")})})})]})}),(0,E.jsx)(f.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:n.length,rowsPerPage:H,page:T,onPageChange:function(e,n){D(n)},onRowsPerPageChange:function(e){L(+e.target.value),D(0)}}),(0,E.jsx)(j.Z,{padding:1,children:(0,E.jsxs)(g.Z,{sx:{marginLeft:"auto"},"aria-label":"medium button group contained",variant:"contained",children:[(0,E.jsx)(Z.Z,{sx:{border:"none !important"},startIcon:(0,E.jsx)(i.Z,{}),color:"success",onClick:function(){b(void 0),y(!0)},children:F("add")}),(0,E.jsx)(Z.Z,{sx:{border:"none !important"},startIcon:(0,E.jsx)(d.Z,{}),color:"error",children:F("delete")})]})})]})}},217:function(e,n,a){a(2791);var t=a(8096),r=a(4925),s=a(7078),i=a(184);n.Z=function(e){var n=e.label,a=e.type,d=e.value,l=e.name,o=e.onChange,c=e.disabled;return(0,i.jsxs)(t.Z,{error:!Boolean(d),sx:{width:"100%",m:1},children:[(0,i.jsx)(r.Z,{htmlFor:l,children:n}),(0,i.jsx)(s.Z,{id:l,name:l,value:d,type:a,onChange:o,disabled:c})]})}},6958:function(e,n){n.Z=[{id:1,name:"Example",surname:"Candidate"},{id:2,name:"Example",surname:"Candidate"},{id:3,name:"Example",surname:"Candidate"},{id:4,name:"Example",surname:"Candidate"},{id:5,name:"Example",surname:"Candidate"},{id:6,name:"Example",surname:"Candidate"},{id:7,name:"Example",surname:"Candidate"},{id:8,name:"Example",surname:"Candidate"},{id:9,name:"Example",surname:"Candidate"},{id:10,name:"Example",surname:"Candidate"},{id:11,name:"Example",surname:"Candidate"},{id:12,name:"Example",surname:"Candidate"},{id:13,name:"Example",surname:"Candidate"},{id:14,name:"Example",surname:"Candidate"},{id:15,name:"Example",surname:"Candidate"},{id:16,name:"Example",surname:"Candidate"},{id:17,name:"Example",surname:"Candidate"},{id:18,name:"Example",surname:"Candidate"},{id:19,name:"Example",surname:"Candidate"}]}}]);
//# sourceMappingURL=269.695c5d00.chunk.js.map