import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-teal-600 mb-5'>Gallery</h1>
            <div className="w-8/12 mx-auto grid gap-8 md:grid-cols-3">
                <img src="https://cdn.pixabay.com/photo/2021/03/30/08/06/easter-eggs-6136257__340.jpg" alt="" className='rounded' />
                <img src="https://cdn.pixabay.com/photo/2022/02/17/07/54/white-flower-7018157__340.jpg" alt="" className='rounded' />
                <img src="https://cdn.pixabay.com/photo/2020/04/07/17/01/birds-5014150__340.jpg" alt="" className='rounded' />
                <img src="https://cdn.pixabay.com/photo/2019/04/18/19/41/animal-4137865__340.jpg" alt="" className='rounded' />
                <img src="https://cdn.pixabay.com/photo/2022/02/12/19/58/cat-7009836__340.jpg" alt="" className='rounded' />
                <img src="https://cdn.pixabay.com/photo/2018/09/05/08/05/party-3655712__340.jpg" alt="" className='rounded' />
                <img src="https://cdn.pixabay.com/photo/2022/04/11/17/54/wasp-7126312__340.jpg" alt="" className='rounded' />

            </div>
        </div>
    );
};

export default Gallery;