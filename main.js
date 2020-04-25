
var localStorage;
const xhr =new XMLHttpRequest();
function getLeagues(){
    let valueLeagues = document.getElementById("leagues").value;
    xhr.open("POST","getMatches.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function(){
        if(xhr.status===200){
        let res = JSON.parse(xhr.response);
        let out = "";
        for(let i in res){
            out += '<tr><td>'+res[i].league+"</td><td>"+res[i].date+"</td><td>"+res[i].place+"</td><td>"+res[i].team1+"</td><td>"+res[i].team2+"</td><td>"+res[i].winner+"</td></tr>";
        }
        let change = document.getElementById("table_out");
        let temp = "<tr><th>league</th>"+
                "<th>date</th>"+
                "<th>place</th>"+
                "<th>TEAM 1</th>"+
                "<th>TEAM 2</th>"+
                "<th>winner</th>"+
            "</tr>"+out;
        change.innerHTML=temp;
        localStorage[valueLeagues]=temp;
    }
    }
    xhr.send("league="+valueLeagues);
}
function getPlayers(){
    let valueTeams = document.getElementById("teams").value;
    xhr.open("POST","getPlayers.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function(){
        if(xhr.status===200){
        let res = JSON.parse(xhr.response);
        let out = "";
        for(let i in res){
            out += '<li>'+res[i]+"</li>";
        }
        let change = document.getElementById("list_players");
        let temp = "<h3>Players team "+valueTeams+":</h3>"+out;
        change.innerHTML=temp;
        localStorage[valueTeams]=temp;
       
    }
    }
    xhr.send("team="+valueTeams);
}

function testCheck(){
    let checkbox = document.getElementById("showMatches");
    let team = document.getElementById("teams").value;
    let change = document.getElementById("table_matches");
    if(checkbox.checked){ 
        xhr.open("GET","getMatchesByName.php?team="+team);
        xhr.send();
        xhr.onload = function(){
        if(xhr.status===200){  
            //console.log(xhr.response);
            let res = JSON.parse(xhr.response);
            let out = "";
            for(let i in res){
                out += '<tr><td>'+res[i].league+"</td><td>"+res[i].date+"</td><td>"+res[i].place+"</td><td>"+res[i].team1+"</td><td>"+res[i].team2+"</td><td>"+res[i].winner+"</td></tr>";
            }
            let temp="<tr><th>league</th>"+
                "<th>date</th>"+
                "<th>place</th>"+
                "<th>TEAM 1</th>"+
                "<th>TEAM 2</th>"+
                "<th>winner</th>"+
            "</tr>"+out;
            change.innerHTML=temp;
            localStorage[team]=temp;
        }
    }
    }else{
         change.innerHTML=' ';
    }
}

function showOldData(){
    let team = document.getElementById("teams").value;
    let valueTeams = document.getElementById("teams").value;
    let valueLeagues = document.getElementById("leagues").value;
    let tableForOldData=document.getElementById("old_data");
    let list_old=document.getElementById("list_players_old");
    document.getElementById("label_old_data").innerHTML='OLD DATA:'; 
    if(localStorage[valueLeagues]!==undefined  ){
        tableForOldData.innerHTML=localStorage[valueLeagues];
    }else if(localStorage[team]!==undefined){
        tableForOldData.innerHTML=localStorage[team];
    }else 
    if(localStorage[valueTeams]!==undefined){
        list_old.innerHTML=localStorage[valueTeams];
    }
    
}

