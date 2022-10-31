import lock from "../assets/lock.svg";
import placeholder from "../assets/placeholder.svg";
import { useSearchParams } from "react-router-dom";
const Summarize = () => {
    const [searchParams]=useSearchParams();
    const url=searchParams.get("url")
    const summary=searchParams.get("summary");
    const title=searchParams.get("title");
    const imgUrl=searchParams.get("top_image");
    console.log(imgUrl);
    return ( 
        <>
            <div className="mx-4 lg:mx-16 bg-white my-4 w-auto h-auto rounded-lg flex">
                <img src={lock} className="h-6 w-6 my-4 ml-4"/>
                <p className="align-middle font-satoshi text-sm md:text-xl py-4 px-2 md:px-8" style={{"color": "#ABABAB"}}>{url}</p>
            </div>
            <div className="mx-4 lg:mx-16 bg-white my-4 w-auto h-auto rounded-lg pb-10">
                <div className="">
                    <p className="text-center font-satoshi font-bold text-xl md:text-3xl p-10">{title}</p>
                    <div>
                        <img src={imgUrl} className=" w-4/5 md:h-2/5 md:w-2/5 pb-10 mx-auto"/>
                    </div>
                    <div>
                        <p className="md:w-3/5 font-satoshi font-medium text-base md:text-2xl pb-10 mx-10 md:mx-auto text-justify" style={{"color": "#ABABAB"}}>{summary}</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Summarize;