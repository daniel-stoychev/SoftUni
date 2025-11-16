import Article from "./Article.jsx";

export default function Body(props) {
    return (
        <section>
            <Article 
                title={props.articles[0].title}
                content={props.articles[0].content}/>
            <Article 
                title={props.articles[1].title} 
                content={props.articles[1].content}
                something="SOMETHING"
            />
            <Article
                title={props.articles[2].title}
                content={props.articles[2].content}
            />
        </section>
        
    );
}