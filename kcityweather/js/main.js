/* 날씨 */

var forecast = new Forecast();

 //지역 날씨 호출
console.log(forecast.getCurrentWeather("seoul"));

var cityList = ["seoul", "incheon", "daejeon", "daegu", "ulsan", "gwangju", "busan", "jeju"];

$(function(){
    $(".temp").each(function(i){
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "℃");
    });

    $(".city_link").on({
        "click" : function(){
            var q = $(this).children(".city").attr("id");
            var redirectURL = "index.html?q=" + q;
            location.href = redirectURL;
        }
    });
});


