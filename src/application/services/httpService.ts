export const httpGet = (async (apirUrl: string)=>{
    let apiRespone : any = [];

    const responseObj = await fetch(apirUrl)
                        .then((data)=>{
                            apiRespone = data.json();
                            return apiRespone;
                        })
                        .catch((e)=>{
                            console.log("httpGet: error :", e);
                            return apiRespone;
                        });

    return responseObj;
});