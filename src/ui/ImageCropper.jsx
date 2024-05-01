import Button from "./Button";
import { useRef, useState } from "react";
import setCanvasPreview from "../utils/setCanvasPreview";
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop } from "react-image-crop";

function ImageCropper({ minDimension, onCropComplete, onCloseModal }) {
    const ASPECT_RATIO = 1;
    const MIN_DIMENSION = minDimension;
    const imgRef = useRef(null)
    const previewCanvasRef = useRef(null)
    const [crop, setCrop] = useState();
    const [error, setError] = useState("");
    const [imgSrc, setImgSrc] = useState("");

    // Function to handle file selection and read the file as a data URL
    function onSelectFile(e) {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (!file) return;
        setImgSrc("")
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            const imageElement = new Image()
            const imageUrl = reader.result?.toString() || "";
            imageElement.src = imageUrl;
            imageElement.addEventListener("load", (e) => {
                if (error) setError("")
                const { naturalWidth, naturalHeight } = e.currentTarget;
                // Check if the image dimensions meet the minimum requirements
                if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
                    setError(`Image must be at least ${MIN_DIMENSION} x ${MIN_DIMENSION} pixels. Please upload an image with larger dimensions.`)
                    return setImgSrc("")
                }
            })
            setImgSrc(imageUrl)
        })
        reader.readAsDataURL(file);
    }

    // Function to initialize the crop area when the image loads
    function onImageLoad(e) {
        e.preventDefault();
        let { width, height } = e.currentTarget;
        const cropWidthInPercent = (MIN_DIMENSION / width) * 100;
        const cropHeightInPercent = (MIN_DIMENSION / height) * 100;
        width = cropWidthInPercent
        height = cropHeightInPercent
        // Define and center the initial crop area
        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropWidthInPercent,
                height: cropHeightInPercent,
            },
            width,
            height,
            ASPECT_RATIO
        );
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop);
    }

    return (
        <div className="w-full" id="image-cropper">
            <label htmlFor="file">
                <span className="sr-only">Upload photo</span>
                <input
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={onSelectFile}
                    className="block text-sm text-blue-700 file:my-4 file:py-1 file:px-2 file:cursor-pointer
                file:rounded-md file:border-0 file:mr-2 file:text-blue-50 file:bg-blue-700 hover:file:bg-blue-600"
                />
            </label>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            {imgSrc &&
                <div className="space-y-2">
                    <div className="flex flex-col items-center gap-2">
                        <ReactCrop
                            crop={crop}
                            circularCrop
                            keepSelection
                            onChange={
                                (pixelCrop, percentCrop) => setCrop(percentCrop)
                            }
                            aspect={ASPECT_RATIO}
                            minWidth={MIN_DIMENSION}
                        >
                            <img
                                alt="Upload"
                                ref={imgRef}
                                src={imgSrc}
                                onLoad={onImageLoad}
                                className="w-fit"
                                style={{ maxHeight: "65vh" }}
                            />
                        </ReactCrop>
                    </div>
                    <div className="flex justify-end items-end">
                        <Button customeStyle="my-2"
                            onClick={() => {
                                setCanvasPreview(
                                    imgRef.current, // HTML ImageElement
                                    previewCanvasRef.current, // HTML CanvasElement
                                    convertToPixelCrop(crop,
                                        imgRef.current.width,
                                        imgRef.current.height
                                    )
                                )
                                // const dataUrl = previewCanvasRef.current.toDataURL()
                                // console.log(dataURLtoBlob(dataUrl))
                                previewCanvasRef.current.toBlob(Blob => {
                                    if (!Blob) return;
                                    const file = new File([Blob], "cropped-image.png", { type: "image/png" });
                                    // const formData = new FormData();
                                    // formData.append("file", file);
                                    onCropComplete(file)
                                    onCloseModal()
                                })
                            }}
                        >done</Button>
                    </div>
                    {crop &&
                        <canvas
                            ref={previewCanvasRef}
                            style={{
                                display: "none",
                                border: "1px solid black",
                                objectFit: "contain",
                                width: 150,
                                height: 150,
                            }}
                        />
                    }
                </div>
            }
        </div>
    )
}

export default ImageCropper






// Define the initial crop size as a percentage of the image's width
// const cropWidth = 100; // 100% of the image element's width

// Calculate the height based on the aspect ratio
// const cropHeight = (1 / ASPECT_RATIO) * cropWidth;

// Make sure the crop does not exceed the image's height
// const finalCropHeight = cropHeight > 100 ? 100 : cropHeight;

// convert img url to blob and create an object URL for it so that we can convert it back to file and send the cropped img to backend
// function dataURLtoBlob(dataurl) {
//     const arr = dataurl.split(',');
//     const mime = arr[0].match(/:(.*?);/)[1];
//     const bstr = atob(arr[1]);
//     let n = bstr.length;
//     const u8arr = new Uint8Array(n);

//     while (n--) {
//         u8arr[n] = bstr.charCodeAt(n);
//     }

//     return new Blob([u8arr], { type: mime });
// }