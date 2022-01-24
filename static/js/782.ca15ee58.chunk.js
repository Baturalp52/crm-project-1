"use strict";(self.webpackChunkcrm_ui=self.webpackChunkcrm_ui||[]).push([[782],{7782:function(e,n,a){a.r(n),a.d(n,{default:function(){return F}});var i=a(2791),t=a(7913),r=a(2982),s=a(885),l=a(703),d=a(9281),c=a(9836),o=a(6890),m=a(5855),x=a(3994),h=a(9174),p=a(3382),u=a(4518),Z=a(6282),y=a(3767),j=a(2199),C=a(3501),g=a(1526),f=a(8087),k=a(9981),v=a(1413),b=a(9953),A=a(4554),E=a(890),w=a(3400),P=a(493),S=a(4852),I=a(9650),O={id:0,name:"",address:"",city:"",sector:"",HRMembers:[],jobs:[]},L=a(217),N=a(9598),T=a(920),H=a(184),R=function(e){var n=e.company,a=e.isOpen,i=e.setIsOpen,t=(0,I.TA)({initialValues:n?(0,v.Z)({},n):(0,v.Z)({},O),onSubmit:function(){},enableReinitialize:!0});return(0,H.jsx)(b.ZP,{anchor:"right",open:a,onClose:function(){return i(!1)},children:(0,H.jsxs)(A.Z,{sx:{width:400,overflow:"auto"},role:"presentation",children:[(0,H.jsxs)(E.Z,{variant:"h6",display:"flex",padding:2,children:[t.values.id?"Edit Company":"Add New",(0,H.jsx)(w.Z,{sx:{marginLeft:"auto",display:"inline"},onClick:function(){i(!1)},children:(0,H.jsx)(N.Z,{})})]}),(0,H.jsx)("form",{onSubmit:t.handleSubmit,children:(0,H.jsxs)(P.Z,{children:[(0,H.jsx)(S.ZP,{children:(0,H.jsx)(L.Z,{label:"id",type:"number",value:t.values.id,name:"id",onChange:t.handleChange,disabled:!0})}),(0,H.jsx)(S.ZP,{children:(0,H.jsx)(L.Z,{label:"Name",type:"text",value:t.values.name,name:"name",onChange:t.handleChange})}),(0,H.jsx)(S.ZP,{children:(0,H.jsx)(L.Z,{label:"Address",type:"text",value:t.values.address,name:"address",onChange:t.handleChange})}),(0,H.jsx)(S.ZP,{children:(0,H.jsx)(L.Z,{label:"City",type:"text",value:t.values.city,name:"city",onChange:t.handleChange})}),(0,H.jsx)(S.ZP,{children:(0,H.jsx)(L.Z,{label:"Sector",type:"text",value:t.values.sector,name:"sector",onChange:t.handleChange})})]})}),(0,H.jsx)(y.Z,{padding:2,children:(0,H.jsx)(u.Z,{sx:{border:"none !important",marginLeft:"auto"},startIcon:(0,H.jsx)(T.Z,{}),color:"success",variant:"contained",onClick:function(){i(!1)},children:"Save"})})]})})},_=function(){var e=(0,i.useState)(0),n=(0,s.Z)(e,2),a=n[0],t=n[1],v=(0,i.useState)(10),b=(0,s.Z)(v,2),A=b[0],E=b[1],w=(0,i.useState)([]),P=(0,s.Z)(w,2),S=P[0],I=P[1],O=(0,i.useState)(!1),L=(0,s.Z)(O,2),N=L[0],T=L[1],_=(0,i.useState)(void 0),F=(0,s.Z)(_,2),M=F[0],z=F[1];return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(R,{company:M,isOpen:N,setIsOpen:T}),(0,H.jsxs)(l.Z,{sx:{width:"calc(100% - 40px)",marginLeft:"auto",overflow:"hidden",boxShadow:"none"},children:[(0,H.jsx)(d.Z,{sx:{maxHeight:"500px"},children:(0,H.jsxs)(c.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,H.jsx)(o.Z,{children:(0,H.jsxs)(m.Z,{children:[(0,H.jsx)(x.Z,{children:(0,H.jsx)(h.Z,{value:"all",checked:C.Z.length===S.length,onChange:function(e){e.target.checked?I(C.Z.map((function(e){return e.id}))):I([])}})}),(0,H.jsx)(x.Z,{children:"id"}),(0,H.jsx)(x.Z,{children:"Name"}),(0,H.jsx)(x.Z,{children:"City"}),(0,H.jsx)(x.Z,{})]})}),(0,H.jsx)(p.Z,{children:C.Z.slice(a*A,(a+1)*A).map((function(e,n){return(0,H.jsxs)(m.Z,{children:[(0,H.jsx)(x.Z,{children:(0,H.jsx)(h.Z,{value:e.id,checked:S.includes(e.id),onChange:function(n){if(n.target.checked){var a=(0,r.Z)(S);a.push(e.id),I(a)}else{var i=(0,r.Z)(S);i.splice(i.indexOf(e.id),1),I(i)}}})}),(0,H.jsx)(x.Z,{children:e.id}),(0,H.jsx)(x.Z,{children:e.name}),(0,H.jsx)(x.Z,{children:e.city}),(0,H.jsx)(x.Z,{children:(0,H.jsx)(u.Z,{sx:{border:"none !important"},color:"warning",variant:"contained",onClick:function(){z(e),T(!0)},children:(0,H.jsx)(g.Z,{})})})]},n)}))})]})}),(0,H.jsx)(Z.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:C.Z.length,rowsPerPage:A,page:a,onPageChange:function(e,n){t(n)},onRowsPerPageChange:function(e){E(+e.target.value),t(0)}}),(0,H.jsx)(y.Z,{padding:"1rem",children:(0,H.jsxs)(j.Z,{sx:{marginLeft:"auto"},"aria-label":"medium button group contained",variant:"contained",children:[(0,H.jsx)(u.Z,{sx:{border:"none !important"},startIcon:(0,H.jsx)(f.Z,{}),color:"success",onClick:function(){z(void 0),T(!0)},children:"Add New"}),(0,H.jsx)(u.Z,{sx:{border:"none !important"},startIcon:(0,H.jsx)(k.Z,{}),color:"error",children:"Delete"})]})})]})]})},F=function(){return(0,i.useEffect)((function(){t.r.dispatch({type:"CHANGE_TITLE",payload:{headerTitle:"Companies",pageTitle:"Companies || CRM"}})})),(0,H.jsx)(_,{})}},217:function(e,n,a){a(2791);var i=a(8096),t=a(4925),r=a(7078),s=a(184);n.Z=function(e){var n=e.label,a=e.type,l=e.value,d=e.name,c=e.onChange,o=e.disabled;return(0,s.jsxs)(i.Z,{error:!Boolean(l),sx:{width:"100%"},children:[(0,s.jsx)(t.Z,{htmlFor:d,children:n}),(0,s.jsx)(r.Z,{id:d,name:d,value:l,type:a,onChange:c,disabled:o})]})}},3501:function(e,n){n.Z=[{id:1,name:"Example Company",city:"Ankara"},{id:2,name:"Example Company",city:"Ankara"},{id:3,name:"Example Company",city:"Ankara"},{id:4,name:"Example Company",city:"Ankara"},{id:5,name:"Example Company",city:"Ankara"},{id:6,name:"Example Company",city:"Ankara"},{id:7,name:"Example Company",city:"Ankara"},{id:8,name:"Example Company",city:"Ankara"},{id:9,name:"Example Company",city:"Ankara"},{id:10,name:"Example Company",city:"Ankara"},{id:11,name:"Example Company",city:"Ankara"},{id:12,name:"Example Company",city:"Ankara"},{id:13,name:"Example Company",city:"Ankara"},{id:14,name:"Example Company",city:"Ankara"},{id:15,name:"Example Company",city:"Ankara"},{id:16,name:"Example Company",city:"Ankara"},{id:17,name:"Example Company",city:"Ankara"},{id:18,name:"Example Company",city:"Ankara"},{id:19,name:"Example Company",city:"Ankara"}]}}]);
//# sourceMappingURL=782.ca15ee58.chunk.js.map