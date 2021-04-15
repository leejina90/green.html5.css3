// 객체 선언
function Forecast() {
    this.url = "http://api.openweathermap.org/data/2.5/weather";
    this.url += "?units=" + "metric";
    this.url += "&lang=" + "kr";
    this.url += "&APPID=" + "91b7464ae7657f4df26a893c764f396d"; //본인의  API key 사용
    this.url += "&q=";
}

// 현재 날씨의 모든 정보 얻어오기
Forecast.prototype.getCurrentWeather = function(city) {
    var dataObj;
    var openWeatherAPI = this.url; //q가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다.

    $.ajax({
        type:"GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false,   //동기형식으로 지정, data값을 return해주기 위해
        success:function(data) {
            console.log("현재온도 : "+ data.main.temp);
            console.log("현재습도 : "+ data.main.humidity);
            console.log("날씨 : "+ data.weather[0].main );
            console.log("상세날씨설명 : "+ data.weather[0].description );
            console.log("날씨 이미지 : "+ data.weather[0].icon );
            console.log("바람 : "+ data.wind.speed );
            console.log("나라 : "+ data.sys.country );
            console.log("도시이름  : "+ data.name );
            console.log("구름 : "+ (data.clouds.all) +"%" );  

            // var icon = (data.weather[0].icon);
            // $(".icon_weather").append("http://openweathermap.org/img/wn/" + icon + "@2x.png");

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
Forecast.prototype.getTomorrowWeather = function() {
    //...
};

Forecast.prototype.getCurrentTemp = function(city) {
    var temp;
    var openWeatherAPI = this.url; //q가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다.

    $.ajax({
        type:"GET",
        url: openWeatherAPI += city,
        dataType: "json",
        async: false,   //동기형식으로 지정, data값을 return해주기 위해
        success:function(data) {
            temp = Math.floor(data.main.temp);
        },
        error:function(request,status,error) {
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        },
        complete:function(data,textStatus) {
            //작업 완료 후 처리
        }
    });

    return temp;
};



// Forecast.prototype.함수명 = function(city) {
// 
// };