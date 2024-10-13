import { gql } from "apollo-angular";
import { Banner } from "../banner.model";

export const UPDATE_BANNER = (banner: Banner) => gql`
  mutation UpdateBanner{
    updateBanner(
        data: {
            title: { set: "${banner.title}" }
            text: { set: "${banner.text}" }
            sorting: { set: ${banner.sorting} }
            link: { set: "${banner.link}" }
            imgUrl: { set: "${banner.imgUrl}" }
            isActive: { set: ${banner.isActive} }
        }
        where: { id: "${banner.id}" }
    ) {
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
}
`;

export const CREATE_BANNER = (banner: Banner) => gql`
    mutation CreateBanner {
        createBanner(
            data: {
                title: "${banner.title}"
                text: "${banner.text}"
                sorting: ${banner.sorting}
                link: "${banner.link}"
                isActive: ${banner.isActive}
                imgUrl: "${banner.imgUrl}"
            }
        ) {
            id
        }
    }
`;
