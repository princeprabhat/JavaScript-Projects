<?php 
if (isset($_POST['submit_form'])){

	$fone_name=$_FILES['First_File']['name'];
	$fone_type=$_FILES['First_File']['type'];
	$fone_loc=$_FILES['First_File']['tmp_name'];
	$fone_size=$_FILES['First_File']['size'];
    $fone_store= "files_container/".$fone_name;
	$ftwo_name=$_FILES['Second_File']['name'];
	$ftwo_type=$_FILES['Second_File']['type'];
	$ftwo_loc=$_FILES['Second_File']['tmp_name'];
	$ftwo_size=$_FILES['Second_File']['size'];
	$ftwo_store="files_container/".$ftwo_name;
	$csvAsArray = array_map('str_getcsv', file($fone_loc));
	$csvasarray = array_map('str_getcsv', file($ftwo_loc));
	header('Content-Type: text/plain');
	
	 $fp=fopen('final_file.csv','w');
	 $fq=fopen('sfinal_file.csv','w');
	 foreach($csvAsArray as $fields){
	 	fputcsv($fp, $fields);
	 }
	 fclose($fp);
	 foreach ($csvasarray as $ff) {
	 	fputcsv($fq,$ff);
	 }
	 fclose($fq);
	file_put_contents('submit_file.csv',
    file_get_contents('final_file.csv') .
    file_get_contents('sfinal_file.csv')
);
	

  // output headers so that the file is downloaded rather than displayed
  header("Content-type: text/csv");
  header("Content-disposition: attachment; filename = submit_file.csv");
  readfile("submit_file.csv");

	

	

}

            
			







 ?>

 
