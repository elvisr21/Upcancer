package com.upcancer.backend.model;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
@Entity
public class User {
    @Id
    private final UUID id;
    @NotBlank
    private final String name;
    public User(@JsonProperty("id") UUID id,
                  @JsonProperty("name") String name){
        this.id=id;
        this.name=name;
    }
    public UUID getId(){return id;}
    public String getName(){return name;}
}
