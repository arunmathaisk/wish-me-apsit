import { useState } from "react"
import Head from 'next/head'
import { Birth, Birth2 } from '../typings'
import { GetServerSideProps } from 'next'
import Birthday from "../components/Birthday"
import ComingSoon from "../components/ComingSoon"

interface Props{
  users: Birth[],
  users2: Birth2[]
  
}  
const Home =({users,users2}:Props) => {
  const [isHappy,setIsHappy]= useState("active-field")
  const [isComing,setIsComing]= useState("")
  const [isBirthday,setBirthday]= useState("")
  const [isComingSoon,setComingSoon]= useState("bday")

  const handleHappy =()=>{
    setIsHappy("active-field");
    setIsComing("");
    setBirthday("");
    setComingSoon("bday");
  }
  const handleComing =()=>{
      setIsComing("active-field");
      setIsHappy("");
      setBirthday("bday");
      setComingSoon("");
  }

  return (
    <div>
      <Head>
        <title>APSIT Birthday Bash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <header>
        <h1 className="mint my-5 px-0 text-[2.4rem] sm:text-[3.2rem] sm:px-6 md:text-[3.7rem] text-center">
            APSIT BIRTHDAY CALENDAR</h1>
            <ul className=" header-sect text-[1rem] p-[0.2rem] md:mx-[3.5rem] md:text-[1.35rem] my-[2.2rem] mx-[1.5rem] rounded-[30px] bg-[#feb144]">
                <li className={`${isHappy} cursor-pointer w-[50%] text-center rounded-l-[30px] font-semibold `} onClick={handleHappy}>Happy Birthday</li>
                <li className={`${isComing} cursor-pointer w-[50%] text-center rounded-r-[30px] font-semibold`} onClick={handleComing}>Coming Soon</li>
            </ul>


    </header>
  

    
     <div className={`${isBirthday}`}>
     <Birthday users={users}/>
     </div>
     
     <div className={`${isComingSoon}`}>
     <ComingSoon users2={users2}/>
     </div>
     
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async()=>{
  const response=  await fetch('http://64.227.158.71:5000//day')
  const response2 = await fetch('http://64.227.158.71:5000//week')
  const data = await response.json()
  const data2 = await response2.json()

return{
  props:{
    users: data,
    users2:data2,
    // last_name: data.last_name,
    // department:data.department,
    // gender: data.gender,
  },
}
}
