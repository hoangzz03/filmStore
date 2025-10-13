import React from 'react'
interface UserProps {
    id: number;
    username: string;
    address: string;
    email: string;
    phone: string;
    password: string;
    roleId: number;
}
const ItemUser: React.FC<{ data: UserProps }> = ({ data }) => {
    return (
        <tr>
            <td className="py-2 px-4 border">{data.id}</td>
            <td className="py-2 px-4 border">{data.username}</td>
            <td className="py-2 px-4 border">{data.address}</td>
            <td className="py-2 px-4 border">{data.email}</td>
            <td className="py-2 px-4 border">{data.phone}</td>
            <td className="py-2 px-4 border">{data.password}</td>
            <td className="py-2 px-4 border">{data.roleId}</td>
            <td className="py-2 px-4 border text-center">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 cursor-pointer">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Delete</button>
            </td>
        </tr>
    )
}

export default ItemUser
