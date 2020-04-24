<?php
include 'connectMongo.php';
$league=$_POST['league'];
$data=$collection->find(['league'=>$league],['projection'=>['_id'=>0]])->toArray();
echo json_encode($data);
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

