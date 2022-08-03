import React from 'react';

const Paginas = (props) => {
    return (
        <div>
            <nav className='paginado'>
                {
                    props.info.prev?
                <button className='buttonpag' onClick={props.prev} >prev</button>
                :null
                }
                {
                props.info.next?
                <button className='buttonpag' onClick={props.next} >next</button>
                :null
                }
                
            </nav>
        </div>
    );
};

export default Paginas;