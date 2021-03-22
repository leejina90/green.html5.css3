var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];
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

var result = date.concat(temp);
var result = result.concat(rain);
var result = result.concat(dust);

console.log(result);


// 날씨 예보 객체를 생성해서 각각의 기능을 작성한다.
// 1. 온도
var forecast = new Object();
forecast.tempShow = function(){
    for(var i = 0; i < temp.length; i++){

    }
};

// 2. 평균온도
forecast.tempAvgShow = function(){
    var num = 0;
    for(var i = 0; i < temp.length; i++){
        num += temp[i];
    }

    var avg = num / temp.length;
    return avg;
};

// 3. 강수량
forecast.rainShow = function(){
    for(var i = 0; i < rain.length; i++){
        
    }
};

// 4. 평균 강수량
forecast.rainAvgShow = function(){
    var num = 0;
    for(var i = 0; i < rain.length; i++){
        num += rain[i];
    }

    var avg = num / rain.length;
    return avg;
};

// 5. 미세먼지
forecast.dustShow = function(){
    for(var i = 0; i < dust.length; i++){
        
    }
};

// 6. 평균 미세먼지 농도
forecast.dustAvgShow = function(){
    var num = 0;
    for(var i = 0; i < dust.length; i++){
        num += dust[i];
    }

    var avg = num / dust.length;
    return avg;
};
