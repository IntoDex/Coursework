import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from '..'
import { Pagination } from 'react-bootstrap'
const Pages = () => {
    const {recepte} = useContext(Context)
    const pageCount = Math.ceil(recepte.totalCount / recepte.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
        <Pagination className='mt-5'>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={recepte.page === page}
                    onClick={() => recepte.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        

        </Pagination>


    )

    

}

export default observer(Pages);