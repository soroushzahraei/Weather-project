//تعریف متغییر ها
var submitInput = document.getElementById("submit");
var textInput = document.getElementById("text");
var citynameOutput = document.getElementById("cityname");
var descriptionOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");
//api از سایت openweather.org گرفته شده
var apiKey = "3045dd712ffe6e702e3245525ac7fa38";




//تابع برای دریافت با فچ ای پی ای و گرفتن جی سان
async function weather(){
    // await باعث میشه promise برنگردونه
    //api از سایت openweather.org گرفته شده
    var weatherResult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textInput.value}&appid=${apiKey}`);
    var weatherResultJson = await weatherResult.json();

    //برای دریافت اصلاعات جی سان
    // console.log(weatherResultJson);

     info(weatherResultJson);
}




//تابع برای دیدن اطلاعات روی صفحه سایت
function info(data){
    var cityname = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var wind = data["wind"]["speed"];

    citynameOutput.innerHTML = `city : ${cityname}`;
    descriptionOutput.innerHTML = `description : ${description}`;
    tempOutput.innerHTML = `temprature : ${selisios(temp)}`;
    windOutput.innerHTML = ` wind speed : ${wind}`;
}




//تبدیل فارنهایت به سلیسیوس
function selisios(value){
    return (value-273).toFixed(2);
}



//کلید ثبت
submitInput.addEventListener("click",weather);