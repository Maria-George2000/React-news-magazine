import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("API Response:", data); 
                setArticles(data.articles)})
                .catch(error => console.error("Error fetching data:", error));
    }, [category]);

    return (
        <div>
            <h1 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h1>
            {articles.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
};

export default NewsBoard;
