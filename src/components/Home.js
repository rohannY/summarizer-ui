import About from './About'
import {useState} from 'react';
import { createSearchParams,useNavigate} from 'react-router-dom';
const Home = () => {
    const [url,setUrl] = useState(null);
    let navigate = useNavigate();

    const handleChange = (e) =>{
        e.preventDefault();
        if(validateUrl(url)){
            navigate({
                pathname:'/summarize',
                search:createSearchParams({
                    url:url,
                }).toString()
        }); 
        }else{
            alert("Invalid Url");
        }
    }

    // async function sendRequest(){
        // const requestOptions = {
        //     url:'http://localhost:7000/summarize',
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json' 
        //     },
        //     body: JSON.stringify({url})
        // };
        // const response = await fetch('http://localhost:7000/summarize', requestOptions);
        // setData(await response.json());
        // setTimeout('',100);
        // console.log(data);

    // }

    // function red() { 
    //     if(data){
            
    //     }    
    // }

    function validateUrl(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }

    return ( 
    <>
        <div className="w-full h-screen py-10" id="home">
            <div id="content" className="mb:mx-16">
                <div className="container mx-auto my-12">
                    <div className="content-center py-5">
                        <h1 className="text-5xl font-bold leading-tight text-gray-800 text-center tracking-widest font-clash">Summarizer</h1>
                    </div>
                    <div className="my-4">
                        <p className="font-satoshi tracking-wide text-2xl leading-relaxed">TLDR This helps you summarize any piece of text into concise,<br/> easy to digest content so you can free yourself from information <br/> overload.</p>
                    </div>
                </div>
            </div>
           
            <div id="input" className="mx-16">
                <form className="w-auto font-satoshi" onSubmit={handleChange}>
                    <div class="mb-6 ">
                        <div className="grid grid-cols-3 mx-16">
                         <label className="mb-2 text-xl font-medium text-gray-900" >Enter Url:</label>
                        </div>
                        <input onChange={event =>setUrl(event.target.value)} className="bg-white text-gray-900 text-xl rounded-xl block p-2.5 px-7 mx-auto w-2/3 h-20 outline-none font-medium" placeholder="https://....." type="text"></input>
                    </div>
                    <button type="submit" className="w-56 h-16 rounded-xl text-2xl text-white font-semibold cursor-pointer tracking-wide" style={{"backgroundColor":"#30A0DF"}}>
                        <span className="">Summarize</span>
                    </button>
                </form>
            </div>
        </div>
        <About/>
        </> 
    );
}
 
export default Home;