import axios from "axios";

const HOME_URL = `https://skillfactory-task.detmir.team`;

export const fetchCategories = async () => {
  try {
    const res = await axios.get(`${HOME_URL}/categories`, {
      withCredentials: true,
    });
   return res
  } catch (error) {
    console.error(error);
  }
};

export const fetchProducts = async (page = 1, limit = 10) => {
    try{
        const res = await axios.get(`${HOME_URL}/products`,{
            params:{
                page,
                limit
            },
            withCredentials:true
        });
       return res
    }catch(error){
        console.error(error)
    }
}