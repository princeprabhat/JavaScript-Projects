<!DOCTYPE html>
<html>
<head>
	<title>CSV Merging...Prince Prabhat</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="global.css">
	<script type="text/javascript" src="global.js"></script>
</head>

<body >


	<section class="container-fluid bg">
		<section class="row " >
			<section class="col-12 col-sn-6 col-md-3">
	
			<form method="POST" action="global.php" class="form-container" name="myform" enctype="multipart/form-data" >
				<div class="box-1" >
					<label for="">File_1</label>
					<input  type="file" name="First_File" id="File-1" class="first-file" required="true" accept=".csv" onchange="return file_Validation()">
				</div>
				<div class="box-2">
					<label for="">File_2</label>
					<input type="file" name="Second_File" id="File-2" class="first-file" required="true" accept=".csv" onchange="return validation()" >
				</div>
				<div class="btn-box">
					<button type="submit" name="submit_form" class="btn btn-info">Merge_Files</button>
				</div>

			</form>


			</section>
			
		</section>
		

	</section>

		




<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
	


</script>





</body>
</html>