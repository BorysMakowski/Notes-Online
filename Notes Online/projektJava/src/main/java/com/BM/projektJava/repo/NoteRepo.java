package com.BM.projektJava.repo;

import com.BM.projektJava.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NoteRepo extends JpaRepository<Note,Integer> {
    List<Note> findByUserid(int id);
}
