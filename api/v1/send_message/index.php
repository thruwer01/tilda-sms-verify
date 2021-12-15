<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
header("Content-Type: application/json; charset=utf-8");


$phone_number = $_POST['phone_number'];
$code = mt_rand(111111, 999999);
$msg = "Ваш код подтверждения $code для оформления заказа на сайте https://instinctintimates.com";
$URL = "https://smsc.ru/sys/send.php?login=instinct.intimates&psw=AzS40701&phones=$phone_number&mes=$msg";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo json_encode(["code" => $code]);