'use client'
import { useRouter } from "next/navigation";


const Card = ({title, desc, imageURL,id}) => {
    const router = useRouter();
    

    const handleClick = () => {
        router.push(`/${id}`)
    }
    return (

        <div className="max-w-xs rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white hover:cursor-pointer" onClick={handleClick}>
            <img src={imageURL} height={200} width={250} alt={`Picture of ${title}`}  className="w-full h-48 object-cover rounded-t-lg"/>
            <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <p  className="text-sm text-gray-600 mt-2 font-bold">{desc}</p>

            </div>
            
        </div>
    )
}

export default Card;