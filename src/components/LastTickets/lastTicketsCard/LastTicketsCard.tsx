import classes from "./lastTicketsCard.module.css";
import tripleIcons from "../../../assets/images/triple.png";
interface LastTicketsCardProps {
  cityFrom: string;
  cityTo: string;
  stationFrom?: string;
  stationTo?: string;
  price: number;
}

const LastTicketsCard: React.FC<LastTicketsCardProps> = ({
  cityFrom,
  cityTo,
  stationTo,
  stationFrom,
  price,
}) => {
  return (
    <article className={classes.container}>
      <div className={classes.cities}>
        <p className={classes["departure-city"]}>{cityFrom}</p>
        <p className={classes["arrival-city"]}>{cityTo}</p>
      </div>
      <div className={classes.stations}>
        <p className={classes["departure-station"]}>{stationTo}</p>
        <p className={classes["arrival-station"]}>{stationFrom}</p>
      </div>
      <div className={classes["price-line"]}>
        <div className={classes.icons}>
          <img src={tripleIcons} alt="" />
        </div>
        <p className={classes.price}>
          от <span className={classes.amount}>{price}</span>
          <span className={classes.ruble}>₽</span>
        </p>
      </div>
    </article>
  );
};

export { LastTicketsCard } ;
