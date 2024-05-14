"use client";
import Typewriter from "typewriter-effect";

export const Typewriters = () => {
  return (

      <div className=" text-white min-h-28">
        <Typewriter
          options={{

            delay: 0,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<strong>Game of Thrones</strong> (conocida como
                <strong>Juego de tronos</strong> en España,<strong> El juego de tronos</strong> en Hispanoamérica y abreviada
                como <strong> GOT</strong>) es una serie de televisión de drama y fantasía
                medieval desarrollada por David Benioff y D. B. Weiss y producida por
                la cadena HBO. Su argumento está inspirado en la serie de novelas
                Canción de hielo y fuego, escrita por el estadounidense George R. R.
                Martin, y relata las vivencias de un grupo de personajes de distintas
                casas nobiliarias en el continente ficticio de Poniente para tener el
                control del Trono de Hierro y gobernar los siete reinos que conforman
                el territorio.`
              )
              .pauseFor(Infinity)
              .start()

          }}
        />
      </div>
  );
};
