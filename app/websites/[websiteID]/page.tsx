import { notFound } from "next/navigation";

export default function WebsiteDetails({ params }: {
    params: { websiteID: string }
}) {
    if (parseInt(params.websiteID) > 1000) {
        notFound()
    }
    return (
        <>
            <h1>Details about website {params.websiteID}</h1>
        </>
    );
}