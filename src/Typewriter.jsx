import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  return (
    <Typewriter
      words={["Front end developer", "Digital Designer", "Musician"]}
      cursor
      loop={false}
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={50}
      delaySpeed={1000}
    ></Typewriter>
  );
}
