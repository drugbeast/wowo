package com.example.wowo.controllers;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.wowo.models.CalculatorData;
import com.example.wowo.models.Expression;
import com.example.wowo.repos.HistoryRepository;
import com.example.wowo.services.CalculatorService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class CalculatorController {
  @Autowired
  private final HistoryRepository historyRepository;

  public CalculatorController(HistoryRepository historyRepository) {
    this.historyRepository = historyRepository;
  }

  @PostMapping(value = "/calculate", consumes = "application/json", produces = "application/json")
  public String calculate(@RequestBody CalculatorData calculatorData) {
    String result = "";
    CalculatorService calculatorService = new CalculatorService(calculatorData.getExpression());
    long millis = System.currentTimeMillis();
    Date date = new Date(millis);
    long amountOfElements = historyRepository.count();
    historyRepository.save(new Expression((int) amountOfElements + 1, calculatorData.getExpression(), date));
    String function = calculatorData.getFunction();
    if (function.equals("factorial")) {
      result = calculatorService.getFactorial().toString();
    } else if (function.equals("fibonacci")) {
      result = calculatorService.getFibonacci().toString();
    } else if (function.equals("isPrime")) {
      result = calculatorService.getIsPrime() ? "true" : "false";
    } else if (function.equals("solveSystemByGauss")) {
      result = calculatorService.getTheSolutionOfTheSystemByGauss();
    } else if (function.equals("sum")) {
      result = calculatorService.getSum();
    } else if (function.equals("subtraction")) {
      result = calculatorService.getDifference();
    } else if (function.equals("multiplication")) {
      result = calculatorService.getComposition();
    } else if (function.equals("division")) {
      result = calculatorService.getRelation();
    }
    return "{\"result\":" + "\"" + result + "\"}";
  }

  @GetMapping(value = "/history", produces = "application/json")
  public String getHistory() {
    return new String();
  }

}