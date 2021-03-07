import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GiftExpertApp =()=> {

    //const categories = ['naruto', 'dragon Ball', 'Shingeki no kyojin'];

     const [categories, setCategories ] = useState([ 'dragon ball' ]) ;

     /*const handleAdd = (e)=>{

            setCategories([...categories, 'Shippuden']);
     }*/

    return (
        <>
            <h2>GiftExpertApp</h2>

            <AddCategory setCategories = { setCategories }/>

            <hr></hr>

          

            <ol>

                {
                    categories.map(category =>(

                        <GifGrid
                                key = {category} 
                                category = {category} 
                                />
                    ))
                }


            </ol>

        </>
    )


}

