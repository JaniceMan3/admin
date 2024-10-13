import { gql } from "apollo-angular";

export const LIST_BANNERS = () => gql`
  query ListBanners {
    listBanners {
      clickCount
      createdAt
      id
      isActive
      sorting
      title
      viewCount
    }
  }
`;

export const FIND_UNIQUE_BANNER = (id: string) =>
  gql`
  query FindUniqueBanner {
    findUniqueBanner(where: { id: "${id}" }) {
        clickCount
        createdAt
        id
        imgUrl
        isActive
        link
        sorting
        text
        title
        viewCount
    }
  }`;
