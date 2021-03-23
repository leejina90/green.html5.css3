var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];
var day1 = [], day2 = [], day3 = [], day4 = [];
// var arr = [];
// 배열 초기화

// for(var i = 0; i<date.length; i++){
//     console.log(date[i]);
//     console.log(temp[i]);
//     console.log(rain[i]);
//     console.log(dust[i]);
// }


// 각각의 데이터들을 합쳐 다시 배열로 만든 후 재 배열화할 것
// 1일 날씨

var days = [day1, day2, day3, day4];
// 각각 데이터들을 풀어헤치고

for(var i = 0; i < 4; i++) {
    var arr = days[i]; // 임시변수 arr 지정
    
    for(var j = 0; j < 4; j++){
        switch(j){
            case 0: arr[j] = date[i]; // 혹은 days[i][j] = date[i]; 
            break;
            case 1: arr[j] = temp[i];
            break;
            case 2: arr[j] = rain[i];
            break;
            case 3: arr[j] = dust[i];
            break;
        }
    }

    days[i] = arr; 
    
    // 각각의 데이터들을 다시 합치는 과정, for문 안에 아직 있음.
}


// 날씨 예보 객체를 생성해서 각각의 기능을 작성한다.
// 1. 온도
var forecast = new Object();


forecast.tempShow = function(){
    var str = '';
    for(var i = 0; i < temp.length; i++){
        str += temp[i] + "℃ ";
    }
    document.getElementById("show_temp").innerHTML = str;
};

forecast.tempShow();
// 실행 선언 해주어야 함.

// 2. 평균온도
forecast.tempAvgShow = function(){
    var num = 0;
    for(var i = 0; i < temp.length; i++){
        num += temp[i];
    }

    var avg = num / temp.length;
    // 평균값을 구해줘야 하기 때문에 num을 temp.length로 나눔.
    document.getElementById("show_temp_avg").innerHTML = avg + "℃ ";
};

forecast.tempAvgShow();

// 3. 강수량
forecast.rainShow = function(){
    var str = '';
    for(var i = 0; i < rain.length; i++){
        str += rain[i] + "mm ";
    }
    document.getElementById("show_rain").innerHTML = str;
};

forecast.rainShow();

// 4. 평균 강수량
forecast.rainAvgShow = function(){
    var num = 0;
    for(var i = 0; i < rain.length; i++){
        num += rain[i];
    }

    var avg = num / rain.length;
    document.getElementById("show_rain_avg").innerHTML = avg + "mm ";
};

forecast.rainAvgShow();

// 5. 미세먼지
forecast.dustShow = function(){
    var str = '';
    for(var i = 0; i < dust.length; i++){
        str += dust[i] + "㎍/m³ ";
    }
    document.getElementById("show_dust").innerHTML = str;
};

forecast.dustShow();

// 6. 평균 미세먼지 농도
forecast.dustAvgShow = function(){
    var num = 0;
    for(var i = 0; i < dust.length; i++){
        num += dust[i];
    }

    var avg = num / dust.length;
    document.getElementById("show_dust_avg").innerHTML = avg + "㎍/m³ ";
};

forecast.dustAvgShow();
