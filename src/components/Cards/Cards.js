import React from 'react'
import styles from './Cards.css';


const Card = ({ content }) => {
    const { title, author, description, category, published, img } = content;
    return (
        <div className={styles.card}>
            <div className={styles.cardText}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.category}>{category}</div>
                <div className={styles.author}>Author: {author}</div>
                <div className={styles.phone}>Published: {published}</div>

            </div>
            <div className={styles.imgDiv}>
                <img src={img} alt="Book" className={styles.img} />
            </div>
        </div>
    );
}
const Cards = ({ cardsContent }) => {
    const cards = cardsContent.map((book, index) => <Card key={index} content={book} />);
    return (
        <div className={styles.container}>
            {cards}
        </div>
    )
}

export default Cards;