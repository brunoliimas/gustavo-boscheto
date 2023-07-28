type TitleProps = {
    title: string
}


export const Title = ({ title }: TitleProps) => {
    return (
        <h2 className="text-4xl lg:text-6xl mb-10">
            {title}_
        </h2>
    )
}