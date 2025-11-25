import Link from "next/link";

export default function ProductList() {
    const productNo = 100;
    return (
        <div className="text-center">
            <h1>Product List</h1>
            <Link href="/products/1">Product 1</Link>
            <Link href="/products/2">Product 2</Link>
            <Link href="/products/3">Product 3</Link>
            <Link href={`/products/${productNo}`}>{`Product ${productNo}`}</Link>
        </div>
    )

}