import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { Header } from "./components/Header"
import { Line } from "./components/Line"
import { useCounter } from "./hooks/useCounter"
import { useFetch } from "./hooks/useFetch"

export const App = () => {

  const { counter, decrement, increment } = useCounter({initialValue: 1})

  const { data, hasError, isLoading, error } = useFetch({url: `https://pokeapi.co/api/v2/pokemon/${counter}`});

  return (
    <>
      <Header/>
      <Line/>
      <section className="flex flex-wrap justify-center content-center w-screen max-h-full h-[calc(100vh-160px)]">
        <div className="flex flex-col font-Monda uppercase w-[35%] min-w-[500px]">
          {data && 
                <Card id={counter} name={data.name} sprites={[
                  data.sprites.front_default,
                  data.sprites.back_default]}/>
          }
          <div className="flex justify-between mt-14">
            <Button value={"PREVIOUS"} handleClick={()=> counter > 1 ? decrement(1) : null}/>
            <Button value={"NEXT"} handleClick={()=>increment(1)}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
