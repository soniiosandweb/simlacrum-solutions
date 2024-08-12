const { Helmet } = require("react-helmet")

const MetaData = ({title, description}) => {
    return(
        <Helmet>
            <title>{title}</title>
            {description && (
                <meta name='description' content={description} />
            )}
        </Helmet>
    )
}

export default MetaData