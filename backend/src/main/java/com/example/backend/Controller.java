package com.example.backend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @CrossOrigin(origins = "http://localhost:3000") // 특정 origin만 허용
    @GetMapping("/api/endpoint")
    public ResponseEntity<String> get(){
        return ResponseEntity.ok("OK.");
    }
}
