import { useGetVideosQuery } from "../../features/api/apiSlice";
import Video from "./Video";
import VedioLoading from "../ui/loaders/VideoLoader"
import Error from "../ui/Error";

export default function Videos() {
    const {data:videos,isLoading,isError}=useGetVideosQuery();

    let content=null;

    if(isLoading){
        content=(
             <>
        <VedioLoading/>
        <VedioLoading/>
        <VedioLoading/>
        <VedioLoading/>
        </>
        );
    }

    if(!isLoading && isError){
        content= <Error message=" There Was an Error"/>
    }

    if(!isLoading && !isError&& videos?.length===0){
        content= <Error message=" No videos Found!!"/>
    }
    if(!isLoading && !isError&& videos?.length > 0){
        content= videos.map((video)=> <Video key={video.id} video={video} />) ;
    }

    return content;
}
