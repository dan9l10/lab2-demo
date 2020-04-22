<?php
require '../vendor/autoload.php';
$league=$_GET['league'];
$db=new MongoDB\Client("mongodb://localhost:27017");
$collection = $db->lab2->games;
$dataFromDb=$collection->find()->toArray();
print_r($dataFromDb);
$leagues=array();
foreach ($dataFromDb as $row){
    $leagues[] = $row['league'];
}
print_r($leagues) ;
//$dataFromDb=$collection->find(['league'=>$league])->toArray();
//json_encode($dataFromDb);
//print_r($dataFromDb);