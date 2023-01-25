import { useLoaderData} from 'react-router-dom'

const Post = () => { 

const { post } = useLoaderData()
if(post ===null) return console.log("post vacio")
    

    return (
        <>
            <h2 key={post.id}>{post.id} - {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
 }

 export default Post


export const loaderPost = async({params}) => {


    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    
    if(!res.ok) throw ({
        status: res.status,
        statusText: "post no encontrado",
    })
    
    const post = await res.json()
    return { post }


}
