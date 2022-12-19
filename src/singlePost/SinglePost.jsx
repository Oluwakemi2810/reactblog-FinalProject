import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/1158961/pexels-photo-1158961.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="" 
            className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Kemi</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, nobis doloribus.Eligendi laboriosam, 
                iste quas fugit voluptates fugiat accusamus alias 
                accusantium laudantium ullam id omnis architecto maxime,
                tempore necessitatibus cupiditate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, nobis doloribus.Eligendi laboriosam, 
                iste quas fugit voluptates fugiat accusamus alias 
                accusantium laudantium ullam id omnis architecto maxime,
                tempore necessitatibus cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, nobis doloribus.Eligendi laboriosam, 
                iste quas fugit voluptates fugiat accusamus alias 
                accusantium laudantium ullam id omnis architecto maxime,
                tempore necessitatibus cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, nobis doloribus.Eligendi laboriosam, 
                iste quas fugit voluptates fugiat accusamus alias 
                accusantium laudantium ullam id omnis architecto maxime,
                tempore necessitatibus cupiditate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem, nobis doloribus.Eligendi laboriosam, 
                iste quas fugit voluptates fugiat accusamus alias 
                accusantium laudantium ullam id omnis architecto maxime,
                tempore necessitatibus cupiditate.
            </p>
        </div>
    </div>
  )
}
