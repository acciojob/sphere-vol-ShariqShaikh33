function volume_sphere() {
    //Write your code here
	let btn = document.getElementById("submit");

	btn.addEventListener("click", volumevalue => {
		var radius = document.getElementById("radius").value;
		var volume = document.getElementById("volume");

		let nonNegative = new Promise((resolve,reject) => {
			if(radius>=0){
				console.log(radius);
				resolve(radius);
			}
			else{
				reject("The radius should not be negative");
			}
		}).then(res => {
			let volumeOfSphere = ((4/3) * Math.PI * Math.pow(res, 3));
			volume.value = volumeOfSphere.toFixed(3);
		}).catch(err => {
			console.log("The input value is invalid");
		})
		
		
	})
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
