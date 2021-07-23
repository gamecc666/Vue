/**
 * @classdesc 栈
 */
export class Stack{
    /**
     * @constructor 无参构造函数
     */
    constructor(){
        this.items=[];
    }
    /**
     * @description 入栈
     * @returns {void}
     */
    push(el){
        this.items.push(el);
    }
    /**
     * @description 出栈
     * @returns 栈顶元素
     */
    pop(){
        return this.items.pop();
    }
    /**
     * @description 查看栈顶元素
     * @returns 栈顶元素
     */
    peek(){
        return this.items[this.items.length-1];
    }
    /**
     * @description 栈大小
     * @returns {Number} 
     */
    size(){
        return this.items.length;
    }
    /**
     * @description 清空栈
     * @returns {void}
     */
    clear(){
        this.items=[];
    }
    /**
     * @description 输出栈中元素
     * @returns {string} 
     */
    print(){
        return this.items.toString();
    }
}
/**
 * 将日期格式化为“yyyy-MM-dd”
 * @param {Date} date 日期
 * @returns {string}
 */
export function dateFormat(date){
    var yyyy = date.getFullYear();
    var MM = date.getMonth() + 1;
    MM = MM < 10 ? "0" + MM:MM;
    let dd = date.getDate();
    dd = dd < 10 ? "0" + dd:dd;
    
    return (yyyy + '-' + MM + '-' + dd);
}
/**
 * 返回参数的类型；如“[object Number]”
 * @param {*} obj 任意类型的对象
 * @returns {string}
 */
export function getType(obj){
    return Object.prototype.toString.call(obj);
}
/**
 * 从服务端获取excel文件流并下载下来
 * @param {*} data 任意对象；参考（https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/Blob）
 * @param {string} name 设置下载到本地的文件名字
 */
export function readAndDownloadExcel(data, name){
    var blob = new Blob( [data], { type: "application/octet-stream" } );
    var blobUrl = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.style.display = 'none';
    a.download = name;
    a.href = blobUrl;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
/**
 * 过滤掉数组中为空/null的元素
 * @param {Array} arr 需要过滤的数组
 */
export function filterNullOrEmptyEl(arr){
    return arr.filter(el => Boolean(el));
}
