import preloaderImg from "../assets/images/preloader.gif";
import s from "../users/Users.module.css";
const Preloader = () => {
  return <img className={s.preloaderImg} src={preloaderImg} />;
};
export default Preloader;
