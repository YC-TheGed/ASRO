<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$input = json_decode(file_get_contents('php://input'), true);

// Get the raw POST data
$json = file_get_contents('php://input');

// Decode the JSON data
$data = json_decode($json, true);

$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$firstName = strip_tags($_POST['firstName']);

$access_token = '';
$hubspot_api_url = 'https://api.hubapi.com/crm/v3/objects/contacts';

$properties = [
    'email' => $email,
    'firstname' => $firstName
];

$request_body = json_encode([
    'properties' => $properties
]);

$ch = curl_init($hubspot_api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $access_token
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $request_body);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code == 201) {
    echo json_encode(['status' => 'success', 'message' => 'Contact added to HubSpot!']);
} else {
    $error_message = json_decode($response, true);
    echo json_encode(['status' => 'error', 'message' => $error_message['message'] ?? 'Failed to add contact']);
}

