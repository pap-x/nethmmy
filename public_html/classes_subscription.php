<?php	include_once('../lib/connect_db.php');	include_once('../lib/login.php');	include_once("../lib/access_rules.php");	include_once("../lib/localization.php");	include_once("../lib/validate.php");	include_once("../config/general.php");        if(!isset($error)) 		$error = array();			if(!isset($message))		$message = array();	$subscribe = isset($_POST['subscribe'])?$_POST['subscribe']:array();	$subscribe = array_unique($subscribe);	$classes = implode(",", $subscribe);	if (can_change_class_subscriptions($logged_userid,$logged_userid)) 	{		if (!($e=id_list_validation($classes)))		{			$query = "UPDATE users					SET classes = '$classes'					WHERE id = '$logged_userid'";					mysql_query($query) || ($error[] = mysql_error());			$message[] = _('Class subscriptions were updated.');			}		else		{			$error[] = $e;		}	}	else	{		$error[] = _('Access denied.');	}			if(isset($_GET['AJAX']))	{ 		echo '{ "error" : ["'.implode('","',$error).'"]}';	}	elseif(!(isset($DONT_REDIRECT) && $DONT_REDIRECT))	{		if(isset($message) && count($message))			setcookie('message',implode($MESSAGE_SEPERATOR,$message),time()+3600,$INDEX_ROOT);		if(isset($error) && count($error))			setcookie('notify',implode($MESSAGE_SEPERATOR,$error),time()+3600,$INDEX_ROOT);		$redirect = ($error)?"classes/":"home/";		include('redirect.php');	}?>