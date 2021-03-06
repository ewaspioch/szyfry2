import React, { useState } from "react";

function StreamCipherImg(props) {
    const { setMessage } = props
	const [image, setImage] = useState("");
	const [baseImage, setBaseImage] = useState("");

	const onImageChange = async (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			const base64 = await convertBase64(img);
			console.log(base64);
            setMessage(base64)
			setImage(URL.createObjectURL(img));
			setBaseImage(base64);
		}
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	return (
		<div>
			<div>
				{/* <img src={image} alt="myImage" /> */}
				<h1>Select Image</h1>
				<input type="file" name="myImage" onChange={onImageChange} />
				<div/>
				<img src={baseImage} alt="myImage" width={400} height={400}/>

			</div>
		</div>
	);
}

export default StreamCipherImg;
