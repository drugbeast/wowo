import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/use-auth";
import cn from "./Calculator.module.css";

const functions = [
  { id: 1, text: "Sum", value: "sum" },
  { id: 2, text: "Subtraction", value: "subtraction" },
  { id: 3, text: "Division", value: "division" },
  { id: 4, text: "Multiplication", value: "multiplication" },
  { id: 5, text: "Factorial", value: "factorial" },
  { id: 6, text: "Fibonacci Number", value: "fibonacci" },
  { id: 7, text: "Check If The Number Is Prime", value: "isPrime" },
  {
    id: 8,
    text: "Solve System Of Equations by Gauss",
    value: "solveSystemByGauss",
  },
];

const placeholders = {
  default: "Type your expression",
  sum: "2+2",
  subtraction: "2-2",
  division: "2/2",
  multiplication: "2*2",
  factorial: "22!",
  fibonacci: "5",
  isPrime: "11",
  solveSystemByGauss: "(1,2,3);(4,5,6);(7,8,9)",
};

function Calculator() {
  const [expression, setExpression] = useState("");
  const [functionChoosen, setFunction] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isAuth ? null : navigate("/sign-in");
    const textarea = document.getElementById("textarea");
    textarea.style.height = textarea.scrollHeight - 6 + "px";
  }, [navigate, isAuth]);

  const countResult = () => {
    fetch("http://localhost:8080/calculate", {
      body: JSON.stringify({
        function: functionChoosen,
        expression,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => {
        if (!res.ok) {
          setError(true);
        }
        return res.json();
      })
      .then((result) => setResult(result));
  };

  return (
    <section className={cn.calculator}>
      <div className="container">
        <div className={cn.inner}>
          <div className={cn.blockWithInput}>
            <div className={cn.selectBlock}>
              <select
                className={cn.select}
                onChange={(e) => {
                  setError(false);
                  setFunction(e.target.value);
                }}
              >
                <option value="default">Choose the function</option>
                {functions.map((func) => (
                  <option
                    className={cn.option}
                    key={func.id}
                    value={func.value}
                  >
                    {func.text}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              className={cn.input}
              required
              placeholder={
                functionChoosen != ""
                  ? placeholders[functionChoosen]
                  : placeholders.default
              }
              value={expression}
              onChange={(e) => {
                setError(false);
                setExpression(e.target.value);
              }}
            />
            <div className={cn.equalitySign}>
              <div
                className={cn.equalitySignInner}
                onClick={() => {
                  if (expression != "") {
                    countResult();
                  }
                }}
              >
                <span>=</span>
              </div>
            </div>
            {error && (
              <span className={cn.error}>
                Oops! Something went wrong... Please, try again. Make sure that
                your expression matches the template in placeholder.
              </span>
            )}
          </div>
          <div className={cn.resultBlock}>
            <div className={cn.upperResultBlock}>
              <p className={cn.resultTitle}>Result</p>
            </div>
            <textarea
              id="textarea"
              readOnly
              className={cn.textarea}
              value={error ? "" : result.result}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
