export default function WebsiteDetails({ params }: {
    params: { websiteID: string }
}) {
    return (
        <>
            <h1>Details about website {params.websiteID}</h1>

        </>
    );
}