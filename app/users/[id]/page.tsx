

interface props{

    params : {id:number}

}

export default function app({params : {id}} : props) {
    console.log(id)

    return(
        <div>
            <h1>My id is : {id}</h1>
        </div>
    )
}