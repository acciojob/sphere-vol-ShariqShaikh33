function volume_sphere() {
    //Write your code here
	let btn = document.getElementById("submit");

	btn.addEventListener("click", volumevalue => {
		var radius = document.getElementById("radius").value;
		var volume = document.getElementById("volume");

		let nonNegative = new Promise((resolve,reject) => {
			if(radius>=0){
				resolve(radius);
			}
			else{
				reject("The radius should not be negative");
			}
		}).then(res => {
			let volumeOfSphere = 4/3 * Math.Pi * Math.pow(radius, 3);
			console.log(volumeOfSphere);
		})
		
		volume.value = radius;
	})
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
