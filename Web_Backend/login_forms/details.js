


var vac = document.getElementById("vac").value;
var pat = document.getElementById("pat").value;
var doct=document.getElementById("doct").value;

var data = [
   ['Doctor', doct],
   ['Patient', pat],
   ['Vacant', vac]
];


function download_csv() {
    var csv = 'Name,Title\n';
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });

    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'people.csv';
    hiddenElement.click();
}
