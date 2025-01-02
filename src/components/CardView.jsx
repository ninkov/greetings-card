export default function CardView({photo,text,setText}) {
  return (
    <div id="card" className="card">

{photo&&(
    <div className="frame">
        <img src={photo} alt="upload" className="photo"/>
    </div>
    )}
<textarea 
value={text}
onChange={(e)=>setText(e.target.value)}
className="text"
></textarea>

    </div>
  )
}
