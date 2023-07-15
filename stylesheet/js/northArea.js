

// let flag = false;
// 頁面 自動跳轉
// setTimeout(()=>{ // 總是執行
//     if(flag)
//         location.reload(); 
// },3000);
setTimeout(()=>{
    $("#north").replaceWith("<i class='fa-solid fa-arrow-rotate-left fa-spin fa-spin-reverse fa-2xl'></i>");
}, 2300);
setTimeout(()=>{
    document.location.href="./middleArea.html";
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
        // flag = true;
            // location.reload();
        // console.log(data);
        // console.log(data.records);

        // console.log(data);
        // console.log(data.records.location[18]); // 基隆市
        // console.log(data.records.location[7]); // 宜蘭縣
        // console.log(data.records.location[5]); // 台北市
        // console.log(data.records.location[1]); // 新北市
        // console.log(data.records.location[13]); // 桃園縣
        // console.log(data.records.location[3]); // 新竹縣
        // console.log(data.records.location[4]); // 新竹市

        // console.log(data.records.location[18]); // 基隆市
        const Area18AreaEl = document.getElementById("Area18Area");
        const Area18WeatherEl = document.getElementById("Area18Weather");
        const Area18TemperatureEl = document.getElementById("Area18Temperature");

        Area18AreaEl.innerText = data.records.location[18].locationName;
        weatherNum = data.records.location[18].weatherElement[0].time[2].parameter.parameterValue;
        Area18WeatherEl.innerText = data.records.location[18].weatherElement[0].time[2].parameter.parameterName;
        Area18TemperatureEl.innerText = "";
        Area18TemperatureEl.innerText += data.records.location[18].weatherElement[2].time[2].parameter.parameterName;
        Area18TemperatureEl.innerText += " - ";
        Area18TemperatureEl.innerText += data.records.location[18].weatherElement[4].time[2].parameter.parameterName;
        Area18TemperatureEl.innerText += " 度C";

        switch(+weatherNum){
            case 1:// 晴天
                $("#Area18Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area18Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area18Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
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
                $("#Area18Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
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
                $("#Area18Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };

        // console.log(data.records.location[18]); // 基隆市
        const Area7AreaEl = document.getElementById("Area7Area");
        const Area7WeatherEl = document.getElementById("Area7Weather");
        const Area7TemperatureEl = document.getElementById("Area7Temperature");

        Area7AreaEl.innerText = data.records.location[7].locationName;
        weatherNum = data.records.location[7].weatherElement[0].time[2].parameter.parameterValue;
        Area7WeatherEl.innerText = data.records.location[7].weatherElement[0].time[2].parameter.parameterName;
        Area7TemperatureEl.innerText = "";
        Area7TemperatureEl.innerText += data.records.location[7].weatherElement[2].time[2].parameter.parameterName;
        Area7TemperatureEl.innerText += " - ";
        Area7TemperatureEl.innerText += data.records.location[7].weatherElement[4].time[2].parameter.parameterName;
        Area7TemperatureEl.innerText += " 度C";

        switch(+weatherNum){
            case 1:// 晴天
                $("#Area7Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area7Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area7Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
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
                $("#Area7Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
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
                $("#Area7Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };

        // console.log(data.records.location[18]); // 基隆市
        const Area5AreaEl = document.getElementById("Area5Area");
        const Area5WeatherEl = document.getElementById("Area5Weather");
        const Area5TemperatureEl = document.getElementById("Area5Temperature");

        Area5AreaEl.innerText = data.records.location[5].locationName;
        weatherNum = data.records.location[5].weatherElement[0].time[2].parameter.parameterValue;
        Area5WeatherEl.innerText = data.records.location[5].weatherElement[0].time[2].parameter.parameterName;
        Area5TemperatureEl.innerText = "";
        Area5TemperatureEl.innerText += data.records.location[5].weatherElement[2].time[2].parameter.parameterName;
        Area5TemperatureEl.innerText += " - ";
        Area5TemperatureEl.innerText += data.records.location[5].weatherElement[4].time[2].parameter.parameterName;
        Area5TemperatureEl.innerText += " 度C";
        
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area5Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area5Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area5Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
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
                $("#Area5Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
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
                $("#Area5Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
            
        // console.log(data.records.location[18]); // 基隆市
        const Area1AreaEl = document.getElementById("Area1Area");
        const Area1WeatherEl = document.getElementById("Area1Weather");
        const Area1TemperatureEl = document.getElementById("Area1Temperature");

        Area1AreaEl.innerText = data.records.location[1].locationName;
        weatherNum = data.records.location[1].weatherElement[0].time[2].parameter.parameterValue;
        Area1WeatherEl.innerText = data.records.location[1].weatherElement[0].time[2].parameter.parameterName;
        Area1TemperatureEl.innerText = "";
        Area1TemperatureEl.innerText += data.records.location[1].weatherElement[2].time[2].parameter.parameterName;
        Area1TemperatureEl.innerText += " - ";
        Area1TemperatureEl.innerText += data.records.location[1].weatherElement[4].time[2].parameter.parameterName;
        Area1TemperatureEl.innerText += " 度C";
        
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area1Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area1Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area1Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
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
                $("#Area1Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
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
                $("#Area1Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
            
        // console.log(data.records.location[18]); // 基隆市
        const Area13AreaEl = document.getElementById("Area13Area");
        const Area13WeatherEl = document.getElementById("Area13Weather");
        const Area13TemperatureEl = document.getElementById("Area13Temperature");

        Area13AreaEl.innerText = data.records.location[13].locationName;
        weatherNum = data.records.location[13].weatherElement[0].time[2].parameter.parameterValue;
        Area13WeatherEl.innerText = data.records.location[13].weatherElement[0].time[2].parameter.parameterName;
        Area13TemperatureEl.innerText = "";
        Area13TemperatureEl.innerText += data.records.location[13].weatherElement[2].time[2].parameter.parameterName;
        Area13TemperatureEl.innerText += " - ";
        Area13TemperatureEl.innerText += data.records.location[13].weatherElement[4].time[2].parameter.parameterName;
        Area13TemperatureEl.innerText += " 度C";
        
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area13Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area13Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area13Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
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
                $("#Area13Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
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
                $("#Area13Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
            
        // console.log(data.records.location[18]); // 基隆市
        const Area3AreaEl = document.getElementById("Area3Area");
        const Area3WeatherEl = document.getElementById("Area3Weather");
        const Area3TemperatureEl = document.getElementById("Area3Temperature");

        Area3AreaEl.innerText = data.records.location[3].locationName;
        weatherNum = data.records.location[3].weatherElement[0].time[2].parameter.parameterValue;
        Area3WeatherEl.innerText = data.records.location[3].weatherElement[0].time[2].parameter.parameterName;
        Area3TemperatureEl.innerText = "";
        Area3TemperatureEl.innerText += data.records.location[3].weatherElement[2].time[2].parameter.parameterName;
        Area3TemperatureEl.innerText += " - ";
        Area3TemperatureEl.innerText += data.records.location[3].weatherElement[4].time[2].parameter.parameterName;
        Area3TemperatureEl.innerText += " 度C";
        
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area3Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area3Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area3Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
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
                $("#Area3Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
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
                $("#Area3Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
            
        // console.log(data.records.location[18]); // 基隆市
        const Area4AreaEl = document.getElementById("Area4Area");
        const Area4WeatherEl = document.getElementById("Area4Weather");
        const Area4TemperatureEl = document.getElementById("Area4Temperature");

        Area4AreaEl.innerText = data.records.location[4].locationName;
        // console.dir(data);
        weatherNum = data.records.location[4].weatherElement[0].time[2].parameter.parameterValue;
        Area4WeatherEl.innerText = data.records.location[4].weatherElement[0].time[2].parameter.parameterName;
        Area4TemperatureEl.innerText = "";
        Area4TemperatureEl.innerText += data.records.location[4].weatherElement[2].time[2].parameter.parameterName;
        Area4TemperatureEl.innerText += " - ";
        Area4TemperatureEl.innerText += data.records.location[4].weatherElement[4].time[2].parameter.parameterName;
        Area4TemperatureEl.innerText += " 度C";
        // console.log(+weatherNum);
        switch(+weatherNum){
            case 1:// 晴天
                $("#Area4Icon").replaceWith("<i class='fa-solid fa-sun'></i>");
                break;
            case 2:
            case 3:// 多雲時晴
                $("#Area4Icon").replaceWith("<i class='fa-solid fa-cloud-sun'></i>");
                break;
            case 4:
            case 5:
            case 6:
            case 7:// 陰天
                $("#Area4Icon").replaceWith("<i class='fa-solid fa-cloud fa-beat'></i>");
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
                $("#Area4Icon").replaceWith("<i class='fa-solid fa-cloud-rain fa-beat'></i>");
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
                $("#Area4Icon").replaceWith("<i class='fa-solid fa-cloud-bolt fa-beat'></i>");
                break;
        };
            
            
   }) 
