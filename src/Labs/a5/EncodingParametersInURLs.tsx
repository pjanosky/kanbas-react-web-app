import axios from "axios";
import React, { useEffect, useState } from "react";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`
    );
    setResult(response.data);
  };

  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input
        type="number"
        className="form-control"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
      />
      <input
        className="form-control"
        type="number"
        onChange={(e) => setB(parseInt(e.target.value))}
        value={b}
      />
      <input value={result} type="number" readOnly className="form-control" />
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)} className="btn btn-primary">
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)} className="btn btn-danger">
        Fetch Substraction of {a} - {b}
      </button>

      <h3>Path Parameters</h3>
      <a
        href={`http://localhost:4000/a5/add/${a}/${b}`}
        className=" btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`http://localhost:4000/a5/subtract/${a}/${b}`}
        className="btn btn-danger"
      >
        Subtract {a} - {b}
      </a>

      <a
        href={`http://localhost:4000/a5/multiply/${a}/${b}`}
        className=" btn btn-success"
      >
        Multiply {a} * {b}
      </a>
      <a
        href={`http://localhost:4000/a5/divide/${a}/${b}`}
        className="btn btn-warning"
      >
        Divide {a} / {b}
      </a>
      <h3>Query Parameters</h3>
      <a
        className="btn btn-primary"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>

      <a
        className="btn btn-success"
        href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        className="btn btn-warning"
        href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>

      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
    </div>
  );
}
export default EncodingParametersInURLs;
