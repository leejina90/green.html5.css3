var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];
var day1 = [], day2 = [], day3 = [], day4 = [];
var days = [day1, day2, day3, day4];


// 객체 생성
function Forecast(arr) {
    this.foreCastArr = arr;

    switch (arr) {
        case temp: this.division = "temp";
            break;
        case rain: this.division = "rain";
            break;
        case dust: this.division = "dust";
            break;
    }
}

// 1. 온도, 강수량, 미세먼지량
Forecast.prototype.show = function(){
    var str = "";
    for(var i = 0; i < this.foreCastArr.length; i++){
        str += this.foreCastArr[i] + this.unit(this.foreCastArr) + " ";
    }
    return str;
};

// 2. 평균온도, 평균강수량, 평균미세먼지량
Forecast.prototype.avgShow = function(){
    var num = 0;
    for(var i = 0; i < this.foreCastArr.length; i++){
        num += this.foreCastArr[i];
    }

    var avg = num / this.foreCastArr.length;

    return avg.toFixed(1) + this.unit(this.foreCastArr);
    // tofixed(1) 한자릿수까지만 나오도록 반올림
};



// 단위 붙이기
Forecast.prototype.unit = function(){
    switch(this.division){
        case "temp": return "℃ ";
            break;
        case "rain": return "mm ";
            break;
        case "dust": return "㎍/m³ ";
            break;
    }
}


// 함수호출
// document.getElementById("show_temp").innerHTML = forecast.show(temp);
// document.getElementById("show_rain").innerHTML = forecast.show(rain);
// document.getElementById("show_dust").innerHTML = forecast.show(dust);

// document.getElementById("show_temp_avg").innerHTML = forecast.avgShow(temp);
// document.getElementById("show_rain_avg").innerHTML = forecast.avgShow(rain);
// document.getElementById("show_dust_avg").innerHTML = forecast.avgShow(dust);


// 출력
Forecast.prototype.innerHtml = function() {
    var showId = "show_" + this.division;
    var showAvgId = "show_" + this.division + "_avg";

    document.getElementById(showId).innerHTML = this.show();
    document.getElementById(showAvgId).innerHTML = this.avgShow();
}

// 함수 호출해서 실행
var temp = new Forecast(temp);
var rain = new Forecast(rain);
var dust = new Forecast(dust);

temp.innerHtml();
rain.innerHtml();
dust.innerHtml();