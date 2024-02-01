import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ImageCropper = () => {
  const [image, setImage] = useState("https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg");
  const cropImage = useRef<string>("");
  const cropperInstance = useRef<Cropper>();
  const [finalImage, setFinalImage] = useState("");

  const getCropData = () => {
    if (cropperInstance.current) {
      const croppedCanvas = cropperInstance.current.getCroppedCanvas();
      setImage(croppedCanvas.toDataURL());
      setCropMode(false); 
    }
  };
  const [cropMode, setCropMode] = useState(false);

  const startCropping = () => {
    setCropMode(true);
  };
  
  return (
    <>
      <div>Image Cropper</div>
      <div>
        {!cropMode && (
          <button onClick={startCropping}>
            Start Cropping
          </button>
        )}
        {cropMode && (
          <button onClick={getCropData}>
            Crop Image
          </button>
        )}
      </div>
      <div>
        {!cropMode && image && <img src={image} alt="original"/>}
        {cropMode && (
          <Cropper
            initialAspectRatio={1}
            src={image}
            background={false}
            responsive={true}
            onInitialized={(instance: any) => {
              cropperInstance.current = instance;
            }}
            zoomable={false}
          />
        )}
        {finalImage && (
          <img
            src={finalImage}
            alt="cropped"
          />
        )}
      </div>
    </>
  );
};

export default ImageCropper;