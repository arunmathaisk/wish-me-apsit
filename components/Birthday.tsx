import { useEffect, useState } from "react";
import Link from "next/link";
import { Birth} from "../typings";
import { Http2SecureServer } from "http2";

interface Props{
    users: Birth[],
    
  }

  export default function Birthday({users}:Props) {

  // const date = new Date();
  // console.log(date.toLocaleDateString());
  const[src, setSrc] = useState()

    const options = {
        species: "adventurer",
        seed: Math.random(),
        longhair: "long01,long02,long03,long04",
        shorthair: "short01,short02,short06,short09,short06,short07,short10,short11",
        mouth: "variant01,variant02,variant03,variant04,variant09,variant10,variant11,variant12,variant13,variant14,variant21,variant23,variant24,variant27"
      };
    
    const wishArray = ["Wishing you a day filled with laughter and joy on your special day! Happy birthday.",
    "May your birthday bring you as much happiness as you bring to others. Have a great one!",
    "Wishing you a day as bright as your smile and as warm as your heart. Happy birthday!",
    "Wishing you a birthday that's as special as you are! Have a great day.",
    "Wishing you a birthday that sparkles with joy and shines with blessings. Happy birthday!",
    "Here's to a birthday filled with all your favorite things. Have a great time celebrating!",
    "Wishing you a birthday that's as bright and beautiful as you are! Have a fantastic day.",
    "Sending birthday wishes and lots of good energy your way. Have an awesome day!",
    "Wishing you a birthday that's as sweet and fun as you are! Have a great time celebrating.",
    
    ]

    const today = new Date();
    let istTime = new Date(today.getTime() + (5.5 * 60 * 60 * 1000));
    const date = istTime.getUTCDate();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[istTime.getUTCMonth()];
    
    // var jsonResponse = { "users": [[]] };
    
  return (
    <div>
        <h1 className="birthdate"><>{date} {month}</></h1>
      
        <div >
      
        {users.length===0?(
          <h1 className="text-center text-[3rem] m-[3rem]"> No Birthday Today</h1>
        ):( 
          <div className="flexbox-container">          {users.map((user)=>{
            const num = user.moodle_id%10
            const str = user.first_name +" " + user.last_name
            function toTitleCase(str : string) {
              return str.toLowerCase().split(' ').map(function(word:string) {
                return word.replace(word[0], word[0].toUpperCase());
              }).join(' ');
            }
           
            return(
      
             
              <div className="flexbox-item">

         
                <div className="details px-[0.5rem] py-[0.2rem] z-10">
                    <h1 className="name">{toTitleCase(str)}</h1>
                    <h2 className='department px-[1.8rem]'><span className="text-[2rem]">🍰 </span><>{user.class.substring(0,3)} {user.department} </></h2>
                    <div className="wish"><h2 className="text-[0.9rem]">🎁 {wishArray[num]}</h2></div>
                    
                </div>{
                  (user.gender==="F")?(
                    // <h1>hii</h1>
                    <img className='pic' src={`https://avatars.dicebear.com/v2/${options.species}/${options.seed}${user.first_name}${user.last_name}.svg?&hair=long01,long02,long03,long04,long05,long06,long07,long08,long09,long10,long11,long12,long20,long19,long14,long16&skin=f2d3b1`} alt=""/>
                    // <img className='pic' src={`https://avatars.dicebear.com/v2/${options.species}{/${options.seed}${user.first_name}${user.last_name}.svg?gender=female&hair=${options.longhair}&skin=f2d3b1`} alt=""/>
                  ):(
                    <img className='pic' src={`https://avatars.dicebear.com/v2/${options.species}/${options.seed}${user.first_name}${user.last_name}.svg?gender=male&hair=${options.shorthair}&mouth=${options.mouth}&skin=f2d3b1`} alt=""/>
                  )
                }
                
            </div>

          
            )
          })}
          
          </div>
          
        )}
      
      <h1 className="zodiac">{users[0].zodiac}</h1>
        </div>
 

      <footer className="md:bottom-0">
      <h1 className="credits text-center">A website by <a href='https://www.linkedin.com/in/aryan-kumar-7a8494220/'>  Aryan Kumar</a>  🤝 <Link href="https://arunmathaisk.in/">Arun Mathai</Link></h1>
      </footer>
    </div>
  )
}
