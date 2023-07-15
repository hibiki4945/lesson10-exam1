

// 頁面 自動跳轉
// setTimeout(()=>{
//     console.log("1秒後");
// }, 1000);
// document.location.href="./stylesheet/html/middleArea.html";

// const testEl = document.querySelector("#test");
// $(testEl).replaceWith("<i class='fa-regular fa-sun'></i>");
// $("#test").replaceWith("<i class='fa-regular fa-sun'></i>");
// $("test").replaceWith("");

// RESTFul API
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-204B3A56-EFB9-4C06-8007-22E8440B30CA")
    .then(res => res.json())
    .then(data => {
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
        Area18WeatherEl.innerText = data.records.location[18].weatherElement[3].time[2].parameter.parameterName;
        Area18TemperatureEl.innerText = "";
        Area18TemperatureEl.innerText += data.records.location[18].weatherElement[2].time[2].parameter.parameterName;
        Area18TemperatureEl.innerText += " - ";
        Area18TemperatureEl.innerText += data.records.location[18].weatherElement[4].time[2].parameter.parameterName;
        Area18TemperatureEl.innerText += " 度C";

        if(Area18WeatherEl.innerText === "舒適至悶熱")
            $("#Area18Icon").replaceWith("<i class='fa-regular fa-sun fa-beat'></i>");
        else if(Area18WeatherEl.innerText === "悶熱")
            $("#Area18Icon").replaceWith("<i class='fa-solid fa-sun fa-beat'></i>");
        else if(Area18WeatherEl.innerText === "舒適至易中暑")
            $("#Area18Icon").replaceWith("<i class='fa-solid fa-umbrella-beach fa-beat'></i>");
        

        // console.log(data.records.location[18]); // 基隆市
        const Area7AreaEl = document.getElementById("Area7Area");
        const Area7WeatherEl = document.getElementById("Area7Weather");
        const Area7TemperatureEl = document.getElementById("Area7Temperature");

        Area7AreaEl.innerText = data.records.location[7].locationName;
        Area7WeatherEl.innerText = data.records.location[7].weatherElement[3].time[2].parameter.parameterName;
        Area7TemperatureEl.innerText = "";
        Area7TemperatureEl.innerText += data.records.location[7].weatherElement[2].time[2].parameter.parameterName;
        Area7TemperatureEl.innerText += " - ";
        Area7TemperatureEl.innerText += data.records.location[7].weatherElement[4].time[2].parameter.parameterName;
        Area7TemperatureEl.innerText += " 度C";

        if(Area7WeatherEl.innerText === "舒適至悶熱")
            $("#Area7Icon").replaceWith("<i class='fa-regular fa-sun fa-beat'></i>");
        else if(Area7WeatherEl.innerText === "悶熱")
            $("#Area7Icon").replaceWith("<i class='fa-solid fa-sun fa-beat'></i>");
        else if(Area7WeatherEl.innerText === "舒適至易中暑")
            $("#Area7Icon").replaceWith("<i class='fa-solid fa-umbrella-beach fa-beat'></i>");
        

        // console.log(data.records.location[18]); // 基隆市
        const Area5AreaEl = document.getElementById("Area5Area");
        const Area5WeatherEl = document.getElementById("Area5Weather");
        const Area5TemperatureEl = document.getElementById("Area5Temperature");

        Area5AreaEl.innerText = data.records.location[5].locationName;
        Area5WeatherEl.innerText = data.records.location[5].weatherElement[3].time[2].parameter.parameterName;
        Area5TemperatureEl.innerText = "";
        Area5TemperatureEl.innerText += data.records.location[5].weatherElement[2].time[2].parameter.parameterName;
        Area5TemperatureEl.innerText += " - ";
        Area5TemperatureEl.innerText += data.records.location[5].weatherElement[4].time[2].parameter.parameterName;
        Area5TemperatureEl.innerText += " 度C";
        
        if(Area5WeatherEl.innerText === "舒適至悶熱")
            $("#Area5Icon").replaceWith("<i class='fa-regular fa-sun fa-beat'></i>");
        else if(Area5WeatherEl.innerText === "悶熱")
            $("#Area5Icon").replaceWith("<i class='fa-solid fa-sun fa-beat'></i>");
        else if(Area5WeatherEl.innerText === "舒適至易中暑")
            $("#Area5Icon").replaceWith("<i class='fa-solid fa-umbrella-beach fa-beat'></i>");
        
            
        // console.log(data.records.location[18]); // 基隆市
        const Area1AreaEl = document.getElementById("Area1Area");
        const Area1WeatherEl = document.getElementById("Area1Weather");
        const Area1TemperatureEl = document.getElementById("Area1Temperature");

        Area1AreaEl.innerText = data.records.location[1].locationName;
        Area1WeatherEl.innerText = data.records.location[1].weatherElement[3].time[2].parameter.parameterName;
        Area1TemperatureEl.innerText = "";
        Area1TemperatureEl.innerText += data.records.location[1].weatherElement[2].time[2].parameter.parameterName;
        Area1TemperatureEl.innerText += " - ";
        Area1TemperatureEl.innerText += data.records.location[1].weatherElement[4].time[2].parameter.parameterName;
        Area1TemperatureEl.innerText += " 度C";
        
        if(Area1WeatherEl.innerText === "舒適至悶熱")
            $("#Area1Icon").replaceWith("<i class='fa-regular fa-sun fa-beat'></i>");
        else if(Area1WeatherEl.innerText === "悶熱")
            $("#Area1Icon").replaceWith("<i class='fa-solid fa-sun fa-beat'></i>");
        else if(Area1WeatherEl.innerText === "舒適至易中暑")
            $("#Area1Icon").replaceWith("<i class='fa-solid fa-umbrella-beach fa-beat'></i>");
        
            
        // console.log(data.records.location[18]); // 基隆市
        const Area13AreaEl = document.getElementById("Area13Area");
        const Area13WeatherEl = document.getElementById("Area13Weather");
        const Area13TemperatureEl = document.getElementById("Area13Temperature");

        Area13AreaEl.innerText = data.records.location[13].locationName;
        Area13WeatherEl.innerText = data.records.location[13].weatherElement[3].time[2].parameter.parameterName;
        Area13TemperatureEl.innerText = "";
        Area13TemperatureEl.innerText += data.records.location[13].weatherElement[2].time[2].parameter.parameterName;
        Area13TemperatureEl.innerText += " - ";
        Area13TemperatureEl.innerText += data.records.location[13].weatherElement[4].time[2].parameter.parameterName;
        Area13TemperatureEl.innerText += " 度C";
        
        // console.log(Area13WeatherEl.innerText);
        if(Area13WeatherEl.innerText === "舒適至悶熱")
            $("#Area13Icon").replaceWith("<i class='fa-regular fa-sun fa-beat'></i>");
        else if(Area13WeatherEl.innerText === "悶熱")
            $("#Area13Icon").replaceWith("<i class='fa-solid fa-sun fa-beat'></i>");
        else if(Area13WeatherEl.innerText === "舒適至易中暑")
            $("#Area13Icon").replaceWith("<i class='fa-solid fa-umbrella-beach fa-beat'></i>");
        
            
        // console.log(data.records.location[18]); // 基隆市
        const Area3AreaEl = document.getElementById("Area3Area");
        const Area3WeatherEl = document.getElementById("Area3Weather");
        const Area3TemperatureEl = document.getElementById("Area3Temperature");

        Area3AreaEl.innerText = data.records.location[3].locationName;
        Area3WeatherEl.innerText = data.records.location[3].weatherElement[3].time[2].parameter.parameterName;
        Area3TemperatureEl.innerText = "";
        Area3TemperatureEl.innerText += data.records.location[3].weatherElement[2].time[2].parameter.parameterName;
        Area3TemperatureEl.innerText += " - ";
        Area3TemperatureEl.innerText += data.records.location[3].weatherElement[4].time[2].parameter.parameterName;
        Area3TemperatureEl.innerText += " 度C";
        
        if(Area3WeatherEl.innerText === "舒適至悶熱")
            $("#Area3Icon").replaceWith("<i class='fa-regular fa-sun fa-beat'></i>");
        else if(Area3WeatherEl.innerText === "悶熱")
            $("#Area3Icon").replaceWith("<i class='fa-solid fa-sun fa-beat'></i>");
        else if(Area3WeatherEl.innerText === "舒適至易中暑")
            $("#Area3Icon").replaceWith("<i class='fa-solid fa-umbrella-beach fa-beat'></i>");
        
            
        // console.log(data.records.location[18]); // 基隆市
        const Area4AreaEl = document.getElementById("Area4Area");
        const Area4WeatherEl = document.getElementById("Area4Weather");
        const Area4TemperatureEl = document.getElementById("Area4Temperature");

        Area4AreaEl.innerText = data.records.location[4].locationName;
        Area4WeatherEl.innerText = data.records.location[4].weatherElement[3].time[2].parameter.parameterName;
        Area4TemperatureEl.innerText = "";
        Area4TemperatureEl.innerText += data.records.location[4].weatherElement[2].time[2].parameter.parameterName;
        Area4TemperatureEl.innerText += " - ";
        Area4TemperatureEl.innerText += data.records.location[4].weatherElement[4].time[2].parameter.parameterName;
        Area4TemperatureEl.innerText += " 度C";
        
        if(Area4WeatherEl.innerText === "舒適至悶熱")
            $("#Area4Icon").replaceWith("<i class='fa-regular fa-sun fa-beat'></i>");
        else if(Area4WeatherEl.innerText === "悶熱")
            $("#Area4Icon").replaceWith("<i class='fa-solid fa-sun fa-beat'></i>");
        else if(Area4WeatherEl.innerText === "舒適至易中暑")
            $("#Area4Icon").replaceWith("<i class='fa-solid fa-umbrella-beach fa-beat'></i>");
        
            
        
   })