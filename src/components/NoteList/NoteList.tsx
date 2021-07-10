import React, {FC} from "react";
import {useSelector} from "react-redux";
import './NoteList.css'

type NoteListProps = {
  render(id: number): void
}

const NoteList: FC<NoteListProps> = (props) => {

  const notes = useSelector<ApplicationState, INote[]>(state => state.noteState.notes)

  return (
    <div>
      <div className='list-container'>
        {notes.map(note => props.render(note.id))}
      </div>
    </div>
  )
}

export default NoteList;
