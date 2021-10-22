<?php
$data = $_POST['data'];
$key = $_POST['token'];
$username = $_POST['username'];
$authorization = "Authorization: Bearer ".$key;
$dataJson =  json_encode($data);
$url = "http://202.157.184.191:3200/person/addPersonToTeam/".$username;
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch, CURLOPT_POSTFIELDS, $dataJson);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json', $authorization));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
if (curl_errno($ch)) {
    $error_msg = curl_error($ch);
}
curl_close($ch);
if (isset($error_msg)) {
    echo $result;
    return $error_msg;
}else{
    echo $result;
    return $result;
}
?>