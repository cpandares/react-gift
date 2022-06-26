import { useState } from "react"
import { GiftExpertApp } from "../GiftExpertApp";
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories } )=> {

    //const categories = ['naruto', 'dragon Ball', 'Shingeki no kyojin'];

    const [inputValue, setInputValue ] = useState('') ;

    const handleInpuChange = (e)=>{
      // console.log(e.target.value) ;
      setInputValue(e.target.value);


    }   

    const handleSubmit = (e)=>{

        e.preventDefault();

  

        if(inputValue.trim().length > 2){

            setCategories( cats =>[inputValue, ...cats ]);
            setInputValue('');
        }

        

    }

    return (
        
           
        <form onSubmit= { handleSubmit }>

             <input 
                type="text"
                value = {inputValue}
                onChange = { handleInpuChange }
            />

        </form>
           


        
        
    )

    
   

}
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
} 

