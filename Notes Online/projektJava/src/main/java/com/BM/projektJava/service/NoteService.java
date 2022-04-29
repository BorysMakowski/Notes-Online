package com.BM.projektJava.service;

import com.BM.projektJava.model.Note;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface NoteService {
    public Note saveNote(Note note);
    public List<Note> getAllNotes();

    public List<Note> getNotesByUserId(int id);
    public void deleteNoteById(int id);

}

