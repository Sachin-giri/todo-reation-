import { MdDelete } from "react-icons/md";
export default function Todolist(
    {index,data, onDeleteTask}) {
  return (
    
          <lis
            key={index}
            className="flex items-center gap-2 py-2 border-b border-gray-300"
          >
            <span>{data}</span>
              <MdDelete className="ml-auto px-2 py-1 text-red-500 cursor-pointer hover:text-red-600 w-[2rem] h-[2rem]"
              onClick={() => onDeleteTask(index)}/>
          
          </lis>
     

   
  );
}