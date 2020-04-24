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
        <select id="leagues" onchange="getLeagues()" >
        <?php
        $leagues=$collection->distinct('league');
        foreach ($leagues as $values){
            print '<option value="'.$values.'">'.$values."</option>";
        }
        ?>
        </select>
        <select id="teams" onchange="getPlayers()">
        <?php
        $teams=$collectionSec->distinct('name');
        foreach ($teams as $values){
            print '<option value="'.$values.'">'.$values."</h1>";
        }
        ?>
        </select>
        
        <table id="table_out" border="1">
            
        </table>
        <ul id="list_players">
            
        </ul>
    </body>
</html>
