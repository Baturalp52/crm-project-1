"use strict";(self.webpackChunkcrm_ui=self.webpackChunkcrm_ui||[]).push([[32],{8032:function(e,o,t){t.r(o),t.d(o,{default:function(){return ce}});var a=t(2791),n=t(7913),i=t(9439),c=t(3051),r=t(3433),l=t(1413),s=t(1889),d=t(493),p=t(4852),u=t(9650),m={id:0,name:"",description:"",assignedMember:{},assignedCandidate:{},situation:"on-progress",comments:[]},x=t(217),Z=t(7553),h=t(3168),g=t(7621),f=t(9585),v=t(9504),b=t(703),k=t(2363),C=t(7391),j=t(3466),y=t(3400),T=t(8087),S=t(3044);function w(e){var o,t=0;for(o=0;o<e.length;o+=1)t=e.charCodeAt(o)+((t<<5)-t);var a="#";for(o=0;o<3;o+=1){a+="00".concat((t>>8*o&255).toString(16)).substr(-2)}return a}var E=t(184),I=function(e){var o,t=e.comment,a=(0,h.$)("components",{keyPrefix:"formCommentsArea"}).t;return(0,E.jsxs)(g.Z,{children:[(0,E.jsx)(f.Z,{avatar:(0,E.jsx)(S.Z,(0,l.Z)({},(o=t.owner?t.owner.name+t.owner.surname:"Admin",{sx:{bgcolor:w(o),marginLeft:"auto","&:hover":{cursor:"pointer"}},children:o.includes(" ")?"".concat(o.split(" ")[0][0]).concat(o.split(" ")[1][0]):"".concat(o.split(" ")[0][0])}))),title:t.owner?t.owner.name+t.owner.surname:"Admin",subheader:t.createdDate?t.createdDate.toLocaleString():a("unknown-date")}),(0,E.jsx)(v.Z,{children:t.content})]})},D=function(e){var o=e.title,t=e.onChange,n=e.values,c=(0,a.useState)(),r=(0,i.Z)(c,2),l=r[0],s=r[1],d=(0,h.$)("components",{keyPrefix:"formCommentsArea"}).t;return(0,E.jsxs)(g.Z,{sx:{width:"100%"},children:[(0,E.jsx)(f.Z,{title:o}),(0,E.jsx)(v.Z,{children:n&&(null===n||void 0===n?void 0:n.length)>0?n.map((function(e){return(0,E.jsx)(b.Z,{sx:{m:2,p:2},elevation:10,children:(0,E.jsx)(I,{comment:e})})})):(0,E.jsx)(b.Z,{sx:{m:2,p:2},elevation:10,children:d("no-comment")})}),(0,E.jsx)(k.Z,{children:(0,E.jsx)(C.Z,{multiline:!0,fullWidth:!0,maxRows:4,value:l,onChange:function(e){return s(e.target.value)},variant:"standard",InputProps:{endAdornment:(0,E.jsx)(j.Z,{position:"end",children:(0,E.jsx)(y.Z,{onClick:function(){var e={id:0,content:l,createdDate:new Date};t(e)},children:(0,E.jsx)(T.Z,{})})})}})})]})},P=function(e){var o=e.task,t=e.isOpen,a=e.setIsOpen,n=(0,h.$)("pages",{keyPrefix:"tasks.modal"}).t,i=(0,u.TA)({initialValues:o?(0,l.Z)({},o):(0,l.Z)({},m),onSubmit:function(){},enableReinitialize:!0});return(0,E.jsx)(Z.Z,{title:i.values.id?n("edit"):n("add"),isOpen:t,setIsOpen:a,saveFunction:function(){},children:(0,E.jsxs)(s.ZP,{container:!0,children:[(0,E.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,E.jsxs)(d.Z,{children:[(0,E.jsx)(p.ZP,{children:(0,E.jsx)(x.Z,{label:n("form.id"),type:"number",value:i.values.id,name:"id",onChange:i.handleChange,disabled:!0})}),(0,E.jsx)(p.ZP,{children:(0,E.jsx)(x.Z,{label:n("form.name"),type:"text",value:i.values.name,name:"name",onChange:i.handleChange})}),(0,E.jsx)(p.ZP,{children:(0,E.jsx)(x.Z,{label:n("form.description"),type:"text",value:i.values.description,name:"description",onChange:i.handleChange})})]})}),(0,E.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,E.jsx)(D,{title:n("form.comments"),values:i.values.comments,onChange:function(e){var o=(0,r.Z)(i.values.comments);o.push(e),console.log(o),i.setFieldValue("comments",o)}})})]})})},z=t(6189),O=(0,z.Z)([(0,E.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,E.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime"),M=(0,z.Z)((0,E.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),R=(0,z.Z)((0,E.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle"),L=(0,z.Z)((0,E.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),F=t(4942),N=t(3366),V=t(7462),A=t(8182),q=t(767),H=t(2065),K=(0,z.Z)((0,E.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),$=t(2071),U=t(4036),W=t(3701),_=t(1046),B=t(7630),G=t(5159);function J(e){return(0,G.Z)("MuiChip",e)}var Q=(0,t(208).Z)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),X=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],Y=(0,B.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState,a=t.color,n=t.clickable,i=t.onDelete,c=t.size,r=t.variant;return[(0,F.Z)({},"& .".concat(Q.avatar),o.avatar),(0,F.Z)({},"& .".concat(Q.avatar),o["avatar".concat((0,U.Z)(c))]),(0,F.Z)({},"& .".concat(Q.avatar),o["avatarColor".concat((0,U.Z)(a))]),(0,F.Z)({},"& .".concat(Q.icon),o.icon),(0,F.Z)({},"& .".concat(Q.icon),o["icon".concat((0,U.Z)(c))]),(0,F.Z)({},"& .".concat(Q.icon),o["iconColor".concat((0,U.Z)(a))]),(0,F.Z)({},"& .".concat(Q.deleteIcon),o.deleteIcon),(0,F.Z)({},"& .".concat(Q.deleteIcon),o["deleteIcon".concat((0,U.Z)(c))]),(0,F.Z)({},"& .".concat(Q.deleteIcon),o["deleteIconColor".concat((0,U.Z)(a))]),(0,F.Z)({},"& .".concat(Q.deleteIcon),o["deleteIconOutlinedColor".concat((0,U.Z)(a))]),o.root,o["size".concat((0,U.Z)(c))],o["color".concat((0,U.Z)(a))],n&&o.clickable,n&&"default"!==a&&o["clickableColor".concat((0,U.Z)(a),")")],i&&o.deletable,i&&"default"!==a&&o["deletableColor".concat((0,U.Z)(a))],o[r],"outlined"===r&&o["outlined".concat((0,U.Z)(a))]]}})((function(e){var o,t=e.theme,a=e.ownerState,n=(0,H.Fq)(t.palette.text.primary,.26);return(0,V.Z)((o={fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:t.palette.text.primary,backgroundColor:t.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:t.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box"},(0,F.Z)(o,"&.".concat(Q.disabled),{opacity:t.palette.action.disabledOpacity,pointerEvents:"none"}),(0,F.Z)(o,"& .".concat(Q.avatar),{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300],fontSize:t.typography.pxToRem(12)}),(0,F.Z)(o,"& .".concat(Q.avatarColorPrimary),{color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark}),(0,F.Z)(o,"& .".concat(Q.avatarColorSecondary),{color:t.palette.secondary.contrastText,backgroundColor:t.palette.secondary.dark}),(0,F.Z)(o,"& .".concat(Q.avatarSmall),{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:t.typography.pxToRem(10)}),(0,F.Z)(o,"& .".concat(Q.icon),(0,V.Z)({color:"light"===t.palette.mode?t.palette.grey[700]:t.palette.grey[300],marginLeft:5,marginRight:-6},"small"===a.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==a.color&&{color:"inherit"})),(0,F.Z)(o,"& .".concat(Q.deleteIcon),(0,V.Z)({WebkitTapHighlightColor:"transparent",color:n,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,H.Fq)(n,.4)}},"small"===a.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==a.color&&{color:(0,H.Fq)(t.palette[a.color].contrastText,.7),"&:hover, &:active":{color:t.palette[a.color].contrastText}})),o),"small"===a.size&&{height:24},"default"!==a.color&&{backgroundColor:t.palette[a.color].main,color:t.palette[a.color].contrastText},a.onDelete&&(0,F.Z)({},"&.".concat(Q.focusVisible),{backgroundColor:(0,H.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),a.onDelete&&"default"!==a.color&&(0,F.Z)({},"&.".concat(Q.focusVisible),{backgroundColor:t.palette[a.color].dark}))}),(function(e){var o,t=e.theme,a=e.ownerState;return(0,V.Z)({},a.clickable&&(o={userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:(0,H.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}},(0,F.Z)(o,"&.".concat(Q.focusVisible),{backgroundColor:(0,H.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}),(0,F.Z)(o,"&:active",{boxShadow:t.shadows[1]}),o),a.clickable&&"default"!==a.color&&(0,F.Z)({},"&:hover, &.".concat(Q.focusVisible),{backgroundColor:t.palette[a.color].dark}))}),(function(e){var o,t,a=e.theme,n=e.ownerState;return(0,V.Z)({},"outlined"===n.variant&&(o={backgroundColor:"transparent",border:"1px solid ".concat("light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[700])},(0,F.Z)(o,"&.".concat(Q.clickable,":hover"),{backgroundColor:a.palette.action.hover}),(0,F.Z)(o,"&.".concat(Q.focusVisible),{backgroundColor:a.palette.action.focus}),(0,F.Z)(o,"& .".concat(Q.avatar),{marginLeft:4}),(0,F.Z)(o,"& .".concat(Q.avatarSmall),{marginLeft:2}),(0,F.Z)(o,"& .".concat(Q.icon),{marginLeft:4}),(0,F.Z)(o,"& .".concat(Q.iconSmall),{marginLeft:2}),(0,F.Z)(o,"& .".concat(Q.deleteIcon),{marginRight:5}),(0,F.Z)(o,"& .".concat(Q.deleteIconSmall),{marginRight:3}),o),"outlined"===n.variant&&"default"!==n.color&&(t={color:a.palette[n.color].main,border:"1px solid ".concat((0,H.Fq)(a.palette[n.color].main,.7))},(0,F.Z)(t,"&.".concat(Q.clickable,":hover"),{backgroundColor:(0,H.Fq)(a.palette[n.color].main,a.palette.action.hoverOpacity)}),(0,F.Z)(t,"&.".concat(Q.focusVisible),{backgroundColor:(0,H.Fq)(a.palette[n.color].main,a.palette.action.focusOpacity)}),(0,F.Z)(t,"& .".concat(Q.deleteIcon),{color:(0,H.Fq)(a.palette[n.color].main,.7),"&:hover, &:active":{color:a.palette[n.color].main}}),t))})),ee=(0,B.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:function(e,o){var t=e.ownerState.size;return[o.label,o["label".concat((0,U.Z)(t))]]}})((function(e){var o=e.ownerState;return(0,V.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===o.size&&{paddingLeft:8,paddingRight:8})}));function oe(e){return"Backspace"===e.key||"Delete"===e.key}var te=a.forwardRef((function(e,o){var t=(0,_.Z)({props:e,name:"MuiChip"}),n=t.avatar,i=t.className,c=t.clickable,r=t.color,l=void 0===r?"default":r,s=t.component,d=t.deleteIcon,p=t.disabled,u=void 0!==p&&p,m=t.icon,x=t.label,Z=t.onClick,h=t.onDelete,g=t.onKeyDown,f=t.onKeyUp,v=t.size,b=void 0===v?"medium":v,k=t.variant,C=void 0===k?"filled":k,j=(0,N.Z)(t,X),y=a.useRef(null),T=(0,$.Z)(y,o),S=function(e){e.stopPropagation(),h&&h(e)},w=!(!1===c||!Z)||c,I="small"===b,D=w||h?W.Z:s||"div",P=(0,V.Z)({},t,{component:D,disabled:u,size:b,color:l,onDelete:!!h,clickable:w,variant:C}),z=function(e){var o=e.classes,t=e.disabled,a=e.size,n=e.color,i=e.onDelete,c=e.clickable,r=e.variant,l={root:["root",r,t&&"disabled","size".concat((0,U.Z)(a)),"color".concat((0,U.Z)(n)),c&&"clickable",c&&"clickableColor".concat((0,U.Z)(n)),i&&"deletable",i&&"deletableColor".concat((0,U.Z)(n)),"".concat(r).concat((0,U.Z)(n))],label:["label","label".concat((0,U.Z)(a))],avatar:["avatar","avatar".concat((0,U.Z)(a)),"avatarColor".concat((0,U.Z)(n))],icon:["icon","icon".concat((0,U.Z)(a)),"iconColor".concat((0,U.Z)(n))],deleteIcon:["deleteIcon","deleteIcon".concat((0,U.Z)(a)),"deleteIconColor".concat((0,U.Z)(n)),"deleteIconOutlinedColor".concat((0,U.Z)(n))]};return(0,q.Z)(l,J,o)}(P),O=D===W.Z?(0,V.Z)({component:s||"div",focusVisibleClassName:z.focusVisible},h&&{disableRipple:!0}):{},M=null;if(h){var R=(0,A.Z)("default"!==l&&("outlined"===C?z["deleteIconOutlinedColor".concat((0,U.Z)(l))]:z["deleteIconColor".concat((0,U.Z)(l))]),I&&z.deleteIconSmall);M=d&&a.isValidElement(d)?a.cloneElement(d,{className:(0,A.Z)(d.props.className,z.deleteIcon,R),onClick:S}):(0,E.jsx)(K,{className:(0,A.Z)(z.deleteIcon,R),onClick:S})}var L=null;n&&a.isValidElement(n)&&(L=a.cloneElement(n,{className:(0,A.Z)(z.avatar,n.props.className)}));var F=null;return m&&a.isValidElement(m)&&(F=a.cloneElement(m,{className:(0,A.Z)(z.icon,m.props.className)})),(0,E.jsxs)(Y,(0,V.Z)({as:D,className:(0,A.Z)(z.root,i),disabled:!(!w||!u)||void 0,onClick:Z,onKeyDown:function(e){e.currentTarget===e.target&&oe(e)&&e.preventDefault(),g&&g(e)},onKeyUp:function(e){e.currentTarget===e.target&&(h&&oe(e)?h(e):"Escape"===e.key&&y.current&&y.current.blur()),f&&f(e)},ref:T,ownerState:P},O,j,{children:[L||F,(0,E.jsx)(ee,{className:(0,A.Z)(z.label),ownerState:P,children:x}),M]}))})),ae=t(1578);var ne=t(9975),ie=function(){var e=(0,a.useState)(!1),o=(0,i.Z)(e,2),t=o[0],n=o[1],r=(0,a.useState)(void 0),l=(0,i.Z)(r,2),s=l[0],d=l[1],p=(0,h.$)("pages",{keyPrefix:"tasks.table"}).t;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(P,{task:s,isOpen:t,setIsOpen:n}),(0,E.jsx)(ne.Z,{data:c.Z,cellNames:[p("id"),p("name"),p("description"),p("situation")],keysToShow:["id","name","description","situation"],setModalData:d,setIsDataModalOpen:n,customDataComponent:{situation:function(e){return function(e){var o="pages:tasks.helpers.chip-text.";switch(e){case"on-progress":return(0,E.jsx)(te,{icon:(0,E.jsx)(O,{}),label:ae.Z.t(o+"on-progress"),color:"warning"});case"completed":return(0,E.jsx)(te,{icon:(0,E.jsx)(M,{}),label:ae.Z.t(o+"completed"),color:"success"});case"open":return(0,E.jsx)(te,{icon:(0,E.jsx)(R,{}),label:ae.Z.t(o+"open"),color:"info"});case"closed":return(0,E.jsx)(te,{icon:(0,E.jsx)(L,{}),label:ae.Z.t(o+"closed"),color:"error"})}}(e)}}})]})},ce=function(){return(0,a.useEffect)((function(){n.r.dispatch({type:"CHANGE_TITLE",payload:{title:"tasks"}})})),(0,E.jsx)(ie,{})}},7553:function(e,o,t){t(2791);var a=t(8944),n=t(7621),i=t(9585),c=t(3400),r=t(9504),l=t(2363),s=t(4518),d=t(9598),p=t(920),u=t(3168),m=t(184);o.Z=function(e){var o=e.isOpen,t=e.setIsOpen,x=e.title,Z=e.saveFunction,h=e.children,g=(0,u.$)("components",{keyPrefix:"actionModal"}).t;return(0,m.jsx)(a.Z,{open:o,onClose:function(){return t(!1)},children:(0,m.jsxs)(n.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"95%",height:"85%",bgcolor:"background.paper",border:"none"},children:[(0,m.jsx)(i.Z,{sx:{p:2,bgcolor:"success.dark",color:"white"},title:x,action:(0,m.jsx)(c.Z,{onClick:function(){t(!1)},children:(0,m.jsx)(d.Z,{htmlColor:"white"})})}),(0,m.jsx)(r.Z,{sx:{height:"76%",overflow:"auto"},children:h}),(0,m.jsx)(l.Z,{children:(0,m.jsx)(s.Z,{sx:{border:"none !important",marginLeft:"auto"},startIcon:(0,m.jsx)(p.Z,{}),color:"success",variant:"contained",onClick:function(){t(!1),Z()},children:g("save")})})]})})}},9975:function(e,o,t){var a=t(3433),n=t(9439),i=t(1526),c=t(8087),r=t(9981),l=t(703),s=t(9281),d=t(9836),p=t(6890),u=t(5855),m=t(3994),x=t(9174),Z=t(3382),h=t(4518),g=t(6282),f=t(3767),v=t(2199),b=t(2791),k=t(3168),C=t(184);o.Z=function(e){var o=e.data,t=e.cellNames,j=e.setModalData,y=e.keysToShow,T=e.setIsDataModalOpen,S=e.customDataComponent,w=S||[],E=(0,k.$)("components",{keyPrefix:"crudTable"}).t,I=(0,b.useState)(0),D=(0,n.Z)(I,2),P=D[0],z=D[1],O=(0,b.useState)(10),M=(0,n.Z)(O,2),R=M[0],L=M[1],F=(0,b.useState)([]),N=(0,n.Z)(F,2),V=N[0],A=N[1];return(0,C.jsxs)(l.Z,{sx:{width:"calc(100% - 40px)",marginLeft:"auto",overflow:"hidden",boxShadow:"none"},children:[(0,C.jsx)(s.Z,{sx:{maxHeight:"500px"},children:(0,C.jsxs)(d.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,C.jsx)(p.Z,{children:(0,C.jsxs)(u.Z,{children:[(0,C.jsx)(m.Z,{children:(0,C.jsx)(x.Z,{value:"all",checked:o.length===V.length,onChange:function(e){e.target.checked?A(o.map((function(e){return e.id}))):A([])}})}),t.map((function(e){return(0,C.jsx)(m.Z,{children:e})})),(0,C.jsx)(m.Z,{})]})}),(0,C.jsx)(Z.Z,{children:o.slice(P*R,(P+1)*R).map((function(e,o){return(0,C.jsxs)(u.Z,{children:[(0,C.jsx)(m.Z,{children:(0,C.jsx)(x.Z,{value:e.id,checked:V.includes(e.id),onChange:function(o){if(o.target.checked){var t=(0,a.Z)(V);t.push(e.id),A(t)}else{var n=(0,a.Z)(V);n.splice(n.indexOf(e.id),1),A(n)}}})}),y.map((function(o){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(m.Z,{children:Object.keys(w).includes(o)?w[o](e[o]):e[o]})})})),(0,C.jsx)(m.Z,{children:(0,C.jsx)(h.Z,{sx:{border:"none !important"},color:"warning",variant:"contained",onClick:function(){j(e),T(!0)},children:(0,C.jsx)(i.Z,{})})})]},o)}))})]})}),(0,C.jsx)(g.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:o.length,rowsPerPage:R,page:P,onPageChange:function(e,o){z(o)},onRowsPerPageChange:function(e){L(+e.target.value),z(0)}}),(0,C.jsx)(f.Z,{padding:"1rem",children:(0,C.jsxs)(v.Z,{sx:{marginLeft:"auto"},"aria-label":"medium button group contained",variant:"contained",children:[(0,C.jsx)(h.Z,{sx:{border:"none !important"},startIcon:(0,C.jsx)(c.Z,{}),color:"success",onClick:function(){j(void 0),T(!0)},children:E("add")}),(0,C.jsx)(h.Z,{sx:{border:"none !important"},startIcon:(0,C.jsx)(r.Z,{}),color:"error",children:E("delete")})]})})]})}},217:function(e,o,t){t(2791);var a=t(8096),n=t(4925),i=t(7078),c=t(184);o.Z=function(e){var o=e.label,t=e.type,r=e.value,l=e.name,s=e.onChange,d=e.disabled;return(0,c.jsxs)(a.Z,{error:!Boolean(r),sx:{width:"100%",m:1},children:[(0,c.jsx)(n.Z,{htmlFor:l,children:o}),(0,c.jsx)(i.Z,{id:l,name:l,value:r,type:t,onChange:s,disabled:d})]})}},3051:function(e,o){o.Z=[{id:1,name:"Example Task",description:"Example Task Description",situation:"on-progress"},{id:2,name:"Example Task",description:"Example Task Description",situation:"completed"},{id:3,name:"Example Task",description:"Example Task Description",situation:"closed"},{id:4,name:"Example Task",description:"Example Task Description",situation:"on-progress"},{id:5,name:"Example Task",description:"Example Task Description",situation:"completed"},{id:6,name:"Example Task",description:"Example Task Description",situation:"open"},{id:7,name:"Example Task",description:"Example Task Description",situation:"on-progress"},{id:8,name:"Example Task",description:"Example Task Description",situation:"completed"},{id:9,name:"Example Task",description:"Example Task Description",situation:"open"},{id:10,name:"Example Task",description:"Example Task Description",situation:"on-progress"},{id:11,name:"Example Task",description:"Example Task Description",situation:"completed"},{id:12,name:"Example Task",description:"Example Task Description",situation:"closed"},{id:13,name:"Example Task",description:"Example Task Description",situation:"on-progress"},{id:14,name:"Example Task",description:"Example Task Description",situation:"closed"},{id:15,name:"Example Task",description:"Example Task Description",situation:"closed"},{id:16,name:"Example Task",description:"Example Task Description",situation:"on-progress"},{id:17,name:"Example Task",description:"Example Task Description",situation:"open"},{id:18,name:"Example Task",description:"Example Task Description",situation:"open"},{id:19,name:"Example Task",description:"Example Task Description",situation:"on-progress"}]}}]);
//# sourceMappingURL=32.c4120102.chunk.js.map