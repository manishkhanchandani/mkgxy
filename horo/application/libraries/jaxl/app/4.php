<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Test</title>
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js'></script>
<script language="javascript">
$(document).ready(function () {
	$.get('3.php', function(data) {
	  console.log(data);
	});
});
</script>
</head>

<body>
</body>
</html>