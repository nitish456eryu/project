import {useState,useEffect} from "react";

const Showfetcheddata = () => {
    const [data,setData] = useState("");
    useEffect( () => {
        fetch('https://api.publicapis.org/entries')
        .then((res) => {
            return res.json()
        }).then((d) => {
            setData(d);
            console.log(d);
        });
    },[]);
    
    return (
        <>
            
            <p>{data}</p>
        </>
        
    );
}
 export default Showfetcheddata;