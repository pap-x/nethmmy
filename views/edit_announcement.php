<?php	
	include_once('../lib/access_rules.php');
	include_once('../lib/validate.php');

        if(!isset($error))
                $error = '';

	$show = false;
	$class_link = _('Some class');
	$announcements_link = _('Announcements');
	$aid = isset($_GET['id'])?$_GET['id']:0;
	if(!($e = announcement_id_validation($aid)))
	{
		if(can_edit_announcement($logged_userid,$aid))
		{
			$query = "SELECT * FROM announcements WHERE id = '$aid'";
			$ret = mysql_query($query);
			if($ret && mysql_num_rows($ret))
			{
				$show = true;
				$result = mysql_fetch_array($ret);
				$title = $result['title'];
				$text = $result['text'];
				$id = $result['id'];
				$class = $result['class'];
				$is_urgent = $result['is_urgent'];

				$query = "SELECT title FROM classes WHERE id='$class'";
				$ret = mysql_query($query);
				if($ret && mysql_num_rows($ret))
				{
					$class_title = mysql_result($ret,0,0);
					$class_link = "<a href='class/$class/'>$class_title</a>";
					$announcements_link = "<a href='announcements/$class/'>$announcements_link</a>";
				}
			}
			else
			{
				$error .= _('Announcement was not found');
			}
		}
		else
		{
			$error .= _('Access Denied.');
		}
	}
	else
	{
		$error .= $e;
	}
?>
<h2><?php echo _('Edit announcement');?></h2>
<p class='hierarchyNavigationRow'><?php echo $class_link . " > " . $announcements_link . " > " . _('Edit Announcement');?></p>
<div class='editAnnouncementWrapper'>
<?php	if($show) {?>
		<form action="edit_announcement.php" method="post">
			<fieldset>
				<legend><?php echo _('Announcement');?></legend>		
				<label><?php echo _('Title');?> </label>
				<input type='text' name='title' value="<?php echo $title;?>" placeholder="<?php echo _('Announcement title here...');?>" />
				<div class='urgentDiv'>
				<?php echo _('Urgent');?>
				<input type='checkbox' name='urgent' value='1' <?php if($is_urgent) echo "checked='true'";?>/>
				</div>
				<label><?php echo _('Body');?> </label>
				<textarea class='announcementTextarea' id='editArea' name='text' placeholder="<?php echo _('Announcement body...');?>" ><?php echo $text;?></textarea>
				<input type='hidden' name='id' value="<?php echo $id;?>" />
				<input type="submit" value="<?php echo _('Submit');?>" />
				<a id='button' href="announcements/<?php echo $class;?>/"><input type="button" name="cancel" value="Cancel" /></a>
			</fieldset>
		</form>
		<script type="text/javascript" src="../public_html/js/nicEdit.js"></script>
		<script type='text/javascript'>
			bkLib.onDomLoaded(function() {
				new nicEditor({buttonList : ['bold','italic','underline','left','center','right','ol','ul','fontSize','fontFamily','fontFormat','superscript','subscript','indent','outdent','link','unlink','striketrhough','forecolor','bgcolor','image','upload','xhtml'], xhtml : true}).panelInstance('editArea');
			}); 
		</script>
<?php	}?>
</div>
