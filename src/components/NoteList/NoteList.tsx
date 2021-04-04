import React, {FC} from "react";
import {useSelector} from "react-redux";
import './NoteList.css'

type NoteListProps = {
  render(id: number): void
}

const NoteList: FC<NoteListProps> = (props) => {

  const notes = useSelector<NoteState, INote[]>(state => state.notes)

  return (
    <div>
      <div className='list-container'>
        {notes.map(note => props.render(note.id))}
      </div>
    </div>
  )
}

export default NoteList;
