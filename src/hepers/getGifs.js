

 export const getGifts = async (category)=>{
    

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=IN4Mrxuh7q4Ok2mtGSWF4bqXTPlw2iKt`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gift = data.map(img => {
        return {
            id      : img.id,
            title   : img.title,
            url     : img.images?.downsized_medium.url
        }
    })

   // console.log(gift);
  return gift;

}