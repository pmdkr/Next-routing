import Link from "next/link";
export default async function NewsArticle({
    params,
    searchParams,
}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>
}
) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;
    return (

        <div className="text-center">
            <h1>News article </h1>
            <p>Reading in {lang}</p>
            <div className="text-blue-600 ml-4">
                <Link className="ml-4" href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link className="ml-4" href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link className="ml-4" href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}