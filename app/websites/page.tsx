import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My website projects"
  };

export default function WebsiteList() {
    return (
        <>
            <h1>Website List</h1>
            <h2>Website 1</h2>
            <h2>Website 2</h2>
            <h2>Website 3</h2>
        </>
    );
}