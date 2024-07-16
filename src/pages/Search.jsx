// import { useSearch } from "../context/SearchResultContext";
import styled from "styled-components";
// import { useSearch } from "../context/SearchResultContext";
import { useSearchQuery } from "../features/hooks/useSearchQuery";
import ContainerSearch from "../features/search/ContainerSearch";
import SearchResult from "../features/search/SearchResult";
import { device } from "../mediaSizes";
import Spinner from "../ui/Spinner";
import { useSearchParams } from "react-router-dom";

function Search() {
  const StyledSearch = styled.div`
    /* padding: 0 50px; */
  `;
  const ResultLength = styled.div`
    display: flex;
    justify-content: space-between;
    @media ${device.laptop} {
      padding-bottom: 100px;
    }
    & p {
      font-style: italic;
      color: var(--color-deep-text);
      & span {
        font-style: normal;
        font-weight: bold;
        color: #cc971b;
      }
    }
  `;

  // if()
  const { result, isSearching } = useSearchQuery();
  const [searchParams] = useSearchParams();
  const searchData = searchParams.get("search");
  if (isSearching) return <Spinner />;

  const newResult = result.results.map((result) => {
    return {
      id: result.id,
      image: result.image,
      title: result.title,
      price: Math.random() * 75 + 1,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam commodi, ab maiores, est maxime dolores repellendus vero beataeis qonsequuntur?",
    };
  });
  return (
    <StyledSearch>
      <ResultLength>
        <p>
          Results for <span>{searchData}</span>
        </p>
        <p>
          <span>{newResult.length}</span> results
        </p>
      </ResultLength>
      <ContainerSearch
        data={newResult}
        render={(result) => <SearchResult result={result} key={result.id} />}
      >
        seasch
        {result.results.map((x) => x.title)}
      </ContainerSearch>
    </StyledSearch>
  );
}

export default Search;
