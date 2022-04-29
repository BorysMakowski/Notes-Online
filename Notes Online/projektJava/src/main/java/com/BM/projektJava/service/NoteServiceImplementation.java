package com.BM.projektJava.service;

import com.BM.projektJava.model.Note;
import com.BM.projektJava.repo.NoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImplementation implements NoteService{

    @Autowired
    private NoteRepo noteRepo;
    @Override
    public Note saveNote(Note note) {
        return noteRepo.save(note);
    }

    @Override
    public List<Note> getAllNotes() {
        return noteRepo.findAll();
    }

    @Override
    public List<Note> getNotesByUserId(int id) {
        return noteRepo.findByUserid(id);
    }

    @Override
    public void deleteNoteById(int id) {
        noteRepo.deleteById(id);
    }
}
