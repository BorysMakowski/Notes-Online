package com.BM.projektJava.controller;

import com.BM.projektJava.model.Note;
import com.BM.projektJava.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/note")
@CrossOrigin
public class NoteController {
    @Autowired
    private NoteService noteService;

    @PostMapping("/add")
    public String add(@RequestBody Note note){
        noteService.saveNote(note);
        return "Note added";
    }

    @GetMapping("/getAll")
    public List<Note> getAllNotes(){
        return noteService.getAllNotes();
    }

    @CrossOrigin
    @GetMapping("/getForUser/{id}")
    public List<Note> getNotesByUserId(@PathVariable("id") int id) {
        return noteService.getNotesByUserId(id);}

    @DeleteMapping("/delete/{id}")
    public void deleteNoteById(@PathVariable("id") int id) {noteService.deleteNoteById(id);}


}
