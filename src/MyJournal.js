import { JournalForm } from "./journal/JournalForm"
import { JournalList } from "./journal/JournalList"
import { Weather } from "./weather/Weather"


export const MyJournal = () => {


    return (
        
    <section className="section">
        <div className="container">
            <h1 className="title">
                My Journal
            </h1>
            <p className="subtitle">
                 Tell me how you really feel
            </p>
            <div className="columns">
                <div className="column is-three-fifths">
                    <JournalForm  />
                </div>
                <div className="column">
                    <Weather  />
                </div>
            </div>
            <JournalList />
    
    </div>
    </section>
    
    )


}