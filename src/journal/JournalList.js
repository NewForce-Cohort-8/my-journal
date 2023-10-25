import { useState, useEffect } from "react";
import { getAllJournalEntries } from "../APIManager";
import { JournalEntry } from "./JournalEntry";


export const JournalList = () => {

  //how it used to be:
// const journalEntries = getAllJournalEntries()

const [journalEntries, setJournalEntries ] = useState([])

useEffect(
  () => {
    getAllJournalEntries()
    .then((journalArray) => {
      setJournalEntries(journalArray)
    })
  },
  [] //where we observe state - if empty we are just watching intial component state
)

return (
    <>
  {
    journalEntries.map((singleJournal) => <JournalEntry key={`journal--${singleJournal.id}`} singleJournal = {singleJournal}/> )
  }
</>
)


}




//hardcoded article 
{/* <article className="message">
<div className="message-header">
  <p>Hello World</p>
  <button className="delete" aria-label="delete"></button>
</div>
<div className="message-body">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
</div>
</article>

<article className="message">
<div className="message-header">
  <p>Hello World</p>
  <button className="delete" aria-label="delete"></button>
</div>
<div className="message-body">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
</div>
</article>

<article className="message">
<div className="message-header">
  <p>Hello World</p>
  <button className="delete" aria-label="delete"></button>
</div>
<div className="message-body">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
</div>
</article> */}