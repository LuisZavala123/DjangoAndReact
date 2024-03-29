import React from 'react';

function Note({ note, onDelete }) {

    const formateddate = new Date(note.createDate).toLocaleDateString("en-GB")

    return <div className='note-title'>
        <p className='note-title'>{note.title}</p>
        <p className='note-content'>{note.content}</p>
        <p className='note-date'>{formateddate}</p>
        <button
            className='delete-button'
            onClick={() => onDelete(note.id)}>
            Delete
        </button>
    </div>;

}

export default  Note;