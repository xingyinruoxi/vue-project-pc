// 绝对零
export function fixedZero(val) {
    return val * 1 < 10 ? `0${val}` : val;
}

// 时间格式化
export const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(fixedZero).join('/') + ' ' + [hour, minute, second].map(fixedZero).join(':')
}


/**
 * 用来获取和设置localStorage存储
 **/
export const local = {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    fetch(key) {
        return JSON.parse(localStorage.getItem(key)) || {}
    },
    remove(key) {
        localStorage.removeItem(key)
    },
    clear() {
        localStorage.clear()
    }
}