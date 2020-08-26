const utils = {
  /**
   * 获取元素样式
   * @param  {DOMObject} obj  要获取样式的DOM对象
   * @param  {string}    attr 要获取的样式的名称
   * @return {string}         获取到的样式的值
   */
  // ES6的字面朗对象里可以直接写  getStyle(){} 中间的 :function 可以省略
  getStyle(obj, attr) {
    if (obj.currentStyle) {
      // IE
      return obj.currentStyle[attr]
    } else {
      // 非IE
      return getComputedStyle(obj)[attr]
    }
  },
  /**
   * 添加事件监听
   * @param {DOMObject} ele          添加事件的对象
   * @param {string}    type         事件类型（不带on）
   * @param {function}  fn           事件处理函数
   * @param {boolean}   [isCapture]  是否捕获，true代表捕获，false代表冒泡，默认值为false
   */
  on(ele, type, fn, isCapture) {
    // isCapture默认值为false
    // isCapture = isCapture === undefined ? false : isCapture
    if (isCapture === undefined) isCapture = false
    if (ele.attachEvent) {
      ele.attachEvent('on' + type, fn)
    } else {
      ele.addEventListener(type, fn, isCapture)
    }
  },
  /**
   * 移除事件监听
   * @param {DOMObject} ele          添加事件的对象
   * @param {string}    type         事件类型（不带on）
   * @param {function}  fn           事件处理函数
   * @param {boolean}   [isCapture]  是否捕获，true代表捕获，false代表冒泡，默认值为false
   */
  off(ele, type, fn, isCapture) {
    if (isCapture === undefined) isCapture = false
    if (ele.detachEvent) {
      ele.detachEvent('on' + type, fn)
    } else {
      ele.removeEventListener(type, fn, isCapture)
    }
  },
  /**
   * 元素匀速运动
   * @param {DOMObject} ele      要运动的DOM元素
   * @param {string}    attr     运动的属性名
   * @param {number}    end      运动的终点
   * @param {number}    duration 运动的总时间（单位：ms）
   * @param {function}  callback 可选参数，完成运动之后的回调函数
   */
  move(ele, attr, end, duration, callback) {
    // 通过样式获取起始点
    var start = parseInt(this.getStyle(ele, attr))
    // 计算总距离
    var distance = end - start
    // 计算运动的总步数（每隔20ms走一步）
    var steps = parseInt(duration / 20)
    // 计算速度（px/步）
    var speed = distance / steps
    // 记录步数
    var n = 0
    // 先清除上一次的定时器
    clearInterval(ele.timer)
    // 把timer写给ele对象的属性，这样确保唯一性
    ele.timer = setInterval(() => {
      n++
      ele.style[attr] = start + n * speed + 'px'
      // 判断终点
      if (n === steps) {
        clearInterval(ele.timer)
        // 这里有可能不能刚好达到终点，因为js小数运算有误差，speed很可能是一个小数
        ele.style[attr] = end + 'px'
        // 运动结束以后调用回调
        // 调用回调的常用写法：callback有效才调用
        callback && callback()
      }
    }, 20)
  },
  /**
   * 元素缓冲运动
   * @param {DOMObject} ele      要运动的DOM元素
   * @param {string}    attr     运动的属性名
   * @param {number}    end      运动的终点
   * @param {function}  callback 可选参数，完成运动之后的回调函数
   */
  move1(ele, attr, end, callback) {
    var start = parseInt(this.getStyle(ele, attr))
    clearInterval(ele.timer)
    // 剩下距离和速度都要在定时器里每次计算
    ele.timer = setInterval(() => {
      // 计算剩下距离
      var distance = end - start
      // 计算速度：剩下距离的1/10
      // 正向运动向上取整，负向运动向下取整
      var speed = distance > 0 ? Math.ceil(distance / 10) : Math.floor(distance / 10)
      // start代表当前位置，所以需要往前走，只有start变化了，distance才代表剩下距离
      start += speed
      // start就是我要运动的位置
      ele.style[attr] = start + 'px'
      // 判断终点
      // 因为最后几步是1px运动的，所以一定能刚好到达终点
      if (start === end) {
        clearInterval(ele.timer)
        callback && callback()
      }
    }, 20)
  },

  /**
   * 计算某个元素到文档边缘的坐标
   * @param {DOMObject} ele 要计算坐标的DOM元素
   * @return {object}    例如：{ left: 100, top: 200 }
   */
  getBodyOffset(ele) {
    var left = 0, top = 0
    // 如果ele有固定定位，那么他的offsetParent就是null
    // 但是固定定位元素自己是有offsetTop和offsetLeft的值
    do {
      left += ele.offsetLeft
      top += ele.offsetTop
      // 把ele作为ele的父级，为下一次累加做准备
      // 要判断部位null才往上赋值
      if (ele.offsetParent !== null) ele = ele.offsetParent
    } while (ele.offsetParent !== null)
    return { left, top }
  },
  
}
