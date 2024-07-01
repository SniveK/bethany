import{r as _,j as e,Y as b,a as C,y as D}from"./app-QtLMszpj.js";import{A as g}from"./AuthenticatedLayout-CJRPpizJ.js";import{B as o}from"./index-P_ylTbXi.js";import{C as l,a as r,b as d,c as t,d as q}from"./card-D_tEj0iL.js";import{T as u,d as f,b as n,e as a,a as A,c as h}from"./table-8NJb5oIK.js";import{a as N,f as k}from"./utilities-DewVcqoP.js";import{T as S}from"./textarea-DGUU-SEx.js";function L({auth:p,survey:s}){var j;const[m,T]=_.useState(""),x=i=>{D.post(route("ketua-departemen.survey.hasil",s.id),{status:i,comment:m})};return e.jsxs(g,{user:p.user,title:"Survey",children:[e.jsx(b,{title:"Survey"}),e.jsx("div",{className:"flex ",children:e.jsx(C,{href:route("ketua-departemen.survey.index"),children:e.jsx(o,{children:"Back"})})}),e.jsxs(l,{"x-chunk":"dashboard-06-chunk-0",children:[e.jsx(r,{children:e.jsx(d,{children:"Data Penerima Diakonia"})}),e.jsx(t,{children:e.jsx(u,{children:e.jsxs(f,{children:[e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Nama Depan"}),e.jsx(a,{className:"font-medium",children:s.diakonia.requester_first_name})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Nama Belakang"}),e.jsx(a,{className:"font-medium",children:s.diakonia.requester_last_name})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Nomor Telepon"}),e.jsx(a,{className:"font-medium",children:s.diakonia.requester_phone_number})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Tanggal Lahir"}),e.jsx(a,{className:"font-medium",children:N(s.diakonia.requester_birth_date)})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Tanggal Permintaan"}),e.jsx(a,{className:"font-medium",children:N(s.diakonia.request_date)})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Nama Family Altar"}),e.jsx(a,{className:"font-medium",children:s.diakonia.family_altar.name})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Alamat Family Altar"}),e.jsx(a,{className:"font-medium",children:s.diakonia.family_altar.address})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Ketua Family Altar"}),e.jsx(a,{className:"font-medium",children:s.diakonia.family_altar.address})]}),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Status"}),e.jsx(a,{className:"font-medium",children:s.status})]})]})})})]}),e.jsxs(l,{"x-chunk":"dashboard-06-chunk-0",children:[e.jsx(r,{children:e.jsx(d,{children:"Diakonia"})}),e.jsx(t,{children:e.jsxs(u,{children:[e.jsx(A,{children:e.jsxs(n,{children:[e.jsx(h,{children:"Tipe Diakonia"}),e.jsx(h,{children:"Jumlah"}),e.jsx(h,{children:"Notes"})]})}),e.jsxs(f,{children:[s.diakonia.requester_help.map((i,c)=>e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:i.type}),e.jsx(a,{className:"font-medium",children:k(i.amount)}),e.jsx(a,{className:"font-medium",children:i.notes})]},c)),e.jsxs(n,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Total"}),e.jsx(a,{className:"font-medium",children:k(s.diakonia.requester_help.reduce((i,c)=>i+c.amount,0))}),e.jsx(a,{className:"font-medium"})]})]})]})})]}),e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(d,{children:"Hasil Survey"})}),e.jsx(t,{children:e.jsx("p",{children:s.survey})})]}),s.survey_aprovals.some(i=>i.role_id===1)?e.jsx(l,{children:e.jsx(r,{children:e.jsx(d,{className:"text-center",children:(j=s.survey_aprovals.find(i=>i.role_id===1))==null?void 0:j.status})})}):e.jsxs(l,{children:[e.jsx(r,{children:e.jsx(d,{children:"Evaluasi"})}),e.jsx(t,{children:e.jsx(S,{value:m,onChange:i=>T(i.target.value)})}),e.jsxs(q,{children:[e.jsx(o,{onClick:()=>x("Diterima"),disabled:m==="",children:"Terima"}),e.jsx(o,{onClick:()=>x("Ditolak"),disabled:m==="",children:"Tolak"})]})]})]})}export{L as default};
