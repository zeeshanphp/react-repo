import {useState} from "react";
import PropClass from "./PropClass";
import Propfileter from "./Propfileter";
let MapFunc = () => {
    const[Blogs , setBlog] = useState(
        [
            {
              "userId": 1,
              "id": 1,
              "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
              "userId": 1,
              "id": 2,
              "title": "qui est esse",
              "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
              "userId": 2,
              "id": 3,
              "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
              "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            },
            {
              "userId": 3,
              "id": 4,
              "title": "eum et est occaecati",
              "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
              "userId": 3,
              "id": 5,
              "title": "nesciunt quas odio",
              "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
            },
            {
              "userId": 1,
              "id": 6,
              "title": "dolorem eum magni eos aperiam quia",
              "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
            }]   );
    return(
        <div className="container-fluid" style={{border: "2px solid purple", color:"green"}}>
            <h2 className="text-success"><center>MAP FUNCTION</center></h2>
            <div className="row">
                
                {Blogs.map((blog)=>(
                    <div className="col-md-3">
                        <table className="table">
                            <tr>
                                <td>
                                    <b>UserId:</b>{blog.userId}
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
                            <tr>
                                <td>
                                    <b>Body:</b>{blog.body}
                                </td>
                            </tr>
                        </table>
                    </div>
                ))};
            </div>
            <h2 className="text-danger"><center>END OF MAP FUNCTION</center></h2>
            <h2 className="text-primary"><center>START OF PROP CLASS</center></h2>
        <div className="row">
            <PropClass Blogs={Blogs} protitle="All Blogs"/>
        </div>
        <h2 className="text-primary"><center>FILTER PROP CLASS</center></h2>
        <div className="row">
            <Propfileter Blogss={Blogs.filter((fblog)=>fblog.userId == '1' )} protitle="Blogs of certain user"/>
        </div>
        </div>
    );
}
export default MapFunc;