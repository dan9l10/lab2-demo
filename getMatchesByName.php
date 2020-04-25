<?php
include 'connectMongo.php';
$nameTeam = $_GET['team'];
$team=$collection->find(array( '$or' => array( array('team1' => $nameTeam), array('team2' => $nameTeam) ) ),['projection'=>['_id'=>0]])->toArray();
//print_r($team);
echo json_encode($team);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

