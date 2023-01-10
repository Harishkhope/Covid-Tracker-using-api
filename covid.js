


fetch('https://api.covid19api.com/summary')
.then((apidata) => {
    // console.log(apidata);
    return apidata.json(); //converted to objects
}).then((actualdata) => {
    // console.log(actualdata);
    // console.log(actualdata.Countries[77].Country);
    let tableData="";
    actualdata.Countries.map((values , index)=>{
        tableData+=`<tr>
        <td>${index}</td>
        <td>${values.Country}</td>
        <td>${values.CountryCode}</td>
        <td>${values.NewConfirmed}</td>
        <td>${values.NewDeaths}</td>
        <td>${values.NewRecovered}</td>
    </tr>`;
    });
    document.getElementById("table_body").
    innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})