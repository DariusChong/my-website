import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: {
        websiteID: string
    }
}
export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: {
            absolute: `Website ${params.websiteID}`
        }
    }
}

export default function WebsiteDetails({ params }: Props) {
    if (parseInt(params.websiteID) > 1000) {
        notFound()
    }
    return (
        <>
            <h1>Details about website {params.websiteID}</h1>
        </>
    );
}