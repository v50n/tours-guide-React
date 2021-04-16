import {useState} from 'react'

const Tours = ({id, name, info, image,price,handleNotInterested}) =>{
    const [readMoreBtn, setReadMoreBtn] = useState(true)
    const handleReadMoreBtn = () =>{
        setReadMoreBtn(!readMoreBtn);
    }
    return (
        <div className="card">
            <img src={image} alt="tour"/>
            <div className="card-content">
                <div className="title">
                    <h3>{name}</h3>
                    <div className="price">
                        ${price}
                    </div>
                </div>
                <div className="description">
                <p>
                {
                    readMoreBtn ? (
                        `${info.substring(0, 320)}...`
                    ) : (`${info}`)
                }
                    <button onClick={handleReadMoreBtn} className="btn-readMore">
                    {readMoreBtn ? 'Read more' : 'Show less'}
                    </button>
                </p>
                </div>
                <button className="btn-not-interested" onClick={()=> handleNotInterested(id)}>Not Interested</button>
            </div>
        </div>
    );
}

export default Tours;