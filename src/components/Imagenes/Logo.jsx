const Logo = ({ imgurl, imgalt }) => {
    const imageStyle = {
        width: '200px',
        height: '90px',
        objecFit: 'cover'
    };

    return (
        <img src={imgurl} alt={imgalt} style={imageStyle} />
    );
}

export default Logo;