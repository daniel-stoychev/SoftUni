export default function Article(props) {
    return (
        <section>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <p>{props.something}</p>
            
        </section>
    );
}