interface Props {
    post: string;
    comments: string;
    commentsQty: number;
    tags: string[];
}

const Destructuring = ({ post, comments, commentsQty, tags }: Props) => {
    return (
        <div>
            <h2>{post}</h2>
            <h3>{comments}</h3>
            <h4>{commentsQty}</h4>
            {tags.map(tag => <p>#{tag}</p>)}
        </div>
    )
}

export default Destructuring