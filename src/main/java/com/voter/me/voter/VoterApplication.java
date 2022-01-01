package com.voter.me.voter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class VoterApplication {

  public static void main(String[] args) {
    SpringApplication.run(VoterApplication.class, args);
  }

}
