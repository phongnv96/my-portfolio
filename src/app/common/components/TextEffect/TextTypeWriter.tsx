import './_style.css'

import { TypewriterProps, useTypewriter } from "../../hooks/useTypewriter"

type ComponentProps = {
  /** Show / Hide the cursor */
  cursor?: boolean
} & TypewriterProps 


/**
 * A Simple React Component for adding a nice Typewriter effect to your project.
 */
const Typewriter = ({
  words = ['Hello World!', 'This is', 'a simple Typewriter'],
  loop = false,
  typeSpeed = 100,
  deleteSpeed = 50,
  delaySpeed = 3000,
  onLoopDone,
  onType,
  onDelay,
  onDelete
}: ComponentProps): JSX.Element => {
  const [text] = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    onLoopDone,
    onType,
    onDelay,
    onDelete
  })

  return (
    <div>
      <span>{text}</span>
      <span className="border-r-4 dark:border-r-white border-r-black"></span>
    </div>
  )
}
export default Typewriter