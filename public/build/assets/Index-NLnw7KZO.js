import{r as g,j as e,Y as N,a as w,y as a}from"./app-QtLMszpj.js";import{A as D,D as c,a as h,b as m,d as x,f as y,c as l,e as u}from"./AuthenticatedLayout-CJRPpizJ.js";import{B as v,T}from"./TablePagination-DOoff6YE.js";import{B as t}from"./index-P_ylTbXi.js";import{C as F,a as M,b as S,c as _,d as B}from"./card-D_tEj0iL.js";import{I}from"./input-utkg_JFh.js";import{T as A,a as E,b as j,c as r,d as L,e as i}from"./table-8NJb5oIK.js";import{f as q,a as z}from"./utilities-DewVcqoP.js";import{S as H}from"./search-PkQQQCW-.js";import{L as R}from"./list-filter-CEgNdK23.js";import{C as P}from"./circle-plus-D4W9Hyc4.js";import{E as J}from"./ellipsis-C7JnjfGm.js";import"./chevron-left-ynXWROHK.js";function ae({auth:p,diakonias:o}){const[n,f]=g.useState("semua");function d(s){f(s),a.get(route("diakonia.index"),{filter:s},{preserveState:!0})}function k(s){confirm("Are you sure you want to delete this item?")&&a.delete(route("diakonia.destroy",s))}return e.jsxs(D,{user:p.user,title:"Diakonia",children:[e.jsx(N,{title:"Dashboard"}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"relative flex-1 md:grow-0",children:[e.jsx(H,{className:"absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"}),e.jsx(I,{type:"search",placeholder:"Cari Nama",className:"w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"})]}),e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[e.jsxs(c,{children:[e.jsx(h,{asChild:!0,children:e.jsxs(t,{variant:"outline",size:"sm",className:"h-8 gap-1",children:[e.jsx(R,{className:"h-3.5 w-3.5"}),e.jsxs("span",{className:"sr-only sm:not-sr-only sm:whitespace-nowrap",children:["Filter: ",n]})]})}),e.jsxs(m,{align:"end",children:[e.jsx(x,{children:"Filter by"}),e.jsx(y,{}),e.jsx(l,{checked:n==="semua",onCheckedChange:()=>d("semua"),children:"Semua"}),e.jsx(l,{checked:n==="diserahkan",onCheckedChange:()=>d("diserahkan"),children:"Diserahkan"}),e.jsx(l,{checked:n==="diterima",onCheckedChange:()=>d("diterima"),children:"Diterima"}),e.jsx(l,{checked:n==="ditolak",onCheckedChange:()=>d("ditolak"),children:"Ditolak"})]})]}),e.jsxs(t,{size:"sm",className:"h-8 gap-1",children:[e.jsx(P,{className:"h-3.5 w-3.5"}),e.jsx(w,{className:"sr-only sm:not-sr-only sm:whitespace-nowrap",href:"/diakonia/create",children:"Buat Form Diakonia"})]})]})]}),e.jsxs(F,{"x-chunk":"dashboard-06-chunk-0",children:[e.jsx(M,{children:e.jsx(S,{children:"Form Diakonia"})}),e.jsx(_,{children:e.jsxs(A,{children:[e.jsx(E,{children:e.jsxs(j,{children:[e.jsx(r,{children:"ID"}),e.jsx(r,{children:"Name"}),e.jsx(r,{children:"Status"}),e.jsx(r,{className:"hidden md:table-cell",children:"Jumlah"}),e.jsx(r,{className:"hidden md:table-cell",children:"Created at"}),e.jsx(r,{children:"Actions"})]})}),e.jsx(L,{children:o.data.map(s=>e.jsxs(j,{children:[e.jsx(i,{className:"font-medium",children:s.id}),e.jsx(i,{className:"font-medium",onClick:()=>{a.visit("/diakonia/"+s.id)},children:s.requester_first_name+" "+s.requester_last_name}),e.jsx(i,{onClick:()=>{a.visit("/diakonia/"+s.id)},children:e.jsx(v,{variant:"outline",children:s.status})}),e.jsx(i,{className:"hidden md:table-cell",onClick:()=>{a.visit("/diakonia/"+s.id)},children:q(s.requester_help.reduce((C,b)=>C+b.amount,0))}),e.jsx(i,{className:"hidden md:table-cell",onClick:()=>{a.visit("/diakonia/"+s.id)},children:z(s.created_at)}),e.jsx(i,{children:e.jsxs(c,{children:[e.jsx(h,{asChild:!0,children:e.jsxs(t,{"aria-haspopup":"true",size:"icon",variant:"ghost",children:[e.jsx(J,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle menu"})]})}),e.jsxs(m,{align:"end",children:[e.jsx(x,{children:"Actions"}),e.jsx(u,{onClick:()=>a.visit(route("diakonia.edit",s.id)),children:"Edit"}),e.jsx(u,{onClick:()=>k(s.id),children:"Delete"})]})]})})]},s.id))})]})}),e.jsxs(B,{className:"justify-between",children:[e.jsx("div",{className:"text-xs text-muted-foreground"}),e.jsx("div",{className:"flex gap-2",children:e.jsx(T,{db_data:o})})]})]})]})}export{ae as default};
