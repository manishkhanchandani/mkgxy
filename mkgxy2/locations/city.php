<?php
$pageTitle = 'Selecting City';
if (empty($_GET['state'])) {
  header("Location: ".HTTPPATH."/locations/country");
  exit;
}
$state = $_GET['state'];
$url = APIHTTPPATH.'/locations/cities.php?id='.$state ;
$cityList = curlget($url);
$cityList = json_decode($cityList, 1);
include(SITEDIR.'/libraries/addresses/nearby.php');
?>
<!-- body -->
<h3>Choose City</h3>
<!-- body -->
<form method="get" name="form1" id="form1" action="<?php echo HTTPPATH; ?>/locations/cityDetail">
<select name="city_id" id="city_id">
<option value="">Select---</option>
<?php if (!empty($cityList)) {
  foreach ($cityList as $i => $city) {
?>
<option value="<?php echo $city['id']; ?>"><?php echo ($i + 1).'. '.$city['city']; ?></option>
<?php
  }
}
?>
</select>
<input type="submit" name="submit" id="submit" value="Go">
</form>