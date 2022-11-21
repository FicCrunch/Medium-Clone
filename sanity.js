import {
    createCurrentUserHook,
    createClient,
} from "next-sanity";

import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === 'production',
};

// set up the client for fetching data in the getProps page functions
// to make a query to sanity CMS
export const sanityClient = createClient(config);

// extract url of image
export const urlFor = (source) => createImageUrlBuilder(sanityClient).image(source);

// helper function to use current user account
export const useCurrentuser = createCurrentUserHook(config);
