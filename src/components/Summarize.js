import {useState,useEffect} from 'react';
import { useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";
import axios from 'axios';
import lock from "../assets/lock.svg";

const Summarize = () => {
    const baseUrl="http://localhost:7000/summarize";

    const [searchParams]=useSearchParams();
    const url=searchParams.get("url")
    const [data,setData] = useState(null);
    const [isloading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.post(baseUrl,{
            url:url
        })
        .then((res)=>{
            setData(res.data);
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
        });
      }, []);

    const title = data?.title;
    const img = data?.top_image;
    const summary = data?.summary;  
    return ( 
        <> 
            <div className="mx-4 lg:mx-16 bg-white my-4 w-auto h-auto rounded-lg flex">
                <img src={lock} className="h-6 w-6 my-4 ml-4"/>
                <p className="align-middle font-satoshi text-sm md:text-xl py-4 px-2 md:px-8" style={{"color": "#ABABAB"}}>{url}</p>
            </div>
            <div className="mx-4 lg:mx-16 bg-white my-4 w-auto h-auto rounded-lg pb-10">
                { isloading ?<Spinner/>:
                <div className="">
                    <p className="text-center font-satoshi font-bold text-xl md:text-3xl p-10">{title}</p>
                    <div>
                        <img src={img} className=" w-4/5 md:h-2/5 md:w-2/5 pb-10 mx-auto"/>
                    </div>
                    <div>
                        <p className="md:w-3/5 font-satoshi font-medium text-base md:text-2xl pb-10 mx-10 md:mx-auto text-justify" style={{"color": "#ABABAB"}}>{summary}</p>
                    </div>
                </div>
        }
            </div>
        </>
     );
}
 
export default Summarize;