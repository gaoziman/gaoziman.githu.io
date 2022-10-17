const btf = {
  debounce: function (func, wait, immediate) {
    let timeout
    return function () {
      const context = this
      const args = arguments
      const later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  },

  throttle: function (func, wait, options) {
    let timeout, context, args
    let previous = 0
    if (!options) options = {}

    const later = function () {
      previous = options.leading === false ? 0 : new Date().getTime()
      timeout = null
      func.apply(context, args)
      if (!timeout) context = args = null
    }

    const throttled = function () {
      const now = new Date().getTime()
      if (!previous && options.leading === false) previous = now
      const remaining = wait - (now - previous)
      context = this
      args = arguments
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        func.apply(context, args)
        if (!timeout) context = args = null
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
      }
    }

    return throttled
  },

  sidebarPaddingR: () => {
    const innerWidth = window.innerWidth
    const clientWidth = document.body.clientWidth
    const paddingRight = innerWidth - clientWidth
    if (innerWidth !== clientWidth) {
      document.body.style.paddingRight = paddingRight + 'px'
    }
  },

  snackbarShow: (text, showAction = false, duration = 2000) => {
    const { position, bgLight, bgDark } = GLOBAL_CONFIG.Snackbar
    const bg = document.documentElement.getAttribute('data-theme') === 'light' ? bgLight : bgDark
    Snackbar.show({
      text: text,
      backgroundColor: bg,
      showAction: showAction,
      duration: duration,
      pos: position,
      customClass: 'snackbar-css'
    })
  },

  diffDate: (d, more = false) => {
    const dateNow = new Date()
    const datePost = new Date(d)
    const dateDiff = dateNow.getTime() - datePost.getTime()
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30

    let result
    if (more) {
      const monthCount = dateDiff / month
      const dayCount = dateDiff / day
      const hourCount = dateDiff / hour
      const minuteCount = dateDiff / minute

      if (monthCount > 12) {
        result = datePost.toLocaleDateString().replace(/\//g, '-')
      } else if (monthCount >= 1) {
        result = parseInt(monthCount) + ' ' + GLOBAL_CONFIG.date_suffix.month
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + ' ' + GLOBAL_CONFIG.date_suffix.day
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + ' ' + GLOBAL_CONFIG.date_suffix.hour
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + ' ' + GLOBAL_CONFIG.date_suffix.min
      } else {
        result = GLOBAL_CONFIG.date_suffix.just
      }
    } else {
      result = parseInt(dateDiff / day)
    }
    return result
  },

  loadComment: (dom, callback) => {
    if ('IntersectionObserver' in window) {
      const observerItem = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback()
          observerItem.disconnect()
        }
      }, { threshold: [0] })
      observerItem.observe(dom)
    } else {
      callback()
    }
  },

  scrollToDest: (pos, time = 500) => {
    const currentPos = window.pageYOffset
    if (currentPos > pos) pos = pos - 70

    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: pos,
        behavior: 'smooth'
      })
      return
    }

    let start = null
    pos = +pos
    window.requestAnimationFrame(function step (currentTime) {
      start = !start ? currentTime : start
      const progress = currentTime - start
      if (currentPos < pos) {
        window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos)
      } else {
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time))
      }
      if (progress < time) {
        window.requestAnimationFrame(step)
      } else {
        window.scrollTo(0, pos)
      }
    })
  },

  animateIn: (ele, text) => {
    ele.style.display = 'block'
    ele.style.animation = text
  },

  animateOut: (ele, text) => {
    ele.addEventListener('animationend', function f () {
      ele.style.display = ''
      ele.style.animation = ''
      ele.removeEventListener('animationend', f)
    })
    ele.style.animation = text
  },

  getParents: (elem, selector) => {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem
    }
    return null
  },

  siblings: (ele, selector) => {
    return [...ele.parentNode.children].filter((child) => {
      if (selector) {
        return child !== ele && child.matches(selector)
      }
      return child !== ele
    })
  },

  /**
   * @param {*} selector
   * @param {*} eleType the type of create element
   * @param {*} options object key: value
   */
  wrap: (selector, eleType, options) => {
    const creatEle = document.createElement(eleType)
    for (const [key, value] of Object.entries(options)) {
      creatEle.setAttribute(key, value)
    }
    selector.parentNode.insertBefore(creatEle, selector)
    creatEle.appendChild(selector)
  },

  unwrap: el => {
    const elParentNode = el.parentNode
    if (elParentNode !== document.body) {
      elParentNode.parentNode.insertBefore(el, elParentNode)
      elParentNode.parentNode.removeChild(elParentNode)
    }
  },

  isHidden: ele => ele.offsetHeight === 0 && ele.offsetWidth === 0,

  getEleTop: ele => {
    let actualTop = ele.offsetTop
    let current = ele.offsetParent

    while (current !== null) {
      actualTop += current.offsetTop
      current = current.offsetParent
    }

    return actualTop
  },

  loadLightbox: ele => {
    const service = GLOBAL_CONFIG.lightbox

    if (service === 'mediumZoom') {
      const zoom = mediumZoom(ele)
      zoom.on('open', e => {
        const photoBg = document.documentElement.getAttribute('data-theme') === 'dark' ? '#121212' : '#fff'
        zoom.update({
          background: photoBg
        })
      })
    }

    if (service === 'fancybox') {
      ele.forEach(i => {
        if (i.parentNode.tagName !== 'A') {
          const dataSrc = i.dataset.lazySrc || i.src
          const dataCaption = i.title || i.alt || ''
          btf.wrap(i, 'a', { href: dataSrc, 'data-fancybox': 'gallery', 'data-caption': dataCaption, 'data-thumb': dataSrc })
        }
      })

      if (!window.fancyboxRun) {
        Fancybox.bind('[data-fancybox]', {
          Hash: false,
          Thumbs: {
            autoStart: false
          }
        })
        window.fancyboxRun = true
      }
    }
  },

  initJustifiedGallery: function (selector) {
    selector.forEach(function (i) {
      if (!btf.isHidden(i)) {
        fjGallery(i, {
          itemSelector: '.fj-gallery-item',
          rowHeight: 220,
          gutter: 4,
          onJustify: function () {
            this.$container.style.opacity = '1'
          }
        })
      }
    })
  },

  updateAnchor: (anchor) => {
    if (anchor !== window.location.hash) {
      if (!anchor) anchor = location.pathname
      const title = GLOBAL_CONFIG_SITE.title
      window.history.replaceState({
        url: location.href,
        title: title
      }, title, anchor)
    }
  }
}



class Util {
  constructor() {
      if (Util.instance) return Util.instance;
      return this.getInstance(...arguments);
  }

  getInstance() {
      var instance = {
          /*
           *   formatTime 格式化时间（s）为 hour:minutes:seconds
           *   @params  time  required number (s)
           *   
           *   return hour:minutes:seconds string
           */

          formatTime(time) {
              //没有传time的时候
              if (time === undefined) {
                  this.handlerError(123, {
                      method: 'formate',
                      param: 'time'
                  });
                  return false;
              }
              let _time = Math.floor(time);
              let _minutes = Math.floor(_time / 60);
              let _hours = Math.floor(_minutes / 60);
              let _seconds = _time - (_minutes * 60);

              return (_hours ? this.fillZero(_hours) + ':' : '') + this.fillZero(_minutes - (_hours * 60)) + ':' + this.fillZero(_seconds);
          },
          /*
           *   fillZero 为小于10的数字补0
           *   @params  num  required number
           *   return '01'.. string
           */
          fillZero(num) {
              //当没有传time的时候
              if (num === undefined) {
                  this.handlerError(123, {
                      method: 'fillZero',
                      param: 'num'
                  });
                  return false;
              }
              //这个函数只是让我们在渲染/显示的时候有一个不同的效果，不要操作原数据
              return num > 9 ? num : '0' + num;
          },
          errors: {
              123: ({
                  method,
                  param
              }) => {
                  return method + 'function need a param ' + param;
              }
          },
          handlerError(code, options) { //处理报错
              console.error('[until error] message' + this.errors[code](options));
          }
      }
      Util.instance = instance;
      return instance;
  }
}

//为了这个工具以后在模块化环境中依然可以使用，需要判断一下，如果是在模块化环境，就将其暴露出去
//commonJs
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = Util;
}

//AMD
if (typeof define === 'function' && define.amd) {
  define('util', [], function () {
      return Util;
  });
}


