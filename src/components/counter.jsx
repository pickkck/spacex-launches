import { useEffect, useRef } from "preact/hooks";

export function Counter() {
  const h1 = useRef();
  const ti = () => {
    const fechahora = new Date();
    const hora = fechahora.getHours().toString().padStart(2, '0');
    const minuto = fechahora.getMinutes().toString().padStart(2, '0');
    const segundo = fechahora.getSeconds().toString().padStart(2, '0');
    return `${hora}:${minuto}:${segundo}`;
  };
  useEffect(() => {
    const cl = setInterval(() => {
      h1.current.innerHTML = `${ti()}`;
    }, 1000);
    return () => clearInterval(cl);
  }, []);

  return (
    <div class="text-center rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:scale-105 hover:bg-gray-700 hover:boder-gray-500 transition flex flex-col">
      <h1 class="text-xl font-bold" ref={h1}>{ti()}</h1>
    </div>
  );
}