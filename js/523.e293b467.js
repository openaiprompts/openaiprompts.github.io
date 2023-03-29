"use strict";(globalThis["webpackChunkopenaimart"]=globalThis["webpackChunkopenaimart"]||[]).push([[523],{1816:(e,t,o)=>{o.d(t,{H:()=>i,N$:()=>r});var l=o(7141),a=o(4747);const n={apiKey:"AIzaSyCUMlsEn03o-yH94cFQevVLcydACVOqsgU",authDomain:"openaimart.firebaseapp.com",databaseURL:"https://openaimart-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"openaimart",storageBucket:"openaimart.appspot.com",messagingSenderId:"451690367206",appId:"1:451690367206:web:285695319035c009625327",measurementId:"G-2F5QCV37XB"},i=(0,l.ZF)(n),r=(0,a.N8)()},8341:(e,t,o)=>{o.d(t,{s:()=>i});var l=o(1809),a=function(e,t,o,l){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function i(e){try{s(l.next(e))}catch(t){n(t)}}function r(e){try{s(l["throw"](e))}catch(t){n(t)}}function s(e){e.done?o(e.value):a(e.value).then(i,r)}s((l=l.apply(e,t||[])).next())}))};const n={engine:"text-davinci-003",preprompt:"This is a preprompt.",prompt:"This is a prompt.",result:"",temperature:.3,max_tokens:128,top_p:1,frequency_penalty:0,presence_penalty:0,stop:null,best_of:1,title:"Untitled",author_name:"",author_id:"",tags:null},i=(0,l.Q_)("oai",{state:()=>({gpt:{},apiInfo:{api_type:"azure",azure_openai_name:localStorage.getItem("azure_openai_name")||"",api_version:"2023-03-15-preview",api_key:localStorage.getItem("api_key")||""},chatgpt_tokens:0,promptId:""}),getters:{},actions:{resetGPT:function(){for(const e in n)this.gpt[e]=n[e]},fetchHtmlCode:function(e){var t;return a(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let o=null;o=this.gpt.stop,(null===(t=this.gpt.stop)||void 0===t?void 0:t.length)&&(o=this.gpt.stop);const l=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/text-davinci-003/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({prompt:e,max_tokens:2048,temperature:0,top_p:1,frequency_penalty:0,presence_penalty:0,stop:null})}),a=yield l.json();return a.error?(console.log(a.error),void alert(a.error.message)):a.choices[0].text}))},fetchGPT:function(){return a(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let e=this.gpt.stop;console.log("stopValue",e),0===(null===e||void 0===e?void 0:e.length)&&(e=null);const t=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/${this.gpt.engine}/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({prompt:this.gpt.preprompt+this.gpt.prompt,max_tokens:"string"==typeof this.gpt.max_tokens?parseInt(this.gpt.max_tokens):this.gpt.max_tokens,temperature:this.gpt.temperature,top_p:this.gpt.top_p,frequency_penalty:this.gpt.frequency_penalty,presence_penalty:this.gpt.presence_penalty,stop:e})}),o=yield t.json();if(o.error)return console.log(o.error),void alert(o.error.message);console.log(o),this.gpt.result=o.choices[0].text}))},fetchChatGPT:function(e){return a(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let t=this.gpt.stop;console.log("stopValue",t),0===(null===t||void 0===t?void 0:t.length)&&(t=null);const o=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/${this.gpt.engine}/chat/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({messages:[{role:"system",content:this.gpt.preprompt}].concat(e),max_tokens:"string"==typeof this.gpt.max_tokens?parseInt(this.gpt.max_tokens):this.gpt.max_tokens,temperature:this.gpt.temperature,top_p:this.gpt.top_p,frequency_penalty:this.gpt.frequency_penalty,presence_penalty:this.gpt.presence_penalty,stop:t})}),l=yield o.json();return l.error?(console.log(l.error),void alert(l.error.message)):(console.log(l),this.chatgpt_tokens=l.usage.total_tokens,l.choices[0].message)}))},setLocalStorage:function(){localStorage.setItem("api_key",this.apiInfo.api_key),localStorage.setItem("azure_openai_name",this.apiInfo.azure_openai_name),alert("Saved to localStorage")}}})},523:(e,t,o)=>{o.r(t),o.d(t,{default:()=>C});var l=o(9835);const a={class:"q-gutter-md row items-start full-width justify-right"},n={class:"q-mx-md"},i=(0,l._)("div",{class:"text-h5 q-mb-md"},"Prompt",-1),r={class:"q-my-md q-gutter-sm"},s={class:"q-my-md",style:{"max-width":"100%"}},p={class:"q-my-md",style:{"max-width":"100%"}},u={class:"q-my-md",style:{"max-width":"100%"}},d={class:"q-pa-md"},m=(0,l._)("div",{class:"text-h5 q-mb-md"},"Parameters",-1);function c(e,t,o,c,h,g){const y=(0,l.up)("q-btn"),f=(0,l.up)("q-input"),v=(0,l.up)("q-select"),_=(0,l.up)("q-slider"),w=(0,l.up)("q-splitter"),k=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(k,{class:"row q-pa-md"},{default:(0,l.w5)((()=>[(0,l._)("div",a,[(0,l.Wm)(y,{class:"row q-pa-md",onClick:t[0]||(t[0]=t=>e.$router.replace("/prompts")),color:"primary",icon:"arrow_back",label:"Back",flat:"",dense:"","no-wrap":""}),(0,l.Wm)(f,{modelValue:e.gpt.title,"onUpdate:modelValue":t[1]||(t[1]=t=>e.gpt.title=t),class:"text-h4 col-12 col-md-6",hint:"Title",disable:!e.newMode},null,8,["modelValue","disable"]),(0,l.Wm)(v,{filled:"",class:"col-*",label:"Tags",modelValue:e.gpt.tags,"onUpdate:modelValue":t[2]||(t[2]=t=>e.gpt.tags=t),"use-input":"","use-chips":"",multiple:"","max-values":"5",hint:"Max 5 tags","input-debounce":"0",onNewValue:e.createValue},null,8,["modelValue","onNewValue"])]),(0,l.Wm)(w,{modelValue:e.splitterModel,"onUpdate:modelValue":t[22]||(t[22]=t=>e.splitterModel=t),horizontal:e.needHorizontal(),style:{height:"75vh",width:"100%"}},{before:(0,l.w5)((()=>[(0,l._)("div",n,[i,(0,l._)("div",r,[(0,l.Wm)(y,{onClick:e.complete,color:"primary",icon:"input",label:"Run"},null,8,["onClick"]),e.isAuth&&(e.newMode||e.editMode)?((0,l.wg)(),(0,l.j4)(y,{key:0,onClick:t[3]||(t[3]=t=>e.$router.push("/deploy")),color:"primary",icon:"code",label:"Deploy"})):(0,l.kq)("",!0),e.isAuth&&e.newMode?((0,l.wg)(),(0,l.j4)(y,{key:1,onClick:t[4]||(t[4]=t=>{e.publish()}),color:"primary",icon:"publish",label:"Publish New Prompt"})):(0,l.kq)("",!0),e.isAuth&&e.editMode?((0,l.wg)(),(0,l.j4)(y,{key:2,onClick:t[5]||(t[5]=t=>e.updatePrompt()),color:"primary",icon:"edit",label:"Finish Editing"})):(0,l.kq)("",!0),e.isAuth&&e.newMode?((0,l.wg)(),(0,l.j4)(y,{key:3,onClick:t[6]||(t[6]=t=>e.saveDraft()),color:"primary",icon:"save",label:"Save as Draft"})):(0,l.kq)("",!0),e.isAuth&&e.newMode?((0,l.wg)(),(0,l.j4)(y,{key:4,onClick:t[7]||(t[7]=t=>{e.deleteDraft(),e.$router.push("/create?m=new")}),color:"red",icon:"delete",label:"Delete Draft"})):(0,l.kq)("",!0)]),(0,l._)("div",s,[(0,l.Wm)(f,{modelValue:e.gpt.preprompt,"onUpdate:modelValue":t[8]||(t[8]=t=>e.gpt.preprompt=t),filled:"",type:"textarea",hint:"Pre-prompt Text",autogrow:""},null,8,["modelValue"])]),(0,l._)("div",p,[(0,l.Wm)(f,{modelValue:e.gpt.prompt,"onUpdate:modelValue":t[9]||(t[9]=t=>e.gpt.prompt=t),filled:"",type:"textarea",hint:"Prompt Text",autogrow:""},null,8,["modelValue"])]),(0,l._)("div",u,[(0,l.Wm)(f,{modelValue:e.gpt.result,"onUpdate:modelValue":t[10]||(t[10]=t=>e.gpt.result=t),filled:"",type:"textarea",hint:"Result",autogrow:""},null,8,["modelValue"])])])])),after:(0,l.w5)((()=>[(0,l._)("div",d,[m,(0,l.Wm)(f,{class:"q-my-md",filled:"","bottom-slots":"",modelValue:e.apiInfo.azure_openai_name,"onUpdate:modelValue":t[12]||(t[12]=t=>e.apiInfo.azure_openai_name=t),label:"Azure OpenAI Service Name"},{hint:(0,l.w5)((()=>[(0,l.Uk)(" Azure OpenAI Service Name ")])),after:(0,l.w5)((()=>[(0,l.Wm)(y,{onClick:t[11]||(t[11]=t=>e.oai.setLocalStorage()),round:"",dense:"",flat:"",icon:"save"})])),_:1},8,["modelValue"]),(0,l.Wm)(f,{class:"q-my-md",type:"password",filled:"","bottom-slots":"",modelValue:e.apiInfo.api_key,"onUpdate:modelValue":t[14]||(t[14]=t=>e.apiInfo.api_key=t),label:"Azure OpenAI Key"},{hint:(0,l.w5)((()=>[(0,l.Uk)(" Azure OpenAI Key ")])),after:(0,l.w5)((()=>[(0,l.Wm)(y,{onClick:t[13]||(t[13]=t=>e.oai.setLocalStorage()),round:"",dense:"",flat:"",icon:"save"})])),_:1},8,["modelValue"]),(0,l.Wm)(f,{class:"q-my-md",filled:"",modelValue:e.gpt.engine,"onUpdate:modelValue":t[15]||(t[15]=t=>e.gpt.engine=t),label:"Model"},null,8,["modelValue"]),(0,l.Wm)(f,{class:"q-my-md",ref:"inputRef",filled:"",modelValue:e.gpt.max_tokens,"onUpdate:modelValue":t[16]||(t[16]=t=>e.gpt.max_tokens=t),label:"Number of tokens to generate in a response",hint:"Supports a maximum of 2048 tokens",rules:[e=>!!e||"* Required",e=>e>0&&e<=2048||"Please input 0 - 2048"],"lazy-rules":""},null,8,["modelValue","rules"]),(0,l.Wm)(v,{filled:"",class:"q-my-md",label:"Stop sequences",modelValue:e.gpt.stop,"onUpdate:modelValue":t[17]||(t[17]=t=>e.gpt.stop=t),"use-input":"","use-chips":"",multiple:"","input-debounce":"0",onNewValue:e.createValue,options:e.filterOptions},null,8,["modelValue","onNewValue","options"]),(0,l.Wm)(_,{class:"q-my-md",modelValue:e.gpt.temperature,"onUpdate:modelValue":t[18]||(t[18]=t=>e.gpt.temperature=t),"label-value":"Temperature: "+e.gpt.temperature,"label-always":"",min:0,step:.1,max:1},null,8,["modelValue","label-value","step"]),(0,l.Wm)(_,{class:"q-my-md",modelValue:e.gpt.top_p,"onUpdate:modelValue":t[19]||(t[19]=t=>e.gpt.top_p=t),"label-value":"Top probabilities: "+e.gpt.top_p,"label-always":"",min:0,step:.1,max:1},null,8,["modelValue","label-value","step"]),(0,l.Wm)(_,{class:"q-my-md",modelValue:e.gpt.frequency_penalty,"onUpdate:modelValue":t[20]||(t[20]=t=>e.gpt.frequency_penalty=t),"label-value":"Frequency penalty: "+e.gpt.frequency_penalty,"label-always":"",min:0,step:.1,max:2},null,8,["modelValue","label-value","step"]),(0,l.Wm)(_,{class:"q-my-md",modelValue:e.gpt.presence_penalty,"onUpdate:modelValue":t[21]||(t[21]=t=>e.gpt.presence_penalty=t),"label-value":"Presence penalty: "+e.gpt.presence_penalty,"label-always":"",min:0,step:.1,max:2},null,8,["modelValue","label-value","step"])])])),_:1},8,["modelValue","horizontal"])])),_:1})}var h=o(499),g=o(8341),y=o(4836),f=o(1816),v=o(4747),_=o(8339),w=o(6950),k=o(9302),b=o(2100),V=function(e,t,o,l){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function i(e){try{s(l.next(e))}catch(t){n(t)}}function r(e){try{s(l["throw"](e))}catch(t){n(t)}}function s(e){e.done?o(e.value):a(e.value).then(i,r)}s((l=l.apply(e,t||[])).next())}))};const q=(0,l.aZ)({name:"CreatePage",components:{},mounted(){return V(this,void 0,void 0,(function*(){const e=(0,y.v0)(f.H);(0,y.Aj)(e,(e=>{e?(console.log("user logged in"),this.isAuth=!0):console.log("user logged out"),this.updateMode()}));const t=yield this.getPromptId();t||b.Z.create({title:"Error",message:"Prompt not found."}).onOk((()=>{this.$router.replace("/prompts")}))}))},setup(){const e=(0,k.Z)(),t=(0,y.v0)(f.H),o=(0,h.iH)(""),l=(0,h.iH)(!1),a=(0,h.iH)(!1),n=(0,h.iH)(!1),i=(0,_.yj)(),r=["<|im_end|>","END","->","User:"],s=(0,h.iH)(r),p=(0,g.s)(),u=p.gpt,d=p.apiInfo,m=()=>V(this,void 0,void 0,(function*(){w.Z.show(),u.result="",yield p.fetchGPT(),w.Z.hide()})),c=()=>V(this,void 0,void 0,(function*(){var o,l,a;if(w.Z.show(),null===(null===(o=t.currentUser)||void 0===o?void 0:o.uid))throw new Error("User should not be null");{u.author_id=null===(l=t.currentUser)||void 0===l?void 0:l.uid,u.author_name=null===(a=t.currentUser)||void 0===a?void 0:a.displayName;const e=(0,v.VF)((0,v.iU)((0,v.iH)(f.N$),"prompts")).key;if(null==u.stop&&(u.stop=[]),null==u.tags&&(u.tags=[]),null===e)throw new Error("Key should not be null");(0,v.Vx)((0,v.iU)((0,v.iH)(f.N$),"prompts/"+e),u),q()}w.Z.hide(),e.dialog({title:"Published",message:u.title+" is published successfully!"}).onOk((()=>{window.location.href="/#/prompts"}))})),b=()=>V(this,void 0,void 0,(function*(){var l,a,n;if(w.Z.show(),null===(null===(l=t.currentUser)||void 0===l?void 0:l.uid))throw new Error("User should not be null");{u.author_id=null===(a=t.currentUser)||void 0===a?void 0:a.uid,u.author_name=null===(n=t.currentUser)||void 0===n?void 0:n.displayName;const e=u.title;if(null==u.stop&&(u.stop=[]),null==u.tags&&(u.tags=[]),null===e)throw new Error("Key should not be null");(0,v.Vx)((0,v.iU)((0,v.iH)(f.N$),`draft_prompts/${u.author_id}/${e}`),u),p.promptId=e}w.Z.hide(),o.value=u.title,e.dialog({title:"Published",message:u.title+" is published successfully!"}).onOk((()=>{location.href="/#/create?m=new&id="+o.value}))})),q=()=>V(this,void 0,void 0,(function*(){var o,l;if(w.Z.show(),null===(null===(o=t.currentUser)||void 0===o?void 0:o.uid))throw new Error("User should not be null");{const e=u.title;yield(0,v.Od)((0,v.iU)((0,v.iH)(f.N$),`draft_prompts/${null===(l=t.currentUser)||void 0===l?void 0:l.uid}/${e}`)),p.promptId=""}w.Z.hide(),e.dialog({title:"Deleted",message:u.title+" is deleted successfully!"}),p.resetGPT()})),I=()=>V(this,void 0,void 0,(function*(){var o,l,a;if(w.Z.show(),null===(null===(o=t.currentUser)||void 0===o?void 0:o.uid))throw new Error("User should not be null");u.author_id=null===(l=t.currentUser)||void 0===l?void 0:l.uid,u.author_name=null===(a=t.currentUser)||void 0===a?void 0:a.displayName,null==u.stop&&(u.stop=[]),null==u.tags&&(u.tags=[]),""===p.promptId&&e.dialog({title:"Error",message:"Prompt ID is not found."}),(0,v.Vx)((0,v.iH)(f.N$,"prompts/"+p.promptId),u),U(),e.dialog({title:"Updated",message:u.title+" is updated successfully!"}),w.Z.hide()})),U=()=>{var e;switch(a.value=!1,n.value=!1,i.query.m){case"new":a.value=!0;break;case"edit":(null===(e=t.currentUser)||void 0===e?void 0:e.uid)===u.author_id&&(n.value=!0);break;default:break}},x=()=>V(this,void 0,void 0,(function*(){var e;if(!i.query.id)return"edit"!==i.query.m;o.value=i.query.id;let l=(0,v.iH)(f.N$,`prompts/${o.value}`);if(t.currentUser&&"new"===i.query.m){const a=null===(e=t.currentUser)||void 0===e?void 0:e.uid;l=(0,v.iH)(f.N$,`draft_prompts/${a}/${o.value}`)}const a=(0,v.IO)(l),n=yield(0,v.U2)(a);return!!n.exists()&&(p.gpt.engine=n.val().engine,p.gpt.preprompt=n.val().preprompt,p.gpt.prompt=n.val().prompt,p.gpt.result=n.val().result,p.gpt.temperature=n.val().temperature,p.gpt.max_tokens=n.val().max_tokens,p.gpt.top_p=n.val().top_p,p.gpt.frequency_penalty=n.val().frequency_penalty,p.gpt.presence_penalty=n.val().presence_penalty,p.gpt.stop=n.val().stop,p.gpt.tags=n.val().tags,p.gpt.title=n.val().title,p.gpt.author_id=n.val().author_id,p.gpt.author_name=n.val().author_name,p.gpt.best_of=n.val().best_of,!0)}));return{isAuth:l,auth:t,gpt:u,apiInfo:d,complete:m,publish:c,saveDraft:b,deleteDraft:q,updatePrompt:I,updateMode:U,getPromptId:x,oai:p,splitterModel:(0,h.iH)(60),filterOptions:s,createValue(e,t){e.length>2&&(r.includes(e)||t(e,"add-unique"))},apiKey:(0,h.iH)(""),needHorizontal(){return!(window.innerWidth>window.innerHeight)},newMode:a,editMode:n}}});var I=o(1639),U=o(9885),x=o(4455),P=o(6611),$=o(8401),S=o(7498),N=o(8423),T=o(9984),z=o.n(T);const H=(0,I.Z)(q,[["render",c]]),C=H;z()(q,"components",{QPage:U.Z,QBtn:x.Z,QInput:P.Z,QSelect:$.Z,QSplitter:S.Z,QSlider:N.Z})}}]);