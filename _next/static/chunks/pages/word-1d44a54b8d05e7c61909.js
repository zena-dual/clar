(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{8625:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return A}});var n=a(7462),r=a(5987),o=a(7294),i=(a(5697),a(6010)),l=a(8786),c=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,d=void 0===c?"div":c,s=(0,r.Z)(e,["classes","className","component"]);return o.createElement(d,(0,n.Z)({ref:t,className:(0,i.Z)(a.root,l)},s))})),d=(0,l.Z)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(c);var s=o.createContext(),p="table",u=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,d=void 0===c?p:c,u=e.padding,g=void 0===u?"default":u,h=e.size,m=void 0===h?"medium":h,f=e.stickyHeader,v=void 0!==f&&f,x=(0,r.Z)(e,["classes","className","component","padding","size","stickyHeader"]),y=o.useMemo((function(){return{padding:g,size:m,stickyHeader:v}}),[g,m,v]);return o.createElement(s.Provider,{value:y},o.createElement(d,(0,n.Z)({role:d===p?null:"table",ref:t,className:(0,i.Z)(a.root,l,v&&a.stickyHeader)},x)))})),g=(0,l.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,n.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(u);var h=o.createContext(),m={variant:"head"},f="thead",v=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,d=void 0===c?f:c,s=(0,r.Z)(e,["classes","className","component"]);return o.createElement(h.Provider,{value:m},o.createElement(d,(0,n.Z)({className:(0,i.Z)(a.root,l),ref:t,role:d===f?null:"rowgroup"},s)))})),x=(0,l.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(v),y=a(9693),b=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,d=void 0===c?"tr":c,s=e.hover,p=void 0!==s&&s,u=e.selected,g=void 0!==u&&u,m=(0,r.Z)(e,["classes","className","component","hover","selected"]),f=o.useContext(h);return o.createElement(d,(0,n.Z)({ref:t,className:(0,i.Z)(a.root,l,f&&{head:a.head,footer:a.footer}[f.variant],p&&a.hover,g&&a.selected),role:"tr"===d?null:"row"},m))})),Z=(0,l.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,y.U1)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(b),w=a(3871),N=o.forwardRef((function(e,t){var a,l,c=e.align,d=void 0===c?"inherit":c,p=e.classes,u=e.className,g=e.component,m=e.padding,f=e.scope,v=e.size,x=e.sortDirection,y=e.variant,b=(0,r.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),Z=o.useContext(s),N=o.useContext(h),k=N&&"head"===N.variant;g?(l=g,a=k?"columnheader":"cell"):l=k?"th":"td";var j=f;!j&&k&&(j="col");var C=m||(Z&&Z.padding?Z.padding:"default"),E=v||(Z&&Z.size?Z.size:"medium"),R=y||N&&N.variant,_=null;return x&&(_="asc"===x?"ascending":"descending"),o.createElement(l,(0,n.Z)({ref:t,className:(0,i.Z)(p.root,p[R],u,"inherit"!==d&&p["align".concat((0,w.Z)(d))],"default"!==C&&p["padding".concat((0,w.Z)(C))],"medium"!==E&&p["size".concat((0,w.Z)(E))],"head"===R&&Z&&Z.stickyHeader&&p.stickyHeader),"aria-sort":_,role:a,scope:j},b))})),k=(0,l.Z)((function(e){return{root:(0,n.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,y.$n)((0,y.U1)(e.palette.divider,1),.88):(0,y._j)((0,y.U1)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(N),j={variant:"body"},C="tbody",E=o.forwardRef((function(e,t){var a=e.classes,l=e.className,c=e.component,d=void 0===c?C:c,s=(0,r.Z)(e,["classes","className","component"]);return o.createElement(h.Provider,{value:j},o.createElement(d,(0,n.Z)({className:(0,i.Z)(a.root,l),ref:t,role:d===C?null:"rowgroup"},s)))})),R=(0,l.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(E),_=a(9895),z=a(5872),T=a(5893),H=function(){var e=(0,z.y4)(),t=(0,z.tU)();return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(d,{component:_.Z,children:(0,T.jsxs)(g,{children:[(0,T.jsx)(x,{children:(0,T.jsxs)(Z,{children:[(0,T.jsx)(k,{align:"center",children:"\u5358\u8a9e"}),(0,T.jsx)(k,{align:"center",children:"\u610f\u5473"}),(0,T.jsx)(k,{align:"center",children:"\u54c1\u8a5e"}),(0,T.jsx)(k,{align:"center",children:"\u7a2e\u5225"})]})}),(0,T.jsx)(R,{children:z.D.map((function(a){return z.Iz[a].map((function(n,r,o){var i=n.chantType,l=n.pos,c=n.text;return(0,T.jsxs)(Z,{children:[0===r&&(0,T.jsx)(k,{align:"center",component:"th",rowSpan:o.length,scope:"row",children:a}),(0,T.jsx)(k,{align:"left",children:c}),(0,T.jsx)(k,{align:"center",children:t(l)}),(0,T.jsx)(k,{align:"center",children:e(i)})]},"".concat(i).concat(l).concat(c))}))}))})]})})})};H.getInitialProps=function(){return{title:"\u5358\u8a9e\u4e00\u89a7"}};var A=H},6312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/word",function(){return a(8625)}])}},function(e){e.O(0,[872,774,888,179],(function(){return t=6312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);