import RootLayout from "@/components/Layouts/RootLayout";

export default function NewsDetails({ news }) {

    return (
        <h2>Title: {news.title}</h2>
    )
}

NewsDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3004/news')
    const news = await res.json()

    const paths = news.map((singleNews) => ({
        params: { newsId: singleNews.id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:3004/news/${params?.newsId}`)
    const news = await res.json()
    return { props: { news } }
}

