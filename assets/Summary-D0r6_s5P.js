import{S as de,s as ce,g as fe,n as ne,p as ge,b as ie,r as M,c as ae,d as se,e as ve,j as f,F as me,a as pe}from"./index-Bsa_Cp8f.js";import{a as xe,s as be,u as Re,g as Ee,i as Te}from"./price-B28fIAo9.js";import{u as ye}from"./index.esm-C9sqWKGE.js";class Ce extends de{constructor(o,t){super(),this.client=o,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(o){var t;const d=this.options;this.options=this.client.defaultMutationOptions(o),ce(d,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(t=this.currentMutation)==null||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var o;(o=this.currentMutation)==null||o.removeObserver(this)}}onMutationUpdate(o){this.updateResult();const t={listeners:!0};o.type==="success"?t.onSuccess=!0:o.type==="error"&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(o,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof o<"u"?o:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const o=this.currentMutation?this.currentMutation.state:fe(),t={...o,isLoading:o.status==="loading",isSuccess:o.status==="success",isError:o.status==="error",isIdle:o.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(o){ne.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(o.onSuccess){var t,d,a,n;(t=(d=this.mutateOptions).onSuccess)==null||t.call(d,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(a=(n=this.mutateOptions).onSettled)==null||a.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(o.onError){var u,i,r,e;(u=(i=this.mutateOptions).onError)==null||u.call(i,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(r=(e=this.mutateOptions).onSettled)==null||r.call(e,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}o.listeners&&this.listeners.forEach(({listener:s})=>{s(this.currentResult)})})}}function Ne(h,o,t){const d=ge(h,o),a=ie({context:d.context}),[n]=M.useState(()=>new Ce(a,d));M.useEffect(()=>{n.setOptions(d)},[n,d]);const u=xe(M.useCallback(r=>n.subscribe(ne.batchCalls(r)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),i=M.useCallback((r,e)=>{n.mutate(r,e).catch(Be)},[n]);if(u.error&&be(n.options.useErrorBoundary,[u.error]))throw u.error;return{...u,mutate:i,mutateAsync:u.mutate}}function Be(){}var w={},S,K;function oe(){return K||(K=1,S={L:1,M:0,Q:3,H:2}),S}var H,V;function le(){return V||(V=1,H={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}),H}var I,X;function Ae(){if(X)return I;X=1;var h=le();function o(t){this.mode=h.MODE_8BIT_BYTE,this.data=t}return o.prototype={getLength:function(t){return this.data.length},write:function(t){for(var d=0;d<this.data.length;d++)t.put(this.data.charCodeAt(d),8)}},I=o,I}var Q,Y;function we(){if(Y)return Q;Y=1;var h=oe();function o(t,d){this.totalCount=t,this.dataCount=d}return o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(t,d){var a=o.getRsBlockTable(t,d);if(a==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+d);for(var n=a.length/3,u=new Array,i=0;i<n;i++)for(var r=a[i*3+0],e=a[i*3+1],s=a[i*3+2],l=0;l<r;l++)u.push(new o(e,s));return u},o.getRsBlockTable=function(t,d){switch(d){case h.L:return o.RS_BLOCK_TABLE[(t-1)*4+0];case h.M:return o.RS_BLOCK_TABLE[(t-1)*4+1];case h.Q:return o.RS_BLOCK_TABLE[(t-1)*4+2];case h.H:return o.RS_BLOCK_TABLE[(t-1)*4+3];default:return}},Q=o,Q}var U,J;function Me(){if(J)return U;J=1;function h(){this.buffer=new Array,this.length=0}return h.prototype={get:function(o){var t=Math.floor(o/8);return(this.buffer[t]>>>7-o%8&1)==1},put:function(o,t){for(var d=0;d<t;d++)this.putBit((o>>>t-d-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(o){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),o&&(this.buffer[t]|=128>>>this.length%8),this.length++}},U=h,U}var q,W;function ue(){if(W)return q;W=1;for(var h={glog:function(t){if(t<1)throw new Error("glog("+t+")");return h.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return h.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},o=0;o<8;o++)h.EXP_TABLE[o]=1<<o;for(var o=8;o<256;o++)h.EXP_TABLE[o]=h.EXP_TABLE[o-4]^h.EXP_TABLE[o-5]^h.EXP_TABLE[o-6]^h.EXP_TABLE[o-8];for(var o=0;o<255;o++)h.LOG_TABLE[h.EXP_TABLE[o]]=o;return q=h,q}var z,Z;function he(){if(Z)return z;Z=1;var h=ue();function o(t,d){if(t.length==null)throw new Error(t.length+"/"+d);for(var a=0;a<t.length&&t[a]==0;)a++;this.num=new Array(t.length-a+d);for(var n=0;n<t.length-a;n++)this.num[n]=t[n+a]}return o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var d=new Array(this.getLength()+t.getLength()-1),a=0;a<this.getLength();a++)for(var n=0;n<t.getLength();n++)d[a+n]^=h.gexp(h.glog(this.get(a))+h.glog(t.get(n)));return new o(d,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var d=h.glog(this.get(0))-h.glog(t.get(0)),a=new Array(this.getLength()),n=0;n<this.getLength();n++)a[n]=this.get(n);for(var n=0;n<t.getLength();n++)a[n]^=h.gexp(h.glog(t.get(n))+d);return new o(a,0).mod(t)}},z=o,z}var F,$;function De(){if($)return F;$=1;var h=le(),o=he(),t=ue(),d={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(n){for(var u=n<<10;a.getBCHDigit(u)-a.getBCHDigit(a.G15)>=0;)u^=a.G15<<a.getBCHDigit(u)-a.getBCHDigit(a.G15);return(n<<10|u)^a.G15_MASK},getBCHTypeNumber:function(n){for(var u=n<<12;a.getBCHDigit(u)-a.getBCHDigit(a.G18)>=0;)u^=a.G18<<a.getBCHDigit(u)-a.getBCHDigit(a.G18);return n<<12|u},getBCHDigit:function(n){for(var u=0;n!=0;)u++,n>>>=1;return u},getPatternPosition:function(n){return a.PATTERN_POSITION_TABLE[n-1]},getMask:function(n,u,i){switch(n){case d.PATTERN000:return(u+i)%2==0;case d.PATTERN001:return u%2==0;case d.PATTERN010:return i%3==0;case d.PATTERN011:return(u+i)%3==0;case d.PATTERN100:return(Math.floor(u/2)+Math.floor(i/3))%2==0;case d.PATTERN101:return u*i%2+u*i%3==0;case d.PATTERN110:return(u*i%2+u*i%3)%2==0;case d.PATTERN111:return(u*i%3+(u+i)%2)%2==0;default:throw new Error("bad maskPattern:"+n)}},getErrorCorrectPolynomial:function(n){for(var u=new o([1],0),i=0;i<n;i++)u=u.multiply(new o([1,t.gexp(i)],0));return u},getLengthInBits:function(n,u){if(1<=u&&u<10)switch(n){case h.MODE_NUMBER:return 10;case h.MODE_ALPHA_NUM:return 9;case h.MODE_8BIT_BYTE:return 8;case h.MODE_KANJI:return 8;default:throw new Error("mode:"+n)}else if(u<27)switch(n){case h.MODE_NUMBER:return 12;case h.MODE_ALPHA_NUM:return 11;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 10;default:throw new Error("mode:"+n)}else if(u<41)switch(n){case h.MODE_NUMBER:return 14;case h.MODE_ALPHA_NUM:return 13;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 12;default:throw new Error("mode:"+n)}else throw new Error("type:"+u)},getLostPoint:function(n){for(var u=n.getModuleCount(),i=0,r=0;r<u;r++)for(var e=0;e<u;e++){for(var s=0,l=n.isDark(r,e),c=-1;c<=1;c++)if(!(r+c<0||u<=r+c))for(var v=-1;v<=1;v++)e+v<0||u<=e+v||c==0&&v==0||l==n.isDark(r+c,e+v)&&s++;s>5&&(i+=3+s-5)}for(var r=0;r<u-1;r++)for(var e=0;e<u-1;e++){var g=0;n.isDark(r,e)&&g++,n.isDark(r+1,e)&&g++,n.isDark(r,e+1)&&g++,n.isDark(r+1,e+1)&&g++,(g==0||g==4)&&(i+=3)}for(var r=0;r<u;r++)for(var e=0;e<u-6;e++)n.isDark(r,e)&&!n.isDark(r,e+1)&&n.isDark(r,e+2)&&n.isDark(r,e+3)&&n.isDark(r,e+4)&&!n.isDark(r,e+5)&&n.isDark(r,e+6)&&(i+=40);for(var e=0;e<u;e++)for(var r=0;r<u-6;r++)n.isDark(r,e)&&!n.isDark(r+1,e)&&n.isDark(r+2,e)&&n.isDark(r+3,e)&&n.isDark(r+4,e)&&!n.isDark(r+5,e)&&n.isDark(r+6,e)&&(i+=40);for(var m=0,e=0;e<u;e++)for(var r=0;r<u;r++)n.isDark(r,e)&&m++;var b=Math.abs(100*m/u/u-50)/5;return i+=b*10,i}};return F=a,F}var G,ee;function Pe(){if(ee)return G;ee=1;var h=Ae(),o=we(),t=Me(),d=De(),a=he();function n(i,r){this.typeNumber=i,this.errorCorrectLevel=r,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var u=n.prototype;return u.addData=function(i){var r=new h(i);this.dataList.push(r),this.dataCache=null},u.isDark=function(i,r){if(i<0||this.moduleCount<=i||r<0||this.moduleCount<=r)throw new Error(i+","+r);return this.modules[i][r]},u.getModuleCount=function(){return this.moduleCount},u.make=function(){if(this.typeNumber<1){var i=1;for(i=1;i<40;i++){for(var r=o.getRSBlocks(i,this.errorCorrectLevel),e=new t,s=0,l=0;l<r.length;l++)s+=r[l].dataCount;for(var l=0;l<this.dataList.length;l++){var c=this.dataList[l];e.put(c.mode,4),e.put(c.getLength(),d.getLengthInBits(c.mode,i)),c.write(e)}if(e.getLengthInBits()<=s*8)break}this.typeNumber=i}this.makeImpl(!1,this.getBestMaskPattern())},u.makeImpl=function(i,r){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++){this.modules[e]=new Array(this.moduleCount);for(var s=0;s<this.moduleCount;s++)this.modules[e][s]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(i,r),this.typeNumber>=7&&this.setupTypeNumber(i),this.dataCache==null&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},u.setupPositionProbePattern=function(i,r){for(var e=-1;e<=7;e++)if(!(i+e<=-1||this.moduleCount<=i+e))for(var s=-1;s<=7;s++)r+s<=-1||this.moduleCount<=r+s||(0<=e&&e<=6&&(s==0||s==6)||0<=s&&s<=6&&(e==0||e==6)||2<=e&&e<=4&&2<=s&&s<=4?this.modules[i+e][r+s]=!0:this.modules[i+e][r+s]=!1)},u.getBestMaskPattern=function(){for(var i=0,r=0,e=0;e<8;e++){this.makeImpl(!0,e);var s=d.getLostPoint(this);(e==0||i>s)&&(i=s,r=e)}return r},u.createMovieClip=function(i,r,e){var s=i.createEmptyMovieClip(r,e),l=1;this.make();for(var c=0;c<this.modules.length;c++)for(var v=c*l,g=0;g<this.modules[c].length;g++){var m=g*l,b=this.modules[c][g];b&&(s.beginFill(0,100),s.moveTo(m,v),s.lineTo(m+l,v),s.lineTo(m+l,v+l),s.lineTo(m,v+l),s.endFill())}return s},u.setupTimingPattern=function(){for(var i=8;i<this.moduleCount-8;i++)this.modules[i][6]==null&&(this.modules[i][6]=i%2==0);for(var r=8;r<this.moduleCount-8;r++)this.modules[6][r]==null&&(this.modules[6][r]=r%2==0)},u.setupPositionAdjustPattern=function(){for(var i=d.getPatternPosition(this.typeNumber),r=0;r<i.length;r++)for(var e=0;e<i.length;e++){var s=i[r],l=i[e];if(this.modules[s][l]==null)for(var c=-2;c<=2;c++)for(var v=-2;v<=2;v++)c==-2||c==2||v==-2||v==2||c==0&&v==0?this.modules[s+c][l+v]=!0:this.modules[s+c][l+v]=!1}},u.setupTypeNumber=function(i){for(var r=d.getBCHTypeNumber(this.typeNumber),e=0;e<18;e++){var s=!i&&(r>>e&1)==1;this.modules[Math.floor(e/3)][e%3+this.moduleCount-8-3]=s}for(var e=0;e<18;e++){var s=!i&&(r>>e&1)==1;this.modules[e%3+this.moduleCount-8-3][Math.floor(e/3)]=s}},u.setupTypeInfo=function(i,r){for(var e=this.errorCorrectLevel<<3|r,s=d.getBCHTypeInfo(e),l=0;l<15;l++){var c=!i&&(s>>l&1)==1;l<6?this.modules[l][8]=c:l<8?this.modules[l+1][8]=c:this.modules[this.moduleCount-15+l][8]=c}for(var l=0;l<15;l++){var c=!i&&(s>>l&1)==1;l<8?this.modules[8][this.moduleCount-l-1]=c:l<9?this.modules[8][15-l-1+1]=c:this.modules[8][15-l-1]=c}this.modules[this.moduleCount-8][8]=!i},u.mapData=function(i,r){for(var e=-1,s=this.moduleCount-1,l=7,c=0,v=this.moduleCount-1;v>0;v-=2)for(v==6&&v--;;){for(var g=0;g<2;g++)if(this.modules[s][v-g]==null){var m=!1;c<i.length&&(m=(i[c]>>>l&1)==1);var b=d.getMask(r,s,v-g);b&&(m=!m),this.modules[s][v-g]=m,l--,l==-1&&(c++,l=7)}if(s+=e,s<0||this.moduleCount<=s){s-=e,e=-e;break}}},n.PAD0=236,n.PAD1=17,n.createData=function(i,r,e){for(var s=o.getRSBlocks(i,r),l=new t,c=0;c<e.length;c++){var v=e[c];l.put(v.mode,4),l.put(v.getLength(),d.getLengthInBits(v.mode,i)),v.write(l)}for(var g=0,c=0;c<s.length;c++)g+=s[c].dataCount;if(l.getLengthInBits()>g*8)throw new Error("code length overflow. ("+l.getLengthInBits()+">"+g*8+")");for(l.getLengthInBits()+4<=g*8&&l.put(0,4);l.getLengthInBits()%8!=0;)l.putBit(!1);for(;!(l.getLengthInBits()>=g*8||(l.put(n.PAD0,8),l.getLengthInBits()>=g*8));)l.put(n.PAD1,8);return n.createBytes(l,s)},n.createBytes=function(i,r){for(var e=0,s=0,l=0,c=new Array(r.length),v=new Array(r.length),g=0;g<r.length;g++){var m=r[g].dataCount,b=r[g].totalCount-m;s=Math.max(s,m),l=Math.max(l,b),c[g]=new Array(m);for(var p=0;p<c[g].length;p++)c[g][p]=255&i.buffer[p+e];e+=m;var R=d.getErrorCorrectPolynomial(b),E=new a(c[g],R.getLength()-1),C=E.mod(R);v[g]=new Array(R.getLength()-1);for(var p=0;p<v[g].length;p++){var N=p+C.getLength()-v[g].length;v[g][p]=N>=0?C.get(N):0}}for(var B=0,p=0;p<r.length;p++)B+=r[p].totalCount;for(var T=new Array(B),A=0,p=0;p<s;p++)for(var g=0;g<r.length;g++)p<c[g].length&&(T[A++]=c[g][p]);for(var p=0;p<l;p++)for(var g=0;g<r.length;g++)p<v[g].length&&(T[A++]=v[g][p]);return T},G=n,G}var j={},te;function Le(){if(te)return j;te=1,Object.defineProperty(j,"__esModule",{value:!0});var h=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c])}return e},o=se(),t=n(o),d=ae(),a=n(d);function n(e){return e&&e.__esModule?e:{default:e}}function u(e,s){var l={};for(var c in e)s.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(e,c)&&(l[c]=e[c]);return l}var i={bgColor:t.default.oneOfType([t.default.object,t.default.string]).isRequired,bgD:t.default.string.isRequired,fgColor:t.default.oneOfType([t.default.object,t.default.string]).isRequired,fgD:t.default.string.isRequired,size:t.default.number.isRequired,title:t.default.string,viewBoxSize:t.default.number.isRequired,xmlns:t.default.string},r=(0,d.forwardRef)(function(e,s){var l=e.bgColor,c=e.bgD,v=e.fgD,g=e.fgColor,m=e.size,b=e.title,p=e.viewBoxSize,R=e.xmlns,E=R===void 0?"http://www.w3.org/2000/svg":R,C=u(e,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return a.default.createElement("svg",h({},C,{height:m,ref:s,viewBox:"0 0 "+p+" "+p,width:m,xmlns:E}),b?a.default.createElement("title",null,b):null,a.default.createElement("path",{d:c,fill:l}),a.default.createElement("path",{d:v,fill:g}))});return r.displayName="QRCodeSvg",r.propTypes=i,j.default=r,j}var re;function _e(){if(re)return w;re=1,Object.defineProperty(w,"__esModule",{value:!0}),w.QRCode=void 0;var h=Object.assign||function(m){for(var b=1;b<arguments.length;b++){var p=arguments[b];for(var R in p)Object.prototype.hasOwnProperty.call(p,R)&&(m[R]=p[R])}return m},o=se(),t=l(o),d=oe(),a=l(d),n=Pe(),u=l(n),i=ae(),r=l(i),e=Le(),s=l(e);function l(m){return m&&m.__esModule?m:{default:m}}function c(m,b){var p={};for(var R in m)b.indexOf(R)>=0||Object.prototype.hasOwnProperty.call(m,R)&&(p[R]=m[R]);return p}var v={bgColor:t.default.oneOfType([t.default.object,t.default.string]),fgColor:t.default.oneOfType([t.default.object,t.default.string]),level:t.default.string,size:t.default.number,value:t.default.string.isRequired},g=(0,i.forwardRef)(function(m,b){var p=m.bgColor,R=p===void 0?"#FFFFFF":p,E=m.fgColor,C=E===void 0?"#000000":E,N=m.level,B=N===void 0?"L":N,T=m.size,A=T===void 0?256:T,k=m.value,O=c(m,["bgColor","fgColor","level","size","value"]),D=new u.default(-1,a.default[B]);D.addData(k),D.make();var y=D.modules;return r.default.createElement(s.default,h({},O,{bgColor:R,bgD:y.map(function(P,L){return P.map(function(_,x){return _?"":"M "+x+" "+L+" l 1 0 0 1 -1 0 Z"}).join(" ")}).join(" "),fgColor:C,fgD:y.map(function(P,L){return P.map(function(_,x){return _?"M "+x+" "+L+" l 1 0 0 1 -1 0 Z":""}).join(" ")}).join(" "),ref:b,size:A,viewBoxSize:y.length}))});return w.QRCode=g,g.displayName="QRCode",g.propTypes=v,w.default=g,w}var je=_e();const ke=ve(je),Oe=({value:h,size:o=256})=>f.jsx(ke,{value:h,size:o}),Qe=()=>{const{step1:h,step2:o,step3:t,step6:d,step7:a,limitedpax:n}=M.useContext(me),i=(Number(a.adult)+Number(a.groomingHMU)+Number(a.motherRelative)+Number(a.ninang))*1300,r=new Intl.NumberFormat("en-PH",{style:"currency",currency:"PHP"}).format(i),{isLoading:e,data:s=[],error:l}=Re({queryKey:["pricing"],queryFn:Ee}),[c,v]=M.useState(!1),g=s==null?void 0:s.find(x=>x.name==="Athena"),m=s==null?void 0:s.find(x=>x.name==="Aphrodite"),b=s==null?void 0:s.find(x=>x.name==="Hera"),p=s==null?void 0:s.find(x=>x.name==="Athena"),R=n*((p==null?void 0:p.limited_offer)||0),E=x=>new Intl.NumberFormat("en-PH",{style:"currency",currency:"PHP"}).format(x),C=i+R,N=new Intl.NumberFormat("en-PH",{style:"currency",currency:"PHP"}).format(C),B=i+(g==null?void 0:g.price),T=i+(b==null?void 0:b.price),A=i+(g==null?void 0:g.price),k=ie(),{reset:O}=ye(),{mutate:D}=Ne({mutationFn:Te,onSuccess:()=>{k.invalidateQueries({queryKey:["insertBooking"]}),v(!0),O()}});let y;const P=()=>{const x={clientDetails:{clientName:t==null?void 0:t.clientName,contactNumber:t==null?void 0:t.contactNumber,email:t==null?void 0:t.email,socialMedia:t==null?void 0:t.socialMedia},weddingInfo:{weddingDate:h==null?void 0:h.weddingDate,hmuArrival:h==null?void 0:h.hmuArrival,ceremonyVenue:h==null?void 0:h.ceremonyVenue,prepVenue:h==null?void 0:h.prepVenue},packageType:o,additionalHeads:{adults:a==null?void 0:a.adult,motherRelative:a==null?void 0:a.motherRelative,ninang:a==null?void 0:a.ninang,groomingHMU:a==null?void 0:a.groomingHMU},subtotal:r,services:{trialMakeup:a==null?void 0:a.trialMakeup,postNup:a==null?void 0:a.postNup},packageDetails:{packageSelected:d},total:d==="Exclusive Offer"?N:d==="ATHENA"?E(B):d==="HERA"?E(T):d==="APHRODITE"?E(A):"N/A"};y={weddingDate:x.weddingInfo.weddingDate,hmuArrival:x.weddingInfo.hmuArrival,prepVenue:x.weddingInfo.prepVenue,packageType:x.packageType,adults:x.additionalHeads.adults,motherRelative:x.additionalHeads.motherRelative,ninang:x.additionalHeads.ninang,trialMakeup:x.services.trialMakeup,postNup:x.services.postNup,packageSelected:x.packageDetails.packageSelected,clientName:x.clientDetails.clientName,contactNumber:x.clientDetails.contactNumber,email:x.clientDetails.email,socialMedia:x.clientDetails.socialMedia,ceremonyVenue:x.weddingInfo.ceremonyVenue,total:x.total},console.log("Booking Details:",x),D(y)},L=pe();function _(){v(!1),setTimeout(()=>{L("/hmua")},100)}return f.jsxs("div",{className:"space-y-6",children:[f.jsx("h2",{className:"text-2xl font-semibold text-purple-700",children:"Summary"}),f.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[f.jsx("h3",{className:"text-xl font-bold text-purple-600",children:"Wedding Info"}),f.jsxs("ul",{className:"list-disc pl-5 text-lg text-purple-600",children:[f.jsxs("li",{children:[f.jsx("strong",{children:"Wedding Date:"})," ",h==null?void 0:h.weddingDate]}),f.jsxs("li",{children:[f.jsx("strong",{children:"HMUA Team Arrival:"})," ",h==null?void 0:h.hmuArrival]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Ceremony Venue:"})," ",h==null?void 0:h.ceremonyVenue]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Prep Venue:"})," ",h==null?void 0:h.prepVenue]})]})]}),f.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[f.jsx("h3",{className:"text-xl font-bold text-purple-600",children:"Package Type"}),f.jsxs("p",{className:"text-lg text-purple-600",children:[f.jsx("strong",{children:"Selected Package:"})," ",o]})]}),f.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[f.jsxs("h3",{className:"text-xl font-bold text-purple-600",children:["Additional Heads ",f.jsx("span",{className:"text-red-600",children:"(₱1,300.00)"})]}),f.jsxs("ul",{className:"list-disc pl-5 text-lg text-purple-600",children:[f.jsxs("li",{children:[f.jsx("strong",{children:"Adults:"})," ",a==null?void 0:a.adult]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Mother/Sister/Relative:"})," ",a==null?void 0:a.motherRelative]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Ninang:"})," ",a==null?void 0:a.ninang]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Grooming HMU:"})," ",a==null?void 0:a.groomingHMU]})]}),f.jsxs("h3",{className:"text-xl font-bold text-purple-600",children:["SubTotal: ",f.jsx("span",{className:"text-red-700",children:r})]})]}),f.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[f.jsx("h3",{className:"text-xl font-bold text-purple-600",children:"Other Services"}),f.jsxs("ul",{className:"list-disc pl-5 text-lg text-purple-600",children:[f.jsxs("li",{children:[f.jsx("strong",{children:"Trial Makeup:"})," ",a!=null&&a.trialMakeup?"Yes":"No"]}),f.jsxs("li",{children:[f.jsx("strong",{children:"Post-Nup HMU:"})," ",a!=null&&a.postNup?"Yes":"No"]})]})]}),f.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[f.jsx("h3",{className:"text-xl font-bold text-purple-600",children:"Package Details"}),f.jsxs("div",{className:"flex gap-1",children:[f.jsxs("p",{className:"text-lg text-purple-600",children:[f.jsx("strong",{children:"Package Type Selected:"})," ",d]}),f.jsx("span",{className:"text-red-700 text-lg",children:`(${E(p==null?void 0:p.limited_offer)})`})]}),d==="Exclusive Offer"&&f.jsxs("h3",{className:"text-xl font-bold",children:[f.jsxs("span",{className:"text-orange-700",children:["(",n,") "]})," PAX:"," ",f.jsx("span",{className:"text-red-700",children:E(R)})]}),d==="ATHENA"&&f.jsxs("h3",{className:"text-xl font-bold",children:["Subtotal:"," ",f.jsx("span",{className:"text-red-700",children:E(g==null?void 0:g.price)})]}),d==="HERA"&&f.jsxs("h3",{className:"text-xl font-bold",children:["Subtotal:"," ",f.jsx("span",{className:"text-red-700",children:E(b==null?void 0:b.price)})]}),d==="APHRODITE"&&f.jsxs("h3",{className:"text-xl font-bold",children:["Subtotal:"," ",f.jsx("span",{className:"text-red-700",children:E(m==null?void 0:m.price)})]})]}),f.jsxs("div",{className:"flex flex-col items-center gap-2",children:[f.jsxs("div",{className:"mt-6 flex flex-col items-center",children:[f.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Total"}),f.jsxs("p",{className:"text-3xl font-bold text-green-800 bg-gray-200 p-4 rounded-lg shadow-lg inline-block",children:[d==="Exclusive Offer"&&N,d==="ATHENA"&&E(B),d==="HERA"&&E(T),d==="APHRODITE"&&E(A)]})]}),f.jsx("button",{onClick:P,className:"px-4 py-2 bg-peach-600 text-white rounded-lg hover:bg-peach-300",children:"Submit Booking"}),c&&f.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50",children:f.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-sm w-full",children:[f.jsx("h2",{className:"text-xl font-semibold text-green-600 text-center mb-4",children:"Booking Successful!"}),f.jsx(Oe,{value:y&&Object.keys(y).length>0?JSON.stringify(y):"",size:256}),f.jsx("div",{className:"mt-4 text-center",children:f.jsx("button",{onClick:()=>_(),className:"px-4 py-2 bg-peach-600 text-white rounded-lg hover:bg-peach-300",children:"Close"})})]})})]})]})};export{Qe as default};
