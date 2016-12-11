<?php
require_once "jssdk1.php";
$jssdk = new JSSDK("your wxID", "your wxPasscode",'your static Network');
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);
?>
