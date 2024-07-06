
const Indicators = ({ indicators }) => {
  return (
    
      <ol className=" absolute bottom-1 left-48  flex flex-row items-center space-x-2">
        {indicators.map((indicator, index) => (
          <li key={index}  className= {
            indicator ? 
            " h-[10px] w-[10px] rounded bg-white":
            " h-[10px] w-[10px] rounded bg-[#828282]"
          }>
              <div className={
                indicator ? 
                "bg-red-500 p-1 rounded":
                ""
              }></div>
          </li>
        ))}
      </ol>
    
  );
};

export default Indicators;

export let indicators = [false,false,true,false,false];