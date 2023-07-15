

// 頁面 自動跳轉
setTimeout(()=>{
    $("#middle").replaceWith("<i class='fa-solid fa-arrow-rotate-left fa-spin fa-spin-reverse fa-2xl'></i>");
}, 2300);
setTimeout(()=>{
    // document.location.href="./southArea.html";
    
    document.location.href="./northArea.html";
}, 3000);

// const testEl = document.querySelector("#test");
// $(testEl).replaceWith("<i class='fa-regular fa-sun'></i>");
// $("#test").replaceWith("<i class='fa-regular fa-sun'></i>");
// $("test").replaceWith("");

let weatherNum = 0;

// RESTFul API
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-204B3A56-EFB9-4C06-8007-22E8440B30CA")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // console.log(data.records);

        // console.log(data);
        // console.log(data.records.location[2]); // 苗栗縣
        // console.log(data.records.location[11]); // 台中市
        // console.log(data.records.location[20]); // 彰化縣
        // console.log(data.records.location[14]); // 南投縣
        // console.log(data.records.location[9]); // 雲林縣

        // console.log(data.records.location[18]); // 基隆市
        const Area2AreaEl = document.getElementById("Area2Area");
        const Area2WeatherEl = document.getElementById("Area2Weather");
        const Area2TemperatureEl = document.getElementById("Area2Temperature");

        Area2AreaEl.innerText = data.records.location[2].locationName;
        weatherNum = data.records.location[2].weatherElement[0].time[2].parameter.parameterValue;
        Area2WeatherEl.innerText = data.records.location[2].weatherElement[0].time[2].parameter.parameterName;
        Area2TemperatureEl.innerText = "";
        Area2TemperatureEl.innerText += data.records.location[2].weatherElement[2].time[2].parameter.parameterName;
        Area2TemperatureEl.innerText += " - ";
        Area2TemperatureEl.innerText += data.records.location[2].weatherElement[4].time[2].parameter.parameterName;
        Area2TemperatureEl.innerText += " 度C";
        
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area2Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area2Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area2Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:// "多雲午後短暫陣雨"
                // console.log("go");
                $("#Area2Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
                break;
            case 21:// "晴午後短暫雷陣雨"
            case 22:// ?
            case 23:// ?
            case 24:// ?
            case 25:// ?
            case 26:// ?
            case 27:// ?
            case 28:// ?
            case 29:// ?
            case 30:// ?
                $("#Area2Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
            
        // console.log(data.records.location[18]); // 基隆市
        const Area11AreaEl = document.getElementById("Area11Area");
        const Area11WeatherEl = document.getElementById("Area11Weather");
        const Area11TemperatureEl = document.getElementById("Area11Temperature");

        Area11AreaEl.innerText = data.records.location[11].locationName;
        weatherNum = data.records.location[11].weatherElement[0].time[2].parameter.parameterValue;
        Area11WeatherEl.innerText = data.records.location[11].weatherElement[0].time[2].parameter.parameterName;
        Area11TemperatureEl.innerText = "";
        Area11TemperatureEl.innerText += data.records.location[11].weatherElement[2].time[2].parameter.parameterName;
        Area11TemperatureEl.innerText += " - ";
        Area11TemperatureEl.innerText += data.records.location[11].weatherElement[4].time[2].parameter.parameterName;
        Area11TemperatureEl.innerText += " 度C";
        
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area11Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area11Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area11Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:// "多雲午後短暫陣雨"
                // console.log("go");
                $("#Area11Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
                break;
            case 21:// "晴午後短暫雷陣雨"
            case 22:// ?
            case 23:// ?
            case 24:// ?
            case 25:// ?
            case 26:// ?
            case 27:// ?
            case 28:// ?
            case 29:// ?
            case 30:// ?
                $("#Area11Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
            
        // console.log(data.records.location[18]); // 基隆市
        const Area20AreaEl = document.getElementById("Area20Area");
        const Area20WeatherEl = document.getElementById("Area20Weather");
        const Area20TemperatureEl = document.getElementById("Area20Temperature");

        Area20AreaEl.innerText = data.records.location[20].locationName;
        weatherNum = data.records.location[20].weatherElement[0].time[2].parameter.parameterValue;
        Area20WeatherEl.innerText = data.records.location[20].weatherElement[0].time[2].parameter.parameterName;
        Area20TemperatureEl.innerText = "";
        Area20TemperatureEl.innerText += data.records.location[20].weatherElement[2].time[2].parameter.parameterName;
        Area20TemperatureEl.innerText += " - ";
        Area20TemperatureEl.innerText += data.records.location[20].weatherElement[4].time[2].parameter.parameterName;
        Area20TemperatureEl.innerText += " 度C";
        
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area20Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area20Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area20Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:// "多雲午後短暫陣雨"
                // console.log("go");
                $("#Area20Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
                break;
            case 21:// "晴午後短暫雷陣雨"
            case 22:// ?
            case 23:// ?
            case 24:// ?
            case 25:// ?
            case 26:// ?
            case 27:// ?
            case 28:// ?
            case 29:// ?
            case 30:// ?
                $("#Area20Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
            
        // console.log(data.records.location[18]); // 基隆市
        const Area14AreaEl = document.getElementById("Area14Area");
        const Area14WeatherEl = document.getElementById("Area14Weather");
        const Area14TemperatureEl = document.getElementById("Area14Temperature");

        Area14AreaEl.innerText = data.records.location[14].locationName;
        weatherNum = data.records.location[14].weatherElement[0].time[2].parameter.parameterValue;
        Area14WeatherEl.innerText = data.records.location[14].weatherElement[0].time[2].parameter.parameterName;
        Area14TemperatureEl.innerText = "";
        Area14TemperatureEl.innerText += data.records.location[14].weatherElement[2].time[2].parameter.parameterName;
        Area14TemperatureEl.innerText += " - ";
        Area14TemperatureEl.innerText += data.records.location[14].weatherElement[4].time[2].parameter.parameterName;
        Area14TemperatureEl.innerText += " 度C";
        
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area14Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area14Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area14Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:// "多雲午後短暫陣雨"
                // console.log("go");
                $("#Area14Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
                break;
            case 21:// "晴午後短暫雷陣雨"
            case 22:// ?
            case 23:// ?
            case 24:// ?
            case 25:// ?
            case 26:// ?
            case 27:// ?
            case 28:// ?
            case 29:// ?
            case 30:// ?
                $("#Area14Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
            
        // console.log(data.records.location[18]); // 基隆市
        const Area9AreaEl = document.getElementById("Area9Area");
        const Area9WeatherEl = document.getElementById("Area9Weather");
        const Area9TemperatureEl = document.getElementById("Area9Temperature");

        Area9AreaEl.innerText = data.records.location[9].locationName;
        weatherNum = data.records.location[9].weatherElement[0].time[2].parameter.parameterValue;
        Area9WeatherEl.innerText = data.records.location[9].weatherElement[0].time[2].parameter.parameterName;
        Area9TemperatureEl.innerText = "";
        Area9TemperatureEl.innerText += data.records.location[9].weatherElement[2].time[2].parameter.parameterName;
        Area9TemperatureEl.innerText += " - ";
        Area9TemperatureEl.innerText += data.records.location[9].weatherElement[4].time[2].parameter.parameterName;
        Area9TemperatureEl.innerText += " 度C";
        
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area9Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area9Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area9Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:// "多雲午後短暫陣雨"
                // console.log("go");
                $("#Area9Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
                break;
            case 21:// "晴午後短暫雷陣雨"
            case 22:// ?
            case 23:// ?
            case 24:// ?
            case 25:// ?
            case 26:// ?
            case 27:// ?
            case 28:// ?
            case 29:// ?
            case 30:// ?
                $("#Area9Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
   })