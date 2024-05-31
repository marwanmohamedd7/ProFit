import { PhotoProvider, PhotoView } from "react-photo-view";

function ImageViewer({ children, imageURL, imageStyle }) {
    return (
        <PhotoProvider>
            {
                typeof imageURL === "string" ?
                    <PhotoView src={imageURL}>
                        <div style={{ display: 'inline-block' }}>
                            {children}
                        </div>
                    </PhotoView>
                    :
                    imageURL.map((img, index) => (
                        <PhotoView key={index} src={img}>
                            <div style={{ display: 'inline-block' }}>
                                <img src={img} alt="img" className={imageStyle} />
                            </div>
                        </PhotoView>
                    ))
            }

        </PhotoProvider>
    );
}

export default ImageViewer;