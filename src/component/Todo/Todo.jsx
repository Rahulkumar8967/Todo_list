import { useState } from "react";

function Todo({TodoData, isFinished, id}){
    const [Finished, setFinished] = useState(isFinished);
return (
    <div>
<input type="checkbox" checked={Finished} onChange={(e) => {
    setFinished(e.target.checked);
    changeFinished(e.target.checked);

    }}/>
  {TodoData}
  <button>Edit</button>
  <button>Delete</button>
    </div>
)
}

export default Todo;