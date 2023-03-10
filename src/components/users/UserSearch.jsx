import { useContext, useState } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";
export default function UserSearch() {
    const [text, setText] = useState('');
    const {users,dispatch}=useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    //handle change function
    const handleChange=(e)=>{
        setText(e.target.value);
    }

    //handle submit function
    const handleSubmit=async (e)=>{
        e.preventDefault();

        if(text===''){
            setAlert('Please enter something','error');
        }
        else{
            dispatch({type:'SET_LOADING'})
            const users=await searchUsers(text);
            dispatch({type:'GET_USERS',payload:users})
            setText('');
        }

    }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                value={text}
                onChange={handleChange}
                className="w-full pr-40 bg-white input input-lg text-black"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-40 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
          <button
            className="bg-white btn btn-ghost btn-large text-black"
            placeholder="Search" onClick={()=> dispatch({type:'CLEAR_USERS'})}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
