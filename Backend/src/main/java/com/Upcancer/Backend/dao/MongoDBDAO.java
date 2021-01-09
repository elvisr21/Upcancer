package com.upcancer.backend.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.upcancer.backend.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository("MongoDB")
public class MongoDBDAO implements PersonDAO{

    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public PersonDataAccessService(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate=jdbcTemplate;
    }

    @Override
    public int insertPerson(UUID id, User person) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public List<User> selectAllPeople() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public int deletePersonByID(UUID id) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int updatePersonById(UUID id, User person) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public Optional<User> selectPersonById(UUID id) {
        // TODO Auto-generated method stub
        return null;
    }
    
}
