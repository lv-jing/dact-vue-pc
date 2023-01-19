(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70f95b68","chunk-7678d918","chunk-7203127e","chunk-2d0ae56c","chunk-2d0e4cc8","chunk-2d0da305","chunk-2d22db6d","chunk-2d0c518c","chunk-2d238625","chunk-2d0e9764","chunk-2d0d8028","chunk-2d0abc4b"],{"0a49":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"mb-2"},[e._v("身份和配置类资产")]),a("el-table",{key:e.activeName,staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#f0f9eb",color:"black"},data:e.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"Asset"}}),a("el-table-column",{attrs:{prop:"name",label:"Asset Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Please Input"},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name",a)},expression:"scope.row.name"}})]}}])}),a("el-table-column",{attrs:{prop:"address",label:"Component"}}),a("el-table-column",{attrs:{prop:"address",label:"Asset Property"}}),a("el-table-column",{attrs:{prop:"address",label:"Comments"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Please Input"},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name",a)},expression:"scope.row.name"}})]}}])})],1)],1)},s=[],r={name:"AssetIdentification",props:["activeName"],data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}}},o=r,n=a("2877"),i=Object(n["a"])(o,l,s,!1,null,"d54cc11a",null);t["default"]=i.exports},"174c":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryParams}},[a("el-form-item",{attrs:{label:"Enterprise Abbr"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.user,callback:function(t){e.$set(e.queryParams,"user",t)},expression:"queryParams.user"}})],1),a("el-form-item",{attrs:{label:"Vehicle"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.region,callback:function(t){e.$set(e.queryParams,"region",t)},expression:"queryParams.region"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),a("el-table",{key:e.activeName,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"Goal ID"}}),a("el-table-column",{attrs:{prop:"name",label:"Goal Content"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Relevant Threat"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},s=[],r={name:"SecurityGoal",props:["activeName"],data:function(){return{total:20,queryParams:{pageNum:1,pageSize:10,user:"",region:""},options:[{value:"234",label:"严重"},{value:"4.43",label:"重大的"},{value:"2.2",label:"中等的"},{value:"4.1",label:"微不足道的"}],tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"234",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"4.43",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{onSubmit:function(){console.log("submit!")},getList:function(){console.log(this.queryParams)}}},o=r,n=a("2877"),i=Object(n["a"])(o,l,s,!1,null,"7fdf67ff",null);t["default"]=i.exports},"2f26":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-tabs",{staticClass:"back-f",attrs:{type:"border-card",lazy:""},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"first",lazy:""}},[a("template",{slot:"label"},[a("div",[e._v("Project Information"),a("br"),a("small",[e._v("项目信息")])])]),a("ProjectInformation")],2),a("el-tab-pane",{attrs:{name:"second"}},[a("template",{slot:"label"},[a("div",[e._v("Item Definition"),a("br"),a("small",[e._v("对象定义")])])]),a("ItemDefinition")],2),a("el-tab-pane",{attrs:{name:"third"}},[a("template",{slot:"label"},[a("div",[e._v("Asset Identification"),a("br"),a("small",[e._v("资产识别")])])]),a("AssetIdentification",{attrs:{activeName:e.activeName}})],2),a("el-tab-pane",{attrs:{name:"fourth"}},[a("template",{slot:"label"},[a("div",[e._v("Damage analysis"),a("br"),a("small",[e._v("危害分析")])])]),a("DamageAnalysis",{attrs:{activeName:e.activeName}})],2),a("el-tab-pane",{attrs:{name:"fifth"}},[a("template",{slot:"label"},[a("div",[e._v("Threats analysis"),a("br"),a("small",[e._v("威胁分析")])])]),a("ThreatsAnalysis",{attrs:{active:e.active,activeName:e.activeName}})],2),a("el-tab-pane",{attrs:{name:"sixth"}},[a("template",{slot:"label"},[a("div",[e._v("Risk Assessment"),a("br"),a("small",[e._v("风险评估")])])]),e._v("风险评估 ")],2),a("el-tab-pane",{attrs:{name:"seventh"}},[a("template",{slot:"label"},[a("div",[e._v("Security Goal"),a("br"),a("small",[e._v("安全目标")])])]),a("SecurityGoal",{attrs:{activeName:e.activeName}})],2),a("el-tab-pane",{attrs:{name:"eighth"}},[a("template",{slot:"label"},[a("div",[e._v("Requirement allocation"),a("br"),a("small",[e._v("网络安全需求分配")])])]),a("RequirementAllocation",{attrs:{activeName:e.activeName}})],2),a("el-tab-pane",{attrs:{name:"ninth"}},[a("template",{slot:"label"},[a("div",[e._v("Concept allocation"),a("br"),a("small",[e._v("网络安全概念分配")])])]),a("ConceptAllocation",{attrs:{activeName:e.activeName}})],2),a("el-tab-pane",{attrs:{name:"tenth"}},[a("template",{slot:"label"},[a("div",[e._v("Risk Re-Assessment"),a("br"),a("small",[e._v("风险重估")])])]),a("RiskReAssessment",{attrs:{activeName:e.activeName}})],2),a("el-tab-pane",{attrs:{name:"eleventh"}},[a("template",{slot:"label"},[a("div",[e._v("Security Claim"),a("br"),a("small",[e._v("安全声明")])])]),a("SecurityClaim",{attrs:{activeName:e.activeName}})],2)],1)],1)},s=[],r=(a("b0c0"),a("3e48")),o=a("f959"),n=a("0a49"),i=a("6b14"),u=a("b7e6"),m=a("174c"),p=a("fec3"),c=a("9281"),d=a("8e45"),b=a("78f7"),v={name:"EditProject",components:{ProjectInformation:r["default"],ItemDefinition:o["default"],AssetIdentification:n["default"],DamageAnalysis:i["default"],ThreatsAnalysis:u["default"],SecurityGoal:m["default"],RequirementAllocation:p["default"],ConceptAllocation:c["default"],RiskReAssessment:d["default"],SecurityClaim:b["default"]},data:function(){return{activeName:"first",active:"first"}},created:function(){this.activeName=sessionStorage.getItem("current_name"),this.active=sessionStorage.getItem("table_name")},beforeUpdate:function(){console.log(1)},methods:{handleClick:function(e){sessionStorage.setItem("current_name",e.name),sessionStorage.setItem("table_name","first"),this.active="first"}}},f=v,h=(a("d8c0"),a("2877")),y=Object(h["a"])(f,l,s,!1,null,null,null);t["default"]=y.exports},"3e48":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm font-semibold",attrs:{model:e.ruleForm,"status-icon":"","label-position":"left",rules:e.rules,"label-width":"200px"}},[a("el-form-item",{attrs:{label:"1 Project TOE",prop:"pass"}},[a("el-input",{attrs:{placeholder:"Please Input"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),a("el-form-item",{attrs:{label:"2 TOE Level",prop:"pass1"}},[a("el-select",{staticClass:"w100",attrs:{placeholder:"Please Select"},model:{value:e.ruleForm.pass1,callback:function(t){e.$set(e.ruleForm,"pass1",t)},expression:"ruleForm.pass1"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"3 Document Version",prop:"pass2"}},[a("el-input",{model:{value:e.ruleForm.pass2,callback:function(t){e.$set(e.ruleForm,"pass2",t)},expression:"ruleForm.pass2"}})],1),a("el-form-item",{attrs:{label:"4 Status",prop:"pass3"}},[a("el-input",{model:{value:e.ruleForm.pass3,callback:function(t){e.$set(e.ruleForm,"pass3",t)},expression:"ruleForm.pass3"}})],1),a("el-form-item",{attrs:{label:"5 Reviewer(s)",prop:"pass4"}},[a("el-input",{model:{value:e.ruleForm.pass4,callback:function(t){e.$set(e.ruleForm,"pass4",t)},expression:"ruleForm.pass4"}})],1),a("el-form-item",{attrs:{label:"6 Author(s)",prop:"pass5"}},[a("el-input",{model:{value:e.ruleForm.pass5,callback:function(t){e.$set(e.ruleForm,"pass5",t)},expression:"ruleForm.pass5"}})],1),a("el-form-item",{attrs:{label:"7 Author Department",prop:"pass6"}},[a("el-input",{model:{value:e.ruleForm.pass6,callback:function(t){e.$set(e.ruleForm,"pass6",t)},expression:"ruleForm.pass6"}})],1),a("el-form-item",{attrs:{label:"8 Author company",prop:"pass7"}},[a("el-input",{model:{value:e.ruleForm.pass7,callback:function(t){e.$set(e.ruleForm,"pass7",t)},expression:"ruleForm.pass7"}})],1),a("el-form-item",{attrs:{label:"9 Author phone num",prop:"pass8"}},[a("el-input",{model:{value:e.ruleForm.pass8,callback:function(t){e.$set(e.ruleForm,"pass8",t)},expression:"ruleForm.pass8"}})],1),a("el-form-item",{attrs:{label:"10 Doucment Secrecy Level",prop:"pass9"}},[a("el-input",{model:{value:e.ruleForm.pass9,callback:function(t){e.$set(e.ruleForm,"pass9",t)},expression:"ruleForm.pass9"}})],1),a("el-form-item",{attrs:{prop:"pass10"}},[a("template",{slot:"label"},[a("span",[e._v("11 Objects")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("目标")])]),a("el-input",{model:{value:e.ruleForm.pass10,callback:function(t){e.$set(e.ruleForm,"pass10",e._n(t))},expression:"ruleForm.pass10"}})],2),a("el-form-item",{attrs:{prop:"pass11"}},[a("template",{slot:"label"},[a("span",[e._v("12 Inputs")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("输入信息")])]),a("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.ruleForm.pass11,callback:function(t){e.$set(e.ruleForm,"pass11",e._n(t))},expression:"ruleForm.pass11"}})],2),a("el-form-item",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),a("el-form-item",{attrs:{prop:"pass12"}},[a("template",{slot:"label"},[a("span",[e._v("14 Outputs")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("工作输出")])]),a("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.ruleForm.pass12,callback:function(t){e.$set(e.ruleForm,"pass12",e._n(t))},expression:"ruleForm.pass12"}})],2),a("el-form-item",{attrs:{prop:"pass13"}},[a("template",{slot:"label"},[a("span",[e._v("15 Document History")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("文件历史")])]),a("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.ruleForm.pass13,callback:function(t){e.$set(e.ruleForm,"pass13",e._n(t))},expression:"ruleForm.pass13"}})],2),a("el-form-item",{attrs:{prop:"pass14"}},[a("template",{slot:"label"},[a("span",[e._v("16 Todo List")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("任务清单")])]),a("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.ruleForm.pass14,callback:function(t){e.$set(e.ruleForm,"pass14",e._n(t))},expression:"ruleForm.pass14"}})],2),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)},s=[],r={name:"ProjectInformation",data:function(){return{fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"food2.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],ruleForm:{pass:"",checkPass:"",age:""},rules:{pass:[{required:!0,message:"请输入",trigger:"change"}],checkPass:[{required:!0,message:"请输入",trigger:"change"}],age:[{required:!0,message:"请输入",trigger:"change"}]},options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:""}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){return!!e&&(console.log(t.ruleForm),"222")}))},resetForm:function(e){this.$refs[e].resetFields()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)}}},o=r,n=a("2877"),i=Object(n["a"])(o,l,s,!1,null,"16a9b45d",null);t["default"]=i.exports},"6b14":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{key:e.activeName,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"Asset"}}),a("el-table-column",{attrs:{prop:"name",label:"Asset Property"}}),a("el-table-column",{attrs:{prop:"amount1",label:"Damage Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Please Input"},model:{value:t.row.amount1,callback:function(a){e.$set(t.row,"amount1",a)},expression:"scope.row.amount1"}})]}}])}),a("el-table-column",{attrs:{prop:"amount2",label:"Safety"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.amount2,callback:function(a){e.$set(t.row,"amount2",a)},expression:"scope.row.amount2"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{prop:"amount3",label:"Financial"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.amount2,callback:function(a){e.$set(t.row,"amount2",a)},expression:"scope.row.amount2"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{prop:"amount3",label:"Privacy"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.amount2,callback:function(a){e.$set(t.row,"amount2",a)},expression:"scope.row.amount2"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{prop:"amount3",label:"Operational"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.row.amount2,callback:function(a){e.$set(t.row,"amount2",a)},expression:"scope.row.amount2"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])}),a("el-table-column",{attrs:{prop:"amount3",label:"Impact Rating"}})],1)],1)},s=[],r={name:"DamageAnalysis",props:["activeName"],data:function(){return{options:[{value:"234",label:"严重"},{value:"4.43",label:"重大的"},{value:"2.2",label:"中等的"},{value:"4.1",label:"微不足道的"}],tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"234",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"4.43",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{}},o=r,n=a("2877"),i=Object(n["a"])(o,l,s,!1,null,"1cc257a6",null);t["default"]=i.exports},"78f7":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryParams}},[a("el-form-item",{attrs:{label:"Enterprise Abbr"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.user,callback:function(t){e.$set(e.queryParams,"user",t)},expression:"queryParams.user"}})],1),a("el-form-item",{attrs:{label:"Vehicle"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.region,callback:function(t){e.$set(e.queryParams,"region",t)},expression:"queryParams.region"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),a("el-table",{key:e.activeName,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"Component"}}),a("el-table-column",{attrs:{prop:"name",label:"Risk ID"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Threat Name"}}),a("el-table-column",{attrs:{prop:"id",label:"Attack ID"}}),a("el-table-column",{attrs:{prop:"id",label:"Concept ID"}}),a("el-table-column",{attrs:{prop:"id",label:"Concept Content"}}),a("el-table-column",{attrs:{prop:"id",label:"Claim ID"}}),a("el-table-column",{attrs:{prop:"id",label:"Claim Content"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},s=[],r={name:"SecurityClaim",props:["activeName"],data:function(){return{total:20,queryParams:{pageNum:1,pageSize:10,user:"",region:""},options:[{value:"234",label:"严重"},{value:"4.43",label:"重大的"},{value:"2.2",label:"中等的"},{value:"4.1",label:"微不足道的"}],tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"234",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"4.43",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{onSubmit:function(){console.log("submit!")},getList:function(){console.log(this.queryParams)}}},o=r,n=a("2877"),i=Object(n["a"])(o,l,s,!1,null,"0ffdd92e",null);t["default"]=i.exports},"8e45":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryParams}},[a("el-form-item",{attrs:{label:"Enterprise Abbr"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.user,callback:function(t){e.$set(e.queryParams,"user",t)},expression:"queryParams.user"}})],1),a("el-form-item",{attrs:{label:"Vehicle"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.region,callback:function(t){e.$set(e.queryParams,"region",t)},expression:"queryParams.region"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),a("el-table",{key:e.activeName,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"Threat_Name",width:"150px"}}),a("el-table-column",{attrs:{prop:"name",label:"Attack_L1_Name",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Attack_L2_Name",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Attack_L3_Name",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Attack_L4_Name",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Attack_L5_Name",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Component_Name",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Original_Feasibility_Level",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Target_Feasibility_Level",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Final_Feasibility_Level",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Original_Risk",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Final_Risk",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Security_Claim",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Mitigation_Flag",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Requirement_ID",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Requirement_Content",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Concept_ID",width:"150px"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Concept_Brief",width:"150px"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},s=[],r={name:"RiskReAssessment",props:["activeName"],data:function(){return{total:20,queryParams:{pageNum:1,pageSize:10,user:"",region:""},options:[{value:"234",label:"严重"},{value:"4.43",label:"重大的"},{value:"2.2",label:"中等的"},{value:"4.1",label:"微不足道的"}],tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"234",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"4.43",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{onSubmit:function(){console.log("submit!")},getList:function(){console.log(this.queryParams)}}},o=r,n=a("2877"),i=Object(n["a"])(o,l,s,!1,null,"55811a12",null);t["default"]=i.exports},9281:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryParams}},[a("el-form-item",{attrs:{label:"Enterprise Abbr"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.user,callback:function(t){e.$set(e.queryParams,"user",t)},expression:"queryParams.user"}})],1),a("el-form-item",{attrs:{label:"Vehicle"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.region,callback:function(t){e.$set(e.queryParams,"region",t)},expression:"queryParams.region"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),a("el-table",{key:e.activeName,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"Component"}}),a("el-table-column",{attrs:{prop:"name",label:"Concept ID"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Concept Content"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},s=[],r={name:"ConceptAllocation",props:["activeName"],data:function(){return{total:20,queryParams:{pageNum:1,pageSize:10,user:"",region:""},options:[{value:"234",label:"严重"},{value:"4.43",label:"重大的"},{value:"2.2",label:"中等的"},{value:"4.1",label:"微不足道的"}],tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"234",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"4.43",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{onSubmit:function(){console.log("submit!")},getList:function(){console.log(this.queryParams)}}},o=r,n=a("2877"),i=Object(n["a"])(o,l,s,!1,null,"cf9fa87a",null);t["default"]=i.exports},"95c1":function(e,t,a){},b7e6:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("el-tab-pane",{attrs:{label:"LEVEL-5",name:"first"}}),a("el-tab-pane",{attrs:{label:"LEVEL-4",name:"second"}}),a("el-tab-pane",{attrs:{label:"LEVEL-3",name:"third"}}),a("el-tab-pane",{attrs:{label:"LEVEL-2",name:"fourth"}}),a("el-tab-pane",{attrs:{label:"LEVEL-1",name:"fifth"}}),a("el-tab-pane",{attrs:{label:"TREES",name:"sixth"}},[e._v("定时任务补偿")])],1),a("SecondTable",{directives:[{name:"show",rawName:"v-show",value:"sixth"!==e.active,expression:"active!=='sixth'"}],attrs:{activeName:e.activeName,tableData:e.tableData}})],1)},s=[],r=(a("b0c0"),a("d25f")),o={name:"ThreatsAnalysis",components:{SecondTable:r["default"]},props:["active","activeName"],data:function(){return{tableData:[]}},mounted:function(){console.log(this.active),"first"===this.active?this.tableData=[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]:this.tableData=[{id:1,date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:2,date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:3,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",children:[{id:31,name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{id:32,name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"}]},{id:4,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]},methods:{handleClick:function(e){sessionStorage.setItem("table_name",e.name)}}},n=o,i=a("2877"),u=Object(i["a"])(n,l,s,!1,null,"151efc38",null);t["default"]=u.exports},d25f:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"Attack"}},[a("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),a("el-form-item",{attrs:{label:"Sub_Attack"}},[a("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),a("el-form-item",{attrs:{label:"Attack Vector"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"Feasibility Rating"}},[a("el-select",{attrs:{placeholder:"活动区域"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),a("el-table",{key:e.activeName,staticStyle:{width:"100%"},attrs:{border:"","row-key":"id",data:e.tableData,"row-class-name":e.tableRowClassName,"tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{prop:"date",label:"Attack"}}),a("el-table-column",{attrs:{prop:"name",label:"Sub_Attack"}}),a("el-table-column",{attrs:{prop:"address",label:"Attack Category"}}),a("el-table-column",{attrs:{prop:"date",label:"Attack Description"}}),a("el-table-column",{attrs:{prop:"date",label:"Attack Vector"}}),a("el-table-column",{attrs:{prop:"date",label:"Complexity"}}),a("el-table-column",{attrs:{prop:"date",label:"Privilege Required"}}),a("el-table-column",{attrs:{prop:"date",label:"User Interaction"}}),a("el-table-column",{attrs:{prop:"date",label:"Feasibility Rating"}}),a("el-table-column",{attrs:{label:"Option"}},[[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("Edit")])]],2)],1)],1)},s=[],r={name:"SecondTable",props:["tableData","activeName"],data:function(){return{formInline:{user:"",region:""}}},methods:{tableRowClassName:function(e){var t=e.row;return t.children?"warning-row":""},onSubmit:function(){console.log("submit!")}}},o=r,n=(a("f8a1"),a("2877")),i=Object(n["a"])(o,l,s,!1,null,null,null);t["default"]=i.exports},d8c0:function(e,t,a){"use strict";a("95c1")},e37b:function(e,t,a){},f8a1:function(e,t,a){"use strict";a("e37b")},f959:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm font-semibold",attrs:{model:e.ruleForm,"status-icon":"","label-position":"left",rules:e.rules,"label-width":"250px"}},[a("el-form-item",{attrs:{prop:"pass"}},[a("template",{slot:"label"},[a("span",[e._v("2 System Overview")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("系统概述")])]),a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Please Input"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],2),a("el-form-item",{attrs:{prop:"pass1"}},[a("template",{slot:"label"},[a("span",[e._v("2.1 System Information")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("系统信息")])]),a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Please Input"},model:{value:e.ruleForm.pass1,callback:function(t){e.$set(e.ruleForm,"pass1",e._n(t))},expression:"ruleForm.pass1"}})],2),a("el-form-item",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),a("el-form-item",{attrs:{prop:"pass2"}},[a("template",{slot:"label"},[a("span",[e._v("2.2 Functions")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("功能描述")])]),a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Please Input"},model:{value:e.ruleForm.pass2,callback:function(t){e.$set(e.ruleForm,"pass2",e._n(t))},expression:"ruleForm.pass2"}})],2),a("el-form-item",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),a("el-form-item",{attrs:{prop:"pass3"}},[a("template",{slot:"label"},[a("span",[e._v("2.3 Network Topology")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("网络拓扑架构")])]),a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Please Input"},model:{value:e.ruleForm.pass3,callback:function(t){e.$set(e.ruleForm,"pass3",e._n(t))},expression:"ruleForm.pass3"}})],2),a("el-form-item",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),a("el-form-item",{attrs:{prop:"pass4"}},[a("template",{slot:"label"},[a("span",[e._v("2.4 Operational Environment")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("运行环境")])]),a("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"Please Input"},model:{value:e.ruleForm.pass4,callback:function(t){e.$set(e.ruleForm,"pass4",e._n(t))},expression:"ruleForm.pass4"}})],2),a("el-form-item",[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),a("el-form-item",{attrs:{prop:"pass5"}},[a("template",{slot:"label"},[a("span",[e._v("2.5 Exisiting Security Measures")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("现有安全措施")])]),a("el-select",{staticClass:"w100",attrs:{placeholder:"Please Select",multiple:""},model:{value:e.ruleForm.pass5,callback:function(t){e.$set(e.ruleForm,"pass5",t)},expression:"ruleForm.pass5"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],2),a("el-form-item",{attrs:{prop:"pass6"}},[a("template",{slot:"label"},[a("span",[e._v("2.6 Assumptions")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("假设")])]),a("el-select",{staticClass:"w100",attrs:{placeholder:"Please Select",multiple:""},model:{value:e.ruleForm.pass6,callback:function(t){e.$set(e.ruleForm,"pass6",t)},expression:"ruleForm.pass6"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],2),a("el-form-item",{attrs:{prop:"pass7"}},[a("template",{slot:"label"},[a("span",[e._v("2.6 Constraints")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("约束")])]),a("el-select",{staticClass:"w100",attrs:{placeholder:"Please Select",multiple:""},model:{value:e.ruleForm.pass7,callback:function(t){e.$set(e.ruleForm,"pass7",t)},expression:"ruleForm.pass7"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],2),a("el-form-item",{attrs:{prop:"pass8"}},[a("template",{slot:"label"},[a("span",[e._v("2.6 Components")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("组件")])]),a("el-select",{staticClass:"w100",attrs:{placeholder:"Please Select",multiple:""},model:{value:e.ruleForm.pass8,callback:function(t){e.$set(e.ruleForm,"pass8",t)},expression:"ruleForm.pass8"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],2),a("el-form-item",{attrs:{prop:"pass9"}},[a("template",{slot:"label"},[a("span",[e._v("2.6 Sub-Systems")]),a("div",{staticClass:"-mt-1 text-xs text-gray-400"},[e._v("子系统")])]),a("el-select",{staticClass:"w100",attrs:{placeholder:"Please Select",multiple:"",clearable:""},model:{value:e.ruleForm.pass9,callback:function(t){e.$set(e.ruleForm,"pass9",t)},expression:"ruleForm.pass9"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],2),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)},s=[],r={name:"ItemDefinition",data:function(){return{fileList:[],ruleForm:{pass:"",checkPass:"",age:""},rules:{pass:[{required:!0,message:"请输入",trigger:"change"}],checkPass:[{required:!0,message:"请输入",trigger:"change"}],age:[{required:!0,message:"请输入",trigger:"change"}]},options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:""}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){return!!e&&(console.log(t.ruleForm),"222")}))},resetForm:function(e){this.$refs[e].resetFields()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)}}},o=r,n=a("2877"),i=Object(n["a"])(o,l,s,!1,null,"7917b9df",null);t["default"]=i.exports},fec3:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.queryParams}},[a("el-form-item",{attrs:{label:"Enterprise Abbr"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.user,callback:function(t){e.$set(e.queryParams,"user",t)},expression:"queryParams.user"}})],1),a("el-form-item",{attrs:{label:"Vehicle"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryParams.region,callback:function(t){e.$set(e.queryParams,"region",t)},expression:"queryParams.region"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),a("el-table",{key:e.activeName,staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"Component"}}),a("el-table-column",{attrs:{prop:"name",label:"Requirement ID"}}),a("el-table-column",{attrs:{prop:"amount3",label:"Requrement Content"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1)},s=[],r={name:"RequirementAllocation",props:["activeName"],data:function(){return{total:20,queryParams:{pageNum:1,pageSize:10,user:"",region:""},options:[{value:"234",label:"严重"},{value:"4.43",label:"重大的"},{value:"2.2",label:"中等的"},{value:"4.1",label:"微不足道的"}],tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"234",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"4.43",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{}},o=r,n=a("2877"),i=Object(n["a"])(o,l,s,!1,null,"39b612fe",null);t["default"]=i.exports}}]);