package com.upcancer.backend.dao;

import com.upcancer.backend.model.User;

import java.util.List;
import java.util.UUID;
import java.util.Optional;

public interface PersonDAO{

    int insertPerson(UUID id, User person);

    default int insertPerson(User person){
        UUID id = UUID.randomUUID();
        return insertPerson(id,person);
    }
    List<User> selectAllPeople();

    int deletePersonByID(UUID id);

    int updatePersonById(UUID id, User person);
    
    Optional<User> selectPersonById(UUID id);
}
