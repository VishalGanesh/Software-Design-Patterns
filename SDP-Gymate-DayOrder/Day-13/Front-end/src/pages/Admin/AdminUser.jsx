import React from 'react'

import { Button } from '@/components/ui/button'
import BoxReveal from '@/components/magicui/box-reveal'
import UserResults from '@/components/ui/table'

const AdminUser = () => {
    return (
        <>
            <div className='absolute top-28'>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-[3.5rem] font-semibold font-serif">
                        User Detail's<span className="text-[#5046e6]">.</span>
                    </p>
                </BoxReveal>
                <div>
                    <UserResults />
                </div>
            </div>

        </>
    )
}

export default AdminUser