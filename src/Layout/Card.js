import React from 'react';

const Card = ({ property }) => {
    const { name, price, img, id } = property;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-3">
                <figure><img className='h-28 w-full rounded-xl' src={img} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-blue-400">{name}</h2>
                    <p className='pb-4'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn border-none bg-blue-400" onClick={() => dispatch(addProduct(product))}>Add to Bag <FontAwesomeIcon className='pl-2' icon={faShoppingBag}></FontAwesomeIcon></button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;