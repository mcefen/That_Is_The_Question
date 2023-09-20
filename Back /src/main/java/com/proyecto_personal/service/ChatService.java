package com.proyecto_personal.service;


public class ChatService {

    public String getPrompt(String question) {
        String prompt = "Si " + question + " todo lo que un ser humano debe saber sobre conocimiento y salud ; " +
                "es una descripción breve de la pregunta formulada" + question + " y añade la frase: 'quiere saber más' " +
                "contesta sobre un tema relacionado";

        return prompt;
    }
}