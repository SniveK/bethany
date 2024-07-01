import{r as b,j as e,Y as _,a as C,y}from"./app-QtLMszpj.js";import{A as S}from"./AuthenticatedLayout-CJRPpizJ.js";import{B as h}from"./index-P_ylTbXi.js";import{C as r,a as l,b as d,c as m,d as g}from"./card-D_tEj0iL.js";import{T as x,d as u,b as i,e as a,a as q,c}from"./table-8NJb5oIK.js";import{a as j,f}from"./utilities-DewVcqoP.js";import{T as N}from"./textarea-DGUU-SEx.js";function E({auth:k,survey:s}){const[o,p]=b.useState(""),T=()=>{y.post(route("surveyor.survey.hasil",s.id),{comment:o})};return e.jsxs(S,{user:k.user,title:"Survey",children:[e.jsx(_,{title:"Survey"}),e.jsx("div",{className:"flex ",children:e.jsx(C,{href:route("surveyor.survey.index"),children:e.jsx(h,{children:"Back"})})}),e.jsxs(r,{"x-chunk":"dashboard-06-chunk-0",children:[e.jsx(l,{children:e.jsx(d,{children:"Data Penerima Diakonia"})}),e.jsx(m,{children:e.jsx(x,{children:e.jsxs(u,{children:[e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Nama Depan"}),e.jsx(a,{className:"font-medium",children:s.diakonia.requester_first_name})]}),e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Nama Belakang"}),e.jsx(a,{className:"font-medium",children:s.diakonia.requester_last_name})]}),e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Nomor Telepon"}),e.jsx(a,{className:"font-medium",children:s.diakonia.requester_phone_number})]}),e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Tanggal Lahir"}),e.jsx(a,{className:"font-medium",children:j(s.diakonia.requester_birth_date)})]}),e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Tanggal Permintaan"}),e.jsx(a,{className:"font-medium",children:j(s.diakonia.request_date)})]}),e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Nama Family Altar"}),e.jsx(a,{className:"font-medium",children:s.diakonia.family_altar.name})]}),e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Alamat Family Altar"}),e.jsx(a,{className:"font-medium",children:s.diakonia.family_altar.address})]}),e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Ketua Family Altar"}),e.jsx(a,{className:"font-medium",children:s.diakonia.family_altar.address})]}),e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Status"}),e.jsx(a,{className:"font-medium",children:s.status})]})]})})})]}),e.jsxs(r,{"x-chunk":"dashboard-06-chunk-0",children:[e.jsx(l,{children:e.jsx(d,{children:"Diakonia"})}),e.jsx(m,{children:e.jsxs(x,{children:[e.jsx(q,{children:e.jsxs(i,{children:[e.jsx(c,{children:"Tipe Diakonia"}),e.jsx(c,{children:"Jumlah"}),e.jsx(c,{children:"Notes"})]})}),e.jsxs(u,{children:[s.diakonia.requester_help.map((n,t)=>e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:n.type}),e.jsx(a,{className:"font-medium",children:f(n.amount)}),e.jsx(a,{className:"font-medium",children:n.notes})]},t)),e.jsxs(i,{children:[e.jsx(a,{className:"font-medium me-auto",children:"Total"}),e.jsx(a,{className:"font-medium",children:f(s.diakonia.requester_help.reduce((n,t)=>n+t.amount,0))}),e.jsx(a,{className:"font-medium"})]})]})]})})]}),s.survey?e.jsxs(r,{children:[e.jsx(l,{children:e.jsx(d,{className:"text-center",children:"Survey sudah dilakukan"})}),e.jsx(m,{children:e.jsx(N,{value:s.survey,disabled:!0})})]}):e.jsxs(r,{children:[e.jsx(l,{children:e.jsx(d,{children:"Hasil Survey"})}),e.jsx(m,{children:e.jsx(N,{value:o,onChange:n=>p(n.target.value)})}),e.jsx(g,{children:e.jsx(h,{onClick:T,children:"Simpan"})})]})]})}export{E as default};