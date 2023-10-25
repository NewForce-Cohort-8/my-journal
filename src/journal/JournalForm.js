import { MoodSelect } from "./MoodSelect"



export const JournalForm = () => {




    return ( 
        <form>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Name your entry" />
                </div>
            </div>
            <div className="field">
                <label className="label">Date</label>
                <div className="control">
                    <input className="input" type="Date"  />
                </div>
            </div>
            <MoodSelect />
            <div className="field">
                <label className="label">Write it</label>
                <div className="control">
                    <textarea className="textarea" placeholder="tell me about it ..."></textarea> 
                </div>
            </div>
            <div className="control">
                <button className="button is-primary">Submit</button>
            </div>
     
        </form>
    )
}