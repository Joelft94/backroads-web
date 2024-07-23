const Title = ({titleFirstWord, titleSecondWord}) => {
  return (
    <div className="section-title">
                <h2>{titleFirstWord} <span>{titleSecondWord}</span></h2>
    </div>
  )
};

export default Title