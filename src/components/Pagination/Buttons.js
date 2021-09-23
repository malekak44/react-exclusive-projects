import React from 'react';

const Buttons = ({ prevPage, data, page, handlePage, nextPage }) => {
    return (
        <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
                prev
            </button>
            {data.map((item, index) => {
                return (
                    <button
                        key={index}
                        className={`page-btn ${index === page ? 'active-btn' : null}`}
                        onClick={() => handlePage(index)}
                    >
                        {index + 1}
                    </button>
                )
            })}
            <button className='next-btn' onClick={nextPage}>
                next
            </button>
        </div>
    );
};

export default Buttons;