import Modal from "../context/Modal";
import BookmarkDetails from "../features/bookmark/BookmarkDetails";
import ContainerBookmark from "../features/bookmark/ContainerBookmark";
import { useBookmark } from "../features/bookmark/useBookmark";
import Error from "../ui/Error";
import Spinner from "../ui/Spinner";
import { GoBookmarkSlash } from "react-icons/go";
import Empty from "../ui/Empty";
import Undefined from "../ui/Undefined";
import { useEffect } from "react";

function Bookmarks() {
  const { bookmark, error, isLoading } = useBookmark();
  useEffect(function () {
    document.title = "Bookmark";
    return () => (document.title = "Foodie Haven");
  }, []);
  if (isLoading) return <Spinner />;
  if (error) return <Error error={error} />;
  if (bookmark === undefined) return <Undefined />;
  if (bookmark.length < 1)
    return (
      <Empty
        svg={<GoBookmarkSlash />}
        title="bookmark"
        message="You can start by searching a recipie :)"
      />
    );

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
