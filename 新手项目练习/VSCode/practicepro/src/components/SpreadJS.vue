<template>
<div class="sroot">
    <div class="top" id="workbook">
        <gc-spread-sheets
            @workbookInitialized='initSpread($event)' 
            :hostClass='"spreadHost"'>            
        </gc-spread-sheets>
    </div>
    <div class="foot">   
        <input type="file" id="loadfile" style="width:100px"  @change="loadExcelChange">
        <el-button type="primary" @click="importEvent" plain size="mini">导入</el-button>
        <el-button type="primary" @click="saveDataToServeEvent" plain size="mini">保存到服务器</el-button>
        <el-button type="primary" @click="dataFromServeEvent" plain size="mini">从服务端加载数据</el-button>
    </div>
    <form name="myform" id="myform" enctype="multipart/form-data" method="post"></form>
</div>
</template>
<script>
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css';
import GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-vue';
import '@grapecity/spread-sheets-resources-zh';
import '@grapecity/spread-sheets-charts';
import {IO} from '@grapecity/spread-excelio';

GC.Spread.Common.CultureManager.culture('zh-cn');

import {
    upload,
    download
} from '@/request/api';

export default{
    components:{
    },
    props:{
    },
    data(){
        return{
            importFile:null,
            workbook:null,
            excelIO:null,
            fileName:''
        }
    },  
    created(){
    },
    mounted(){
        console.log(`come in mounted!!!`);     
        this.excelIO=new IO();
    },
    methods:{   
        dataFromServeEvent(){
            console.log(`come in dataFromServeEvent!!!`);
            let str='_[]test 测试.xlsx';
            this.fileName=str;
            download({name:str}).then(res=>{
                console.log(`下载excel!!!`);               
                let blob = new Blob([res.data], { type: "application/octet-stream" });
                let  spread=this.workbook;
                let io=this.excelIO;
                let file=this.importFile;
                io.open(blob,
                    function(json){
                        let obj=json;
                        spread.fromJSON(obj);
                    }
                )                    
            }).catch(error=>{
                console.log(error);
            });
        },       
        loadExcelChange(){
            this.importFile=document.getElementById('loadfile').files[0];
        },
        initSpread(spread){
            this.workbook=spread;
        },
        importEvent(){
            console.log(`come in importEvent!!!`);
            if(!this.importFile){
                alert('请先选择导入的xxx.xlsx文件');
                return;
            }    
            let  spread=this.workbook;
            let io=this.excelIO;
            let file=this.importFile;
            io.open(file,
                function(json){
                    let obj=json;
                    spread.fromJSON(obj);
                }
            )       
        },
        saveDataToServeEvent(){
            let spread=this.workbook;
            let io=this.excelIO;
            let fileStr=this.fileName;
            
            console.log(`come in saveDataToServeEvent!!!`);
            var json=spread.toJSON({includeBindingSource:true});
            io.save(json,
                function(blob){
                    var fd=new FormData(document.forms.namedItem('myform'));
                    fd.append('excelFile',blob);
                    fd.append('excelName',fileStr);

                    var xhr=new XMLHttpRequest();
                    xhr.onload=function(e){
                        console.log('完成');
                    };
                    xhr.onerror=function(error){
                        console.log('上传失败');
                        console.log(error);
                    };
                    xhr.open('POST','/dm02/spreadjsproAction/upload');
                    xhr.send(fd);
                },
                function(error){
                    console.log(error);
                })
        }
    }
}
</script>
<style scoped lang='css'>
.sroot{
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100%;
}
.spreadHost{
    width: 100%;
    height:100%;
}
.top{
    width: 100%;
    height:90%;
    background-color: rgb(140, 236, 164);
}
.foot{
    width: 100%;
    height: 10%;
    background-color: rgb(133, 139, 224);
}
</style>