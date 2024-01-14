function file_Validation(){
	var fileInput = document.getElementById("File-1");
	
	var filePath = fileInput.value;
	

	var allowedExtension = /(\.csv)$/i;

	if(!allowedExtension.exec(filePath)){
		alert('Only Csv File Supported');
		fileInput.value='';
		
		return false;
	} 

	
}
function validation(){
	var fileinput=document.getElementById("File-2");
	var filepath=fileinput.value;
	var allowedextension = /(\.csv)$/i;
	if(!allowedextension.exec(filepath)){
		alert('Only Csv File Supported');
		fileinput.value='';
		
		return false;
	}   



}