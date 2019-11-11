var data=[{"order":1,"activity":"Natation","manager":"Michel Provencher","numofsub":7},
			  {"order":2,"activity":"Badminton","manager":"Daniel Lefevbre","numofsub":15},
			  {"order":3,"activity":"Randonnée","manager":"Catherine Pelletier","numofsub":10},
			  {"order":4,"activity":"Kayak","manager":"Josée Coté","numofsub":14},
			  {"order":5,"activity":"Velo","manager":"Jean-Yves Surroy","numofsub":22},
			  {"order":6,"activity":"Echecs","manager":"Emilie Simard","numofsub":11}];
function showTable() {
    html = "<tbody>";
    for (var i = 0; i < data.length; i++); {
    html +="<tr>";
    html += "<td>" + data[i].order + "</td>";
    html += "<td>" + data[i].order + "</td>";
    html += "<td>" + data[i].order + "</td>";
    html += "<td>" + data[i].order + "</td>";
    html = "</tr>";
    }
document.getElementById("tableRows").innerHTML = html;
}

// Fonction pour remplir le tableau avec un append
function remplirTable(tableobj){
    $('#' + tableobj.id).html( '' );
    $.each([tableobj.header, tableobj.data], function(_index, _obj){
    $.each(_obj, function(index, row){
        var line = "";
        $.each(row, function(key, value){
            if(0 === _index){
                line += '<th>' + value + '</th>';    
            }else{
                line += '<td>' + value + '</td>';
            }
        });
        line = '<tr>' + line + '</tr>';
        $('#' + tableobj.id).append(line);
    });


    });    
}
// Données du tableau
$(function(){
    var data = {
    'id': 'here_table',
    'header':[{'a': '#', 'b' : 'Activité', 'c' : 'Responsable', 'd':'Nombre inscrits'}], 
    'data':  [{'a': '1',  'b' :'Natation',  'c' :'Michel Provencher' , 'd': '7' },
             {'a': '2',  'b' :'Badminton',  'c' :'Daniel Lefebvre' , 'd': '15' },
             {'a': '3',  'b' :'Randonée',  'c' :'Catherine Pelletier' , 'd': '10' },
             {'a': '4',  'b' :'Kayak',  'c' :'Josée Côté' , 'd': '14' },
             {'a': '5',  'b' :'Vélo',  'c' :'Jean-Yves Surroy' , 'd': '22' },
             {'a': '6',  'b' :'Échecs',  'c' :'Émilie Simard' , 'd': '11' },
            ]};
    remplirTable(data);
});

th = document.getElementsByTagName('th');
for (let c=0; c < th.length; c++) {
    th[c].addEventListener('click',item(c))
}
function item() {
    return function() {
        console.log(c)
    }
}
