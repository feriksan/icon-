<?php
$data = $_POST['data'];
$form = $_POST['form'];
$username = $_POST['username'];
$token = $_POST['token'];
$dataJson =  json_encode($data);
$authorization = "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpa2hzYW4gbWl0cmEiLCJyb2xlcyI6WyJST0xFX01JVFJBIl0sImlhdCI6MTYxOTY4ODMwMSwiZXhwIjoxNjE5NzI0MzAxfQ.DTVYA_gCVkIY63-Llj-Yc4RkOo5gjBtYH31nnKehE68";
$url1 = "http://202.157.187.126:3200/".$form."/save";
$url2 = "http://202.157.187.126:3200/user/activateUser/".$username;
$ch = curl_init($url1);
$ch2 = curl_init($url2);
curl_setopt($ch, CURLOPT_POSTFIELDS, $dataJson);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'), $authorization);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch2, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch2, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

$mh = curl_multi_init();
curl_multi_add_handle($mh,$ch);
curl_multi_add_handle($mh,$ch2);

do {
    $status = curl_multi_exec($mh, $active);
    if ($active) {
        curl_multi_select($mh);
    }
} while ($active && $status == CURLM_OK);

curl_multi_remove_handle($mh, $ch);
curl_multi_remove_handle($mh, $ch2);
curl_multi_close($mh);
echo $status;
?>