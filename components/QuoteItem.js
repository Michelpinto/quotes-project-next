import quoteStyles from "../styles/quoteItem.module.css";

const QuoteItem = ({ quote }) => {
    return (
        <>
            <div className={quoteStyles.card}>
                <h2 className={quoteStyles.anime}>{quote.anime}</h2>
                <p className={quoteStyles.character}>{quote.character}</p>
                <p>{quote.quote}</p>
            </div>
        </>
    );
};

export default QuoteItem;
