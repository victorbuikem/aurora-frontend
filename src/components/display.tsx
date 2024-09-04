
export function Display({
    src,
    type
}: {
    src: string,
    type: "image" | "video"
}) {

    if (type === "image") {
        return (<div className="w-full h-auto rounded-2xl object-cover">
            <img alt="User Image" src={src} />
        </div>

        )
    }

    if (type === "video") {
        return (

            <video className="w-full h-auto rounded-2xl object-cover" controls controlsList="nodownload" disablePictureInPicture>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }
}