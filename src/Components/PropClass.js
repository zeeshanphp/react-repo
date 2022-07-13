import {useState} from "react";


// const PropClass = (props)=>{
//     const blog = props.Blogs;

const PropClass = ({Blogs , protitle})=>{
    
    return(
        <div className="row" style={{border:"2px solid red", fontFamily:"arial" , color: "blue"}}>
                
        {Blogs.map((blog)=>(
            <div className="col-md-3">
                <p className="text-warning"><b>{protitle}</b></p>
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
    );
}

export default PropClass;