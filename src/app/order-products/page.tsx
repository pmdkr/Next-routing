"use client";
import { useRouter } from 'next/navigation';
export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("placing  your order");
        router.push("/");

    }
    return (
        <div>
            <h1>Order product</h1>
            <button className='bg-blue-500 p-2 m-4 text-black cursor-pointer' onClick={handleClick}>Place order</button>
        </div>
    )
}