import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://media.istockphoto.com/id/1063851048/photo/christmas-nature.jpg?s=612x612&w=0&k=20&c=gUTtJn4dmzlNmmrxzOy1PtrsAZGcctfN3XFA2dCdDj0=" 
        alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file"  id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." 
                type="text" 
                className="writeInput  writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
