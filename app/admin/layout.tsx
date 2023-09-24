import {ReactNode} from 'react'




export default function adminLayout({children} : {children:ReactNode}){

    return(
        <div>
            <h1>Admin layout</h1>
            <div>
                {children}
            </div>
        </div>
    )
}

