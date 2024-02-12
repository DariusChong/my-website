export default function BlenderProjectDetails({ params }: {
    params: { blenderID: string }
}) {
    return (
        <>
            <h1>Details about Blender project {params.blenderID}</h1>
        </>
    );
}