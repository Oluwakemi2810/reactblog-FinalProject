import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src="https://i.pinimg.com/474x/d7/2e/ef/d72eef8afc8c6c4b7c4eaed799802ce2.jpg" 
        alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Ullam tempore non architecto impedit eius voluptatum.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptates harum cupiditate illo, reprehenderit culpa ipsam iure maxime odit ab numquam 
            eveniet non fugit quaerat officia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptates harum cupiditate illo, reprehenderit culpa ipsam iure maxime odit ab numquam 
            eveniet non fugit quaerat officia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptates harum cupiditate illo, reprehenderit culpa ipsam iure maxime odit ab numquam 
            eveniet non fugit quaerat officia.

        </p>
    </div>
  )
}
