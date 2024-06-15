import Modal from "../context/Modal";
import BookmarkDetails from "../features/bookmark/BookmarkDetails";
import ContainerBookmark from "../features/bookmark/ContainerBookmark";
import { useBookmark } from "../features/bookmark/useBookmark";
import Error from "../ui/Error";
import Spinner from "../ui/Spinner";

function Bookmarks() {
  //Modal,
  // add to cart,delete bookmark,view bookmark
  const { bookmark, error, isLoading } = useBookmark();
  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;
  console.log(bookmark);
  return (
    <div>
      <Modal>
        <ContainerBookmark
          data={bookmark}
          render={(bookmark) => (
            <BookmarkDetails bookmark={bookmark} key={bookmark.id} />
          )}
        />
      </Modal>
    </div>
  );
}

export default Bookmarks;
