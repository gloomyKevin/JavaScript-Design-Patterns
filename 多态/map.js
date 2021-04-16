// 地图
// bad:未多态
var  renderMap = function(type){
    if(type === "google") {
        google.show()
    } else if(type === "baidu") {
        baidu.show()
    }
}

var google = {
    show() {
        console.log("谷歌地图")
    }
}

var baidu = {
    show() {
        console.log("百度地图")
    }
}

renderMap("google")
renderMap("baidu")

// good
// 多态
var renderMap = function(map) {
    if(map.show instanceof Function) {
        map.show()
    }
}
renderMap(google)
renderMap(baidu)

// 实现多态之后，增加一个soso地图，只需要
var soso = {
    show() {
        console.log("soso地图")
    }
}
renderMap(soso)