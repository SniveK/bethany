function e(r){const t=r.replace(/\D/g,"");return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(t)}function a(r){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(r)}function o(r){return new Date(r).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}export{o as a,e as b,a as f};
