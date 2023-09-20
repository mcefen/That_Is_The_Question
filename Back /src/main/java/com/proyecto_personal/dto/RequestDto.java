package com.proyecto_personal.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@Data

public class RequestDto{

     private String model;
     private List<MessageDto> messages;

     public RequestDto(String model, String prompt){
         this.model =model;
         messages = new ArrayList<>();
         messages.add(new MessageDto("user", prompt));
}
}
