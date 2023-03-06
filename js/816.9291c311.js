"use strict";(globalThis["webpackChunkopenaimart"]=globalThis["webpackChunkopenaimart"]||[]).push([[816],{1816:(e,t,l)=>{l.d(t,{H:()=>i,N$:()=>r});var o=l(7141),a=l(4747);const n={apiKey:"AIzaSyCUMlsEn03o-yH94cFQevVLcydACVOqsgU",authDomain:"openaimart.firebaseapp.com",databaseURL:"https://openaimart-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"openaimart",storageBucket:"openaimart.appspot.com",messagingSenderId:"451690367206",appId:"1:451690367206:web:285695319035c009625327",measurementId:"G-2F5QCV37XB"},i=(0,o.ZF)(n),r=(0,a.N8)()},8341:(e,t,l)=>{l.d(t,{s:()=>i});var o=l(1809),a=function(e,t,l,o){function a(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,n){function i(e){try{s(o.next(e))}catch(t){n(t)}}function r(e){try{s(o["throw"](e))}catch(t){n(t)}}function s(e){e.done?l(e.value):a(e.value).then(i,r)}s((o=o.apply(e,t||[])).next())}))};const n={engine:"text-davinci-002",preprompt:"This is a preprompt.",prompt:"This is a prompt.",result:"",temperature:1,max_tokens:128,top_p:.5,frequency_penalty:0,presence_penalty:0,stop:null,best_of:1,title:"Untitled",author_name:"",author_id:"",tags:null},i=(0,o.Q_)("oai",{state:()=>({gpt:{},apiInfo:{api_type:"azure",azure_openai_name:localStorage.getItem("azure_openai_name")||"",api_version:"2022-12-01",api_key:localStorage.getItem("api_key")||""},promptId:""}),getters:{},actions:{resetGPT:function(){for(const e in n)this.gpt[e]=n[e]},fetchGPT:function(){return a(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");const e=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/${this.gpt.engine}/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({prompt:this.gpt.preprompt+this.gpt.prompt,max_tokens:"string"==typeof this.gpt.max_tokens?parseInt(this.gpt.max_tokens):this.gpt.max_tokens,temperature:this.gpt.temperature,top_p:this.gpt.top_p,frequency_penalty:this.gpt.frequency_penalty,presence_penalty:this.gpt.presence_penalty,stop:this.gpt.stop,best_of:this.gpt.best_of})}),t=yield e.json();if(t.error)return console.log(t.error),void alert(t.error.message);this.gpt.result=t.choices[0].text}))},setLocalStorage:function(){localStorage.setItem("api_key",this.apiInfo.api_key),localStorage.setItem("azure_openai_name",this.apiInfo.azure_openai_name),alert("Saved to localStorage")}}})},6816:(e,t,l)=>{l.r(t),l.d(t,{default:()=>A});var o=l(9835);const a={class:"q-gutter-md row items-start full-width justify-right"},n={class:"q-mx-md"},i=(0,o._)("div",{class:"text-h5 q-mb-md"},"Prompt",-1),r={class:"q-my-md q-gutter-sm"},s={class:"q-my-md",style:{"max-width":"100%"}},p={class:"q-my-md",style:{"max-width":"100%"}},u={class:"q-my-md",style:{"max-width":"100%"}},d={class:"q-pa-md"},m=(0,o._)("div",{class:"text-h5 q-mb-md"},"Parameters",-1);function c(e,t,l,c,h,g){const f=(0,o.up)("q-btn"),y=(0,o.up)("q-input"),v=(0,o.up)("q-select"),_=(0,o.up)("q-slider"),w=(0,o.up)("q-splitter"),b=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(b,{class:"row q-pa-md"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o.Wm)(f,{class:"row q-pa-md",onClick:t[0]||(t[0]=t=>e.$router.replace("/prompts")),color:"primary",icon:"arrow_back",label:"Back",flat:"",dense:"","no-wrap":""}),(0,o.Wm)(y,{modelValue:e.gpt.title,"onUpdate:modelValue":t[1]||(t[1]=t=>e.gpt.title=t),class:"text-h4 col-12 col-md-6",hint:"Title",disable:!e.newMode},null,8,["modelValue","disable"]),(0,o.Wm)(v,{filled:"",class:"col-*",label:"Tags",modelValue:e.gpt.tags,"onUpdate:modelValue":t[2]||(t[2]=t=>e.gpt.tags=t),"use-input":"","use-chips":"",multiple:"","max-values":"5",hint:"Max 5 tags","input-debounce":"0",onNewValue:e.createValue},null,8,["modelValue","onNewValue"])]),(0,o.Wm)(w,{modelValue:e.splitterModel,"onUpdate:modelValue":t[22]||(t[22]=t=>e.splitterModel=t),horizontal:e.needHorizontal(),style:{height:"75vh",width:"100%"}},{before:(0,o.w5)((()=>{var l;return[(0,o._)("div",n,[i,(0,o._)("div",r,[(0,o.Wm)(f,{onClick:e.complete,color:"primary",icon:"input",label:"Run"},null,8,["onClick"]),e.isAuth&&(e.newMode||e.editMode)?((0,o.wg)(),(0,o.j4)(f,{key:0,onClick:t[3]||(t[3]=t=>e.$router.push("/deploy")),color:"primary",icon:"code",label:"Create API & Chatbot"})):(0,o.kq)("",!0),e.isAuth&&e.newMode?((0,o.wg)(),(0,o.j4)(f,{key:1,onClick:t[4]||(t[4]=t=>{e.publish()}),color:"primary",icon:"publish",label:"Publish New Prompt"})):(0,o.kq)("",!0),e.isAuth&&e.editMode?((0,o.wg)(),(0,o.j4)(f,{key:2,onClick:t[5]||(t[5]=t=>e.updatePrompt()),color:"primary",icon:"edit",label:"Finish Editing"})):(0,o.kq)("",!0),e.isAuth&&e.newMode?((0,o.wg)(),(0,o.j4)(f,{key:3,onClick:t[6]||(t[6]=t=>e.saveDraft()),color:"primary",icon:"save",label:"Save as Draft"})):(0,o.kq)("",!0),e.isAuth&&e.oai.promptId==(null===(l=e.auth.currentUser)||void 0===l?void 0:l.uid)?((0,o.wg)(),(0,o.j4)(f,{key:4,onClick:t[7]||(t[7]=t=>{e.deleteDraft(),e.$router.push("/create?m=new")}),color:"red",icon:"delete",label:"Delete Draft"})):(0,o.kq)("",!0)]),(0,o._)("div",s,[(0,o.Wm)(y,{modelValue:e.gpt.preprompt,"onUpdate:modelValue":t[8]||(t[8]=t=>e.gpt.preprompt=t),filled:"",type:"textarea",hint:"Pre-prompt Text",autogrow:""},null,8,["modelValue"])]),(0,o._)("div",p,[(0,o.Wm)(y,{modelValue:e.gpt.prompt,"onUpdate:modelValue":t[9]||(t[9]=t=>e.gpt.prompt=t),filled:"",type:"textarea",hint:"Prompt Text",autogrow:""},null,8,["modelValue"])]),(0,o._)("div",u,[(0,o.Wm)(y,{modelValue:e.gpt.result,"onUpdate:modelValue":t[10]||(t[10]=t=>e.gpt.result=t),filled:"",type:"textarea",hint:"Result",autogrow:""},null,8,["modelValue"])])])]})),after:(0,o.w5)((()=>[(0,o._)("div",d,[m,(0,o.Wm)(y,{class:"q-my-md",filled:"","bottom-slots":"",modelValue:e.apiInfo.azure_openai_name,"onUpdate:modelValue":t[12]||(t[12]=t=>e.apiInfo.azure_openai_name=t),label:"Azure OpenAI Service Name"},{hint:(0,o.w5)((()=>[(0,o.Uk)(" Azure OpenAI Service Name ")])),after:(0,o.w5)((()=>[(0,o.Wm)(f,{onClick:t[11]||(t[11]=t=>e.oai.setLocalStorage()),round:"",dense:"",flat:"",icon:"save"})])),_:1},8,["modelValue"]),(0,o.Wm)(y,{class:"q-my-md",type:"password",filled:"","bottom-slots":"",modelValue:e.apiInfo.api_key,"onUpdate:modelValue":t[14]||(t[14]=t=>e.apiInfo.api_key=t),label:"Azure OpenAI Key"},{hint:(0,o.w5)((()=>[(0,o.Uk)(" Azure OpenAI Key ")])),after:(0,o.w5)((()=>[(0,o.Wm)(f,{onClick:t[13]||(t[13]=t=>e.oai.setLocalStorage()),round:"",dense:"",flat:"",icon:"save"})])),_:1},8,["modelValue"]),(0,o.Wm)(y,{class:"q-my-md",filled:"",modelValue:e.gpt.engine,"onUpdate:modelValue":t[15]||(t[15]=t=>e.gpt.engine=t),label:"Model"},null,8,["modelValue"]),(0,o.Wm)(y,{class:"q-my-md",ref:"inputRef",filled:"",modelValue:e.gpt.max_tokens,"onUpdate:modelValue":t[16]||(t[16]=t=>e.gpt.max_tokens=t),label:"Number of tokens to generate in a response",hint:"Supports a maximum of 2048 tokens",rules:[e=>!!e||"* Required",e=>e>0&&e<=2048||"Please input 0 - 2048"],"lazy-rules":""},null,8,["modelValue","rules"]),(0,o.Wm)(v,{filled:"",class:"q-my-md",label:"Stop sequences",modelValue:e.gpt.stop,"onUpdate:modelValue":t[17]||(t[17]=t=>e.gpt.stop=t),"use-input":"","use-chips":"",multiple:"","input-debounce":"0",onNewValue:e.createValue,options:e.filterOptions},null,8,["modelValue","onNewValue","options"]),(0,o.Wm)(_,{class:"q-my-md",modelValue:e.gpt.temperature,"onUpdate:modelValue":t[18]||(t[18]=t=>e.gpt.temperature=t),"label-value":"Temperature: "+e.gpt.temperature,"label-always":"",min:0,step:.1,max:1},null,8,["modelValue","label-value","step"]),(0,o.Wm)(_,{class:"q-my-md",modelValue:e.gpt.top_p,"onUpdate:modelValue":t[19]||(t[19]=t=>e.gpt.top_p=t),"label-value":"Top probabilities: "+e.gpt.top_p,"label-always":"",min:0,step:.1,max:1},null,8,["modelValue","label-value","step"]),(0,o.Wm)(_,{class:"q-my-md",modelValue:e.gpt.frequency_penalty,"onUpdate:modelValue":t[20]||(t[20]=t=>e.gpt.frequency_penalty=t),"label-value":"Frequency penalty: "+e.gpt.frequency_penalty,"label-always":"",min:0,step:.1,max:2},null,8,["modelValue","label-value","step"]),(0,o.Wm)(_,{class:"q-my-md",modelValue:e.gpt.presence_penalty,"onUpdate:modelValue":t[21]||(t[21]=t=>e.gpt.presence_penalty=t),"label-value":"Presence penalty: "+e.gpt.presence_penalty,"label-always":"",min:0,step:.1,max:2},null,8,["modelValue","label-value","step"])])])),_:1},8,["modelValue","horizontal"])])),_:1})}var h=l(499),g=l(8341),f=l(4836),y=l(1816),v=l(4747),_=l(8339),w=l(6950),b=l(9302),V=function(e,t,l,o){function a(e){return e instanceof l?e:new l((function(t){t(e)}))}return new(l||(l=Promise))((function(l,n){function i(e){try{s(o.next(e))}catch(t){n(t)}}function r(e){try{s(o["throw"](e))}catch(t){n(t)}}function s(e){e.done?l(e.value):a(e.value).then(i,r)}s((o=o.apply(e,t||[])).next())}))};const k=(0,o.aZ)({name:"CreatePage",components:{},mounted(){const e=(0,f.v0)(y.H);(0,f.Aj)(e,(e=>{e?console.log("user logged in: ",e):console.log("user logged out")}))},setup(){const e=(0,b.Z)(),t=(0,f.v0)(y.H),l=(0,h.iH)(!1),o=(0,h.iH)(!1),a=(0,h.iH)(!1),n=(0,_.yj)(),i=["END","->","User:"],r=(0,h.iH)(i),s=(0,g.s)(),p=s.gpt,u=s.apiInfo,d=()=>V(this,void 0,void 0,(function*(){w.Z.show(),p.result="",yield s.fetchGPT(),w.Z.hide()})),m=()=>V(this,void 0,void 0,(function*(){var l,o,a;if(w.Z.show(),null===(null===(l=t.currentUser)||void 0===l?void 0:l.uid))throw new Error("User should not be null");{p.author_id=null===(o=t.currentUser)||void 0===o?void 0:o.uid,p.author_name=null===(a=t.currentUser)||void 0===a?void 0:a.displayName;const e=(0,v.VF)((0,v.iU)((0,v.iH)(y.N$),"prompts")).key;if(null==p.stop&&(p.stop=[]),null==p.tags&&(p.tags=[]),null===e)throw new Error("Key should not be null");(0,v.Vx)((0,v.iU)((0,v.iH)(y.N$),"prompts/"+e),p)}w.Z.hide(),e.dialog({title:"Published",message:p.title+" is published successfully!"}).onOk((()=>{window.location.href="/prompts"}))})),c=()=>V(this,void 0,void 0,(function*(){var l,o,a;if(w.Z.show(),null===(null===(l=t.currentUser)||void 0===l?void 0:l.uid))throw new Error("User should not be null");{p.author_id=null===(o=t.currentUser)||void 0===o?void 0:o.uid,p.author_name=null===(a=t.currentUser)||void 0===a?void 0:a.displayName;const e=p.title;if(null==p.stop&&(p.stop=[]),null==p.tags&&(p.tags=[]),null===e)throw new Error("Key should not be null");(0,v.Vx)((0,v.iU)((0,v.iH)(y.N$),`draft_prompts/${p.author_id}/${e}`),p),s.promptId=e}w.Z.hide(),e.dialog({title:"Published",message:p.title+" is published successfully!"})})),k=()=>V(this,void 0,void 0,(function*(){var l,o;if(w.Z.show(),null===(null===(l=t.currentUser)||void 0===l?void 0:l.uid))throw new Error("User should not be null");{const e=p.title;yield(0,v.Od)((0,v.iU)((0,v.iH)(y.N$),`draft_prompts/${null===(o=t.currentUser)||void 0===o?void 0:o.uid}/${e}`)),s.promptId=""}w.Z.hide(),e.dialog({title:"Deleted",message:p.title+" is deleted successfully!"}),s.resetGPT()})),U=()=>V(this,void 0,void 0,(function*(){var l,o,a;if(w.Z.show(),null===(null===(l=t.currentUser)||void 0===l?void 0:l.uid))throw new Error("User should not be null");p.author_id=null===(o=t.currentUser)||void 0===o?void 0:o.uid,p.author_name=null===(a=t.currentUser)||void 0===a?void 0:a.displayName,null==p.stop&&(p.stop=[]),null==p.tags&&(p.tags=[]),(0,v.Vx)((0,v.iU)((0,v.iH)(y.N$),"prompts/"+s.promptId),p),w.Z.hide(),q(),e.dialog({title:"Updated",message:p.title+" is updated successfully!"})})),q=()=>{var e;switch(o.value=!1,a.value=!1,n.query.m){case"new":o.value=!0;break;case"edit":(null===(e=t.currentUser)||void 0===e?void 0:e.uid)===p.author_id&&(a.value=!0);break;default:break}};return q(),(0,f.Aj)(t,(e=>V(this,void 0,void 0,(function*(){e?l.value=!0:(console.log("Please sign in"),l.value=!1),q()})))),{isAuth:l,auth:t,gpt:p,apiInfo:u,complete:d,publish:m,saveDraft:c,deleteDraft:k,updatePrompt:U,updateMode:q,oai:s,splitterModel:(0,h.iH)(60),filterOptions:r,createValue(e,t){e.length>2&&(i.includes(e)||t(e,"add-unique"))},apiKey:(0,h.iH)(""),needHorizontal(){return!(window.innerWidth>window.innerHeight)},newMode:o,editMode:a}}});var U=l(1639),q=l(9885),x=l(4455),I=l(6611),P=l(6997),S=l(7498),N=l(8423),W=l(9984),Z=l.n(W);const z=(0,U.Z)(k,[["render",c]]),A=z;Z()(k,"components",{QPage:q.Z,QBtn:x.Z,QInput:I.Z,QSelect:P.Z,QSplitter:S.Z,QSlider:N.Z})}}]);