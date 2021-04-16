/* 지도 */

var map = new Map();
map.getKakaoMap();

/* 날씨 */

var forecast = new Forecast();

console.log(forecast.getCurrentWeather("seoul")); //지역 날씨 호출
console.log(forecast.getCurrentWeather("incheon")); //지역 날씨 호출
console.log(forecast.getCurrentWeather("busan")); //지역 날씨 호출
console.log(forecast.getCurrentWeather("gwangju")); //지역 날씨 호출
console.log(forecast.getCurrentWeather("jeju")); //지역 날씨 호출
console.log(forecast.getCurrentWeather("jeonju")); //지역 날씨 호출

var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

$(function(){
    $(".temp").each(function(i){
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "℃");
    });

    $(".location").on({
        "click" : function(){
            var q = $(this).children(".q").attr("id");
            var redirectURL = "pages/weather_location.html?q=" + q;
            location.href = redirectURL;
        }
    });
});

