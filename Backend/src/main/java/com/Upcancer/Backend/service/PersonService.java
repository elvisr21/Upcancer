package com.upcancer.backend.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.upcancer.backend.dao.PersonDAO;
import com.upcancer.backend.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service //@Component
public class PersonService {
    private final PersonDAO personDAO;

    @Autowired
    public PersonService(@Qualifier("MongoDB") PersonDAO personDAO){
        this.personDAO=personDAO;
    }
    public int addPerson(User person){
        return personDAO.insertPerson(person);
    }
    public List<User> getAllPeople(){
        return personDAO.selectAllPeople();
    }
    public Optional<User> getPersonById(UUID id){
        return personDAO.selectPersonById(id);
    }
    public int deletePerson(UUID id){
        return personDAO.deletePersonByID(id);
    }
    public int updatePerson(UUID id, User person){
        return personDAO.updatePersonById(id, person);
    }
}
