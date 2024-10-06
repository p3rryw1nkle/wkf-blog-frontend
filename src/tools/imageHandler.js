// This component is used to retrieve images from the backend. It is used in the Image component.

import { useEffect, useState } from "react";
import axios from "axios";
import loading_symbol from "../components/images/loading_symbol.gif"

export default function GetImages(props) {
    const [singleImage, setImage] = useState();
    const [isLoading, setLoading] = useState(true);
    const backend = process.env.REACT_APP_BACKEND_URL
    
    // every time the component is rendered, make a get request using the image name.
    useEffect(() => { 
        async function fetchData() {
        axios
            .get(`${backend}${props.name}`)
            .then((res) => {
                setImage(res.data); // if an image was received from the backend, set singleImage equal to it
                // console.log(`${props.name} image successfully retrieved`);
                setLoading(false); // the image has been received, so the component is no longer loading.
            })
        }
        fetchData()
    }, [props.name, backend]) //require the name of the image and the backend url.

    // if an image has not been received yet, returning the loading symbol
    if (isLoading) {
        return <img alt="loading..." src={loading_symbol} width="50px" height="50px"/>
    } 
    
    // if an image has been received, return the image
    if (singleImage) {
        return (
            singleImage.map((singleImage) => {
    
                // raw file data is converted into an image
                const blob = new Blob([Int8Array.from(singleImage.image.data.data)], {type: singleImage.image.contentType });
                const imageBlob = window.URL.createObjectURL(blob);
            
                return <img alt={props.name} key={props.name} src={imageBlob} width={props.size}/>
            })
        )
    }
};
