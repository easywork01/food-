import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
    
    
    return(
        <div>
            <h1>OOP's {status}</h1>
            <h2>Something weent wrong </h2>
            <h3>{statusText}</h3>
        </div>
    );
}

export default Error;