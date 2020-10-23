var workbook,excelIO;
window.onload=()=>{
    console.log('all html content loaded!');
    //初始化
    workbook=new GC.Spread.Sheets.Workbook(document.getElementById('workbook'),{sheetCount:3});
    //workbook=new GC.Spread.Sheets.findControl(document.getElementById('workbook')); //得到定制的workbook
    excelIO=new GC.Spread.Excel.IO();
    GC.Spread.Common.CultureManager.culture("zh-cn");
    // 配置
    initOptions();
    // workbook初始化
    infiniteExtension();
    // 按钮事件监听\
    listenEvent();
    // 功能的实现 
    importExcelFile();
    exportExcelFile();  
}
//************************************Workbook操作**********************************************
// 常用初始化选项
var initOptions=()=>{
    // workbook.options.newTabVisible=false;               //是否显示新增按钮
    // workbook.options.tabStripRatio=0.9;                //工作簿下方的横向滚动条的tab位置
    // workbook.options.tabStripVisible=false;           //是否显示下方的表单选项卡
    // workbook.options.showHorizontalScrollbar=false;   //是否显示水平管东条
    // workbook.options.showVerticalScrollbar=false;     //是否显示垂直滚动条
    // workbook.options.scrollbarShowMax=false;           //滚动条是否基于完整的行和列数
    workbook.options.scrollbarMaxAlign=true;              //滚动条与表单的最后一行、最后一列对齐
    workbook.options.allowExtendPasteRange=true;          //如果粘贴区域不足的话是否扩展粘贴区域
}
// 表格无线延伸
var infiniteExtension=()=>{
    let sheet=workbook.getActiveSheet();
    //纵向延伸
    sheet.bind(GC.Spread.Sheets.Events.TopRowChanged,function(sender,args){
        let rowcounts=sheet.getRowCount();
        let bottomrow=sheet.getViewportBotomRow(1);

        if(bottomrow==rowcounts-1){
            if(rowcounts<10000){
                sheet.setRow(rowcounts+10);
            }
        }
    });
    // 横向延伸
    sheet.bind(GC.Spread.Sheets.Events.LeftColumnChanged,function(sender,args){
        let columncounts=sheet.getColumnCount();
        let rightcolumn=sheet.getViewportRightColumn(1);

        if(rightcolumn==columncounts-1){
            if(columncounts<10000){
                sheet.setColumnCount(columncounts+10);
            }
        }
    });
}
// 按钮事件的监听
var listenEvent=()=>{
    // wookbook级别
    // 被动事件
    document.getElementById('new').addEventListener('click',function(){
        workbook.options.newTabVisible=!this.checked;    
    });
    document.getElementById('hidevertical').addEventListener('click',function(){
        workbook.options.showVerticalScrollbar=!this.checked;
    });
    document.getElementById('hidehorizontal').addEventListener('click',function(){
        workbook.options.showHorizontalSCrollbar=!this.checked;
    });
    document.getElementById('scrooltip').addEventListener('click',function(){
        workbook.options.showScrollTip=this.checked?GC.Spread.Sheets.ShowScrollTip.both:GC.Spread.Sheets.ShowScrollTip.none;
    });
    // 主动事件
    workbook.bind(GC.Spread.Sheets.Events.ActiveSheetChanged,function(sender,args){
        infiniteExtension();
    });
    // sheet级别
    initSheetEvet();
}
// 导入excel
var importExcelFile=()=>{
    document.getElementById('import').onclick=function(){
        let excelfile=document.getElementById('loadfile').files[0];
        if(!excelfile)
        {
            alert('请先选择导入的 xxx.xlsx文件');
            return;
        }
        // excelIO.open(file,successCallBack,errorCallBack);
        // 反序列化数据
        // workbook.fromJSON(sheetSettins)
        excelIO.open(excelfile,function(json){
            workbook.fromJSON(json);
        },
        function(error){
            alert(`import from excel file,failed;failed info ${error}`);
        })
    }
}
// 导出excel
var exportExcelFile=()=>{
    document.getElementById('export').onclick=function(){
        let filename=document.getElementById('exportfilename').files[0];
        if(filename.substr(-5,5)!=='.xlsx')
        {
           filename+='.xlsx';
        }
        let json=workbook.toJSON();      
        excelIO.save(json,
            function(blob){
                saveAs(blob,filename);
            },
            function(error){
                alert(`export failed;failed info ${error}`);
            })
    }
}
//***********************************sheets操作******************************************
//workbook.setActiveSheet('sheet2');   //设置当前活动的表单
//var sheet=workbook.getActiveSheet();   //得到当前的活动表单
//sheet.getActiveRowIndex();  //得到当前活动行的索引
//sheet.getActiveColumnIndex(); //得到当前活动列的索引
//sheet.getViewportBotomRow(viewportIndex); //当前底部行的索引
    //枚举类型：GC.Spread.Sheets.SheetArea{corner:表单的边角；colHeader:列标题；rowHeader:行标题；viewport:视图}

var initSheetEvet=()=>{
    // 主动事件
    // 获取当前命中单元格位置
    workbook.getHost().addEventListener('click',function(e){
        let activesheet=workbook.getActiveSheet();
        let x=e.pageX-this.offsetLeft;
        let y=e.pageY-this.offsetTop;
        let result=workbook.hitTest(x,y);

        let currentcellinfo=document.getElementById('currentcellinfo');
        let currentcellvalue=document.getElementById('currentcellvalue');
        let hitobj=HitInfoNew(result);
        if(hitobj)
        {
            currentcellinfo.value=hitobj.info;
            currentcellinfo.setAttribute('data-position',JSON.stringify({x:hitobj.x,y:hitobj.y}));
            currentcellvalue.value=activesheet.getCell(hitobj.x.hitobj.y).text();
        }
        else{
            currentcellvalue.value=null;
            currentcellinfo.value=null;
            if(currentcellinfo.dataset.position){
                delete currentcellinfo.dataset.position;
            }
        }
    });
    // 被动事件
    // 测试代码动态获取选择的范围
    // document.getElementById('getrange').addEventListener('click',fucntion(event){
    //     let activesheet=workbook.getActiveSheet();
    //     let selectrange=activesheet.getSelections();
    //     console.log('输出范围');
    //     console.log(selectrange);
    // })
    // 动态添加批注信息
    document.getElementById('commentinsert').addEventListener('click',function(){
        let activesheet=workbook.getActiveSheet();
        let selectrange=activesheet.getSelections();
        let commentinfo=document.getElementById('cmmentinfo').value;

        if((selectrange.length!=0)&&(commentinfo!='')){
            for(let rangecount=0;rangecount<selectrange.length;rangecount++){
                for(let r=0;r<selectrange[rangecount].rowCount;r++){
                    for(let c=0;c<selectrange[rangecount].colCount;c++){
                        let currow=selectrange[rangecount].row+r;
                        let curcol=selectrange[rangecount].col+c;
                        let comment=activesheet.comments.add(currow,curcol,commentinfo);
                        comment.backColor("yellow");
                        comment.foreColor("green");
                        comment.displayModel(GC.Spread.Sheets.Comments.DisplayModel.hoverShown);
                    }
                }
            }
        }
        else{
            alert('please check the selected range is or not null');
        }
    });
    // 动态删除批注信息（参考GC.Spread.Sheets.Comments.CommentManager对象）
    document.getElementById('commentdelete').addEventListener('click',function(){
        let activesheet=workbook.getActiveSheet();
        let comments=activesheet.comments;
        let selectrange=activesheet.getSelections();
       
        if(selectrange.length!=0){
            for(let rangecount=0;rangecount<selectrange.length;rangecount++){
                for(let r=0;r<selectrange[rangecount].rowCount;r++){
                    for(let c=0;c<selectrange[rangecount].colCount;c++){
                        let currow=selectrange[rangecount].row+r;
                        let curcol=selectrange[rangecount].col+c;
                        
                        if(comments.get(currow,curcol)){
                            comments.remove(currow,curcol);
                        }
                    }
                }
            }
        }
        else{
            alert('please select area firse!');
        }
    });
    // 边界信息
    document.getElementById('borderinfotip').addEventListener('click',function(){
        let sheet=workbook.getActiveSheet();
       
        alert(`rowcount is ${sheet.getRowCount()}, columncount is ${sheet.getColumnCount()},
            viewportBottomRow is ${sheet.getViewportBottomRow(1)},
            viewportLeftColumn is ${sheet.getViewportLeftColumn(1)},
            viewportRightColumn is ${sheet.getViewportRightColumn(1)},
            viewportTopRow is ${sheet.getViewportTopRow(1)},
        `);
    });
    // 单元格
    document.getElementById('setcurrentcellvalue').addEventListener('click',function(){
        let activesheet=workbook.getActiveSheet();
        cellvalue=document.getElementById('setcellvalue').value;

        if(cellvalue){
            let currentcellinfo=document.getElementById('currentcellinfo');
            let position=JSON.parse(currentcellinfo.dataset.position);

            activesheet.getCell(position.x,position.y).text(cellvalue);
        }
        
    });
}
//**********************************被调函数****************************************
// 监测点击区域（只检测单元格区域）
var HitInfoNew=(result)=>{
    if(result.worksheetHitInfo){
        if(result.worksheetHitInfo.hitTestType===3){
            let row=result.worksheetHitInfo.row;
            let col=result.worksheetHitInfo.col;
            let str=`(row:${row},col:${col})`;
            return {x:row,y:col,info:str};
        }
    }
}
// 检测点击区域（所有区域都检测）
var HitInfo=(result)=>{
    let str='';
    if(result.worksheetHitInfo){
        if(result.worksheetHitInfo.hitTestType===0){
            str='hitTestType=cirber';
        }else if (result.worksheetHitInfo.hitTestType===1) {
            str='hitTestType=colHeader';
        }else if (result.worksheetHitInfo.hitTestType===2) {
            str='hitTestType=rowHeader';
        }else {
            let row=result.worksheetHitInfo.row;
            let col=result.worksheetHitInfo.col;
            str=`(row:${row},col:${col})`;
            return {x:row,y:col,info:str};
        }
    }else if(result.tabStripHitInfo){
        if(result.tabStripHitInfo.navButton){
            str=result.tabStripHitInfo.navButton;
        }else if(result.tabStripHitInfo.sheetTab){
            str=result.tabStripHitInfo.sheetTab.sheetName;
        }else if(result.tabStripHitInfo.resize===true){
            str='resize';
        }else{
            str='blank';
        }
    }
    else if(result.horizontalScrollBarHitInfo){
        str=result.horizontalScrollBarHitInfo.element;
    }else if(result.verticalScrollBarHitInfo){
        str=result.verticalScrollBarHitInfo.element;
    }else if(result.footerCornerHitInfo){
        str=result.footerCornerHitInfo.element;
    }

    return str;
}