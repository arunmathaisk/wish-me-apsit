import Link from 'next/link'
import { Birth2 } from '../typings'

interface Props{
    users2: Birth2[],
    
  }
export default function ComingSoon({users2}:Props) {
  return (
    <div>
        <div className="flexbox-container m-[2rem]">
            {users2.map((user2)=>{
                return(
                    <div className="flexbox-item2 text-center">
                    <h1 className='csname'>{user2.first_name}</h1>
                    <h1 className='csname'>{user2.last_name}</h1>
                    <h1 className='csbday my-[0rem] font-semibold'>{user2.bday}</h1>
                    <h1 className='csdept font-semibold'>{user2.class.substring(0,3)} {user2.department}</h1>
                     </div>
                )
            })}

        </div>
        <footer className="md:bottom-0">
          <h1 className="credits text-center">A website by <Link href='https://www.linkedin.com/in/aryan-kumar-7a8494220/'>Aryan Kumar</Link> 🤝 <Link href="https://arunmathaisk.in/">Arun Mathai</Link></h1>
      </footer>
    </div>
  )
}
