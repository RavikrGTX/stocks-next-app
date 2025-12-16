import Link from "next/link";
import Image from "next/image";
import {auth} from "@/lib/better-auth/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";


const layout = async({children}:{children: React.ReactNode}) => {

 const session = await auth.api.getSession({ headers: await headers() })
 
    if(session?.user) redirect('/')

  return (

    <main className='auth-layout'>
        <section className="auth-left-section scrollbar-hide-default" >
            <Link href='/' className="auth-logo">
            <Image src="/assets/icons/stock-gravity-logo.png" alt="Signalist logo" width={140} height={32} className="h-14 rounded-full w-auto"/>
            </Link>
               
      <div className="pb-6 lg:pb-8 flex-1">
        {children}

      </div>
        </section>
   
      <section className="auth-right-section"> 
        <div  className="z-10 relative lg:mt-4 lg:mb-16"> 
            <blockquote className="auth-blockquote" >
                Ravi's Stock app helped me to track the Stock's Efficiently 

            </blockquote>
            <div className="flex items-center justify-between">
                <div>
                    <cite className="auth-testimonial-author">Rahul</cite>
                    <p className="max-md: text-xs text-gray-500">Retail Investor</p>
                </div>

            <div className="flex items-center gap-0.5"> 
                    
                   {
                    [1,2,3,4,5].map((star)=>(
                      <Image src="/assets/icons/star.svg" alt="Star" key={star} width={20} height={20} className="w-5 h-5"/>

                    ))
                   }
            </div>
            </div>

        </div>

        <div className="flex-1 relative">
            <Image src="/assets/icons/stock-gravity-logo.png" alt="Dashboard Preview" width={100} height={100} className="auth-dashboard-preview "/>
        </div>

      </section>
    </main>

    
  )

}

export default layout
