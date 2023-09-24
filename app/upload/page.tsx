'use client'
import { CldUploadWidget } from "next-cloudinary"




export default function Upload(){

    return(
        
            
        <CldUploadWidget uploadPreset="l6qytl8e" options={{
            sources:['local','url'],
            multiple:false
        }}> 
            {({open})=>
                <button onClick={()=>open()}>Upload</button>
            }
        </CldUploadWidget>
        
    )
}