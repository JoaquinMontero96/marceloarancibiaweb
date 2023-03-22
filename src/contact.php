$response = $_POST['g-recaptcha-response'];
$secret = '6LdnXCMlAAAAANeewiLWvUvWkYAXSOxBGB8o8cS1';
$remoteip = $_SERVER['REMOTE_ADDR'];
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$remoteip";
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($curl);
curl_close($curl);
$data = json_decode($response);
if($data->success) {
  // El reCAPTCHA ha sido validado correctamente
} else {
  // El reCAPTCHA no ha sido validado correctamente
  echo '<p>Por favor completa el reCAPTCHA correctamente.</p>'
}
