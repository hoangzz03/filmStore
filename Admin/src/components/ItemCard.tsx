import React from 'react'
interface ProductProps {
    id: number;
    name: string;
    desc: string;
    price: number;
    image: string;
    quantity: number;
}
const ItemCard: React.FC<{ data: ProductProps }> = ({ data }) => {
    return (
        <tr>
            <td className="py-2 px-4 border">{data.id}</td>
            <td className="py-2 px-4 border">{data.name}</td>
            <td className="py-2 px-4 border">
                <img src={data.image} alt="Product" className="w-12 h-12" />
            </td>
            <td className="py-2 px-4 border">{data.desc}</td>
            <td className="py-2 px-4 border">{data.price}</td>
            <td className="py-2 px-4 border">{data.quantity}</td>
            <td className="py-2 px-4 border">{}</td>
            <td className="py-2 px-4 border">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 cursor-pointer ">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Delete</button>
            </td>
        </tr>
    )
}

export default ItemCard
