import{j as e,Y as m,a as i,y as x}from"./app-QtLMszpj.js";import{A as j,D as u,a as p,b as f,d as b,e as n}from"./AuthenticatedLayout-CJRPpizJ.js";import{B as l}from"./index-P_ylTbXi.js";import{C as N,c as g,d as w}from"./card-D_tEj0iL.js";import{T as C,a as T,b as t,c as a,d as y,e as r}from"./table-8NJb5oIK.js";import{a as D}from"./utilities-DewVcqoP.js";import{C as v}from"./circle-plus-D4W9Hyc4.js";import{E as M}from"./ellipsis-C7JnjfGm.js";function L({auth:c,familyAltars:o}){var d;function h(s){confirm("Are you sure you want to delete this item?")&&x.delete(route("family-altar.destroy",s))}return e.jsxs(j,{user:c.user,title:"Family Altar",children:[e.jsx(m,{title:"Family Altar"}),e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"ml-auto flex items-center gap-2",children:e.jsxs(l,{size:"sm",className:"h-8 gap-1",children:[e.jsx(v,{className:"h-3.5 w-3.5"}),e.jsx(i,{className:"sm:whitespace-nowrap",href:"/family-altar/create",children:"Tambah Family Altar"})]})})}),e.jsxs(N,{"x-chunk":"dashboard-06-chunk-0",children:[e.jsx(g,{children:e.jsxs(C,{children:[e.jsx(T,{children:e.jsxs(t,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Address"}),e.jsx(a,{className:"hidden md:table-cell",children:"Ketua"}),e.jsx(a,{className:"hidden md:table-cell",children:"Dibuat Tanggal"}),e.jsx(a,{children:"Actions"})]})}),e.jsx(y,{children:(d=o.data)==null?void 0:d.map(s=>e.jsxs(t,{children:[e.jsx(r,{className:"font-medium",children:s.name}),e.jsx(r,{children:s.address}),e.jsx(r,{className:"hidden md:table-cell",children:s.user.name}),e.jsx(r,{className:"hidden md:table-cell",children:D(s.created_at)}),e.jsx(r,{children:e.jsxs(u,{children:[e.jsx(p,{asChild:!0,children:e.jsxs(l,{"aria-haspopup":"true",size:"icon",variant:"ghost",children:[e.jsx(M,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle menu"})]})}),e.jsxs(f,{align:"end",children:[e.jsx(b,{children:"Actions"}),e.jsx(n,{children:e.jsx(i,{href:route("family-altar.edit",s.id),children:"Edit"})}),e.jsx(n,{onClick:()=>h(s.id),children:"Delete"})]})]})})]},s.id))})]})}),e.jsxs(w,{className:"justify-between",children:[e.jsxs("div",{className:"text-xs text-muted-foreground",children:["Showing ",e.jsx("strong",{children:"1-10"})," of ",e.jsx("strong",{children:"32"})," ","forms"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(l,{children:"Previous"}),e.jsx(l,{children:"Next"})]})]})]})]})}export{L as default};
