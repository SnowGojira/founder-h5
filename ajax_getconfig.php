<?php
require_once "jssdk1.php";
$jssdk = new JSSDK("wxc6d64ef0eca24344", "64c9340300279bf7e2f5d21e3694fea5",'http://weixin.assemblemedia.cn/founder/index.html');
$signPackage = $jssdk->GetSignPackage();
echo json_encode($signPackage);
?>