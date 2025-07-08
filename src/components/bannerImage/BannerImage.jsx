export default function BannerImage({bootstrapClass,imagePath,alternativeText}) {
    return <>
        <img
            className={bootstrapClass}
            src={imagePath}
            alt={alternativeText}
        />
    </>;
}