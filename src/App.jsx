import Accordian from "./components/accordian/self";
import ModalTest from "./components/custom-modal-popup/modal-text";
import TabTest from "./components/custom-tabs/tab-text";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider/self";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data/self";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color/self";
import ScrollIndicator from "./components/scroll-indicator/self";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating/self";
import TicTacToe from "./components/tic-tact-toe/video";
import TreeView from "./components/tree-view";
import menus from './components/tree-view/data'

export default function TaskApp() {
  return (
    // <Accordian></Accordian>

    // <RandomColor></RandomColor>

    // <StarRating noOfStars={10}></StarRating>


    // <ImageSlider
    //   url={"https://picsum.photos/v2/list"}
    //   page={"1"}
    //   limit={"10"}
    // />

    // <LoadMoreData />

    // <TreeView menus={menus} />

    // <QRCodeGenerator />

    // <LightDarkMode />

    // <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />

    // <TabTest />

    // <ModalTest />

    // <GithubProfileFinder />

    // <SearchAutocomplete />

    <TicTacToe />
  )
}
