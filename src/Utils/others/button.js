function AlertButton({message, children}){
    return(
        <button onClick={()=>alert(message)}>
            {children}
        </button>
    );
}

export default function Toolbar(){
    return (
        <div>   
            <AlertButton message= "one">
                one button
            </AlertButton>
            <AlertButton message="two">
            two button
            </AlertButton>
        </div>
    )
}