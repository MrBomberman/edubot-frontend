import BlockOfCardsOnPresPage from '../components/PresentationComponents/BlockOfCardsOnPresPage';
import CommentsBlock from '../components/PresentationComponents/CommentsBlock';
import MainMessageBlock from '../components/PresentationComponents/MainMessageBlock';
import PresentationFooter from '../components/PresentationComponents/PresentationFooter';
import PresentationHeader from '../components/PresentationComponents/PresentationHeader';

function PresentationPage() {

  return (
    <>
        <PresentationHeader/>
        <MainMessageBlock/>
        <BlockOfCardsOnPresPage/>
        <CommentsBlock/>
        <PresentationFooter/>
    </>
  );
}
export default PresentationPage;