import { useEffect, useState } from "react";
import axios from "axios";
import loading_symbol from "../components/images/loading_symbol.gif"

export default function GetImages(props) {
    const [singleImage, setImage] = useState();
    const [isLoading, setLoading] = useState(true);
    // console.log(props.name)

    useEffect(() => {
        async function fetchData() {
        axios
            // .get(`http://localhost:5000/images/${props.name}`)
            .get(`https://wkf-backend.herokuapp.com/images/${props.name}`)
            .then((res) => {
                setImage(res.data);
                // console.log(`${props.name} image successfully retrieved`);
                setLoading(false);
            })
        }
        fetchData()
    }, [props.name])

    if (isLoading) {
        return <img alt="loading..." src={loading_symbol} width="50px" height="50px"/>
    } 
    
    if (singleImage) {
        return (
            singleImage.map((singleImage) => {
    
                // console.log(singleImage)
    
                const blob = new Blob([Int8Array.from(singleImage.image.data.data)], {type: singleImage.image.contentType });
                const imageBlob = window.URL.createObjectURL(blob);
            
                return <img alt={props.name} key={props.name} src={imageBlob} width={props.size}/>
            })
        )
    }
};
