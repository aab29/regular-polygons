(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b,c){"use strict"
function generateAccessor(b0,b1,b2){var g=b0.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var a0
if(g.length>1)a0=true
else a0=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a1=d&3
var a2=d>>2
var a3=f=f.substring(0,e-1)
var a4=f.indexOf(":")
if(a4>0){a3=f.substring(0,a4)
f=f.substring(a4+1)}if(a1){var a5=a1&2?"r":""
var a6=a1&1?"this":"r"
var a7="return "+a6+"."+f
var a8=b2+".prototype.g"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}if(a2){var a5=a2&2?"r,v":"v"
var a6=a2&1?"this":"r"
var a7=a6+"."+f+"=v"
var a8=b2+".prototype.s"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}}return f}function defineClass(a4,a5){var g=[]
var f="function "+a4+"("
var e="",d=""
for(var a0=0;a0<a5.length;a0++){var a1=a5[a0]
if(a1.charCodeAt(0)==48){a1=a1.substring(1)
var a2=generateAccessor(a1,g,a4)
d+="this."+a2+" = null;\n"}else{var a2=generateAccessor(a1,g,a4)
var a3="p_"+a2
f+=e
e=", "
f+=a3
d+="this."+a2+" = "+a3+";\n"}}if(supportsDirectProtoAccess)d+="this."+"$deferredAction"+"();"
f+=") {\n"+d+"}\n"
f+=a4+".builtin$cls=\""+a4+"\";\n"
f+="$desc=$collectedClasses."+a4+"[1];\n"
f+=a4+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a4+".name=\""+a4+"\";\n"
f+=g.join("")
return f}var z=supportsDirectProtoAccess?function(d,e){var g=d.prototype
g.__proto__=e.prototype
g.constructor=d
g["$is"+d.name]=d
return convertToFastObject(g)}:function(){function tmp(){}return function(a1,a2){tmp.prototype=a2.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a1.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var a0=e[d]
g[a0]=f[a0]}g["$is"+a1.name]=a1
g.constructor=a1
a1.prototype=g
return g}}()
function finishClasses(a5){var g=init.allClasses
a5.combinedConstructorFunction+="return [\n"+a5.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a5.combinedConstructorFunction)(a5.collected)
a5.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.name
var a1=a5.collected[a0]
var a2=a1[0]
a1=a1[1]
g[a0]=d
a2[a0]=d}f=null
var a3=init.finishedClasses
function finishClass(b5){if(a3[b5])return
a3[b5]=true
var a6=a5.pending[b5]
if(!a6||typeof a6!="string"){var a7=g[b5]
var a8=a7.prototype
a8.constructor=a7
a8.$isf=a7
a8.$deferredAction=function(){}
return}finishClass(a6)
var a9=g[a6]
if(!a9)a9=existingIsolateProperties[a6]
var a7=g[b5]
var a8=z(a7,a9)
if(Object.prototype.hasOwnProperty.call(a8,"%")){var b0=a8["%"].split(";")
if(b0[0]){var b1=b0[0].split("|")
for(var b2=0;b2<b1.length;b2++){init.interceptorsByTag[b1[b2]]=a7
init.leafTags[b1[b2]]=true}}if(b0[1]){b1=b0[1].split("|")
if(b0[2]){var b3=b0[2].split("|")
for(var b2=0;b2<b3.length;b2++){var b4=g[b3[b2]]
b4.$nativeSuperclassTag=b1[0]}}for(b2=0;b2<b1.length;b2++){init.interceptorsByTag[b1[b2]]=a7
init.leafTags[b1[b2]]=false}}a8.$deferredAction()}if(a8.$isd)a8.$deferredAction()}var a4=Object.keys(a5.pending)
for(var e=0;e<a4.length;e++)finishClass(a4[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.charCodeAt(0)
var a1
if(d!=="^"&&d!=="$reflectable"&&a0!==43&&a0!==42&&(a1=g[d])!=null&&a1.constructor===Array&&d!=="<>")addStubs(g,a1,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function processClassData(b2,b3,b4){b3=convertToSlowObject(b3)
var g
var f=Object.keys(b3)
var e=false
var d=supportsDirectProtoAccess&&b2!="f"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="i"){processStatics(init.statics[b2]=b3.i,b4)
delete b3.i}else if(a2===43){w[g]=a1.substring(1)
var a3=b3[a1]
if(a3>0)b3[g].$reflectable=a3}else if(a2===42){b3[g].$D=b3[a1]
var a4=b3.$methodsWithOptionalArguments
if(!a4)b3.$methodsWithOptionalArguments=a4={}
a4[a1]=g}else{var a5=b3[a1]
if(a1!=="^"&&a5!=null&&a5.constructor===Array&&a1!=="<>")if(d)e=true
else addStubs(b3,a5,a1,false,[])
else g=a1}}if(e)b3.$deferredAction=finishAddStubsHelper
var a6=b3["^"],a7,a8,a9=a6
var b0=a9.split(";")
a9=b0[1]?b0[1].split(","):[]
a8=b0[0]
a7=a8.split(":")
if(a7.length==2){a8=a7[0]
var b1=a7[1]
if(b1)b3.$S=function(b5){return function(){return init.types[b5]}}(b1)}if(a8)b4.pending[b2]=a8
b4.combinedConstructorFunction+=defineClass(b2,a9)
b4.constructorsList.push(b2)
b4.collected[b2]=[m,b3]
i.push(b2)}function processStatics(a4,a5){var g=Object.keys(a4)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a4[e]
var a0=e.charCodeAt(0)
var a1
if(a0===43){v[a1]=e.substring(1)
var a2=a4[e]
if(a2>0)a4[a1].$reflectable=a2
if(d&&d.length)init.typeInformation[a1]=d}else if(a0===42){m[a1].$D=d
var a3=a4.$methodsWithOptionalArguments
if(!a3)a4.$methodsWithOptionalArguments=a3={}
a3[e]=a1}else if(typeof d==="function"){m[a1=e]=d
h.push(e)}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a1=e
processClassData(e,d,a5)}}}function addStubs(b6,b7,b8,b9,c0){var g=0,f=g,e=b7[g],d
if(typeof e=="string")d=b7[++g]
else{d=e
e=b8}if(typeof d=="number"){f=d
d=b7[++g]}b6[b8]=b6[e]=d
var a0=[d]
d.$stubName=b8
c0.push(b8)
for(g++;g<b7.length;g++){d=b7[g]
if(typeof d!="function")break
if(!b9)d.$stubName=b7[++g]
a0.push(d)
if(d.$stubName){b6[d.$stubName]=d
c0.push(d.$stubName)}}for(var a1=0;a1<a0.length;g++,a1++)a0[a1].$callName=b7[g]
var a2=b7[g]
b7=b7.slice(++g)
var a3=b7[0]
var a4=(a3&1)===1
a3=a3>>1
var a5=a3>>1
var a6=(a3&1)===1
var a7=a3===3
var a8=a3===1
var a9=b7[1]
var b0=a9>>1
var b1=(a9&1)===1
var b2=a5+b0
var b3=b7[2]
if(typeof b3=="number")b7[2]=b3+c
if(b>0){var b4=3
for(var a1=0;a1<b0;a1++){if(typeof b7[b4]=="number")b7[b4]=b7[b4]+b
b4++}for(var a1=0;a1<b2;a1++){b7[b4]=b7[b4]+b
b4++}}var b5=2*b0+a5+3
if(a2){d=tearOff(a0,f,b7,b9,b8,a4)
b6[b8].$getter=d
d.$getterStub=true
if(b9)c0.push(a2)
b6[a2]=d
a0.push(d)
d.$stubName=a2
d.$callName=null}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.a_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.a_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.a_(this,d,e,f,true,[],a1).prototype
return g}:tearOffGetter(d,e,f,a1,a2)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.aw=function(){}
var dart=[["","",,H,{"^":"",cR:{"^":"f;a"}}],["","",,J,{"^":"",
h:function(a){return void 0},
a3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
az:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.a0==null){H.bv()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(P.al("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$S()]
if(v!=null)return v
v=H.bA(a)
if(v!=null)return v
if(typeof a=="function")return C.r
y=Object.getPrototypeOf(a)
if(y==null)return C.h
if(y===Object.prototype)return C.h
if(typeof w=="function"){Object.defineProperty(w,$.$get$S(),{value:C.b,enumerable:false,writable:true,configurable:true})
return C.b}return C.b},
d:{"^":"f;",
h:["C",function(a){return"Instance of '"+H.u(a)+"'"}]},
b1:{"^":"d;",
h:function(a){return String(a)},
$isbl:1},
b3:{"^":"d;",
h:function(a){return"null"}},
U:{"^":"d;",
h:["D",function(a){return String(a)}]},
b6:{"^":"U;"},
am:{"^":"U;"},
T:{"^":"U;",
h:function(a){var z=a[$.$get$ab()]
if(z==null)return this.D(a)
return"JavaScript function for "+H.c(J.C(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
H:{"^":"d;$ti",
u:function(a,b){H.bk(b,H.aB(a,0))
if(!!a.fixed$length)H.bH(P.an("add"))
a.push(b)},
h:function(a){return P.b_(a,"[","]")},
gj:function(a){return a.length},
$isaZ:1,
$isl:1,
i:{
b0:function(a,b){return J.z(H.aH(a,[b]))},
z:function(a){H.L(a)
a.fixed$length=Array
return a}}},
cQ:{"^":"H;$ti"},
aK:{"^":"f;a,b,c,0d,$ti",
p:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.bF(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
Q:{"^":"d;",
q:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.an(""+a+".round()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
$isa4:1},
b2:{"^":"Q;",$isbx:1},
ae:{"^":"Q;"},
R:{"^":"d;",
E:function(a,b){if(b>=a.length)throw H.e(H.au(a,b))
return a.charCodeAt(b)},
k:function(a,b){H.m(b)
if(typeof b!=="string")throw H.e(P.aJ(b,null,null))
return a+b},
t:function(a,b,c){if(c==null)c=a.length
if(b>c)throw H.e(P.W(b,null,null))
if(c>a.length)throw H.e(P.W(c,null,null))
return a.substring(b,c)},
B:function(a,b){return this.t(a,b,null)},
h:function(a){return a},
gj:function(a){return a.length},
$isv:1}}],["","",,H,{"^":"",
bp:function(a){return init.types[H.A(a)]},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.C(a)
if(typeof z!=="string")throw H.e(H.Y(a))
return z},
u:function(a){var z,y,x,w,v,u,t,s,r
z=J.h(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.j||!!J.h(a).$isam){v=C.f(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.a.E(w,0)===36)w=C.a.B(w,1)
r=H.a2(H.L(H.x(a)),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+r,init.mangledGlobalNames)},
bq:function(a){throw H.e(H.Y(a))},
a1:function(a,b){if(a==null)J.N(a)
throw H.e(H.au(a,b))},
au:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.y(!0,b,"index",null)
z=J.N(a)
if(!(b<0)){if(typeof z!=="number")return H.bq(z)
y=b>=z}else y=!0
if(y)return P.aY(b,a,"index",null,z)
return P.W(b,"index",null)},
Y:function(a){return new P.y(!0,a,null,null)},
as:function(a){if(typeof a!=="number")throw H.e(H.Y(a))
return a},
e:function(a){var z
if(a==null)a=new P.b5()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.aI})
z.name=""}else z.toString=H.aI
return z},
aI:function(){return J.C(this.dartException)},
bH:function(a){throw H.e(a)},
bF:function(a){throw H.e(P.aS(a))},
aQ:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.h(d).$isl){z.$reflectionInfo=d
x=H.b9(z).r}else x=d
w=e?Object.create(new H.bd().constructor.prototype):Object.create(new H.a6(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function(){this.$initialize()}
else{u=$.k
if(typeof u!=="number")return u.k()
$.k=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.aa(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.bp,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.a8:H.O
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.aa(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
aN:function(a,b,c,d){var z=H.O
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
aa:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.aP(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.aN(y,!w,z,b)
if(y===0){w=$.k
if(typeof w!=="number")return w.k()
$.k=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.r
if(v==null){v=H.E("self")
$.r=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.k
if(typeof w!=="number")return w.k()
$.k=w+1
t+=w
w="return function("+t+"){return this."
v=$.r
if(v==null){v=H.E("self")
$.r=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
aO:function(a,b,c,d){var z,y
z=H.O
y=H.a8
switch(b?-1:a){case 0:throw H.e(H.bc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
aP:function(a,b){var z,y,x,w,v,u,t,s
z=$.r
if(z==null){z=H.E("self")
$.r=z}y=$.a7
if(y==null){y=H.E("receiver")
$.a7=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.aO(w,!u,x,b)
if(w===1){z="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
y=$.k
if(typeof y!=="number")return y.k()
$.k=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
y=$.k
if(typeof y!=="number")return y.k()
$.k=y+1
return new Function(z+y+"}")()},
a_:function(a,b,c,d,e,f,g){var z,y
z=J.z(H.L(b))
H.A(c)
y=!!J.h(d).$isl?J.z(d):d
return H.aQ(a,z,c,y,!!e,f,g)},
m:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.w(a,"String"))},
A:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.w(a,"int"))},
bE:function(a,b){throw H.e(H.w(a,H.m(b).substring(3)))},
bD:function(a,b){var z=J.ax(b)
throw H.e(H.aM(a,z.t(b,3,z.gj(b))))},
bz:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.h(a)[b])return a
H.bE(a,b)},
by:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.h(a)[b]
else z=!0
if(z)return a
H.bD(a,b)},
L:function(a){if(a==null)return a
if(!!J.h(a).$isl)return a
throw H.e(H.w(a,"List"))},
av:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.A(z)]
else return a.$S()}return},
bo:function(a,b){var z,y
if(a==null)return!1
if(typeof a=="function")return!0
z=H.av(J.h(a))
if(z==null)return!1
y=H.aC(z,null,b,null)
return y},
ap:function(a){var z
if(a instanceof H.t){z=H.av(J.h(a))
if(z!=null)return H.a5(z)
return"Closure"}return H.u(a)},
bG:function(a){throw H.e(new P.aT(H.m(a)))},
ay:function(a){return init.getIsolateTag(a)},
aH:function(a,b){a.$ti=b
return a},
x:function(a){if(a==null)return
return a.$ti},
eg:function(a,b,c){return H.B(a["$as"+H.c(c)],H.x(b))},
aB:function(a,b){var z
H.A(b)
z=H.x(a)
return z==null?null:z[b]},
a5:function(a){var z=H.o(a,null)
return z},
o:function(a,b){var z,y
H.Z(b,"$isl",[P.v],"$asl")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.a2(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(a===-2)return"dynamic"
if(typeof a==="number"){H.A(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.a1(b,y)
return H.c(b[y])}if('func' in a)return H.bi(a,b)
if('futureOr' in a)return"FutureOr<"+H.o("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
bi:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.v]
H.Z(b,"$isl",z,"$asl")
if("bounds" in a){y=a.bounds
if(b==null){b=H.aH([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.c.u(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.a1(b,r)
t=C.a.k(t,b[r])
q=y[u]
if(q!=null&&q!==P.f)t+=" extends "+H.o(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.o(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.o(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.o(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.bn(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.m(z[l])
n=n+m+H.o(i[h],b)+(" "+H.c(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
a2:function(a,b,c){var z,y,x,w,v,u
H.Z(c,"$isl",[P.v],"$asl")
if(a==null)return""
z=new P.ah("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.o(u,c)}v="<"+z.h(0)+">"
return v},
B:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bm:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.x(a)
y=J.h(a)
if(y[b]==null)return!1
return H.ar(H.B(y[d],z),null,c,null)},
Z:function(a,b,c,d){var z,y
H.m(b)
H.L(c)
H.m(d)
if(a==null)return a
z=H.bm(a,b,c,d)
if(z)return a
z=b.substring(3)
y=H.a2(c,0,null)
throw H.e(H.w(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(z+y,init.mangledGlobalNames)))},
ar:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.i(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.i(a[y],b,c[y],d))return!1
return!0},
ed:function(a,b,c){return a.apply(b,H.B(J.h(b)["$as"+H.c(c)],H.x(b)))},
aD:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="f"||a.builtin$cls==="V"||a===-1||a===-2||H.aD(z)}return!1},
at:function(a,b){var z,y,x
if(a==null){z=b==null||b.builtin$cls==="f"||b.builtin$cls==="V"||b===-1||b===-2||H.aD(b)
return z}z=b==null||b===-1||b.builtin$cls==="f"||b===-2
if(z)return!0
if(typeof b=="object"){z='futureOr' in b
if(z)if(H.at(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bo(a,b)}y=J.h(a).constructor
x=H.x(a)
if(x!=null){x=x.slice()
x.splice(0,0,y)
y=x}z=H.i(y,null,b,null)
return z},
bk:function(a,b){if(a!=null&&!H.at(a,b))throw H.e(H.w(a,H.a5(b)))
return a},
i:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="f"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="f"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.i(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="V")return!0
if('func' in c)return H.aC(a,b,c,d)
if('func' in a)return c.builtin$cls==="cF"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.i("type" in a?a.type:null,b,x,d)
else if(H.i(a,b,x,d))return!0
else{if(!('$is'+"aW" in y.prototype))return!1
w=y.prototype["$as"+"aW"]
v=H.B(w,z?a.slice(1):null)
return H.i(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=H.a5(t)
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.ar(H.B(r,z),b,u,d)},
aC:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.i(a.ret,b,c.ret,d))return!1
x=a.args
w=c.args
v=a.opt
u=c.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
for(p=0;p<t;++p)if(!H.i(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.i(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.i(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.bC(m,b,l,d)},
bC:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.i(c[w],d,a[w],b))return!1}return!0},
ee:function(a,b,c){Object.defineProperty(a,H.m(b),{value:c,enumerable:false,writable:true,configurable:true})},
bA:function(a){var z,y,x,w,v,u
z=H.m($.aA.$1(a))
y=$.J[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.K[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.m($.aq.$2(a,z))
if(z!=null){y=$.J[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.K[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.M(x)
$.J[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.K[z]=x
return x}if(v==="-"){u=H.M(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.aF(a,x)
if(v==="*")throw H.e(P.al(z))
if(init.leafTags[z]===true){u=H.M(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.aF(a,x)},
aF:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.a3(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
M:function(a){return J.a3(a,!1,null,!!a.$iscS)},
bB:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.M(z)
else return J.a3(z,c,null,null)},
bv:function(){if(!0===$.a0)return
$.a0=!0
H.bw()},
bw:function(){var z,y,x,w,v,u,t,s
$.J=Object.create(null)
$.K=Object.create(null)
H.br()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.aG.$1(v)
if(u!=null){t=H.bB(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
br:function(){var z,y,x,w,v,u,t
z=C.o()
z=H.q(C.l,H.q(C.q,H.q(C.e,H.q(C.e,H.q(C.p,H.q(C.m,H.q(C.n(C.f),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.aA=new H.bs(v)
$.aq=new H.bt(u)
$.aG=new H.bu(t)},
q:function(a,b){return a(b)||b},
b8:{"^":"f;a,b,c,d,e,f,r,0x",i:{
b9:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.z(z)
y=z[0]
x=z[1]
return new H.b8(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
t:{"^":"f;",
h:function(a){return"Closure '"+H.u(this).trim()+"'"},
gv:function(){return this},
gv:function(){return this}},
ai:{"^":"t;"},
bd:{"^":"ai;",
h:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
a6:{"^":"ai;a,b,c,d",
h:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.u(z)+"'")},
i:{
O:function(a){return a.a},
a8:function(a){return a.c},
E:function(a){var z,y,x,w,v
z=new H.a6("self","target","receiver","name")
y=J.z(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
bf:{"^":"n;a",
h:function(a){return this.a},
i:{
w:function(a,b){return new H.bf("TypeError: "+H.c(P.F(a))+": type '"+H.ap(a)+"' is not a subtype of type '"+b+"'")}}},
aL:{"^":"n;a",
h:function(a){return this.a},
i:{
aM:function(a,b){return new H.aL("CastError: "+H.c(P.F(a))+": type '"+H.ap(a)+"' is not a subtype of type '"+b+"'")}}},
bb:{"^":"n;a",
h:function(a){return"RuntimeError: "+H.c(this.a)},
i:{
bc:function(a){return new H.bb(a)}}},
bs:{"^":"t:0;a",
$1:function(a){return this.a(a)}},
bt:{"^":"t;a",
$2:function(a,b){return this.a(a,b)}},
bu:{"^":"t:1;a",
$1:function(a){return this.a(H.m(a))}}}],["","",,H,{"^":"",
bn:function(a){return J.b0(a?Object.keys(a):[],null)}}],["","",,P,{"^":"",
b_:function(a,b,c){var z,y,x
if(P.bj(a))return b+"..."+c
z=new P.ah(b)
y=$.$get$X()
C.c.u(y,a)
try{x=z
x.a=P.be(x.gl(),a,", ")}finally{if(0>=y.length)return H.a1(y,-1)
y.pop()}y=z
y.a=y.gl()+c
y=z.gl()
return y.charCodeAt(0)==0?y:y},
bj:function(a){var z,y
for(z=0;y=$.$get$X(),z<y.length;++z)if(a===y[z])return!0
return!1}}],["","",,P,{"^":"",
aV:function(a){var z=J.h(a)
if(!!z.$ist)return z.h(a)
return"Instance of '"+H.u(a)+"'"},
F:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.C(a)
if(typeof a==="string")return JSON.stringify(a)
return P.aV(a)},
bl:{"^":"f;"},
"+bool":0,
ef:{"^":"a4;"},
"+double":0,
n:{"^":"f;"},
b5:{"^":"n;",
h:function(a){return"Throw of null."}},
y:{"^":"n;a,b,c,d",
gn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gm:function(){return""},
h:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+z
w=this.gn()+y+x
if(!this.a)return w
v=this.gm()
u=P.F(this.b)
return w+v+": "+H.c(u)},
i:{
aJ:function(a,b,c){return new P.y(!0,a,b,c)}}},
b7:{"^":"y;e,f,a,b,c,d",
gn:function(){return"RangeError"},
gm:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
i:{
W:function(a,b,c){return new P.b7(null,null,!0,a,b,"Value not in range")}}},
aX:{"^":"y;e,j:f>,a,b,c,d",
gn:function(){return"RangeError"},
gm:function(){var z=this.b
if(typeof z!=="number")return z.G()
if(z<0)return": index must not be negative"
z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
i:{
aY:function(a,b,c,d,e){var z=e!=null?e:J.N(b)
return new P.aX(b,z,!0,a,c,"Index out of range")}}},
bh:{"^":"n;a",
h:function(a){return"Unsupported operation: "+this.a},
i:{
an:function(a){return new P.bh(a)}}},
bg:{"^":"n;a",
h:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
i:{
al:function(a){return new P.bg(a)}}},
aR:{"^":"n;a",
h:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.F(z))+"."},
i:{
aS:function(a){return new P.aR(a)}}},
aT:{"^":"n;a",
h:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
bx:{"^":"a4;"},
"+int":0,
l:{"^":"f;$ti",$isaZ:1},
"+List":0,
V:{"^":"f;",
h:function(a){return"null"}},
"+Null":0,
a4:{"^":"f;"},
"+num":0,
f:{"^":";",
h:function(a){return"Instance of '"+H.u(this)+"'"},
toString:function(){return this.h(this)}},
v:{"^":"f;"},
"+String":0,
ah:{"^":"f;l:a<",
gj:function(a){return this.a.length},
h:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
i:{
be:function(a,b,c){var z=new J.aK(b,b.length,0,[H.aB(b,0)])
if(!z.p())return a
if(c.length===0){do a+=H.c(z.d)
while(z.p())}else{a+=H.c(z.d)
for(;z.p();)a=a+c+H.c(z.d)}return a}}}}],["","",,W,{"^":"",a:{"^":"ac;","%":";HTMLElement"},bJ:{"^":"a;",
h:function(a){return String(a)},
"%":"HTMLAnchorElement"},bO:{"^":"G;","%":"ApplicationCacheErrorEvent"},bP:{"^":"a;",
h:function(a){return String(a)},
"%":"HTMLAreaElement"},bQ:{"^":"af;","%":"HTMLAudioElement"},bR:{"^":"a;","%":"HTMLBRElement"},bS:{"^":"a;","%":"HTMLBaseElement"},bT:{"^":"a;","%":"HTMLBodyElement"},bU:{"^":"a;","%":"HTMLButtonElement"},P:{"^":"a;",
A:function(a,b,c){return a.getContext(b)},
w:function(a,b){return this.A(a,b,null)},
$isP:1,
"%":"HTMLCanvasElement"},bV:{"^":"d;","%":"CanvasGradient"},bW:{"^":"d;","%":"CanvasPattern"},a9:{"^":"d;",$isa9:1,"%":"CanvasRenderingContext2D"},bZ:{"^":"a;","%":"HTMLContentElement"},c_:{"^":"a;","%":"HTMLDListElement"},c0:{"^":"a;","%":"HTMLDataElement"},c1:{"^":"a;","%":"HTMLDataListElement"},c4:{"^":"a;","%":"HTMLDetailsElement"},c5:{"^":"a;","%":"HTMLDialogElement"},c7:{"^":"a;","%":"HTMLDivElement"},aU:{"^":"ag;","%":";Document"},c8:{"^":"d;","%":"DOMError"},c9:{"^":"d;",
h:function(a){return String(a)},
"%":"DOMException"},ac:{"^":"ag;",
h:function(a){return a.localName},
"%":";Element"},cb:{"^":"a;","%":"HTMLEmbedElement"},cc:{"^":"G;","%":"ErrorEvent"},G:{"^":"d;","%":";Event|InputEvent"},ad:{"^":"d;","%":";EventTarget"},cB:{"^":"a;","%":"HTMLFieldSetElement"},cE:{"^":"a;0j:length=","%":"HTMLFormElement"},cH:{"^":"a;","%":"HTMLHRElement"},cI:{"^":"a;","%":"HTMLHeadElement"},cJ:{"^":"a;","%":"HTMLHeadingElement"},cK:{"^":"aU;","%":"HTMLDocument"},cL:{"^":"a;","%":"HTMLHtmlElement"},cM:{"^":"a;","%":"HTMLIFrameElement"},cN:{"^":"a;","%":"HTMLImageElement"},cP:{"^":"a;","%":"HTMLInputElement"},cT:{"^":"a;","%":"HTMLLIElement"},cU:{"^":"a;","%":"HTMLLabelElement"},cV:{"^":"a;","%":"HTMLLegendElement"},cY:{"^":"a;","%":"HTMLLinkElement"},cZ:{"^":"a;","%":"HTMLMapElement"},af:{"^":"a;","%":";HTMLMediaElement"},d1:{"^":"d;","%":"MediaError"},d2:{"^":"a;","%":"HTMLMenuElement"},d3:{"^":"a;","%":"HTMLMetaElement"},d5:{"^":"a;","%":"HTMLMeterElement"},d6:{"^":"a;","%":"HTMLModElement"},d7:{"^":"b4;","%":"Navigator"},b4:{"^":"d;","%":";NavigatorConcurrentHardware"},d8:{"^":"d;","%":"NavigatorUserMediaError"},ag:{"^":"ad;",
h:function(a){var z=a.nodeValue
return z==null?this.C(a):z},
"%":";Node"},d9:{"^":"a;","%":"HTMLOListElement"},da:{"^":"a;","%":"HTMLObjectElement"},db:{"^":"a;","%":"HTMLOptGroupElement"},dc:{"^":"a;","%":"HTMLOptionElement"},dd:{"^":"a;","%":"HTMLOutputElement"},de:{"^":"d;","%":"OverconstrainedError"},df:{"^":"a;","%":"HTMLParagraphElement"},dg:{"^":"a;","%":"HTMLParamElement"},dj:{"^":"a;","%":"HTMLPictureElement"},dm:{"^":"d;","%":"PositionError"},dn:{"^":"a;","%":"HTMLPreElement"},dp:{"^":"a;","%":"HTMLProgressElement"},dq:{"^":"a;","%":"HTMLQuoteElement"},dv:{"^":"a;","%":"HTMLScriptElement"},dx:{"^":"a;0j:length=","%":"HTMLSelectElement"},dy:{"^":"G;","%":"SensorErrorEvent"},dA:{"^":"a;","%":"HTMLShadowElement"},dB:{"^":"a;","%":"HTMLSlotElement"},dC:{"^":"a;","%":"HTMLSourceElement"},dD:{"^":"a;","%":"HTMLSpanElement"},dE:{"^":"G;","%":"SpeechRecognitionError"},dH:{"^":"a;","%":"HTMLStyleElement"},dN:{"^":"a;","%":"HTMLTableCaptionElement"},dO:{"^":"a;","%":"HTMLTableCellElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement"},dP:{"^":"a;","%":"HTMLTableColElement"},dQ:{"^":"a;","%":"HTMLTableElement"},dR:{"^":"a;","%":"HTMLTableRowElement"},dS:{"^":"a;","%":"HTMLTableSectionElement"},dT:{"^":"a;","%":"HTMLTemplateElement"},dU:{"^":"a;","%":"HTMLTextAreaElement"},dX:{"^":"a;","%":"HTMLTimeElement"},dY:{"^":"a;","%":"HTMLTitleElement"},e_:{"^":"a;","%":"HTMLTrackElement"},e0:{"^":"a;","%":"HTMLUListElement"},e1:{"^":"a;","%":"HTMLUnknownElement"},e3:{"^":"af;","%":"HTMLVideoElement"},e5:{"^":"ad;","%":"DOMWindow|Window"},e6:{"^":"a;","%":"HTMLDirectoryElement"},e7:{"^":"a;","%":"HTMLFontElement"},e8:{"^":"a;","%":"HTMLFrameElement"},e9:{"^":"a;","%":"HTMLFrameSetElement"},ea:{"^":"a;","%":"HTMLMarqueeElement"}}],["","",,P,{"^":"",bI:{"^":"j;","%":"SVGAElement"},bK:{"^":"D;","%":"SVGAnimateElement"},bL:{"^":"D;","%":"SVGAnimateMotionElement"},bM:{"^":"D;","%":"SVGAnimateTransformElement"},bN:{"^":"d;","%":"SVGAnimatedLength"},D:{"^":"b;","%":";SVGAnimationElement"},bX:{"^":"p;","%":"SVGCircleElement"},bY:{"^":"j;","%":"SVGClipPathElement"},c2:{"^":"j;","%":"SVGDefsElement"},c3:{"^":"b;","%":"SVGDescElement"},c6:{"^":"b;","%":"SVGDiscardElement"},ca:{"^":"p;","%":"SVGEllipseElement"},cd:{"^":"b;","%":"SVGFEBlendElement"},ce:{"^":"b;","%":"SVGFEColorMatrixElement"},cf:{"^":"b;","%":"SVGFEComponentTransferElement"},cg:{"^":"b;","%":"SVGFECompositeElement"},ch:{"^":"b;","%":"SVGFEConvolveMatrixElement"},ci:{"^":"b;","%":"SVGFEDiffuseLightingElement"},cj:{"^":"b;","%":"SVGFEDisplacementMapElement"},ck:{"^":"b;","%":"SVGFEDistantLightElement"},cl:{"^":"b;","%":"SVGFEFloodElement"},cm:{"^":"I;","%":"SVGFEFuncAElement"},cn:{"^":"I;","%":"SVGFEFuncBElement"},co:{"^":"I;","%":"SVGFEFuncGElement"},cp:{"^":"I;","%":"SVGFEFuncRElement"},cq:{"^":"b;","%":"SVGFEGaussianBlurElement"},cr:{"^":"b;","%":"SVGFEImageElement"},cs:{"^":"b;","%":"SVGFEMergeElement"},ct:{"^":"b;","%":"SVGFEMergeNodeElement"},cu:{"^":"b;","%":"SVGFEMorphologyElement"},cv:{"^":"b;","%":"SVGFEOffsetElement"},cw:{"^":"b;","%":"SVGFEPointLightElement"},cx:{"^":"b;","%":"SVGFESpecularLightingElement"},cy:{"^":"b;","%":"SVGFESpotLightElement"},cz:{"^":"b;","%":"SVGFETileElement"},cA:{"^":"b;","%":"SVGFETurbulenceElement"},cC:{"^":"b;","%":"SVGFilterElement"},cD:{"^":"j;","%":"SVGForeignObjectElement"},cG:{"^":"j;","%":"SVGGElement"},p:{"^":"j;","%":";SVGGeometryElement"},j:{"^":"b;","%":";SVGGraphicsElement"},cO:{"^":"j;","%":"SVGImageElement"},cW:{"^":"p;","%":"SVGLineElement"},cX:{"^":"ao;","%":"SVGLinearGradientElement"},d_:{"^":"b;","%":"SVGMarkerElement"},d0:{"^":"b;","%":"SVGMaskElement"},d4:{"^":"b;","%":"SVGMetadataElement"},dh:{"^":"p;","%":"SVGPathElement"},di:{"^":"b;","%":"SVGPatternElement"},dk:{"^":"p;","%":"SVGPolygonElement"},dl:{"^":"p;","%":"SVGPolylineElement"},dr:{"^":"ao;","%":"SVGRadialGradientElement"},ds:{"^":"p;","%":"SVGRectElement"},dw:{"^":"b;","%":"SVGScriptElement"},dz:{"^":"D;","%":"SVGSetElement"},dG:{"^":"b;","%":"SVGStopElement"},dI:{"^":"b;","%":"SVGStyleElement"},b:{"^":"ac;","%":";SVGElement"},dJ:{"^":"j;","%":"SVGSVGElement"},dK:{"^":"j;","%":"SVGSwitchElement"},dL:{"^":"b;","%":"SVGSymbolElement"},dM:{"^":"ak;","%":"SVGTSpanElement"},aj:{"^":"j;","%":";SVGTextContentElement"},dV:{"^":"ak;","%":"SVGTextElement"},dW:{"^":"aj;","%":"SVGTextPathElement"},ak:{"^":"aj;","%":";SVGTextPositioningElement"},dZ:{"^":"b;","%":"SVGTitleElement"},e2:{"^":"j;","%":"SVGUseElement"},e4:{"^":"b;","%":"SVGViewElement"},ao:{"^":"b;","%":";SVGGradientElement"},I:{"^":"b;","%":";SVGComponentTransferFunctionElement"},eb:{"^":"b;","%":"SVGFEDropShadowElement"},ec:{"^":"b;","%":"SVGMPathElement"}}],["","",,P,{"^":"",dt:{"^":"d;","%":"WebGLRenderingContext"},du:{"^":"d;","%":"WebGL2RenderingContext"}}],["","",,P,{"^":"",dF:{"^":"d;","%":"SQLError"}}],["","",,F,{"^":"",
aE:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=H.bz(document.querySelector("#canvas"),"$isP")
y=window.innerWidth
x=window.innerHeight
w=C.k.q(Math.min(H.as(y),H.as(x))*0.8)
z.width=w
z.height=w
v=H.by((z&&C.i).w(z,"2d"),"$isa9")
u=z.width
if(typeof u!=="number")return u.H()
t=u*0.15
s=u/3
for(r=3,q=0;q<3;++q)for(y=(q+0.5)*s,x=q/2*255,p=0;p<3;++p){o=new G.ba(0,0,0,0,0,t,r)
o.a=(p+0.5)*s
o.b=y
o.c=C.d.q(p/2*255)
o.e=C.d.q(x)
o.F(v);++r}}},1],["","",,G,{"^":"",ba:{"^":"f;a,b,c,d,e,f,r",
F:function(a){var z,y,x,w
z=this.c
y=this.e
a.toString
a.fillStyle="rgba("+z+", "+this.d+", "+y+", 1)"
a.beginPath()
y=this.f
a.moveTo(this.a+y,this.b)
for(z=this.r,x=0;x<z;){++x
w=6.283185307179586*x/z
a.lineTo(this.a+Math.cos(w)*y,this.b+Math.sin(w)*y)}a.fill()}}}]]
setupProgram(dart,0,0)
J.h=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.b2.prototype
return J.ae.prototype}if(typeof a=="string")return J.R.prototype
if(a==null)return J.b3.prototype
if(typeof a=="boolean")return J.b1.prototype
if(a.constructor==Array)return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
return a}if(a instanceof P.f)return a
return J.az(a)}
J.ax=function(a){if(typeof a=="string")return J.R.prototype
if(a==null)return a
if(a.constructor==Array)return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.T.prototype
return a}if(a instanceof P.f)return a
return J.az(a)}
J.N=function(a){return J.ax(a).gj(a)}
J.C=function(a){return J.h(a).h(a)}
var $=I.p
C.i=W.P.prototype
C.j=J.d.prototype
C.c=J.H.prototype
C.d=J.ae.prototype
C.k=J.Q.prototype
C.a=J.R.prototype
C.r=J.T.prototype
C.h=J.b6.prototype
C.b=J.am.prototype
C.l=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.e=function(hooks) { return hooks; }

C.n=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.o=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.p=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.q=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
$.k=0
$.r=null
$.a7=null
$.aA=null
$.aq=null
$.aG=null
$.J=null
$.K=null
$.a0=null
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){var z=$dart_deferred_initializers$[a]
if(z==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
z($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryParts={}
init.deferredPartUris=[]
init.deferredPartHashes=[];(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["ab","$get$ab",function(){return H.ay("_$dart_dartClosure")},"S","$get$S",function(){return H.ay("_$dart_js")},"X","$get$X",function(){return[]}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[]
init.types=[{func:1,args:[,]},{func:1,args:[P.v]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.bG(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.aw=a.aw
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.aE,[])
else F.aE([])})})()
//# sourceMappingURL=main.dart.js.map
