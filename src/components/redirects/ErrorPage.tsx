import {type JSX } from "solid-js";



interface Props {
  code: number
}

const ErrorPage =(props:Props): JSX.Element => {
  return (
    <section>
      H!= {props.code}
    </section>
  )
}
export default ErrorPage;
