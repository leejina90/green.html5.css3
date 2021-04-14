// 객체 선언
function Forecast() {
}

// 현재 날씨 얻어오기
Forecast.prototype.getCurrentWeather = function(city) {
    var dataObj;
    var url = "http://api.openweathermap.org/data/2.5/weather";
        url += "?q=" + "city";
        url += "&units=" + "metric";
        url += "&lang=" + "kr";
        url += "&APPID=" + "91b7464ae7657f4df26a893c764f396d"; //본인의  API key 사용

    console.log("url:" + url);

    $.ajax({
        type:"GET",
        url: url,
        dataType: "json",
        async: false,   //동기형식으로 지정, data값을 return해주기 위해
        success:function(data) {
            console.log("현재온도: " + data.main.temp);
            dataObj = data;
        },
        error:function(request,status,error) {
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    return dataObj;
};

// 내일 날씨 얻어오기
// forecast.prototype.getTomorrowWeather = function() {
//     //...
// }