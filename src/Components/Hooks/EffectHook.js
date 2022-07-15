
import react, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

let EffectHook = () => {
    
    let [Post , setPost] = useState(
    //     [
    //         {
    //           "albumId": 1,
    //           "id": 1,
    //           "title": "accusamus beatae ad facilis cum similique qui sunt",
    //           "url": "https://via.placeholder.com/600/92c952",
    //           "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    //         },
    //         {
    //           "albumId": 1,
    //           "id": 2,
    //           "title": "reprehenderit est deserunt velit ipsam",
    //           "url": "https://via.placeholder.com/600/771796",
    //           "thumbnailUrl": "https://via.placeholder.com/150/771796"
    //         },
    //         {
    //           "albumId": 1,
    //           "id": 3,
    //           "title": "officia porro iure quia iusto qui ipsa ut modi",
    //           "url": "https://via.placeholder.com/600/24f355",
    //           "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    //         },
    //         {
    //           "albumId": 1,
    //           "id": 4,
    //           "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    //           "url": "https://via.placeholder.com/600/d32776",
    //           "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    //         },
    //         {
    //           "albumId": 1,
    //           "id": 5,
    //           "title": "natus nisi omnis corporis facere molestiae rerum in",
    //           "url": "https://via.placeholder.com/600/f66b97",
    //           "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    //         }]
    //
     null);
    useEffect(()=>{
        fetch("http://localhost:8000/movies").then(res =>{
            return res.json()
        }).then(data=>{
            console.log(data)
        })
    },[]);
    return(
        <div className='container'>
            <div className='row'>
        {/* {Post.map((blog)=>(
            <div className="col-md-3">
                <table className="table">
                    <tr>
                        <td>
                            <img src={blog.thumbnailUrl} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <b> BlogId:</b>{blog.id}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Title:</b>{
                                blog.title
                            }
                        </td>
                        
                    </tr>
                   
                </table>
            </div>
        ))} */}
        </div>
        </div>
    );
}
export default EffectHook;
