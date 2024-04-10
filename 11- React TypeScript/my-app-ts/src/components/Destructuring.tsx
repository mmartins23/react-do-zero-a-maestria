interface Props {
    post: string;
    comments: string;
    commentsQty: number;
    tags: string[];
    // enum
    category: Category;
}

// Enum
export enum Category {
    JS = "Javascript",
    TS = 'Typescript',
    PY = 'Python'
}

const Destructuring = ({ post, comments, commentsQty, tags, category }: Props) => {
    return (
        <div>
            <h2>{post}</h2>
            <h3>{comments}</h3>
            <h4>{commentsQty}</h4>
            {tags.map(tag => <p>#{tag}</p>)}
            <p>{category}</p>
        </div>
    )
}

export default Destructuring