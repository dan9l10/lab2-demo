const xhr =new XMLHttpRequest();
function getLeagues(){
    let valueLeagues = document.getElementById("leagues").value;
    //alert(valueLeagues);
    xhr.open("POST","getMatches.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function(){
        if(xhr.status===200){
            
      // console.log(xhr.response);
        let res = JSON.parse(xhr.response);
        let out = "";
        for(let i in res){
            out += '<tr><td>'+res[i].league+"</td><td>"+res[i].date+"</td><td>"+res[i].place+"</td><td>"+res[i].team1+"</td><td>"+res[i].team2+"</td><td>"+res[i].winner+"</td></tr>";
        }
        let change = document.getElementById("table_out");
        change.innerHTML="<tr><th>league</th>"+
                "<th>date</th>"+
                "<th>place</th>"+
                "<th>TEAM 1</th>"+
                "<th>TEAM 2</th>"+
                "<th>winner</th>"+
            "</tr>"+out;
        
    }
    }
    xhr.send("league="+valueLeagues);
}
function getPlayers(){
    let valueTeams = document.getElementById("teams").value;
    //alert(valueTeams);
    xhr.open("POST","getPlayers.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function(){
        if(xhr.status===200){
            
     console.log(xhr.response);
        let res = JSON.parse(xhr.response);
        let out = "";
        for(let i in res){
            out += '<li>'+res[i]+"</li>";
        }
        let change = document.getElementById("list_players");
        change.innerHTML="<h3>Players team "+valueTeams+":</h3>"+out;
        
    }
    }
    xhr.send("team="+valueTeams);
}

