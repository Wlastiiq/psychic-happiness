(this["webpackJsonpweb-toolbox"]=this["webpackJsonpweb-toolbox"]||[]).push([[22],{1088:function(e,t,a){"use strict";a.r(t);var o=a(2),n=a(4),c=a(0),l=(a(3),a(5)),r=a(49),i=a(7),d=a(82),s=a(9),p=c.forwardRef((function(e,t){e.checked;var a=e.classes,i=e.className,p=e.control,b=e.disabled,h=(e.inputRef,e.label),u=e.labelPlacement,m=void 0===u?"end":u,g=(e.name,e.onChange,e.value,Object(n.a)(e,["checked","classes","className","control","disabled","inputRef","label","labelPlacement","name","onChange","value"])),f=Object(r.a)(),k=b;"undefined"===typeof k&&"undefined"!==typeof p.props.disabled&&(k=p.props.disabled),"undefined"===typeof k&&f&&(k=f.disabled);var y={disabled:k};return["checked","name","onChange","value","inputRef"].forEach((function(t){"undefined"===typeof p.props[t]&&"undefined"!==typeof e[t]&&(y[t]=e[t])})),c.createElement("label",Object(o.a)({className:Object(l.a)(a.root,i,"end"!==m&&a["labelPlacement".concat(Object(s.a)(m))],k&&a.disabled),ref:t},g),c.cloneElement(p,y),c.createElement(d.a,{component:"span",className:Object(l.a)(a.label,k&&a.disabled)},h))})),b=Object(i.a)((function(e){return{root:{display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,"&$disabled":{cursor:"default"}},labelPlacementStart:{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},labelPlacementTop:{flexDirection:"column-reverse",marginLeft:16},labelPlacementBottom:{flexDirection:"column",marginLeft:16},disabled:{},label:{"&$disabled":{color:e.palette.text.disabled}}}}),{name:"MuiFormControlLabel"})(p),h=a(20),u=a(55),m=a(109),g=a(501),f=c.forwardRef((function(e,t){var a=e.autoFocus,i=e.checked,d=e.checkedIcon,s=e.classes,p=e.className,b=e.defaultChecked,h=e.disabled,f=e.icon,k=e.id,y=e.inputProps,j=e.inputRef,O=e.name,v=e.onBlur,x=e.onChange,w=e.onFocus,C=e.readOnly,$=e.required,N=e.tabIndex,B=e.type,R=e.value,E=Object(n.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),I=Object(m.a)({controlled:i,default:Boolean(b),name:"SwitchBase",state:"checked"}),P=Object(u.a)(I,2),S=P[0],F=P[1],z=Object(r.a)(),D=h;z&&"undefined"===typeof D&&(D=z.disabled);var L="checkbox"===B||"radio"===B;return c.createElement(g.a,Object(o.a)({component:"span",className:Object(l.a)(s.root,p,S&&s.checked,D&&s.disabled),disabled:D,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),z&&z.onFocus&&z.onFocus(e)},onBlur:function(e){v&&v(e),z&&z.onBlur&&z.onBlur(e)},ref:t},E),c.createElement("input",Object(o.a)({autoFocus:a,checked:i,defaultChecked:b,className:s.input,disabled:D,id:L&&k,name:O,onChange:function(e){var t=e.target.checked;F(t),x&&x(e,t)},readOnly:C,ref:j,required:$,tabIndex:N,type:B,value:R},y)),S?d:f)})),k=Object(i.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(f),y=c.forwardRef((function(e,t){var a=e.classes,r=e.className,i=e.color,d=void 0===i?"secondary":i,p=e.edge,b=void 0!==p&&p,h=e.size,u=void 0===h?"medium":h,m=Object(n.a)(e,["classes","className","color","edge","size"]),g=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(l.a)(a.root,r,{start:a.edgeStart,end:a.edgeEnd}[b],"small"===u&&a["size".concat(Object(s.a)(u))])},c.createElement(k,Object(o.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(l.a)(a.switchBase,a["color".concat(Object(s.a)(d))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},m)),c.createElement("span",{className:a.track}))})),j=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(h.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(h.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(y),O=a(175),v=a(174),x=a(186),w=a.n(x),C=a(32),$=a(41),N=a(145),B=a(1),R=Object(v.a)((function(e){return{root:{margin:e.spacing(2),padding:e.spacing(2)},topDivider:{marginBottom:e.spacing(8)},switch:{display:"flex",flex:1,justifyContent:"center"}}}));t.default=function(){var e=R(),t=Object(N.c)(),a=t.isDark,o=t.toggleTheme,n="Application preferences";return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(C.a,{title:n}),Object(B.jsxs)(O.a,{className:e.root,children:[Object(B.jsx)($.a,{iconType:w.a,title:n}),Object(B.jsx)("div",{className:e.topDivider}),Object(B.jsx)("div",{className:e.switch,children:Object(B.jsx)(b,{control:Object(B.jsx)(j,{checked:a,onChange:o}),label:"Activate the Dark theme mode",labelPlacement:"end"})})]})]})}}}]);
//# sourceMappingURL=22.c03fead6.chunk.js.map