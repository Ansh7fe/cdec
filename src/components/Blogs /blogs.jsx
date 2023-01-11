import React from 'react';
import './blogs.css';
import BlogContent from './blogContent';

const Blogs = function() {
    return <div>
        <div className="main-img">
            <img src={require('./main_img.jpg')} alt="Snow" style={{ maxWidth: "88%" }} />
            <div className="centered">BLOGS!!!</div>
        </div>
        <div className='main'>
            <div className="upper">
                <div className='blogggs'>Blogs</div>
                <div className='border'>
                    {/* <div className='circle'></div> */}
                </div>
            </div>
            <div className="mid">
                <div className="border-sm"></div>
                <div id='latest-text'>Latest</div>
            </div>
            <div className="lower">
                <BlogContent />
                <BlogContent />
                <BlogContent />
                <BlogContent />
                <BlogContent />
                <BlogContent />
            </div>

        </div>
    </div>;
}

export default Blogs;