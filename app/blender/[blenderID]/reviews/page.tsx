export default function ReviewList({ params }: {
    params: { blenderID: string }
}) {
    return (
        <>
            <h1>Reviews for project {params.blenderID}</h1>
        </>
    );
}