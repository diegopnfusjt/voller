(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{351:function(e,t,a){"use strict";a.r(t);var n=a(46),c=a(127);t.default=(e={})=>{const{ebitStoreId:t}=e;if(t){const e=window.storefrontApp&&window.storefrontApp.router;if(e){const a=({name:e,params:a})=>{"confirmation"===e&&c.a.fetchOrder(a.id).then(e=>{const a=c.a.getCustomer();let o="storeId=".concat(t,"&mktSaleId=0&platform=ecomplus")+"&totalSpent=".concat(e.amount.total)+"&deliveryTax=".concat(e.amount.freight||0)+"&transactionId=".concat(e.number||e._id)+"&email=".concat(a.main_email);if(a.gender&&(o+="&gender=".concat(a.gender.toUpperCase())),a.birth_date){const{day:e,month:t,year:n}=a.birth_date;o+="&birthday=".concat(e.padStart(2,"0"),"-").concat(t.padStart(2,"0"),"-").concat(n)}const{items:r}=e;if(r&&r.length){let e=r[0].sku,t=Object(n.a)(r[0]),a=r[0].quantity,c=encodeURIComponent(r[0].name);for(let o=1;o<r.length;o++)e+="|".concat(r[o].sku),t+="|".concat(Object(n.a)(r[o])),a+="|".concat(r[o].quantity),c+="|".concat(encodeURIComponent(r[o].name));o+="&sku=".concat(e,"&value=").concat(t,"&quantity=").concat(a,"&productName=").concat(c)}if(e.shipping_lines&&e.shipping_lines[0]){const t=e.shipping_lines[0];o+="&deliveryTime=".concat(t.delivery_time.days||0)+"&zipCode=".concat(t.to.zip)}if(e.transactions&&e.transactions[0]){const t=e.transactions[0];switch(o+="&parcels=".concat(t.installments&&t.installments.number||1),o+="&paymentType=",t.payment_method.code){case"credit_card":o+="05";break;case"banking_billet":o+="08";break;case"debit_card":case"online_debit":case"account_deposit":o+="28";break;case"loyalty_points":o+="24";break;default:o+="14"}if(t.credit_card&&t.credit_card.company)switch(o+="&cardFlag=",t.credit_card.company.toLowerCase()){case"visa":o+=6;break;case"mastercard":o+=5;break;case"american express":case"amex":o+=1;break;case"elo":o+=8;break;case"aura":o+=2;break;case"hipercard":o+=4;break;case"diners club":o+=3;break;default:o+=7}}const i=setInterval(()=>{const e=document.getElementById("confirmation");e&&(e.insertAdjacentHTML("beforeend",'<div>\n                      <param id="ebitParam" value="'.concat(o,'">\n                      <a id="bannerEbit"></a>\n                      <script\n                        type="text/javascript"\n                        id="getSelo"\n                        src="https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?').concat(t,'&lightbox=true"\n                      ><\/script>\n                    </div>')),clearInterval(i))},200)}).catch(console.error)};e.currentRoute&&a(e.currentRoute),e.afterEach(a)}}else console.error(new Error("Can't show lightbox without `ebitStoreId` option"))}}}]);
//# sourceMappingURL=a4d3e848e4e170614bad.js.map