import { Metadata } from "next";

type Props = {
    params: {
        blenderID: string
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Blender Project ${params.blenderID}`
    }
}

export default function BlenderProjectDetails({ params }: Props) {
    return (
        <>
            <h1>Details about Blender project {params.blenderID}</h1>
        </>
    );
}