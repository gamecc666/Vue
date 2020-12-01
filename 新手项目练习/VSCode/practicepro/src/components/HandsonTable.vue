<template>
<div class="mainDiv">
  <div id="hot-preview" class="cContaint">
    <HotTable :root="root" ref="testHot" :settings="hotSettings"></HotTable>
  </div>
  <div class="btnDiv">
    <div class="setPadding-input">
      选中规则区域：<el-input type="text" :readonly="true" style="width:85px" v-model="selectedRuleArea" size="mini" placeholder="选中的单元格/区域"></el-input>
      设置单元格值：<el-input type="text" style="width:80px" v-model="inputVal" size="mini" placeholder="请输入要填入表格的值"></el-input>
      <el-button type="primary" @click="fillCellValEvent" size="mini" plain>填入选中单元格值</el-button>
      获取选中单个单元格的值：<el-input type="text" v-model="selectedVal" size="mini" style="width:80px"></el-input>
      <el-button type="primary" size="mini" plain @click="clearCellValueEvent">清除选中的单元格值</el-button>
    </div>
    <div>
      批注内容：<el-input type="text" style="width:85px" v-model="commentVal" size="mini" placeholder="批注内容"></el-input>
      <el-button size="mini" @click="setCommentEvent" type="primary">确定</el-button>
      <el-button type="primary" plain size="mini" @click="deleteAreaComment">删除选中的单元格批注</el-button>
    </div>
  </div>
</div>

</template>
<script>
import {HotTable} from '@handsontable/vue'
import '../../node_modules/handsontable/dist/handsontable.full.css'
import HandsonTable from 'handsontable'

export default {
  data: function() {
      return {
        commentVal:'',
        selectedNoRuleArea:'',
        selectedVal:'',
        selectedRuleArea:'',
        inputVal:'',
        root: 'test-hot',
        hotSettings: {
          // data: [['sample', 'data']],
          data: [        //数据可以是二维数组，也可以是数组对象

            [false,'20080101', 10, 11, 12, 13,true],
            [false,'20090101', 20, 11, 14, 13,true],
            [false,'20010101', 30, 15, 12, 13,true],
            [false,'20010101', 32, 213, 21, 312,true]
          ],
          // colHeaders: true,
          startRows: 110,//行列范围
          startCols: 60,
          minRows: 5,  //最小行列
          minCols: 5,
          maxRows: 2000,  //最大行列
          maxCols: 20,
          rowHeaders: true,//行表头，可以使布尔值（行序号），可以使字符串（左侧行表头相同显示内容，可以解析html），也可以是数组（左侧行表头单独显示内容）。

          colHeaders:   [ '选择','题目', 'A选项', 'B选项', 'C选项', 'D选项','答案',],//自定义列表头or 布尔值
          minSpareCols: 20, //列留白

          minSpareRows: 200,//行留白
          // currentRowClassName: 'currentRow', //为选中行添加类名，可以更改样式
          // currentColClassName: 'currentCol',//为选中列添加类名
          autoWrapRow: true, //自动换行
          contextMenu:{
            items:{
                "row_above": {
                  name:'上方插入一行'
                },
                "row_below": {
                  name:'下方插入一行'
                },
                "col_left": {
                  name:'左方插入列'
                },
                "col_right": {
                  name:'右方插入列'
                },
                "hsep1": "---------", //提供分隔线
                "remove_row": {
                  name: '删除行',
                },
                "remove_col": {
                  name: '删除列',
                },
                "make_read_only": {
                  name: '只读',
                },
                "borders":{
                  name:'表格线'
                },
                "copy":{
                  name:'复制'
                },
                "cut":{
                  name:'剪切'
                },
                "commentsAddEdit": {
                  name: '添加备注',
                },
                "commentsRemove": {
                  name: '取消备注',
                },
                "freeze_column": {
                  name: '固定列',
                },
                "unfreeze_column": {
                  name: '取消列固定',
                },
                "hsep2": "---------",
            }
          },
          manualColumnFreeze: true, //手动固定列  ?
          manualColumnMove: true, //手动移动列
          manualRowMove: true,   //手动移动行
          manualColumnResize: true,//手工更改列距
          manualRowResize: true,//手动更改行距
          comments: true, //添加注释  ?
          cell: [  //???
            {row: 1, col: 1, comment: {value: 'this is test'}},
          ],
          customBorders:[],//添加边框
          columnSorting: true,//排序
          stretchH: 'all',//根据宽度横向扩展，last:只扩展最后一列，none：默认不扩展
          fillHandle: true, //选中拖拽复制 possible values: true, false, "horizontal", "vertical"
          // fixedColumnsLeft: 2,//固定左边列数
          // fixedRowsTop: 2,//固定上边列数
          mergeCells: [   //合并
             // {row: 1, col: 1, rowspan: 3, colspan: 3},  //指定合并，从（1,1）开始行3列3合并成一格
             // {row: 3, col: 4, rowspan: 2, colspan: 2}
          ],
          columns: [     //添加每一列的数据类型和一些配置
            {type: 'checkbox'},  //多选框
            {
              type: 'date',   //时间格式
              dateFormat: 'YYYY-MM-DD',
              correctFormat: true,
              defaultDate: '19000101'
            },
            {
              type: 'dropdown', //下拉选择
              source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo'],
              strict: false   //是否严格匹配
            },
            {type: 'numeric'},  //数值
            {type: 'numeric',
              readOnly: true  //设置只读
            },
            { type: 'numeric',
              format: '$ 0,0.00'},  //指定的数据格式
            {},

          ],
          licenseKey: "non-commercial-and-evaluation"//提示非商业用途
          // afterChange: function (changes, source) {
          //   console.log(`值发生了改变！！！`);
          // },
          // afterSelectionEnd :function(sRow,sCol,eRow,eCol){
          //   console.log(`选中的数据 ||开始行：${sRow} ||开始列:${sCol} ||结束行:${eRow} ||结束列：${eCol}`);
          //   let str='||开始行：${sRow} ||开始列:${sCol} ||结束行:${eRow} ||结束列：${eCol}';
          // }
        }
      };
    },
    created(){

    },
    mounted(){
      HandsonTable.hooks.add("afterChange",function (result) {
        // console.log(`-----值改变的事件监听-----`);
      }),
      HandsonTable.hooks.add('afterSelectionEnd',this.afterSelectedEvent);
    },
    methods:{
      // 删除选中的区域的批注
      deleteAreaComment(){
        if(!this.selectedNoRuleArea.length==0){
          for(let i=0;i<this.selectedNoRuleArea.length;i++){
            for(let row=this.selectedNoRuleArea[i][0];row<=this.selectedNoRuleArea[i][2];row++){
              for(let col=this.selectedNoRuleArea[i][1];col<=this.selectedNoRuleArea[i][3];col++){
                this.$refs.testHot.hotInstance.getPlugin('comments').removeCommentAtCell(row,col);
              }
            }
          }
        }
      },
      // removeCommentAtCell
      setCommentEvent(){
        console.log(`come in setCommentEvent!!!`);
        if(this.commentVal){
          for(let i=0;i<this.selectedNoRuleArea.length;i++){
            for(let row=this.selectedNoRuleArea[i][0];row<=this.selectedNoRuleArea[i][2];row++){
              for(let col=this.selectedNoRuleArea[i][1];col<=this.selectedNoRuleArea[i][3];col++){
                this.$refs.testHot.hotInstance.getPlugin('comments').setCommentAtCell(row,col,this.commentVal);
              }
            }
          }
        }
      },
      clearCellValueEvent(){
        console.log(`come in clearCellValueEvent!!!`);
        for(let i=0;i<this.selectedNoRuleArea.length;i++){
            for(let row=this.selectedNoRuleArea[i][0];row<=this.selectedNoRuleArea[i][2];row++){
              for(let col=this.selectedNoRuleArea[i][1];col<=this.selectedNoRuleArea[i][3];col++){
                console.log(row,col);
                this.$refs.testHot.hotInstance.setDataAtCell(row,col,null);
              }
            }
          }
      },
      fillCellValEvent(){
        console.log(`come in fillCellValEvent!!!`);
        console.log(this.selectedNoRuleArea);
        if(this.inputVal){
          for(let i=0;i<this.selectedNoRuleArea.length;i++){
            for(let row=this.selectedNoRuleArea[i][0];row<=this.selectedNoRuleArea[i][2];row++){
              for(let col=this.selectedNoRuleArea[i][1];col<=this.selectedNoRuleArea[i][3];col++){
                console.log(row,col);
                this.$refs.testHot.hotInstance.setDataAtCell(row,col,this.inputVal);
              }
            }
          }
        }
      },
      afterSelectedEvent(sRow,sCol,eRow,eCol){
        // console.log(this.$refs.testHot);
        console.log(`come in afterSelectedEvent`);
        let str=`(${sRow},${sCol},${eRow},${eCol})`;
        this.selectedRuleArea=str;
        // 获取单元格的值
        var val=this.$refs.testHot.hotInstance.getDataAtCell(eRow,eCol);
        this.selectedVal=val?val.toString():'';
        // 得到选中的区域
        this.selectedNoRuleArea=this.$refs.testHot.hotInstance.getSelected();
      }
    },
    components: {
      HotTable
    }
}
</script>
<style src='../assets/css/HTable.css' lang='css' scoped></style>
