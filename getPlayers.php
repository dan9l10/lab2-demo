<?php
include 'connectMongo.php';
//$team=$_GET['team'];
$team=$_POST['team'];
$players=$collectionSec->find(['name'=>$team],['projection'=>['players'=>1,'_id'=>0]])->toArray();
//print_r($players);
foreach ($players as $player){
        echo json_encode($player['players']);
}

//echo json_encode($players['players']);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

