import { useEffect, useState } from "react"



export const MoodSelect = ({handleControlledInputChange, journalEntry}) => {
    const [moods, setMoods] = useState([])


    useEffect(() =>{
        fetch("http://localhost:8088/moods")
        .then(r => r.json())
        .then(moods => setMoods(moods))
    },[])

    return ( 

        <div className="field">
            <label className="label">Mood</label>
            <div className="control">
                <div className="select">
                    <select name="moodId" onChange={handleControlledInputChange} value={journalEntry.moodId}>
                        <option>Select dropdown</option>
                        {
                            moods.map(mood => <option key={mood.id} value={mood.id}>{mood.name}</option>)
                        }
                    </select>
                </div>
             </div>
        </div>
    )
}