import LayoutStyles from "../styles/Layout.module.css";
import QuoteItem from "./QuoteItem";
import { v4 as uuidv4 } from "uuid";

const QuoteList = ({ quotes }) => {
    return (
        <div className={LayoutStyles.grid}>
            {quotes.map((quote) => (
                <QuoteItem key={uuidv4()} quote={quote} />
            ))}
        </div>
    );
};

export default QuoteList;
