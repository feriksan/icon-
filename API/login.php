<?php
// set post fields
$postRequest = array(
    'username' => 'ikhsan',
    'password' => '123'
);

$url = "http://202.157.187.126:3200/login";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postRequest);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
curl_close($ch);
echo $result;
return $result;
?>