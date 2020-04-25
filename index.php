<!DOCTYPE html>
<?php
include  'connectMongo.php';
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="main.js"></script>
    </head>
    <body>
        <label>Select League</label>
        <select id="leagues" onchange="getLeagues()" >
        <?php
        $leagues=$collection->distinct('league');
        foreach ($leagues as $values){
            print '<option value="'.$values.'">'.$values."</option>";
        }
        ?>
        </select>
        <button onclick="showOldDataLeague()">Show OLD Data</button>
        <br>
        <label>Select Team</label>
        <select id="teams" onchange="getPlayers()">
        <?php
        $teams=$collectionSec->distinct('name');
        foreach ($teams as $values){
            print '<option value="'.$values.'">'.$values."</h1>";
        }
        ?>
        </select>
        <label>Show matches</label>
        <input type="checkbox" onclick="testCheck()" id="showMatches">
        <button onclick="showOldDataPlayers()">Show OLD Data</button>
        <br>
        
        
        
        <div id="data_output_container">
        <table id="table_out" border="1">
            
        </table>
        <ul id="list_players">
            
        </ul>
         <table id="table_matches" border="1">
            
         </table>
        </div>
        <br><br>
        <div id="old_data_out">
            <h1 id="label_old_data"></h1>
            <table id="old_data" border="1">
            
            </table>
            <ol id="list_players_old">
            </ol>
        </div>
        
    </body>
</html>
