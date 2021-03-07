import { useEffect, useState } from "react"
import { getGifts } from '../hepers/getGifs'

export const useFetchGifts = ( category )=>{


      const [state, setState] =  useState({
          data : [],
          loading: true
      });

      useEffect( ()=>{

        setTimeout( () =>{

            getGifts(category).then(img =>{
                setState({
                    data:img,
                    loading:false
                });
            })

        },3000)            

      },[ category ])

    
      return state;

}
