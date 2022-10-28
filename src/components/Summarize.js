import lock from "../assets/lock.svg";
import placeholder from "../assets/placeholder.svg";

const Summarize = () => {
    return ( 
        <>
            <div className="mx-4 lg:mx-16 bg-slate-50 my-4 w-auto h-auto rounded-lg  flex">
                <img src={lock} className="h-6 w-6 my-4 ml-4"/>
                <p className="align-middle text-default font-satoshi text-xl py-4 px-8 ">https://....</p>
            </div>
            <div className="mx-4 lg:mx-16 bg-white my-4 w-auto h-auto rounded-lg pb-10">
                <div className="">
                    <p className="text-center font-satoshi font-bold text-xl md:text-3xl p-10">The Run-Down Dream House </p>
                    <div>
                        <img src={placeholder} className="md:h-2/5 md:w-2/5 pb-10 mx-auto"/>
                    </div>
                    <div>
                        <p className="lg:h-2/5 lg:w-2/5 font-satoshi font-medium text-base md:text-2xl pb-10 mx-10 md:mx-auto" style={{"color": "#ABABAB"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru m.</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Summarize;