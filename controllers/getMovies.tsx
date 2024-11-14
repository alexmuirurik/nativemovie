import { commonheader } from "@/constants/categories";

export const Fetchmoviedir = async (url: string) => {
    const options = {
        headers : {
            accept: 'application/json',
            Authorization: `Bearer ${commonheader} `
        }
    };
    const res = await fetch(url, options) 
    const moviedata = await res.json()
    return moviedata.results
}

export const getMovies = () => {

}