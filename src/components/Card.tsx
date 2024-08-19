interface Props {
  id: number;
  name: string;
  sprites: Array<string>;
}

export const Card = ({id, name, sprites}:Props) => {
  return (
    <>
      <h1 className="text-center uppercase mb-14 text-6xl font-Monda">{name}</h1>
      <div className="ball m-auto relative border-8 w-[350px] h-[350px] border-secondary rounded-full">
        {
          sprites.map(sprite =>{
            return sprite.includes('back') ? <img className="absolute w-[250px] left-[50px] -bottom-[60px]" src={sprite} alt="" />
                                           : <img className="absolute w-[250px] bottom-[140px] left-[50px]" src={sprite} alt="" />
          })
        }
      </div>
    </>
  )
}
