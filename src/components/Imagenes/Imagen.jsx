const Imagen = ({ imgurl, imgalt }) => {
    const imageStyle = {
        width: '50px',
        height: '50px',
        objecFit: 'cover'
};

    return (
        <img src={imgurl} alt={imgalt} style={imageStyle} />
    );
}

export default Imagen;