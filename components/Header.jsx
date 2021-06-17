import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"
import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { useRouter } from "next/router"

const Header = () => {

    const router = useRouter();
    const handleHome = () => {router.push('/')};

    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto"> 
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} handleHome={handleHome} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
                <HeaderItem title="SECARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>

            <Image 
            className="object-contain hover:animate-pulse"
            src="https://links.papareact.com/ua6" 
            width= {200}
            height= {100}
            />
        </header>
    )
}
 
export default Header
