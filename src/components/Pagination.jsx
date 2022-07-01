import React from 'react'

const Pagination = ({ arrayPages,currentPage,setCurrentPage,quantityPages }) => {

    const prevPage=()=>{
        if(currentPage-1==0){
            setCurrentPage(quantityPages)
        }else{
            setCurrentPage(currentPage-1);

        }
    }
    return (
        <section className="row pagination">
            <div className="col-12 d-flex justify-content-center w-50 mx-auto align-items-center">
                <div onClick={prevPage}>&#60;</div>
                <ul className='d-flex justify-content-between align-items-center  m-0 w-50'>
                    {
                        arrayPages?.map(num=><li key={num}>{num}</li>)
                    }
                </ul>
                <div>&#62;</div>
            </div>
        </section>
    )
}

export default Pagination