import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import Dropdown from "./Dropdown";
import {searchStocks} from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
    const initialStocks = await searchStocks();

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/stock-gravity-logo.png" alt="ravi's stocks app" width={320} height={42} className="h-14 rounded-full w-auto cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems initialStocks={initialStocks} />
                </nav>

                <Dropdown user={user} initialStocks={initialStocks} />
            </div>
        </header>
    )
}
export default Header