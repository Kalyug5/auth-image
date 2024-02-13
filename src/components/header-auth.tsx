'use client'

import {auth} from '@/auth'
import { Popover,PopoverContent,PopoverTrigger,Button, Avatar, NavbarItem } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import * as actions from '@/actions'

export default function HeaderAuth(){
    let authComponent:React.ReactNode
    const session = useSession()
    if(session.status=='loading'){
        authComponent=null
    }
    else if(session.data?.user){
        authComponent=(
            <Popover placement='left'>
                <PopoverTrigger>
                    <Avatar src={session.data.user.image || ''}/>
                </PopoverTrigger>
                <PopoverContent>
                    <div className='p-4'>
                        <form action={actions.signOut}>
                    <Button type='submit' variant='ghost' color='danger'>Sign-Out</Button>
                    </form>
                    </div>
                </PopoverContent>


            </Popover>
        )
    }else{
        authComponent=(
            <>
            <NavbarItem>
            <form action={actions.signIn}>
                <Button type='submit' variant='bordered' color='success'>Sign-In</Button>
            </form>
            </NavbarItem>
            <NavbarItem>
            <form action={actions.signIn}>
            <Button type='submit' variant='bordered' color='secondary'>Sign-up</Button>
            </form>
            </NavbarItem>
            </>
        )
    }


    return authComponent
}