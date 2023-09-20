package com.proyecto_personal.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor(force=true)
@AllArgsConstructor

@Data



public class ResponseDto {

   private List<Choice> choices;

@Data
   public static class Choice {
       private MessageDto message;
   
    private int index;
}
}