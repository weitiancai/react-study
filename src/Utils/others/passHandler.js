

function Button ({onSmash, Children}){
    return(
        <button onClick={onSmash}>
                {Children}
        </button>
    )
}

function PlayButton({movieName}){
    function handlePalyClick(){
        alert(`playing ${movieName}`);
    }
    return (
        <Button onSmash = {handlePalyClick}>
            Play "{movieName}"
        </Button>
    )
}

function UploadButton(){
    return(
        <Button onSmash = {()=> alert('Uploading')}>
            Uploade Image
        </Button>
    )
}

export default function Toolbar(){
    return (
            <>
            <PlayButton movieName="what fuck"></PlayButton>
            <UploadButton></UploadButton>
            </>
    )
}