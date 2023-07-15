

// RESTFul API
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-204B3A56-EFB9-4C06-8007-22E8440B30CA")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // console.log(data.records);
        // console.log(data.records.location);
        // console.log(data.records.location[6]);
        // console.log(data.records.location[6].weatherElement[2]);
        // console.log(data.records.location[6].weatherElement[2].time[1]);
        console.log("最低溫: "+data.records.location[6].weatherElement[2].time[1].parameter.parameterName);
        console.log("最高溫: "+data.records.location[6].weatherElement[4].time[1].parameter.parameterName);
    })