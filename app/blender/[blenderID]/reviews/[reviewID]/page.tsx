export default function ReviewDetails({ params }: {
    params: {
        reviewID: string
        blenderID: string
    }
}) {
    return (
        <>
            <h1>Review {params.reviewID} for project {params.blenderID}</h1>

        </>
    );
}