"use strict";(globalThis["webpackChunkopenaimart"]=globalThis["webpackChunkopenaimart"]||[]).push([[939],{1816:(e,t,o)=>{o.d(t,{H:()=>i,N$:()=>s});var a=o(7141),l=o(4747);const n={apiKey:"AIzaSyCUMlsEn03o-yH94cFQevVLcydACVOqsgU",authDomain:"openaimart.firebaseapp.com",databaseURL:"https://openaimart-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"openaimart",storageBucket:"openaimart.appspot.com",messagingSenderId:"451690367206",appId:"1:451690367206:web:285695319035c009625327",measurementId:"G-2F5QCV37XB"},i=(0,a.ZF)(n),s=(0,l.N8)()},8341:(e,t,o)=>{o.d(t,{s:()=>i});var a=o(1809),l=function(e,t,o,a){function l(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function i(e){try{p(a.next(e))}catch(t){n(t)}}function s(e){try{p(a["throw"](e))}catch(t){n(t)}}function p(e){e.done?o(e.value):l(e.value).then(i,s)}p((a=a.apply(e,t||[])).next())}))};const n={engine:"text-davinci-003",preprompt:"This is a preprompt.",prompt:"This is a prompt.",result:"",temperature:.3,max_tokens:128,top_p:1,frequency_penalty:0,presence_penalty:0,stop:null,best_of:1,title:"Untitled",author_name:"",author_id:"",tags:null},i=(0,a.Q_)("oai",{state:()=>({gpt:{},apiInfo:{api_type:"azure",azure_openai_name:localStorage.getItem("azure_openai_name")||"",api_version:"2023-03-15-preview",api_key:localStorage.getItem("api_key")||""},chatgpt_tokens:0,promptId:""}),getters:{},actions:{resetGPT:function(){for(const e in n)this.gpt[e]=n[e]},fetchHtmlCode:function(e){var t;return l(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let o=null;o=this.gpt.stop,(null===(t=this.gpt.stop)||void 0===t?void 0:t.length)&&(o=this.gpt.stop);const a=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/text-davinci-003/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({prompt:e,max_tokens:2048,temperature:0,top_p:1,frequency_penalty:0,presence_penalty:0,stop:null})}),l=yield a.json();return l.error?(console.log(l.error),void alert(l.error.message)):l.choices[0].text}))},fetchGPT:function(){return l(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let e=this.gpt.stop;console.log("stopValue",e),0===(null===e||void 0===e?void 0:e.length)&&(e=null);const t=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/${this.gpt.engine}/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({prompt:this.gpt.preprompt+this.gpt.prompt,max_tokens:"string"==typeof this.gpt.max_tokens?parseInt(this.gpt.max_tokens):this.gpt.max_tokens,temperature:this.gpt.temperature,top_p:this.gpt.top_p,frequency_penalty:this.gpt.frequency_penalty,presence_penalty:this.gpt.presence_penalty,stop:e})}),o=yield t.json();if(o.error)return console.log(o.error),void alert(o.error.message);console.log(o),this.gpt.result=o.choices[0].text}))},fetchChatGPT:function(e){return l(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let t=this.gpt.stop;console.log("stopValue",t),0===(null===t||void 0===t?void 0:t.length)&&(t=null);const o=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/${this.gpt.engine}/chat/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({messages:[{role:"system",content:this.gpt.preprompt}].concat(e),max_tokens:"string"==typeof this.gpt.max_tokens?parseInt(this.gpt.max_tokens):this.gpt.max_tokens,temperature:this.gpt.temperature,top_p:this.gpt.top_p,frequency_penalty:this.gpt.frequency_penalty,presence_penalty:this.gpt.presence_penalty,stop:t})}),a=yield o.json();return a.error?(console.log(a.error),void alert(a.error.message)):(console.log(a),this.chatgpt_tokens=a.usage.total_tokens,a.choices[0].message)}))},setLocalStorage:function(){localStorage.setItem("api_key",this.apiInfo.api_key),localStorage.setItem("azure_openai_name",this.apiInfo.azure_openai_name),alert("Saved to localStorage")}}})},9939:(e,t,o)=>{o.r(t),o.d(t,{default:()=>N});var a=o(9835);const l={class:"q-gutter-md row items-start full-width justify-right"},n={class:"q-pa-md"},i={class:"q-my-md",style:{"max-width":"100%"}},s={class:"q-ma-md",style:{width:"100%","max-width":"750px",height:"50vh",margin:"auto"}},p={class:"q-pa-md"},r={class:"q-my-md",style:{"max-width":"100%"}},u={class:"q-pa-md"},d=(0,a._)("div",{class:"text-h5 q-mb-md"},"Parameters",-1);function m(e,t,o,m,c,g){const h=(0,a.up)("q-input"),f=(0,a.up)("q-btn"),y=(0,a.up)("q-chat-message"),v=(0,a.up)("q-splitter"),_=(0,a.up)("q-select"),w=(0,a.up)("q-slider"),b=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(b,{class:"row q-pa-md"},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a.Wm)(h,{modelValue:e.gpt.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.gpt.title=t),class:"text-h4 col-12 col-md-6",hint:"Title",disable:!e.newMode},null,8,["modelValue","disable"]),(0,a.Wm)(f,{onClick:t[1]||(t[1]=t=>e.messages=[]),color:"primary",icon:"cancel",label:"Clear Messages"})]),(0,a.Wm)(v,{modelValue:e.splitterModel,"onUpdate:modelValue":t[17]||(t[17]=t=>e.splitterModel=t),horizontal:e.needHorizontal(),style:{height:"75vh",width:"100%"}},{before:(0,a.w5)((()=>[(0,a.Wm)(v,{modelValue:e.splitterModel2,"onUpdate:modelValue":t[5]||(t[5]=t=>e.splitterModel2=t),horizontal:""},{before:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a._)("div",i,[(0,a.Wm)(h,{modelValue:e.gpt.preprompt,"onUpdate:modelValue":t[2]||(t[2]=t=>e.gpt.preprompt=t),filled:"",type:"textarea",hint:"System Prompt/Pre-prompt Text",autogrow:""},null,8,["modelValue"])]),(0,a._)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.messages,((e,t)=>((0,a.wg)(),(0,a.j4)(y,{"text-html":"",key:t,name:e.role,text:[e.content.replace(/(?:\r\n|\r|\n)/g,"<br/>")],sent:"user"==e.role},null,8,["name","text","sent"])))),128))])])])),after:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a._)("div",r,[(0,a.Wm)(h,{"bottom-slots":"",modelValue:e.gpt.prompt,"onUpdate:modelValue":t[4]||(t[4]=t=>e.gpt.prompt=t),filled:"",type:"textarea",hint:"Message",autogrow:""},{after:(0,a.w5)((()=>[(0,a.Wm)(f,{onClick:t[3]||(t[3]=t=>e.complete(e.messages)),round:"",dense:"",flat:"",icon:"send"})])),_:1},8,["modelValue"])])])])),_:1},8,["modelValue"])])),after:(0,a.w5)((()=>[(0,a._)("div",u,[d,(0,a.Wm)(h,{class:"q-my-md",filled:"","bottom-slots":"",modelValue:e.apiInfo.azure_openai_name,"onUpdate:modelValue":t[7]||(t[7]=t=>e.apiInfo.azure_openai_name=t),label:"Azure OpenAI Service Name"},{hint:(0,a.w5)((()=>[(0,a.Uk)(" Azure OpenAI Service Name ")])),after:(0,a.w5)((()=>[(0,a.Wm)(f,{onClick:t[6]||(t[6]=t=>e.oai.setLocalStorage()),round:"",dense:"",flat:"",icon:"save"})])),_:1},8,["modelValue"]),(0,a.Wm)(h,{class:"q-my-md",type:"password",filled:"","bottom-slots":"",modelValue:e.apiInfo.api_key,"onUpdate:modelValue":t[9]||(t[9]=t=>e.apiInfo.api_key=t),label:"Azure OpenAI Key"},{hint:(0,a.w5)((()=>[(0,a.Uk)(" Azure OpenAI Key ")])),after:(0,a.w5)((()=>[(0,a.Wm)(f,{onClick:t[8]||(t[8]=t=>e.oai.setLocalStorage()),round:"",dense:"",flat:"",icon:"save"})])),_:1},8,["modelValue"]),(0,a.Wm)(h,{class:"q-my-md",filled:"",modelValue:e.gpt.engine,"onUpdate:modelValue":t[10]||(t[10]=t=>e.gpt.engine=t),label:"Model"},null,8,["modelValue"]),(0,a.Wm)(h,{class:"q-my-md",ref:"inputRef",filled:"",modelValue:e.gpt.max_tokens,"onUpdate:modelValue":t[11]||(t[11]=t=>e.gpt.max_tokens=t),label:"Number of tokens to generate in a response",hint:"Supports a maximum of 2048 tokens",rules:[e=>!!e||"* Required",e=>e>0&&e<=2048||"Please input 0 - 2048"],"lazy-rules":""},null,8,["modelValue","rules"]),(0,a.Wm)(_,{filled:"",class:"q-my-md",label:"Stop sequences",modelValue:e.gpt.stop,"onUpdate:modelValue":t[12]||(t[12]=t=>e.gpt.stop=t),"use-input":"","use-chips":"",multiple:"","input-debounce":"0",onNewValue:e.createValue,options:e.filterOptions},null,8,["modelValue","onNewValue","options"]),(0,a.Wm)(w,{class:"q-my-md",modelValue:e.gpt.temperature,"onUpdate:modelValue":t[13]||(t[13]=t=>e.gpt.temperature=t),"label-value":"Temperature: "+e.gpt.temperature,"label-always":"",min:0,step:.1,max:1},null,8,["modelValue","label-value","step"]),(0,a.Wm)(w,{class:"q-my-md",modelValue:e.gpt.top_p,"onUpdate:modelValue":t[14]||(t[14]=t=>e.gpt.top_p=t),"label-value":"Top probabilities: "+e.gpt.top_p,"label-always":"",min:0,step:.1,max:1},null,8,["modelValue","label-value","step"]),(0,a.Wm)(w,{class:"q-my-md",modelValue:e.gpt.frequency_penalty,"onUpdate:modelValue":t[15]||(t[15]=t=>e.gpt.frequency_penalty=t),"label-value":"Frequency penalty: "+e.gpt.frequency_penalty,"label-always":"",min:0,step:.1,max:2},null,8,["modelValue","label-value","step"]),(0,a.Wm)(w,{class:"q-my-md",modelValue:e.gpt.presence_penalty,"onUpdate:modelValue":t[16]||(t[16]=t=>e.gpt.presence_penalty=t),"label-value":"Presence penalty: "+e.gpt.presence_penalty,"label-always":"",min:0,step:.1,max:2},null,8,["modelValue","label-value","step"])])])),_:1},8,["modelValue","horizontal"])])),_:1})}var c=o(499),g=o(8341),h=o(4836),f=o(1816),y=o(4747),v=o(8339),_=o(6950),w=o(9302),b=o(2100),k=function(e,t,o,a){function l(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function i(e){try{p(a.next(e))}catch(t){n(t)}}function s(e){try{p(a["throw"](e))}catch(t){n(t)}}function p(e){e.done?o(e.value):l(e.value).then(i,s)}p((a=a.apply(e,t||[])).next())}))};const V=(0,a.aZ)({name:"CreatePage",components:{},mounted(){return k(this,void 0,void 0,(function*(){const e=(0,h.v0)(f.H);(0,h.Aj)(e,(e=>{e?(console.log("user logged in"),this.isAuth=!0):console.log("user logged out"),this.updateMode()}));const t=yield this.getPromptId();t||b.Z.create({title:"Error",message:"Prompt not found."}).onOk((()=>{this.$router.replace("/prompts")}))}))},setup(){const e=(0,w.Z)(),t=(0,h.v0)(f.H),o=(0,c.iH)(""),a=(0,c.iH)(!1),l=(0,c.iH)(!1),n=(0,c.iH)(!1),i=(0,v.yj)(),s=["<|im_end|>","END","->","User:"],p=(0,c.iH)(s),r=(0,g.s)(),u=r.gpt,d=r.apiInfo;let m=(0,c.iH)([]);const b=e=>k(this,void 0,void 0,(function*(){m.value.push({role:"user",content:u.prompt}),u.prompt="",_.Z.show(),u.result="";let t=yield r.fetchChatGPT(e);m.value.push(t),_.Z.hide()})),V=()=>k(this,void 0,void 0,(function*(){var o,a,l;if(_.Z.show(),null===(null===(o=t.currentUser)||void 0===o?void 0:o.uid))throw new Error("User should not be null");{u.author_id=null===(a=t.currentUser)||void 0===a?void 0:a.uid,u.author_name=null===(l=t.currentUser)||void 0===l?void 0:l.displayName;const e=(0,y.VF)((0,y.iU)((0,y.iH)(f.N$),"prompts")).key;if(null==u.stop&&(u.stop=[]),null==u.tags&&(u.tags=[]),null===e)throw new Error("Key should not be null");(0,y.Vx)((0,y.iU)((0,y.iH)(f.N$),"prompts/"+e),u),I()}_.Z.hide(),e.dialog({title:"Published",message:u.title+" is published successfully!"}).onOk((()=>{window.location.href="/#/prompts"}))})),q=()=>k(this,void 0,void 0,(function*(){var a,l,n;if(_.Z.show(),null===(null===(a=t.currentUser)||void 0===a?void 0:a.uid))throw new Error("User should not be null");{u.author_id=null===(l=t.currentUser)||void 0===l?void 0:l.uid,u.author_name=null===(n=t.currentUser)||void 0===n?void 0:n.displayName;const e=u.title;if(null==u.stop&&(u.stop=[]),null==u.tags&&(u.tags=[]),null===e)throw new Error("Key should not be null");(0,y.Vx)((0,y.iU)((0,y.iH)(f.N$),`draft_prompts/${u.author_id}/${e}`),u),r.promptId=e}_.Z.hide(),o.value=u.title,e.dialog({title:"Published",message:u.title+" is published successfully!"}).onOk((()=>{location.href="/#/create?m=new&id="+o.value}))})),I=()=>k(this,void 0,void 0,(function*(){var o,a;if(_.Z.show(),null===(null===(o=t.currentUser)||void 0===o?void 0:o.uid))throw new Error("User should not be null");{const e=u.title;yield(0,y.Od)((0,y.iU)((0,y.iH)(f.N$),`draft_prompts/${null===(a=t.currentUser)||void 0===a?void 0:a.uid}/${e}`)),r.promptId=""}_.Z.hide(),e.dialog({title:"Deleted",message:u.title+" is deleted successfully!"}),r.resetGPT()})),U=()=>k(this,void 0,void 0,(function*(){var o,a,l;if(_.Z.show(),null===(null===(o=t.currentUser)||void 0===o?void 0:o.uid))throw new Error("User should not be null");u.author_id=null===(a=t.currentUser)||void 0===a?void 0:a.uid,u.author_name=null===(l=t.currentUser)||void 0===l?void 0:l.displayName,null==u.stop&&(u.stop=[]),null==u.tags&&(u.tags=[]),""===r.promptId&&e.dialog({title:"Error",message:"Prompt ID is not found."}),(0,y.Vx)((0,y.iH)(f.N$,"prompts/"+r.promptId),u),x(),e.dialog({title:"Updated",message:u.title+" is updated successfully!"}),_.Z.hide()})),x=()=>{var e;switch(l.value=!1,n.value=!1,i.query.m){case"new":l.value=!0;break;case"edit":(null===(e=t.currentUser)||void 0===e?void 0:e.uid)===u.author_id&&(n.value=!0);break;default:break}},P=()=>{r.gpt.engine="gpt-35-turbo",r.gpt.preprompt="",r.gpt.prompt="",r.gpt.result="",r.gpt.temperature=.3,r.gpt.max_tokens=200,r.gpt.top_p=1,r.gpt.frequency_penalty=0,r.gpt.presence_penalty=0,r.gpt.stop=["<|im_end|>"],r.gpt.tags=[],r.gpt.title="ChatGPT",r.gpt.author_id="",r.gpt.author_name="",r.gpt.best_of=1};P();const H=()=>k(this,void 0,void 0,(function*(){var e;if(!i.query.id)return"edit"!==i.query.m;o.value=i.query.id;let a=(0,y.iH)(f.N$,`prompts/${o.value}`);if(t.currentUser&&"new"===i.query.m){const l=null===(e=t.currentUser)||void 0===e?void 0:e.uid;a=(0,y.iH)(f.N$,`draft_prompts/${l}/${o.value}`)}const l=(0,y.IO)(a),n=yield(0,y.U2)(l);return!!n.exists()&&(r.gpt.engine=n.val().engine,r.gpt.preprompt=n.val().preprompt,r.gpt.prompt=n.val().prompt,r.gpt.result=n.val().result,r.gpt.temperature=n.val().temperature,r.gpt.max_tokens=n.val().max_tokens,r.gpt.top_p=n.val().top_p,r.gpt.frequency_penalty=n.val().frequency_penalty,r.gpt.presence_penalty=n.val().presence_penalty,r.gpt.stop=n.val().stop,r.gpt.tags=n.val().tags,r.gpt.title=n.val().title,r.gpt.author_id=n.val().author_id,r.gpt.author_name=n.val().author_name,r.gpt.best_of=n.val().best_of,!0)}));return{isAuth:a,auth:t,gpt:u,apiInfo:d,complete:b,publish:V,saveDraft:q,deleteDraft:I,updatePrompt:U,updateMode:x,getPromptId:H,oai:r,splitterModel:(0,c.iH)(60),splitterModel2:(0,c.iH)(80),filterOptions:p,createValue(e,t){e.length>2&&(s.includes(e)||t(e,"add-unique"))},apiKey:(0,c.iH)(""),needHorizontal(){return!(window.innerWidth>window.innerHeight)},newMode:l,editMode:n,messages:m}}});var q=o(1639),I=o(9885),U=o(4455),x=o(6611),P=o(8401),H=o(7498),S=o(396),z=o(8423),$=o(9984),T=o.n($);const Z=(0,q.Z)(V,[["render",m]]),N=Z;T()(V,"components",{QPage:I.Z,QBtn:U.Z,QInput:x.Z,QSelect:P.Z,QSplitter:H.Z,QChatMessage:S.Z,QSlider:z.Z})}}]);