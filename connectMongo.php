<?php
require_once __DIR__ ."/vendor/autoload.php";
$db=new MongoDB\Client("mongodb://localhost:27017");
$collection = $db->lab2->games;
$collectionSec = $db->lab2->teams;
?>