package com.example.wowo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class WowoApplication {

	public static void main(String[] args) {
		SpringApplication.run(WowoApplication.class, args);
	}

}
