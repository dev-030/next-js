


interface props{
    params : { slug : string[]};
    searchParams : {order : string}
}

export default function app({params : {slug} , searchParams}:props ){

    console.log(searchParams)


    return(

        <div>
            <h1>Product page {slug} </h1>
        </div>
        
    )
}